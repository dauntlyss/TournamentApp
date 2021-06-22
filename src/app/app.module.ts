import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './app/tournament/hello/hello.component';
import { BracketsComponent } from './app/tournament/brackets/brackets.component';
import { RegistrationComponent } from './app/tournament/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BracketsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
