import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../core/data.service';
import { User } from './list.interface';
import { debounce, fromEvent, interval, map, Subscription, timer } from 'rxjs';

@Component({
  selector: 'list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent {
  @ViewChild('myInput') inputRef!: ElementRef<HTMLInputElement>;
  users: User[] | null = null;
  subscription!: Subscription;
  searchTerm: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  ngAfterViewInit(): void {
    this.subscription = fromEvent(this.inputRef.nativeElement, 'keyup').pipe(
      debounce(() => interval(500)),
      map((event: any) => event.target.value)
    )
      .subscribe((value: any) => {
        console.log(value, 123);

      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
