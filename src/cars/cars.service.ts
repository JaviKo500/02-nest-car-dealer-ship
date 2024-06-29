import { Injectable, NotFoundException } from '@nestjs/common';
import { CarInterface } from './interfaces/car.interface';

import { v4 as uuid } from 'uuid';
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
}
