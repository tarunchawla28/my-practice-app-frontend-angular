import { Component, ViewEncapsulation } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'my-practice-app-frontend-angular';
  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    this.authService.autoLogin();
  }
}
