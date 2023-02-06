import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  /**
   * Get all categories
   * @returns
   */
  getCategories(){

    const endpoint = `${base_url}/categories`;
    return this.http.get(endpoint);

  }

  saveCategories(body: any){
    const endpoint = `${base_url}/categories`;
    return this.http.post(endpoint, body);
  }

  updateCategories(body:any, id:any){
    const endpoint = `${base_url}/categories/ ${id}`;
    return this.http.put(endpoint,body);
  }

  deleteCategories(id:any){
    const endpoint = `${base_url}/categories/ ${id}`;
    return this.http.delete(endpoint);
  }

  getCategoriesById(id:any){
    const endpoint = `${base_url}/categories/ ${id}`;
    return this.http.get(endpoint);
  }
}
