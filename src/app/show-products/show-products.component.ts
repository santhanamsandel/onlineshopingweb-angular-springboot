import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CategoryEnum } from '../Product';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent  implements OnInit {
  products: any;
  customer: Customer = new Customer();
   categories: CategoryEnum[] = [];
  filteredProducts: any[] = []; // Add this line to store the filtered products
  
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProductList();
    this.getCategories(); // Call the method to fetch categories
  }

  // getProductList(): void {
  //   this.productService.getProductList().subscribe(products => this.products = products);
  // }

  addToCart(productId: number, customerId?: number): void {
    // if (customerId !== undefined)
    {
      this.productService.addToCart(productId).subscribe(
        (response) => {
          console.log('Product added to cart:', response);
          // Handle success response
        },
        (error) => {
          console.error('Error adding product to cart:', error);
          // Handle error response
        }
      );
    }
  }


  getCategories(): void {
    this.categories = Object.values(CategoryEnum); // Get the values of the CategoryEnum
  }
  getProductList(): void {
    this.productService.getProductList().subscribe(products => {
      this.products = products;
      this.filteredProducts = [...this.products]; // Initialize filteredProducts with all products
    });
  }
  filterProductsByCategory(category: CategoryEnum): void {
    if (category === CategoryEnum.MOBILES) {
      this.filteredProducts = this.products.filter((product: any) => product.category === CategoryEnum.MOBILES);
    } else if (category === CategoryEnum.LAPTOP) {
      this.filteredProducts = this.products.filter((product: any) => product.category === CategoryEnum.LAPTOP);
    } else if (category === CategoryEnum.TABLET) {
      this.filteredProducts = this.products.filter((product: any) => product.category === CategoryEnum.TABLET);
    } else if (category === CategoryEnum.SMARTTV) {
      this.filteredProducts = this.products.filter((product: any) => product.category === CategoryEnum.SMARTTV);
    } else if (category === CategoryEnum.CAMERA) {
      this.filteredProducts = this.products.filter((product: any) => product.category === CategoryEnum.CAMERA);
    } else {
      this.filteredProducts = [...this.products]; // Show all products if category is not selected
    }
  }
  // getCategories(): void {
  //   this.productService.getCategories(this.category).subscribe(categories => this.categories = categories);
  // }

  goBack(): void {
    this.router.navigateByUrl('/user');
  }






}