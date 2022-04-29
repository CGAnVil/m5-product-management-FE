import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  getALl(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/products`);
  }

  getById(id):Observable<Product>{
    return this.http.get<Product>(`${API_URL}/products]${id}`);
  }

  createProduct(product):Observable<Product>{
    return this.http.post(`${API_URL}/products`, product);
  }

  editProduct(id, product): Observable<Product>{
    return this.http.put(`${API_URL}/products/${id}`, product);
  }

  deleteProduct(id): Observable<Product>{
    return this.http.delete(`${API_URL}/products`);
  }
}
