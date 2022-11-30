import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/user";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm!: FormGroup
  passwordMatches:boolean = false
  showPassword:boolean = false
  showRepeatPassword:boolean = false

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private pipe: TitleCasePipe) {
    this.registerForm = formBuilder.group({
      firstName: new FormControl(null, Validators.compose([Validators.required])),
      lastName: new FormControl(null, Validators.compose([Validators.required])),
      email: new FormControl(null, Validators.compose([Validators.required])),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)])),
      repeatPassword: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)])),
    })
  }

  ngOnInit(): void {
  }

  onShowPasswordClick(){
    this.showPassword = !this.showPassword
  }

  onShowRepeatPasswordClick(){
    this.showRepeatPassword = !this.showRepeatPassword
  }

  get formControls() {
    return this.registerForm.controls
  }

  checkPasswordMatching(){
    const pw =this.formControls['password'].value
    const rpw =this.formControls['repeatPassword'].value

    this.passwordMatches = pw == rpw;
  }

  onSubmit() {
    const user: User = new User()
    user.firstName = this.pipe.transform(String(this.registerForm.get('firstName')?.value))
    user.lastName = this.pipe.transform(String(this.registerForm.get('lastName')?.value))
    user.password = String(this.registerForm.get('password')?.value)
    user.email = String(this.registerForm.get('email')?.value)


    this.userService.register(user).subscribe({
      next: () => {
        alert("Account successfully created!")
        this.router.navigate(['login'])
      }
    });
  }
}
