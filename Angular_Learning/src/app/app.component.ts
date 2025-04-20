import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'I am Kundan Chaudhari';
  Dream = "A Fullstack Developer";
  hello(){
    let n = 1;
    return n;
  }
  
  
}
