import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitting = false;

  constructor(public formBuilder: FormBuilder, public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    this.submitting = true;
    // const model: LoginModel = this.loginForm.value as LoginModel;
    // this.service.login(model)
    //     .subscribe(
    //         (msg) => {
    //           this.notificationService.showSuccess(msg);
    //           this.router.navigate(['/dashboard']);
    //           this.submitting = false;
    //         },
    //         (msg) => {
    //           this.notificationService.showError(msg);
    //           this.submitting =false;
    //         }
    //     );
    setTimeout(
        () => {
          this.submitting = false;
          // this.notificationService.showSuccess('Login success.');
        },
        2000
    );
  }

  get getFormControls(): { [p: string]: AbstractControl }  {
    return this.loginForm.controls;
  }

}
