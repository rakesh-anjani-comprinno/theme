import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-api-test',
  standalone: true,
  imports: [HttpClientModule,AsyncPipe,NgFor,NgIf],
  templateUrl: './api-test.component.html',
})
export class ApiTestComponent {

  constructor(private httpClient : HttpClient){ }
  $api = this.httpClient.get<any>('http://localhost:3000/resource').pipe(
    
    map((res) => res.data),
    map((res) => {
    console.log("res",res)
    return res
  }))

  // $api = this.httpClient.get<any>('http://localhost:3000/resource').pipe(map((res) => {
  //   console.log("res",res)
  // })).subscribe()
}
