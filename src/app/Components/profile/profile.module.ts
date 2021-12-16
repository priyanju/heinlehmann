import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent ,User,Edit} from './profile.component';
import { SharedModule} from '../shared/shared.module';
import { ProfileService} from '../../Service/app/profile.service'

const routes: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  declarations: [ProfileComponent,User,Edit],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,
    
  ],
  entryComponents:[User,Edit],
  providers:[ProfileService],


})
export class ProfileModule { }
