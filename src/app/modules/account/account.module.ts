import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingRoutingModule } from './account-routing.module';
import { InputModule } from '@ui/input/input';
import { ForgotPasswordComponent, LogoutComponent } from './components';
import { SharedModule } from 'src/app/shared/shared.module';





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
