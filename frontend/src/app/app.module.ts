import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { ListChecklistComponent } from './components/list-checklist/list-checklist.component';
import { ListGroupPropertiesComponent } from './components/list-group-properties/list-group-properties.component';
import { ListPicturesComponent } from './components/list-pictures/list-pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    ListGroupsComponent,
    ListChecklistComponent,
    ListGroupPropertiesComponent,
    ListPicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
