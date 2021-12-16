import { Component, OnInit,Inject} from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../../Service/app/profile.service';
import Swal from 'sweetalert2';
import { untilDestroyed } from 'ngx-take-until-destroy';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  tenant:any;
  back:any;
  myLoader= false;
  constructor(private nav:NavbarService,public dialog: MatDialog,private service:ProfileService) {
     this.nav.show();
     this.tenant = localStorage.getItem('tenant_id')

   }
   user(): void {
    const dialogRef = this.dialog.open(User, {
      width: '450px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
     
      this.ngOnInit();

    });
  }

  delete_view(id) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      // type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Please Confirm'
        }).then((destroy) => {
          if (destroy.value) {
           this.myLoader= true;
            this.service.delete_row(id).pipe(untilDestroyed(this)).subscribe(res => {
              this.myLoader= false;
               if(res === true)
              {
                Swal.fire("Deleted Succesfully !")
              }
              else{
                Swal.fire("Delete Failed")
              }
              
              this.ngOnInit()
            })
          }
        })
      }
    })
  }
  edit_view(data1): void {
    const dialogRef = this.dialog.open(Edit, {
      width: '30%',
      height:'auto',
      data:data1
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();

    });
  }
  ngOnInit() {
   this.myLoader= true;
   this.service.listing(this.tenant).subscribe(res =>{
    this.myLoader= false;
     this.back = res;
     console.log( this.back);


   })

  }

  ngOnDestroy(){

  }

}

@Component({
  selector: 'user-page',
  templateUrl: 'user.html',
  styleUrls: ['./profile.component.scss']

})
export class User {
  login: any;
  form: any;
  operator_role: any;
  tenant: string;
  user: string;
  approval: string;
  back: any;
  myLoader= false;
  role: any;
  add_val: any;
  show_status: any;
  hide: boolean = true;
  roles_list: any;
  back_list: any;
  constructor(public dialogRef: MatDialogRef<User>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,private service:ProfileService ) {}

  cancel() {
    this.dialogRef.close();
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

    this.login=this.fb.group({

      first_name:["",Validators.required],last_name:["",Validators.required], email_id:["",Validators.email],password:["",Validators.required], phone_number:["",Validators.required], remarks:["",Validators.required], tenant_name:["",Validators.required],address_line1:["",Validators.required], address_line2:["",Validators.required],
      city:["",Validators.required], state:["",Validators.required],country:["",Validators.required], pincode:["",Validators.required]

})

   }

  logintest() {
    this.add_val=this.login.value;
    this.add_val["tenant_id"] =this.tenant;
    this.add_val["usertype_id"] = 2;
    localStorage.setItem('usertwipe_id',this.add_val["usertype_id"]);
    this.add_val["approval_id"] =this.approval;
    this.add_val["role_id"] =this.role;
    console.log(this.add_val);

    this.myLoader= true;
    this.service.senddata(this.login.value).subscribe(res =>{
    this.myLoader= false;
    
      if (res === true) {
       Swal.fire('Created Successfully')
     }
     this.dialogRef.close();

    })
   
   
  }
 
}


@Component({
  selector: 'edit-page',
  templateUrl: 'edit.html',
  styleUrls: ['./profile.component.scss']

})
export class Edit {
  login: any;
  form: any;
  operator_role: any;
  tenant: string;
  user: string;
  approval: string;
  back: any;
  role: any;
  add_val: any;
  show_status: any;
  hide: boolean = true;
  roles_list: any;
  back_list: any;
  myLoader= false;
  value:any;
  constructor(public dialogRef: MatDialogRef<Edit>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,private service:ProfileService ) {
    this.value = data;
    console.log(this.value);
    this.tenant = localStorage.getItem('tenant_id');
    this.user = localStorage.getItem('usertype_id')
    this.approval = localStorage.getItem('approval_id')
    this.role = localStorage.getItem('role_id');
  }

  cancel() {
    this.dialogRef.close();
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

    this.login=this.fb.group({

      first_name:[this.value.users[0].first_name],last_name:[this.value.users[0].last_name], email_id:[this.value.users[0].email_id],password:[this.value.users[0].password], phone_number:[this.value.users[0].phone_number], remarks:[this.value.users[0].remarks], tenant_name:[this.value.tenant_name],address_line1:[this.value.address_line1], address_line2:[this.value.address_line2],
      city:[this.value.city], state:[this.value.state],country:[this.value.country], pincode:[this.value.users[0].tenant.pincode]

})

   }

  logintest() {
    this.add_val=this.login.value;
    this.add_val["tenant_id"] =this.tenant;
    
    console.log(this.add_val);

    this.myLoader= true;
    this.service.putdata(this.value.id,this.add_val).subscribe(res =>{
      this.myLoader= false;
    
      if (res === true) {
       Swal.fire('Thank You for registering with Yantra24x7')
     }
     this.dialogRef.close();

    })
   
   
  }
 
}

