import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';

import { MachineListComponent,User,Edit } from './machine-list.component';
import { MachinelistService} from '../../Service/app/machinelist.service'

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: MachineListComponent }];

@NgModule({
  declarations: [MachineListComponent,User,Edit],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule,
  ],
  entryComponents:[User,Edit],
  providers:[MachinelistService],


})
export class MachineListModule { }
