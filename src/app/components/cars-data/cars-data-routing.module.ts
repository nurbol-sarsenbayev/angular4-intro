import { Routes, RouterModule } from "@angular/router";
import { CarsDataComponent } from "./cars-data.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "cars-data", component: CarsDataComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarsDataRoutingModule {
}