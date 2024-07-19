import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RatingModule } from 'ngx-bootstrap/rating';
@Component({
  selector: 'app-carousel-example',
  standalone: true,
  imports: [RatingModule,ReactiveFormsModule,CarouselModule],
  templateUrl: './carousel-example.component.html'
})
export class CarouselExampleComponent {

  max = 10;
  rate = 7;
  isReadonly = true;

  log(index){
    console.log("carousel item : ",index)
  }

  onSlideRangeChange(index){
    console.log("slide range change : ",index)
  }
}
