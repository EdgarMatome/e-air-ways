import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './pipes';




@NgModule({
  declarations: [
    TimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimePipe
  ]
})
export class SharedModule { }
