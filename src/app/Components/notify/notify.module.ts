import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { NotifyRoutingModule } from './notify-routing.module';
import { NotifyComponent } from './notify.component';
import { NotifyService} from '../../Service/app/notify.service'


@NgModule({
  declarations: [NotifyComponent],
  imports: [
    CommonModule,SharedModule,
    NotifyRoutingModule
  ],
  providers:[NotifyService],

})
export class NotifyModule { }
