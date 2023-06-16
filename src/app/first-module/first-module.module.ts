import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../_shared/shared.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,

    SharedModule

  ]
})
export class FirstModuleModule { }
