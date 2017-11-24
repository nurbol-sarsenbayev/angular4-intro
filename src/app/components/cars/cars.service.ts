import { Injectable } from '@angular/core';
import { ConsoleService } from '../../services/console.service';

@Injectable()
export class CarsService {

  constructor(private consoleService: ConsoleService) { }

  cars: Common.Car[] = [   
    { id: 1, name: 'BMW', color: 'red', year: 2014 }, 
    { id: 2, name: 'Audi', color: 'yellow', year: 2012 }, 
    { id: 3, name: 'Ford', color: 'blue', year: 2010 }, 
    { id: 4, name: 'Toyoto', color: 'black', year: 2013 }
  ];

  addCar(name: string) {
    this.cars.push({
      id: this.cars.length,
      name,
      color: 'green',
      year: 2017
    });
    
    this.consoleService.log("Car added: " + name);
  }
}
