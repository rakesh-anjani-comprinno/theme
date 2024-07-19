import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-pagination-example',
  standalone: true,
  imports: [PaginationModule,FormsModule],
  templateUrl: './pagination-example.component.html'
})
export class PaginationExampleComponent {


  currentPage = 4
  pageChanged(pageObj){
    console.log('page number',pageObj)
  }
}
