import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from 'src/app/form.service';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  constructor(private form: FormService) {}

  createForm = new FormGroup({
    groupName: new FormControl(''),
  });

  ngOnInit(): void {}

  SaveGroup() {
    this.form.saveGroup(this.createForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
