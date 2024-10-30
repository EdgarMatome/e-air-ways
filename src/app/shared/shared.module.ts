import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './pipes';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [
    TimePipe
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
  ],
  exports: [
    TimePipe,
    NgxSpinnerModule,
  ]
})
export class SharedModule { }
