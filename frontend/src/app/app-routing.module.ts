import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { CheckListComponent } from './components/check-list/check-list.component';
import { GroupComponent } from './components/group/group.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateFormComponent
  },
  {
    path: 'checkList',
    component: CheckListComponent
  },
  {
    path: '',
    component: GroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
