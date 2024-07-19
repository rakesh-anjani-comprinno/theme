import { Component, OnDestroy } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
@Component({
  selector: 'app-pop-over',
  standalone: true,
  imports: [PopoverModule],
  templateUrl: './pop-over.component.html'
})
export class PopOverComponent implements OnDestroy{

  private timerId;
  intervalId

  constructor(){
    const cb = () => {
      console.log("cb calling")
    }
    this.timerId = setTimeout(() => cb(), 1000)
    this.intervalId = setInterval(this.setCounter, 1000 * 6);
    console.log("intervalid",this.intervalId)
    console.log("timerId",this.timerId)
    clearTimeout(this.timerId)
    console.log("executed",this.timerId)
  }

  setCounter = () => {
    console.log("setcounter")
  }
  
  ngOnDestroy(): void {
    console.log("on destory timer")
    this.intervalId && clearInterval(this.intervalId) ;
    // clearInterval(this.intervalId)
    console.log("ondestory intervalid and timerid", this.intervalId, this.timerId)
  }
}
