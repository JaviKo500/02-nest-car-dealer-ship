import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CarInterface } from './interfaces/car.interface';

import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';
@Injectable()
export class CarsService {
   private cars: CarInterface [] = [
      {
         id: uuid(),
         brand: 'Toyota',
         model: 'Corolla',
      },
      {
         id: uuid(),
         brand: 'Honda',
         model: 'Civic',
      },
      {
         id: uuid(),
         brand: 'Jeep',
         model: 'Cherokee',
      },
   ];

   findAll() {
      return this.cars;
   }

   findById(id: string) {
      const car =  this.cars.find( card => card.id === id );
      if ( !car ) {
         throw new NotFoundException(`Car with id ${id} not found`)
      }
      return car;
   }
   create( createCardDto: CreateCarDto ) {
      const car = {
         id: uuid(),
         ...createCardDto,
      };
      this.cars.push( car );
      return car;
   }

   update( id: string, updateCardDto: UpdateCarDto ) {
      let carDb = this.findById( id );

      if ( updateCardDto.id && updateCardDto.id !== id )
         throw new BadRequestException( 'Card with id ${id} is not valid inside body' );
      this.cars = this.cars.map( car => {
         if ( car.id === id ) {
            return carDb = {
               ...car,
               ...updateCardDto,
               id,
            };
         }
         return car;
      });
      return carDb;
   }

   delete( id: string ) {
      this.findById( id );
      this.cars = this.cars.filter( car => car.id !== id );
   }
}
