import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  url=' http://localhost:5002/form';
  constructor(private http: HttpClient) {}
  getAllGroups() {
    return this.http.get(this.url + '/groups');
  }
}
