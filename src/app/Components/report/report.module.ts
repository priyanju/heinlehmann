import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ReportService} from '../../Service/app/report.service'
import { SharedModule} from '../shared/shared.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,SharedModule
  ],
  providers:[ReportService,DatePipe],
})
export class ReportModule { }
