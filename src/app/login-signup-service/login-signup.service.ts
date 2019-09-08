import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../auth/user.model';
import { Subject, BehaviorSubject } from 'rxjs';
export interface AuthResponseData {
    token: string,
    customer: User,
}
@Injectable({
    providedIn: 'root'
})
export class LoginSignupService {
    //Missing @Input/@Output
    // nameChanged = new EventEmitter<string>();
    nameChanged = new BehaviorSubject<string>('');
    constructor(private httpClient: HttpClient) {
    }
    loginSignUp(name: string, email: string, password: number) {
        this.httpClient.post<AuthResponseData>('http://localhost:3011/api/login', {
            name,
            email,
            password
        }).subscribe((data) => {
            console.log(data)
            console.log(data["customer"]);
            //localStorage.setItem('token', data["token"]);
            console.log(data["token"])
            this.nameChanged.next(data.customer.name);
            console.log(data.customer)
            this.handleAuthentication(data.customer, data.token);
        })
    }
    handleAuthentication(user: User, _token:string) {
        const storedUser = new User(user.name, user.password, _token);
        localStorage.setItem('userData', JSON.stringify(storedUser));
    }
    logout(){
        localStorage.removeItem('userData');
        this.nameChanged.next(null);
    }
}