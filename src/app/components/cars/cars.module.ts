import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CarsComponent } from "./cars.component";
import { CarComponent } from "./car/car.component";
import { CarAddComponent } from "./car-add/car-add.component";
import { CarsService } from "./cars.service";
import { CarsRoutingModule } from "./cars-routing.module";


@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        CarsRoutingModule
    ],
    declarations: [
        CarsComponent, 
        CarComponent, 
        CarAddComponent
    ],
    providers: [
        CarsService
    ]
})
export class CarsModule {}