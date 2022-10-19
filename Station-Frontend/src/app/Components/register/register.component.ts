import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/user";
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TitleCasePipe} from "@angular/common";
import {pipe} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form!: FormGroup
  matches:boolean = false
  show:boolean = false
  showRepeat:boolean = false

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private pipe: TitleCasePipe) {
    this.form = formBuilder.group({
      firstName: new FormControl(null, Validators.compose([Validators.required])),
      lastName: new FormControl(null, Validators.compose([Validators.required])),
      email: new FormControl(null, Validators.compose([Validators.required])),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)])),
      repeatPassword: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)])),
    })
  }

  ngOnInit(): void {
  }

  onView(){
    this.show = !this.show
  }

  onViewRepeat(){
    this.showRepeat = !this.showRepeat
  }

  get f() {
    return this.form.controls
  }

  onMatching(){
    let pw =this.f['password'].value
    let rpw =this.f['repeatPassword'].value

    this.matches = pw == rpw;
  }

  onSubmit() {
    let user: User = new User()
    user.firstName = this.pipe.transform(String(this.form.get('firstName')?.value))
    user.lastName = this.pipe.transform(String(this.form.get('lastName')?.value))
    user.password = String(this.form.get('password')?.value)
    user.email = String(this.form.get('email')?.value)


    this.userService.register(user).subscribe({
      next: () => {
        alert("Account successfully created!")
        this.router.navigate(['login'])
      }
    });
  }
}
