import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, UntypedFormGroup, UntypedFormControl, Validators, FormsModule, ReactiveFormsModule, UntypedFormArray } from '@angular/forms';

@Component({
  selector: 'app-demo-form-3',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,JsonPipe],
  templateUrl: './demo-form-3.component.html',
  styleUrl: './demo-form-3.component.css'
})
export class DemoForm3Component {

  
  data : any = [
    {userCount: 313, reportDownloadCount: 32334, permission: ['AVC', 'DASHBAORD', 'HOME']},
    {userCount: 2233, reportDownloadCount: 33234, permission: ['AVC', 'DASHBAORD', 'HOME']},
    {userCount: 22133, reportDownloadCount: 3423, permission: ['AVC', 'DASHBAORD', 'HOME']},
  ];

  constructor() {
    // this.datachange()
    console.log(this.data)

    this.addCity()
    console.log(this.demoForm.value)
  }

  datachange(){
    this.data = this.data.map((e : any) => {
      e.form = this.createFormGroup(e);
      return e;
    })
    return this.data
  }

  createFormGroup(data: any): UntypedFormGroup {
    return new UntypedFormGroup({
      userCount: new UntypedFormControl(data.userCount, Validators.required),
      reportDownloadCount: new UntypedFormControl(data.reportDownloadCount, Validators.required),
      permission: new UntypedFormControl(data.permission),
    });
  }

  demoForm :any = new UntypedFormArray([]) 
  city = ["delhi","mumbai",'shimla']
  addCity () {
    this.data.forEach((e:any)=> {
      this.demoForm.push(this.createFormGroup(e))
    })
  }

}
