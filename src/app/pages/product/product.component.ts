import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from "../../common/product-item/product-item.component";

@Component({
  selector: 'app-product',
  imports: [ProductItemComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    this.loadProducts();
  }

  public listOfProducts:any = []

  loadProducts(){
    fetch("https://fakestoreapi.com/products")
    .then(res =>res.json())
    .then(data=>{
      console.log(data);
      this.listOfProducts=data
      
    })
  }

}
