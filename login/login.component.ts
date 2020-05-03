import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showModal: boolean;
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private subject1:LoginService) { }
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.subject1.getSubject1().subscribe((_show)=>{
      this.showModal = _show;
    });
}
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        if(this.submitted)
        {
          this.showModal = false;
          // console.log(this.loginForm.value);
          this.subject1.login(this.loginForm.value).subscribe(res=>localStorage.setItem ('token', res.toString()),err=>console.log);
          
        }
   
}


}
