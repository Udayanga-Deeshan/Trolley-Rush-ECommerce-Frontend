import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path:"",
        component:DashboardComponent
    },
    {
        path:"about-us",
        component:AboutUsComponent
    },
    {
        path:"products",
        component:ProductComponent
    }
];
