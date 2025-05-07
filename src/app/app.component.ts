import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DemoComponent } from './demo/demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CounterComponent,DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
 title = 'sanjay';

 getName(){
  return "sura";
 }

 user =  {
  name : "sanjay",
  age :20
 }

 clickCount = 0;

 ClickMe(){
  this.clickCount++;
 }

 oncarAdded(carName:string){
  console.log(carName,'From app')
 }

}
