import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
   getCarById( @Param('id', ParseIntPipe) id: string = '0' ){
      console.log('<--------------- JK Cars.controller --------------->');
      console.log({id});
      return this.carService.findById( Number(id) );
   }
}
