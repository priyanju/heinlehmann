import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { MachinedetailService } from '../../Service/app/machinedetail.service';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.scss']
})
export class MachineDetailComponent implements OnInit {

  constructor(private nav:NavbarService,private service:MachinedetailService) {
    this.nav.show();

   }

  ngOnInit() {
  }

}
