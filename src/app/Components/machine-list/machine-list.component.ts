import { Component, OnInit,Inject } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { MachinelistService } from '../../Service/app/machinelist.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})
export class MachineListComponent implements OnInit {
  panelOpenState:any;
  machine_response: any;
  tenant: string;
  myLoader= false;
  constructor(private nav:NavbarService,public dialog: MatDialog,private service:MachinelistService) {
     this.nav.show();
     this.tenant=localStorage.getItem('tenant_id')

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
    this.service.card(this.tenant).pipe(untilDestroyed(this)).subscribe(res => {

      this.machine_response=res;  
      this.myLoader= false;


    })
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
            this.myLoader = true;

            this.service.delete_row(id).pipe(untilDestroyed(this)).subscribe(res => {
              this.myLoader = false;

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


  ngOnDestroy(){

  }
}


@Component({
  selector: 'user-page',
  templateUrl: 'user.html',
  styleUrls: ['./machine-list.component.scss']

})
export class User {
  login: any;
  operator_role: any;
  tenant: string;
  user: string;
  approval: string;
  back: any;
  role: any;
  add_val: any;
  myLoader= false;
  show_status: any;
  hide: boolean = true;
  roles_list: any;
  back_list: any;
  controller_type:any;
  constructor(private service:MachinelistService,public dialogRef: MatDialogRef<User>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, ) {
    this.tenant=localStorage.getItem('tenant_id')

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
      machine_type:["",Validators.required],
      machine_name:["",Validators.required],
      machine_model:["",Validators.required],
      machine_serial_no:["",Validators.required],
      machine_ip:["",Validators.required],
      unit:["",Validators.required],
      device_id:["",Validators.required],
      controller_type:["",Validators.required],
      // border_rate:["",],
      // t1_ip:["",]
     
    })

   }

   form() {
    this.add_val = this.login.value;

    this.add_val["tenant_id"] = this.tenant
    this.add_val["controller_type"]=this.controller_type;
    this.myLoader= true;
   this.service.machine(this.login.value).pipe(untilDestroyed(this)).subscribe(res => {
    this.myLoader= false;
     alert('created successfully')
     this.dialogRef.close();

 })   
   
  }
  machineSelect(machine){
    this.controller_type=machine
}

  ngOnDestroy(){

  }
}


@Component({
  selector: 'edit-page',
  templateUrl: 'edit.html',
  styleUrls: ['./machine-list.component.scss']

})
export class Edit {
  edit_data:any;
  login: any;
  myLoader= false;
  tenant: any;
  add_val: any;
  edit_data1:any;
  controller_type:any;
  constructor(public dialogRef: MatDialogRef<Edit>,@Inject(MAT_DIALOG_DATA) public data1: any,private fb:FormBuilder,private service:MachinelistService) {
     this.edit_data1 = data1;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit()
  {  this.tenant = localStorage.getItem('tenant_id')

    this.login=this.fb.group({
      machine_type:[this.edit_data1.machine_type],
      machine_name:[this.edit_data1.machine_name],
      machine_model:[this.edit_data1.machine_model],
      machine_serial_no:[this.edit_data1.machine_serial_no],
      machine_ip:[this.edit_data1.machine_ip],
      device_id:[this.edit_data1.device_id],
      unit:[this.edit_data1.unit],
      controller_type:[this.edit_data1.controller_type],
      // border_rate:[this.edit_data1.controller_type],
      // t1_ip:[this.edit_data1.controller_type]

    })
  }

  machineSelect(machine){
    this.controller_type=machine
}
  loginforum()
  {
    this.add_val = this.login.value 
    this.add_val["tenant_id"] = this.tenant;
    this.myLoader= true;
    this.service.edit(this.edit_data1.id,this.add_val).pipe(untilDestroyed(this)).subscribe(res => {
      this.myLoader= false;
      Swal.fire("Updated Successfully!")
      if(res === true){
        Swal.fire("Updated Suceesfully")
      }
      this.dialogRef.close();
    })
  }
  cancel() {
    this.dialogRef.close();
  }
 
  ngOnDestroy(){

  }

}