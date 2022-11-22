import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  constructor(private form: FormService) {}

  groupData: any = [];
  groupPropertyData: any = {};
  checkListData: any = {};
  pictureData: any = {};

  ngOnInit(): void {
    this.form.getAllGroups().toPromise().then((group) => {
      Object(group).map((g: any) => {
        this.form.getGroupProperties(g._id).toPromise().then((gp) => {
          this.groupPropertyData[g._id] = [];
          Object(gp).map((item: any) => this.groupPropertyData[g._id].push(item.propertyName));
        });
        this.form.getGroupCheckList(g._id).toPromise().then((cl) => {
          this.checkListData[g._id] = [];
          Object(cl).map((item: any) => this.checkListData[g._id].push(item.checkListName));
        });
        this.form.getGroupPictures(g._id).toPromise().then((pic) => {
          this.pictureData[g._id] = [];
          Object(pic).map((item: any) => this.pictureData[g._id].push(item.path));
        });
        console.log(Object.values(this.groupPropertyData));
      });
      this.groupData = group;
    });
  }

}
