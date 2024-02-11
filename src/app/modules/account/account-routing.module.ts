import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LogoutComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '/logout',
        component: LogoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingRoutingModule { }
