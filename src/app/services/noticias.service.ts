import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseNews } from '../interfaces/interfaces';

const apiKey = environment.apiKey;
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  page = 0;
  categoriaPage = 0;
  categoria = '';

  constructor(private http: HttpClient) { }


  // Genericos: Esta funcion devuelve cualquier tipo que se le indique al ser llamada.
  private ejecutarQuery<T>(query: string) {
    query = `${environment.apiUrl}${query}`;
    return this.http.get<T>(query, { headers });
  }

  getnews() {
    this.page ++;
    return this.ejecutarQuery<ResponseNews>(`/top-headlines?country=us&page=${this.page}`);
  }
  getTopNewsPerCategory(category: string) {
    if (category === this.categoria) {
      this.categoriaPage++;
    } else {
      this.categoria = category;
      this.categoriaPage = 1;
    }
    return this.ejecutarQuery<ResponseNews>(`/top-headlines?country=us&category=${category}&page=${this.categoriaPage}`);
  }
}
