import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = 0;

  onClick(){
    this.count++;
  }
  onClick1(){
    if(this.count > 0){
      this.count--;
    }
    
  }
  onClick2(){
    this.count=0;
  }
}
