import { Component } from '@angular/core';
import { Calculadora } from './calculadora/calculadora';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Calculadora],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'curso-angular';
}
