import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private $debouncerSubscription?: Subscription;
  @Input()
  placeholder: string = '';

  @Input()
  initialValue: string = '';

  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.$debouncerSubscription = this.debouncer
    .pipe (
      debounceTime( 500 )
    )
    .subscribe( res => {
      this.onDebounce.emit( res );
    })
  }

  emitInput( value: string ) {
    this.onValue.emit(value)
  }

  onKeyPress( searchTerm: string ) {
    this.debouncer.next( searchTerm );
  }

  ngOnDestroy(): void {
    this.$debouncerSubscription?.unsubscribe();
  }
}
