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

  getGroupProperties(id: any) {
    return this.http.get(this.url + '/groupProperty/' + id);
  }

  getGroupCheckList(id: any) {
    return this.http.get(this.url + '/checkList/' + id);
  }

  getGroupPictures(id: any) {
    return this.http.get(this.url + '/picture/' + id);
  }

  saveGroup(data: any) {
    return this.http.post(this.url + '/createGroup', { data });
  }
}
