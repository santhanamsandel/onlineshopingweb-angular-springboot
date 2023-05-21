import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  
  private url = "http://localhost:8088/admin";

  constructor(private http: HttpClient) { }

  addToCart(productId: number) {
    return this.http.post(`http://localhost:8088/Cart/addtocart/${productId}/59`, {});
  }
  
  getCategories(category:String): Observable<any> {
    return this.http.get(`http://localhost:8088/admin/products/${category}`); // Uptedate the URL to fetch categories
  }
  
  getProductList(): Observable<any> {
    return this.http.get(`${this.url}/allproducts`);
  }

  createProduct(product: Products): Observable<any> {
    return this.http.post(this.url, product);
  }

  updateProduct(productId: number, product: Products): Observable<any> {
    return this.http.put(`${this.url}/updateproducts/${productId}`, product);
  }

  deleteProduct(productId: number): Observable<Object> {
    return this.http.delete(`${this.url}/deleteproduct/${productId}`);
  }

  getProductById(productId: number): Observable<Products> {
    return this.http.get<Products>(`${this.url}/product/${productId}`);
  }
}