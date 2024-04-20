import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeoprocessamentoComponent } from './geoprocessamento/geoprocessamento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GeoprocessamentoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
