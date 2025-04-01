import { HttpClient } from "@angular/common/http";
import { Customer } from "../model/Customer";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class CustomerService{

    constructor(private http:HttpClient){

    }

    loadCustomers():Observable<Customer[]>{
        return this.http.get<Customer[]>("http://localhost:8080/customer/all")
    }
}