import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZipValidatorDirective } from './zip-validator.directive';
import { FooterComponent } from './components/footer/footer.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsTemplateSampleComponent } from './components/forms-template-sample/forms-template-sample.component';
import { FormsReactiveSampleComponent } from './components/forms-reactive-sample/forms-reactive-sample.component';
import { NestedFormsComponent } from './components/nested-forms/nested-forms.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipValidatorDirective,
    FooterComponent,
    FormsComponent,
    FormsTemplateSampleComponent,
    FormsReactiveSampleComponent,
    NestedFormsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
