import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://api.github.com';
  private token = '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';

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `token ${this.token}`
    });
  }

  constructor(private http: HttpClient) {}

   getUser(username: string) {
    const url = `${this.apiUrl}/users/${username}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getUserRepos(username: string) {
    const url = `${this.apiUrl}/users/${username}/repos`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

}