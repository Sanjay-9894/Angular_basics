import { Component, EventEmitter, Output } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  imports: [HighlightDirective,CommonModule,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  carName: string= "";
  @Output() carAdded = new EventEmitter<string>()

  onSubmit(){
    console.log(this.carName);
    this.carName=''
    this.carAdded.emit(this.carName);
  }

}
