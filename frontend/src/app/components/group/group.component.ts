import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {

  constructor(private form: FormService) {}

  groupData: any = [];
  formData: any = {};

  ngOnInit(): void {
    this.form.getAllGroups().toPromise().then((group) => {
      Object(group).map((item: any) => {
        var data: string[][] = [];
        this.form.getGroupProperties(item._id).toPromise().then((gp) => {
          var gps: string[] = [];
          Object(gp).map((item: any) => gps.push(item.propertyName));
          data.push(gps);
        });
        this.form.getGroupCheckList(item._id).toPromise().then((cl) => {
          var cls: string[] = [];
          Object(cl).map((item: any) => cls.push(item.checkListName));
          data.push(cls);
        });
        this.form.getGroupPictures(item._id).toPromise().then((pic) => {
          var pics: string[] = [];
          Object(pic).map((item: any) => pics.push(item.path));
          data.push(pics);
        });
        console.log(typeof(data));
        this.formData[item._id] = data;
        console.log(Object(this.formData)[item._id]);
      });
      console.log(this.formData);
      this.groupData = group;
    });
  }
}
