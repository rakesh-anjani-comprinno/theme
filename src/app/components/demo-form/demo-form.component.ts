import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, UntypedFormControl, Validators ,FormControlName, UntypedFormGroup, UntypedFormArray, FormGroup} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,JsonPipe],
  templateUrl: './demo-form.component.html',
})
export class DemoFormComponent {

  createFormGroupObj(data :any) : UntypedFormGroup{
    console.log('data',data)
    const formGroup =  new UntypedFormGroup ({
      userCount: new UntypedFormControl(data.userCount),
      reportDownloadCount: new UntypedFormControl(data.reportDownloadCount),
      permission: new UntypedFormControl(data.permission),
    })
    // formGroup.patchValue(data)
    return formGroup as UntypedFormGroup
  }

  formArray : UntypedFormArray = new UntypedFormArray([])

  data = [
    {userCount:313,reportDownloadCount:32334,permission:['AVC','DASHBAORD','HOME']},
    {userCount:2233,reportDownloadCount:33234,permission:['AVC','DASHBAORD','HOME']},
    {userCount:22133,reportDownloadCount:3423,permission:['AVC','DASHBAORD','HOME']},
  ]

  constructor(){
    // this.control.get('name')?.patchValue("hello")
    // this.control.get('roll')?.reset()
    // this.control.get('name')?.disable()
    // this.control.get('name')?.enable()
    // if(this.control.get('name')?.markAsTouched()){
    //   console.log("kk")
    // }

    this.data.forEach((e)=>
      this.formArray.push(this.createFormGroupObj(e))
    )
    console.log("formarray",this.formArray.value)
    // this.patchValueForPlanForm()
  }


  private patchValueForPlanForm() {
    this.data.forEach((e) => {
      this.formArray.push(new UntypedFormGroup({
        userCount: new UntypedFormControl(e.userCount),
        reportDownloadCount: new UntypedFormControl(e.reportDownloadCount),
        permission: new UntypedFormControl(e.permission),
      }))
    })
    console.log(this.formArray.value)
    console.log(this.formArray.controls[0].value)
  }

  // getPermissionsArray(formGroup: UntypedFormGroup): UntypedFormArray {
  //   return formGroup.get('permissions') as UntypedFormArray;
  // }

  // addPermission(formGroup: UntypedFormGroup) {
  //   const permissionsArray = this.getPermissionsArray(formGroup);
  //   permissionsArray.push(new UntypedFormControl(''));
  // }

  // addFormGroup() {
  //   this.form.push(new UntypedFormGroup({
  //     userCount: new UntypedFormControl('', Validators.required),
  //     reportDownloadCount: new UntypedFormControl('', Validators.required),
  //     permissions: new UntypedFormArray([
  //       new UntypedFormControl(''),
  //     ])
  //   }));
  // }


}
