import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';

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
   createCar( @Body() createCarDto: CreateCarDto ){
      return this.carService.createCarDto( createCarDto );
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
