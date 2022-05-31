import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app/app.component"
import { OrderContainerComponent } from "./order-container/order-container.component";
import { UserContainerComponent } from "./user-container/user-container.component";
 
const routes: Routes = [
    {path: 'home', component: AppComponent},
    {path: 'user', component: UserContainerComponent},
    {path: 'order', component: OrderContainerComponent},

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}