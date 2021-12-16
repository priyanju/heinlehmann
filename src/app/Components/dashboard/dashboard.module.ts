import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { AdmindashboardService} from '../../Service/app/admindashboard.service'
import {MatRippleModule} from '@angular/material/core';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,MatRippleModule
    
  ],
  providers:[AdmindashboardService],
})
export class DashboardModule { }
 