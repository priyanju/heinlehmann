import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: '', loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule) }, 
{ path: 'admin_dashboard', loadChildren: () => import('./Components/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) }, 
{ path: 'user', loadChildren: () => import('./Components/user/user.module').then(m => m.UserModule) }, 
{ path: 'profile', loadChildren: () => import('./Components/profile/profile.module').then(m => m.ProfileModule) }, 
{ path: 'notification', loadChildren: () => import('./Components/notification/notification.module').then(m => m.NotificationModule) }, 
{ path: 'machine_list', loadChildren: () => import('./Components/machine-list/machine-list.module').then(m => m.MachineListModule) },
{ path: 'machine-detail', loadChildren: () => import('./Components/machine-detail/machine-detail.module').then(m => m.MachineDetailModule) },
{ path: 'report', loadChildren: () => import('./Components/report/report.module').then(m => m.ReportModule) },
{ path: 'notify', loadChildren: () => import('./Components/notify/notify.module').then(m => m.NotifyModule) },
{ path: 'dashboard', loadChildren: () => import('./Components/dashboard/dashboard.module').then(m => m.DashboardModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }