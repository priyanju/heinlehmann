import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from '../shared/shared.module';
import { UserService} from '../../Service/app/user.service'

import { UserComponent,User,Edit } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent }];

@NgModule({
  declarations: [UserComponent,User,Edit],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule
    
  ],
  entryComponents:[User,Edit],

  providers:[UserService]


})
export class UserModule { }
