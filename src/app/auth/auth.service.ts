import { Injectable } from '@angular/core';
import { User } from './user.model';
import { LoginSignupService } from '../login-signup-service/login-signup.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private loginSignupService:LoginSignupService) {

    }
    autoLogin() {
        const userData: {
            name: string,
            password: string,
            _token: string
        } = JSON.parse(localStorage.getItem('userData'))
        if(!userData) {return};
        const loadedUser=new User(userData.name,userData.password,userData._token);
        this.loginSignupService.nameChanged.next(loadedUser.name);
        console.log(loadedUser)
        console.log("Inside auth login")
    }
}