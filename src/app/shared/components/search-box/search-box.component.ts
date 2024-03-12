import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input()
  public placeholder:string = ''
  @Output()
  public onEmitValue:EventEmitter<string> = new EventEmitter<string>()
  @ViewChild('txtInput')
  textInput?: ElementRef<HTMLInputElement>;

  public onSubmit(value:string){
    this.onEmitValue.emit(value)
  }
}
