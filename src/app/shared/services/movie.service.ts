import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  http = inject(HttpClient);

  private accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTdhZjkzYmI1OWJhODZlMmQwYWIwYWE1NjgxMWE0YSIsIm5iZiI6MTcxOTU0NjYxMy42MDQzNTgsInN1YiI6IjY2N2QyZmEwM2Y0NTgwOTljNjA5MWZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Au5dM_0KiPu6s_6_Eo1xHBz48WvfUxfajfBtE_p8H18';
  private apiUrl = 'https://api.themoviedb.org/3/discover/movie';

  getMovies() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`,
      'Accept': 'application/json'
    });

    const params = new HttpParams()
      .set('include_adult', 'false')
      .set('include_video', 'true')
      .set('language', 'en-US')
      .set('page', '1')
      .set('sort_by', 'popularity.desc');

    const options = { headers, params };

    return this.http.get<any>(this.apiUrl, options);
  }
}
