import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { NotificationService } from '../../Service/app/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor( private nav:NavbarService,private service:NotificationService) {
   this.nav.show();
   }

  ngOnInit() {
  }

}
