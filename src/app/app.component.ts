import { Component } from '@angular/core';
import { NavbarService} from './Nav/navbar.service';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yantra8';
  constructor(public nav:NavbarService){}
  ngOnInit(){

    gtag('config', 'G-86HQYXS3CV');

  }
}
