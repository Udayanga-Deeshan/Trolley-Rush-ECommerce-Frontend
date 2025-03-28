import { HttpClient } from "@angular/common/http";
import { Product } from "../model/Product";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:"root"
    }
)
export class ProductService{

   

    constructor(private http:HttpClient){

    }

    loadPorducts():Observable<Product[]>{
           return this.http.get<Product[]>("http://localhost:8080/product/all")
    }
}