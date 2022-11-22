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
  groupPropertyData: any = {};
  checkListData: any = {};
  pictureData: any = {};

  ngOnInit(): void {
    this.form
      .getAllGroups()
      .toPromise()
      .then((group) => {
        Object(group).map((g: any) => {
          this.form
            .getGroupProperties(g._id)
            .toPromise()
            .then((gp) => {
              this.groupPropertyData[g._id] = [];
              Object(gp).map((gp_ele: any) => {
                this.pictureData[gp_ele._id] = [];
                this.checkListData[gp_ele._id] = [];
                this.groupPropertyData[g._id].push(gp_ele);
                this.form
                  .getGroupCheckList(gp_ele._id)
                  .toPromise()
                  .then((cl) => {
                    Object(cl).map((item: any) =>
                      this.checkListData[gp_ele._id].push(item.checkListName)
                    );
                  });
                this.form
                  .getGroupPictures(gp_ele._id)
                  .toPromise()
                  .then((pic) => {
                    Object(pic).map((item: any) =>
                      this.pictureData[gp_ele._id].push(item.path)
                    );
                  });
                });
                console.log(Object(this.pictureData));
            });

          console.log(Object.values(this.groupPropertyData));
        });
        this.groupData = group;
      });
  }
}
