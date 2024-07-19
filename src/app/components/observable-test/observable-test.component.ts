import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { map, of } from 'rxjs';


@Component({
  selector: 'app-observable-test',
  standalone: true,
  imports: [NgIf,NgFor,AsyncPipe,ReactiveFormsModule,HttpClientModule],
  templateUrl: './observable-test.component.html'
})
export class ObservableTestComponent implements OnInit {

  constructor(private httpClient:HttpClient){

  }

  ngOnInit(): void {
      this.listPersons()
  }
  $persons = of([{
    name:"rakesh",
    age:34
  }])

  listPersons(){
    this.$persons = this.httpClient.get<any>('http://localhost:8080/allusers').pipe(map((res) => {
      return res
    }))
  }

  form = new UntypedFormGroup({
    name: new UntypedFormControl(""),
    age: new UntypedFormControl("")
  })

  addPerson(){
    const body = this.form.getRawValue();
    console.log("body",body)
    this.httpClient.post<any>('http://localhost:8080/adduser',body).subscribe(
      res => {
        this.listPersons()
        console.log("add user")
      }
    )
  }

  deletePerson(username:any){
    let httpParams = new HttpParams();
    httpParams =httpParams.set("username",username);
    this.httpClient.delete<any>('http://localhost:8080/deleteuser',{params:httpParams}).subscribe(
      res => {
        this.listPersons()
        console.log("user deleted",username)
      }
    );
    this.listPersons()
  }


}
