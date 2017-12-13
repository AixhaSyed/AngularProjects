import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Auth.service'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

   myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    onSignin() {
      this.authService.signinUser(this.myForm.value);
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

}
