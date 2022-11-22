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
    this.form.getAllGroups().subscribe((data) => {
      console.log(data);
      const res = Object.values(data);
      res.map((item: any) => {
        var data: any = [];
        this.form.getGroupProperties(item._id).subscribe((gp) => {
          data.push(gp);
        });
        this.form.getGroupCheckList(item._id).subscribe((cl) => {
          data.push(cl);
        });
        this.form.getGroupPictures(item._id).subscribe((pic) => {
          data.push(pic);
        });
        this.formData[item._id] = data;
        console.log(this.formData[item._id]);
      });
      this.groupData = data;
    });
  }
}
