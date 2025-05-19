import { Component } from '@angular/core';
import { DataService } from '../../core/data.service';
import { User } from './list.interface';

@Component({
  selector: 'list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  users: User[] | null = null;
  inputValue: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onKeyUp(value: string) {
    console.log('Значение input:', value);
  }
}
