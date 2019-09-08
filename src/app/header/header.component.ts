import { Component, Inject } from "@angular/core";
import { LoginSignupService } from '../login-signup-service/login-signup.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginSignupDialogComponent } from '../dialogs/login-signup-dialog/login-signup-dialog.component';
import { AuthService } from '../auth/auth.service';
export interface DialogData {
    animal: string;
    name: string;
}
export interface Food {
    value: string;
    viewValue: string;
}
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    foods: Food[] = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
    ];
    fName = "Login/Signup"
    //fName = ""
    animal: string;
    name: string;
    constructor(private authService: AuthService, private loginSignupService: LoginSignupService, public dialog: MatDialog) {
    }
    ngOnInit() {
        this.loginSignupService.nameChanged.subscribe((data) => {
            // var firstName = data.customer.name.split(' ')[0]
            // firstName = firstName[0].toUpperCase() + firstName.substr(1);
            // this.fName = "Hi " + firstName;
            if (data) this.fName = "Hi " + data + "!";
            else this.fName = "Login/Signup";
        });

        console.log("Inside header component ts")
    }
    loginSignUp() {
        // const dialogConfig = new MatDialogConfig();
        // dialogConfig.position = {
        //     'top': '0',
        //     left: '0'
        // };
        const dialogRef = this.dialog.open(LoginSignupDialogComponent, {
            width: '350px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
        //this.loginSignupService.loginSignUp();
    }
}
// @Component({
//     selector: 'dialog-overview-example-dialog',
//     templateUrl: 'dialog-overview-example-dialog.html',
//     styles:[]
//   })
//   export class DialogOverviewExampleDialog {

//     constructor(
//       public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//       @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//     onNoClick(): void {
//       this.dialogRef.close();
//     }

//   }