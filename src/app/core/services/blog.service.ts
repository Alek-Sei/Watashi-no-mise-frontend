import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://localhost:8080/blog/all';

  constructor(private http: HttpClient) { }

  getBlogArticle(title: string): Observable<object> {
    return this.http.get(`${this.baseUrl}/${title}`);
  }

  createBlogArticle(blog: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, blog);
  }

  updateBlogArticle(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBlogArticle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBlogsArticleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
