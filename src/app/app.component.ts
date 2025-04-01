import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./common/header/header.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { Product } from './model/Product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './service/ProductService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DashboardComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-Angular-app';

  productList:Product[] =[];

  constructor(private http:HttpClient,private productService:ProductService){
    // let customer:Product ={
    //   name:"Bread",
    //   description:"Low fat bread",
    //   price:250
    // }

    // let productList:Product[] =[
    //   new Product("shampoo","hair care",230),
    //   new Product("Milk","food",230),
    //   new Product("Butter","food",230),
    // ]

    this.loadProductsToTable();
  }

  loadProductsToTable(){
    this.productService.loadPorducts().subscribe((productList:Product[])=>{
      this.productList=productList;
    })
  }

  
}
