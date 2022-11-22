import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { CheckListComponent } from './components/check-list/check-list.component';
import { GroupComponent } from './components/group/group.component';
import { GroupPropoertyComponent } from './components/group-propoerty/group-propoerty.component';
import { PictureComponent } from './components/picture/picture.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    CheckListComponent,
    GroupComponent,
    GroupPropoertyComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
