import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedComponentsModule } from "./components/components.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-practice';
}
