import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  term: string = '';
  @Output() search = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  searchCharacter(term: any) {
    this.search.emit(term);
  }
}
