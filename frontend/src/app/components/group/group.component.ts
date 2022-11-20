import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {

  constructor(private form: FormService) {}


  ngOnInit(): void {
    this.form.getAllGroups().subscribe((data) => {
      console.log(data);
    });
  }
}
