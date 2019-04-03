import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getnews() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${environment.apiKey}`);
  }
}
