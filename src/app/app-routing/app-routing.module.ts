import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { AddIssueComponent } from '../add-issue/add-issue.component';

const routes: Routes = [
  { path: 'view', component: DashboardComponent },
  { path: 'add', component: AddIssueComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}