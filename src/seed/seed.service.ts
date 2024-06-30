import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly cardService: CarsService,
    private readonly brandService: BrandsService,
  ) {
    
  }
  populateDB() {
    this.cardService.fillCarsWithSeedData( CARS_SEED );
    this.brandService.fillBrandsWithSeedData( BRANDS_SEED );
    return `seed executed`;
  }


}
