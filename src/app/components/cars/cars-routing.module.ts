import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarsComponent } from "./cars.component";
import { CarComponent } from "./car/car.component";

const routes: Routes = [
    { path: "", component: CarsComponent, children: [{ path: ":id/:name", component: CarComponent},] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarsRoutingModule {

}