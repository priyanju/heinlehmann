import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdmindashboardService } from '../../Service/app/admindashboard.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  usertype_id:any
  tenant:any;
  back:any;
  myLoader= false;

  searchText:any;
  machine_response: any;
  constructor(private nav:NavbarService,private service:AdmindashboardService,private route:Router) { 
     this.nav.show();
     this.usertype_id = localStorage.getItem('usertype_id');
     console.log(this.usertype_id);
     this.tenant = localStorage.getItem('tenant_id')

  }

  ngOnInit() {
    this.myLoader= true;

    this.service.listing(this.tenant).subscribe(res =>{
      this.back = res;
      this.myLoader= false;

      for(let i=0; i<this.back.length; i++){
        console.log(this.back[i].tenant_name)
        
    }

      console.log( this.back);
 
 
    })

    this.myLoader= true;

    this.service.card(this.tenant).subscribe(res => {
    this.machine_response=res;
    this.myLoader= false;

    })
  }
  malok(blok,id){
    console.log(blok,id);
    localStorage.setItem('tenantinner_name',blok); 
    localStorage.setItem('maceerr_id',id); 
    this.route.navigateByUrl('/dashboard');



  }
  getmachine(machine,id){
   console.log(machine)
   console.log(id)    
   this.myLoader= true;


   this.service.card2(id).subscribe(res => {
    this.machine_response=res;
    this.myLoader= false;

    })

    }
 
}
