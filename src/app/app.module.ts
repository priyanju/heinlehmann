import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule} from './Components/shared/shared.module';
import { NavbarService} from './Nav/navbar.service';
import { SidebarComponent } from './Nav/sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule} from '../app/Service/core/core.module';
@NgModule({
  declarations: [
    AppComponent,SidebarComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,CoreModule
  ],
  bootstrap: [AppComponent],
  providers: [NavbarService],

})
export class AppModule { }
