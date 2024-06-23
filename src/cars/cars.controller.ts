import { Controller, Get, Param } from '@nestjs/common';
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
   getCarById( @Param('id') id: string = '0' ){
      return this.carService.findById( Number(id) );
   }
}
