import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm! : FormGroup;

  constructor(private fb: FormBuilder, 
    private _ds: DataService, 
    private _user: UserService, 
    private router: Router) { }

  ngOnInit(): void {
      this.LoginForm = this.fb.group({
         username: new FormControl('', Validators.required),
         password: new FormControl('', Validators.required)
      }, {updateOn: 'submit'})
  }

  loginuser(){
      if(this.LoginForm.valid){
          this._user.postdata('login', this.LoginForm.value).subscribe((data: any)=>{
              this._user.setUserinfo(data.id);
              this.router.navigate(['shop']);
              this.onReset();
          })
      }

  }


  get f() { return this.LoginForm.controls; }

  onReset(){
    this.LoginForm.reset();
  }

}
