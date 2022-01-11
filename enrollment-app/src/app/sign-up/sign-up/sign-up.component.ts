import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AsyncValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { RegisterClientService } from '../../services/register-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup; 
  loading = false;
  submitted = false;
  returnUrl?: string;
  showMessage = false;

  constructor(
    private formBuilder: FormBuilder,
    private client: RegisterClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    let usernameParam: string = "";
    let passwordParam: string = "";
    let firstnameParam: string = "";
    let lastnameParam: string = "";
    this.activatedRoute.queryParams.subscribe(params => {
      usernameParam = params["username"];
      passwordParam = params["password"];
      firstnameParam = params["firstname"];
      lastnameParam = params["lastname"];
    });
    console.log(usernameParam + " " + firstnameParam + " " + lastnameParam + " " + passwordParam)
    if(usernameParam && firstnameParam && lastnameParam && passwordParam)
    {
      console.log("Inside then")
      this.signUpForm = this.formBuilder.group({
        username: [usernameParam, [Validators.required], [this.validateUsername()]],
        first_name: [firstnameParam, Validators.required],
        last_name: [lastnameParam, Validators.required],
        password: [passwordParam, Validators.required]
      });
      console.log("Now calling submit")
      this.onSubmit()
    }
    else
    {
      console.log("Inside else")
      this.signUpForm = this.formBuilder.group({
        username: ['', [Validators.required], [this.validateUsername()]],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  }
  // convenience getter for easy access to form fields
  get f() { return this.signUpForm!.controls; }

  validateUsername(): AsyncValidatorFn {
    return async (control: AbstractControl): Promise<ValidationErrors | null> => {
      console.log(control.value);
      if(control.value == "")
        return null;
      let response = await this.client.checkUsername(control.value);
      console.log(response);
      
      if(response){
        console.log("response okay");
        this.showMessage = false;
        return null;
      }
      else{
        console.log("response taken");
        this.showMessage = true;
        return {'usernameTaken': true};
      }
    }
  }

  // used to avoid unnecessary invalids of the username form control
  // since we have customed validators that can return null. 
  cleanErrors() {
    if (!this.showMessage) {
      if (this.f.username.errors && !this.f.username.errors!.required) {
        this.f.username.setErrors(null);
      }
    }
  }

  ngOnInit(): void {
    // console.log("onInit");
  }

  onSubmit() {
    // console.log("onSubmit");
    this.submitted = true;

    // stop here if form is invalid
    if ( this.signUpForm.invalid) {
        // console.log(this.signUpForm.hasError("usernameTaken"))
        console.log("form invalid!")
        return;
    }

    var fusername = this.signUpForm.get('username')!.value;
    var fpwd = this.signUpForm.get('password')!.value;
    var ffirstname = this.signUpForm.get('first_name')!.value;
    var flastname = this.signUpForm.get('last_name')!.value;
    
    let response = this.client.register(fusername, fpwd, ffirstname, flastname);
    console.log(response);
    if (response == false) { // shouldn't get this error since already addressed usernameTaken when user enters a username
      this.router.navigate(['/register']); 
    }
    else this.router.navigate(['/sign-in']);
  }
}
