import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "http://localhost:8088/admin";

  constructor(private http: HttpClient) { }

  public getProductList(): Observable<any> {
    return this.http.get("http://localhost:8088/admin/allproducts");
  }

  public createProduct(product: Products): Observable<any> {
    return this.http.post(this.url, product);
  }

  public updateProduct(productId: number, product: Products): Observable<any> {
    return this.http.put(`http://localhost:8088/admin/updateproducts/${productId}`, product);
  }

  public deleteProduct(productId: number): Observable<Object> {
    return this.http.delete(`http://localhost:8088/admin/deleteproduct/${productId}`);
  }

  public getProductById(productId: number): Observable<Products> {
    return this.http.get<Products>(`http://localhost:8088/admin/product/${productId}`);
  }
}