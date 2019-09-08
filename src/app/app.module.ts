import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { ButtonModule } from 'primeng/components/button/button';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { CodeHighlighterModule } from 'primeng/components/codehighlighter/codehighlighter';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MegaMenuComponent } from './shared/mega-menu/mega-menu.component';
import {MegaMenuModule} from 'primeng/components/megamenu/megamenu';
import {HttpClientModule} from '@angular/common/http';
import { LoginSignupService } from './login-signup-service/login-signup.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule, MatIconModule, MatSelectModule } from '@angular/material';
import { LoginSignupDialogComponent } from './dialogs/login-signup-dialog/login-signup-dialog.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MegaMenuComponent,
    LoginSignupDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    MegaMenuModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ],exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginSignupDialogComponent]

})
export class AppModule { }
