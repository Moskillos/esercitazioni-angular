import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderContainerComponent } from "./order-container/order-container.component";
import { UserContainerComponent } from "./user-container/user-container.component";
import { UserDetailComponent } from "./user-container/user-detail/user-detail.component";
 
const routes: Routes = [
    {path: '', component: UserContainerComponent},
    {path: 'user', component: UserContainerComponent , children:[
        {path: 'detail', component: UserDetailComponent}
    ]},
    {path: 'order', component: OrderContainerComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not-found'},


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