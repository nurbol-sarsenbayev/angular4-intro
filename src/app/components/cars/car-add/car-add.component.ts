import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carName: string = '';

  constructor(private service: CarsService) { }

  ngOnInit() {
  }

  addCar() {
    if(this.carName && this.carName.length > 0) {
      this.service.addCar(this.carName);
      this.carName = '';
    }
  }

}
