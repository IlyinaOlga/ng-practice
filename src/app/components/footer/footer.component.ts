import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
