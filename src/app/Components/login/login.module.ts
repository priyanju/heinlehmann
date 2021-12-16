import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService} from '../../Service/app/login.service'


const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,SharedModule  ],
  providers:[LoginService],

})
export class LoginModule { }
