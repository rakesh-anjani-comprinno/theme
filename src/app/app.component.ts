import { NgClass, ViewportScroller } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, Scroll } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgClass],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'ngx-bootstrap';

  constructor(private router: Router,private viewportScroller: ViewportScroller) {
    
  }

  ngOnInit(): void {
    // this.viewportScroller.setOffset([0, 50]);
    // this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: Scroll) => {
    //   console.log("rlink")
    //   if(e instanceof Scroll){
    //     if ((e.anchor)) {
    //       console.log("anchor")
    //       setTimeout(() => {
    //         this.viewportScroller.scrollToAnchor(e.anchor!);
    //       })
    //     } else if (e.position) {
    //       this.viewportScroller.scrollToPosition(e.position);
    //     } else {
    //       this.viewportScroller.scrollToPosition([0, 0]);
    //     }
    //   }
    // });
  }



 
}
