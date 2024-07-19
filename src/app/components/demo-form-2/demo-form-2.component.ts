import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';

const createFormGroupObj = () => ({
  name: new FormControl("", [Validators.required, Validators.minLength(5)]),
  birthDate: new FormGroup({
    day: new FormControl("", [
      Validators.required,
      Validators.min(1),
      Validators.max(31),
    ]),
    month: new FormControl("", [
      Validators.required,
      Validators.min(1),
      Validators.max(12),
    ]),
    year: new FormControl("", [
      Validators.required,
      Validators.min(1900),
      Validators.max(new Date().getFullYear()),
    ]),
  }),
});



@Component({
  selector: 'app-demo-form-2',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,JsonPipe,HttpClientModule],
  templateUrl: './demo-form-2.component.html',
})
export class DemoForm2Component {
  signUpForm = new FormGroup(createFormGroupObj());
  signUpFormArray = new FormArray([this.signUpForm]);

  addSignUpForm() {
    const signUpForm = new FormGroup(createFormGroupObj());
    this.signUpFormArray.push(signUpForm);
  }

  onSubmit() {
    console.log(this.signUpFormArray.value);
  }

  name = ['rakesh','mahesh','sonu']

  constructor(private httpClient : HttpClient){ }
  $api = this.httpClient.get<any>('http://localhost:3000/resource').pipe(map((res) => {
    console.log("res",res)
  })).subscribe()


}
