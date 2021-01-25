import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormComponent} from './components/form.component'
import {CreateProfileComponent} from './components/create-profile.component'
import {SuccessMessageComponent} from './components/success-message.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProfileComponent,
    SuccessMessageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
