import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private baseUrl = 'http://localhost:8080/pages/all';

  constructor(private http: HttpClient) { }

  getPage(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPage(page: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, page);
  }

  updatePage(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPagesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
