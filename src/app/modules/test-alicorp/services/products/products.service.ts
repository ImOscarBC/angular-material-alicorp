import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../interfaces/products.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  base: string = "https://fakestoreapi.com/products"
  constructor(public http: HttpClient) {

  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(`Error in ${operation}: ` , error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.base}`).pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    )
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.base}/${product.id}`).pipe(
      catchError(this.handleError<Product>('deleteProduct', undefined))
    )
  }
}
