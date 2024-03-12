import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input()
  public placeholder: string = '';
  @Input()
  public initialValue: string = '';

  @Output()
  public onEmitValue: EventEmitter<string> = new EventEmitter<string>();
  public unsubscribe?: Subscription;

  private debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.unsubscribe = this.debouncer
      .pipe(debounceTime(1000))
      .subscribe((value) => this.onEmitValue.next(value));
  }
  public onSubmit(value: string) {
    this.debouncer.next(value);
  }

  ngOnDestroy(): void {
    this.unsubscribe?.unsubscribe();
  }
}
