import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';

import { MachineDetailRoutingModule } from './machine-detail-routing.module';
import { MachineDetailComponent } from './machine-detail.component';
import { MachinedetailService} from '../../Service/app/machinedetail.service'


@NgModule({
  declarations: [MachineDetailComponent],
  imports: [
    CommonModule,SharedModule,
    MachineDetailRoutingModule
  ],
  providers:[MachinedetailService],

})
export class MachineDetailModule { }
