import { NgModule, Directive,OnInit, EventEmitter, Output, OnDestroy, Input,ElementRef,Renderer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule,MatMenuModule,MatIconModule,MatInputModule,MatCardModule,MatFormFieldModule,MatListModule,
         MatAutocompleteModule,MatSelectModule,MatSlideToggleModule,
         MatSliderModule,MatSidenavModule,MatDividerModule,
         MatRadioModule,MatExpansionModule,MatDatepickerModule,
         MatGridListModule,MatStepperModule,MatTreeModule,
         MatSnackBarModule,MatTabsModule,MatDialogModule,MatTableModule,
         MatCheckboxModule,MatPaginatorModule,
         MatButtonToggleModule,MatToolbarModule,MatTooltipModule,MatRippleModule } from '@angular/material';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatNativeDateModule } from '@angular/material/core';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Tokentinterceptor} from '../../Service/core/http/tokentinterceptor';


@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule,MatButtonModule,MatMenuModule,
    MatIconModule,MatInputModule,MatCardModule,MatFormFieldModule,MatListModule,
    MatAutocompleteModule,MatSelectModule,MatSlideToggleModule,MatSliderModule,
    MatSidenavModule,MatDividerModule,MatNativeDateModule,MatRadioModule
    ,MatExpansionModule,MatGridListModule,MatStepperModule,MatTooltipModule,
    MatTreeModule,MatButtonToggleModule,MatSnackBarModule,MatTabsModule,
    MatDialogModule,MatTableModule,MatDatepickerModule,MatCheckboxModule, 
    CommonModule,MatToolbarModule,MatPaginatorModule,MatRippleModule
  ],
  exports:[FormsModule, ReactiveFormsModule,MatButtonModule,MatMenuModule,
    MatIconModule,MatInputModule,MatCardModule,MatFormFieldModule,MatListModule,
    MatAutocompleteModule,MatSelectModule,MatSlideToggleModule,MatSliderModule,
    MatSidenavModule,MatDividerModule,MatNativeDateModule,MatRadioModule
    ,MatExpansionModule,MatGridListModule,MatStepperModule,MatTooltipModule,
    MatTreeModule,MatButtonToggleModule,MatSnackBarModule,MatTabsModule,
    MatDialogModule,MatTableModule,MatDatepickerModule,MatCheckboxModule, 
    CommonModule,MatToolbarModule,MatPaginatorModule
  ],

  // providers: [
  //   {
  //     provide:HTTP_INTERCEPTORS,
  //     useClass:Tokentinterceptor,
  //     multi:true,
  //   }
  // ],

})
export class SharedModule { }
