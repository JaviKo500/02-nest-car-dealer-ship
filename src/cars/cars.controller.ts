import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
   constructor(
      private readonly carService: CarsService
   ) {
      
   }
   @Get()
   getCars(){
      return this.carService.findAll();
   }

   @Get( ':id' )
   getCarById( @Param('id', new ParseUUIDPipe( { version: '4' } ) ) id: string = '0' ){
      return this.carService.findById( id );
   }

   @Post()
   createCar( @Body() car: any ){
      return {
         car
      };
   }

   @Patch(':id')
   updateCar( @Param( 'id', ParseIntPipe) id: number, @Body() car: any ){
      return {
         id,
         car,
      };
   }

   @Delete(':id')
   deleteCar( @Param( 'id', ParseIntPipe) id: number ){
      return {
         id,
      };
   }
}
