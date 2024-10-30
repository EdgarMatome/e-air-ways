import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingRoutingModule } from './account-routing.module';
import { ForgotPasswordComponent, LogoutComponent } from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputModule } from '@uiComponents/input/input.module';





@NgModule({
  declarations: [
    AccountComponent,
    LogoutComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingRoutingModule,
    InputModule,
    SharedModule,
  ]
})
export class AccountModule { }
