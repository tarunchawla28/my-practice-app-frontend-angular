import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginSignupService } from 'src/app/login-signup-service/login-signup.service';
export interface DialogData {
  animal: string;
  name: string;
}
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login-signup-dialog',
  templateUrl: './login-signup-dialog.component.html',
  styleUrls: ['./login-signup-dialog.component.css']
})
export class LoginSignupDialogComponent {
  loginSignupForm: FormGroup
  loggedIn;
  ngOnInit() {
    this.loginSignupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
    this.loginSignupService.nameChanged.subscribe((data) => {
      if (data) this.loggedIn = true;
      else this.loggedIn = false;
    })
  }
  constructor(
    public dialogRef: MatDialogRef<LoginSignupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private loginSignupService: LoginSignupService) { }

  onSubmit(): void {
    this.dialogRef.close();
    this.loginSignupService.loginSignUp(this.loginSignupForm.value.name, this.loginSignupForm.value.email, this.loginSignupForm.value.password)
  }
  onLogout(){
    //this.dialogRef.close();
    this.loginSignupService.logout()
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
