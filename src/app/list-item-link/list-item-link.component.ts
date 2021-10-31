import { Component, OnInit, Input } from '@angular/core';
import { DataFromAPI } from '../shared/types/api';

@Component({
  selector: 'app-list-item-link',
  templateUrl: './list-item-link.component.html',
  styleUrls: ['./list-item-link.component.scss'],
})
export class ListItemLinkComponent implements OnInit {
  @Input() character!: DataFromAPI;
  constructor() {}

  ngOnInit(): void {}
}
