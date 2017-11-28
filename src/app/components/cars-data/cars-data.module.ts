import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CarsDataComponent } from "./cars-data.component";
import { CarsDataRoutingModule } from "./cars-data-routing.module";
import { CarsDataService } from "./cars-data.service";
import { CarsDataFormComponent } from './cars-data-form/cars-data-form.component';

@NgModule({
    imports: [
        CarsDataRoutingModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        CarsDataComponent,
        CarsDataFormComponent
    ],
    providers: [CarsDataService]
})
export class CarsDataModule {}