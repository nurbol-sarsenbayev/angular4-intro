import { Component, OnInit } from '@angular/core';
import { CarsDataService } from './cars-data.service';

@Component({
  selector: 'app-cars-data',
  templateUrl: './cars-data.component.html',
  styleUrls: ['./cars-data.component.css']
})
export class CarsDataComponent implements OnInit {

  selectedCarId: number;
  cars: Common.Car[] = [];

  constructor(private service: CarsDataService) { }

  ngOnInit() {
    this.updateList();
  }

  selectCar(car: Common.Car) {
    this.selectedCarId = car.id;
    return false;
  }

  updateList() {
    this.service.getCars()
        .subscribe(cars => {
          this.cars = cars;
        });
  }

  removeCar(car: Common.Car) {
    this.service.removeCar(car.id)
        .subscribe(r => {
          if(this.selectedCarId == car.id) {
            this.selectedCarId = null;
          }
          this.updateList();
        })
  }

}
