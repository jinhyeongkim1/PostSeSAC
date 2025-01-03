import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PostSeSAC';
  count: number = 0;

  // 카운트를 증가시키는 함수
  increment() {
    this.count++;
  }

  // 카운트를 감소시키는 함수
  decrement() {
    this.count--;
  }
}
