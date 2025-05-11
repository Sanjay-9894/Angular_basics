import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DemoComponent } from './demo/demo.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CounterComponent,DemoComponent,RouterLink],
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

 constructor(private router: Router){

 }

 navigateToDemo(){
  this.router.navigate(['/demo'])
 }
}
