import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  data: any = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUser('Olga').subscribe(data => {
      console.log(this.data, 'init dtat');

      this.data = data;
    });
  }
}
