import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Common.Car[] = [];


  constructor(private service: CarsService) { }

  ngOnInit() {
    this.cars = this.service.cars;
  }
  
}
