import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CarsDataService } from '../cars-data.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-cars-data-form',
  templateUrl: './cars-data-form.component.html',
  styleUrls: ['./cars-data-form.component.css']
})
export class CarsDataFormComponent implements OnInit, OnChanges {

  @Input() carId: number;
  @Output("onChanged") event = new EventEmitter<Common.Car>();

  car: Common.Car;
  status: string = "Add";

  constructor(private service: CarsDataService) { }

  ngOnInit() {
    this.car = this.service.getEmptyCar();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.carId) {
      this.status = "Edit";
      this.service.getCar(this.carId)
        .subscribe(car => this.car = car);
    } else {
      this.status = "Add";
      this.car = this.service.getEmptyCar();
    }
  }

  onSumbit() {
    if(this.status == "Add") {
      this.service.addCar(this.car.name, this.car.color, this.car.year)
          .subscribe(car => {
            this.event.emit(this.service.cloneCar(this.car));
            this.car = this.service.getEmptyCar();            
          });
    } else {
      this.service.editCar(this.car)
          .subscribe(car => {
            this.event.emit(this.service.cloneCar(this.car));
          });
          
    }
  }

}
