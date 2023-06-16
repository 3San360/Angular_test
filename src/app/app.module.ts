import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './_shared/shared.module';
// import { MaterialModule } from './material.module';
// import { MaterialModule } from './material.module';
// import { TableComponent } from './_shared/table/table.component';
// import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    // TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgxSpinnerModule,
    BrowserAnimationsModule,

    SharedModule,
    // MatTableModule
    // MaterialModule
  ],
  // exports:[NgxSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
