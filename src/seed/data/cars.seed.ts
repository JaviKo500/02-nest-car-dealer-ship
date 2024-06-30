import { v4 as uuid } from 'uuid';

import { CarInterface } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: CarInterface[] = [
   {
      id: uuid(),
      brand: 'Toyota Corolla',
      model: 'Sedan',
   },
   {
      id: uuid(),
      brand: 'Volkswagen Golf',
      model: 'Hatchback',
   },
   {
      id: uuid(),
      brand: 'Ford F-150',
      model: 'Pickup Truck',
   },
   {
      id: uuid(),
      brand: 'Honda Civic',
      model: 'Sedan',
   },
   {
      id: uuid(),
      brand: 'Chevrolet Silverado',
      model: 'Pickup Truck',
   },
   {
      id: uuid(),
      brand: 'Nissan Sentra',
      model: 'Sedan',
   },
   {
      id: uuid(),
      brand: 'Hyundai Elantra',
      model: 'Sedan',
   },
   {
      id: uuid(),
      brand: 'BMW 3 Series',
      model: 'Sedan',
   },
   {
      id: uuid(),
      brand: 'Mercedes-Benz C-Class',
      model: 'Sedan',
   },
   {
      id: uuid(),
      brand: 'Audi A4',
      model: 'Sedan',
   }
]