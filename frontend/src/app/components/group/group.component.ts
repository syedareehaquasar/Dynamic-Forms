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
    this.form.getAllGroups().subscribe((group) => {
      const res = Object.values(group);
      res.map((item: any) => {
        var data: any = [];
        this.form.getGroupProperties(item._id).subscribe((gp) => {
          var gps: any = [];
          console.log(Object.values(gp).map((item: any) => gps.push(item.propertyName)));
          data.push(gps);
        });
        this.form.getGroupCheckList(item._id).subscribe((cl) => {
          var cls: any = [];
          console.log(Object.values(cl).map((item: any) => cls.push(item.checkListName)));
          data.push(cls);
        });
        this.form.getGroupPictures(item._id).subscribe((pic) => {
          var pics: any = [];
          console.log(Object.values(pic).map((item: any) => pics.push(item.path)));
          data.push(pics);
        });
        this.formData[item._id] = data;
      });
      console.log(this.formData);
      this.groupData = group;
    });
  }
}
