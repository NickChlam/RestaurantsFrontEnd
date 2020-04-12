import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = environment.baseUrl;
  

  constructor(private http: HttpClient) { }


  getAllData(){
    return this.http.get(`${this.baseURL}/restaurants`);
  }
  pageData(page, size) {
    return this.http.get(`${this.baseURL}/restaurants?page=${page}&size=${size}`);
  }
  getFoodType(type: string) {
    return this.http.get(`${this.baseURL}/restaurants/type/${type}`);
  }
  GetSearch(search: string){
    return this.http.get(`${this.baseURL}/restaurants/name/${search}`);

  }

}