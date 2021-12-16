import { Component, OnInit,Inject} from '@angular/core';
 import { NavbarService} from '../../Nav/navbar.service';
 import { UserService } from '../../Service/app/user.service';
 import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
 import Swal from 'sweetalert2';
 import { untilDestroyed } from 'ngx-take-until-destroy';
 @Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
}) 
export class UserComponent implements OnInit {
  picker:any;
  tenant:any;
  back:any;
  myLoader= false;

  constructor(private nav:NavbarService,private service:UserService,public dialog: MatDialog) {
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
      this.back = res;
      this.myLoader= false;

      console.log( this.back);
    })
  }

  ngOnDestroy(){

  }


}




@Component({
  selector: 'user-page',
  templateUrl: 'user.html',
  styleUrls: ['./user.component.scss']

})
export class User {
  login: any;
  form: any;
  operator_role: any;
  tenant: string;
  user: string;
  approval: string;
  back: any;
  role: any;
  myLoader= false;

  add_val: any;
  show_status: any;
  hide: boolean = true;
  roles_list: any;
  back_list: any;
  constructor(public dialogRef: MatDialogRef<User>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,private service:UserService ) {
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

    this.service.operator().pipe(untilDestroyed(this)).subscribe(res => {
      this.roles_list = res;
    })

    this.login=this.fb.group({

      first_name:["",Validators.required],last_name:["",Validators.required], email_id:["",Validators.email],password:["",Validators.required], phone_number:["",Validators.required], remarks:["",Validators.required], role_id: ["", Validators.required],


})

   }

  logintest() {
    this.add_val=this.login.value;
    this.add_val["tenant_id"] =this.tenant;
    this.add_val["usertype_id"] =this.user;
    this.add_val["approval_id"] =this.approval;
    this.add_val["role_id"] =this.role;
    console.log(this.add_val);

    this.myLoader= true;

    this.service.senddata(this.add_val).subscribe(res =>{
    
       Swal.fire('Created Successfully')
       this.myLoader= false;

     this.dialogRef.close();

    })
   
   
  }
  ngOnDestroy(){

  }
 
}


@Component({
  selector: 'edit-page',
  templateUrl: 'edit.html',
  styleUrls: ['./user.component.scss']

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
  myLoader= false;

  add_val: any;
  show_status: any;
  hide: boolean = true;
  roles_list: any;
  back_list: any;
  edit_data: any;

  constructor(public dialogRef: MatDialogRef<Edit>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,private service:UserService ) {
    this.edit_data = data;
    console.log( this.edit_data)
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



    this.service.operator().pipe(untilDestroyed(this)).subscribe(res => {
      this.roles_list = res;
    })

    this.login=this.fb.group({

      first_name:[this.edit_data.first_name],last_name:[this.edit_data.last_name], email_id:[this.edit_data.email_id],password:[this.edit_data.password], phone_number:[this.edit_data.phone_number], remarks:[this.edit_data.remarks], role_id: [this.edit_data.role_id]

})

   }

  logintest() {
    this.add_val = this.login.value
    this.add_val["tenant_id"] = this.tenant;
    this.myLoader= true;

    this.service.edit(this.edit_data.id, this.add_val).pipe(untilDestroyed(this)).subscribe(res => {
    
      Swal.fire("Updated Successfully!")
      this.myLoader= false;

      this.dialogRef.close();
    })

   
  }
  ngOnDestroy(){

  }
 
}


