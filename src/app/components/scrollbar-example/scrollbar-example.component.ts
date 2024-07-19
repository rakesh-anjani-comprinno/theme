import { NgTemplateOutlet, ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SpyDirective, SpyTargetDirective } from '@thejlifex/ngx-scroll-spy';

@Component({
  selector: 'app-scrollbar-example',
  standalone: true,
  imports: [ SpyDirective,SpyTargetDirective,NgTemplateOutlet,RouterModule,RouterOutlet,RouterLink],
  templateUrl: './scrollbar-example.component.html',
  // styles:[`
  //   nav {
  //     display: flex;
  //     flex-direction: column;
  //   }
  //   nav a {
  //     padding: 8px 16px;
  //     text-decoration: none;
  //     color: black;
  //   }
  //    li.active {
  //     color: blue;
  //     border: 5px solid yellow;
  //   }
  //   .sticky {
  //     position: -webkit-sticky; /* For Safari */
  //     position: sticky;
  //     top: 0;
  //     height: 100vh; /* Full viewport height */
  //     overflow: auto; /* Ensures the nav items are scrollable if they overflow */
  // }
  //     .pointer-cursor{
  //     cursor:pointer
  //     }
  // `]
})
export class ScrollbarExampleComponent implements OnInit{

  // @ViewChild ('viewportScroller') private viewportScroller: ViewportScroller;

  constructor(private viewportScrollerr : ViewportScroller){

  }
  tabs = [
    {title:"home",id:"home"},
    {title:"features",id:"features"},
    {title:"pricing",id:"pricing"},
    {title:"product",id:"product"},
    {title:"cart",id:"cart"},
    {title:"instance",id:"instance"},
    {title:"recommendation",id:"recommendation"},
]
  scrollToFragment(fragmentId:string){
    // this.viewportScrollerr.scrollToAnchor(fragmentId);
  }

  ngOnInit(): void {
      this.viewportScrollerr.setOffset([9000,0])
  }
}
