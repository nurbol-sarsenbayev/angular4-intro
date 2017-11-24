import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { MyPageComponent } from "./components/my-page/my-page.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Route[] = [
    { path: "", component: HomePageComponent },
    { path: "my-page", component: MyPageComponent, canActivate: [AuthGuard] },        
    // { path: "not-found", component: NotFoundComponent},    
    // { path: "**", redirectTo: "not-found"},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
