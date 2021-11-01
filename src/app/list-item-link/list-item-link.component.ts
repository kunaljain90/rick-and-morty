import { Component, OnInit, Input } from '@angular/core';
import { DataFromAPI, Status } from '../shared/types/api';

@Component({
  selector: 'app-list-item-link',
  templateUrl: './list-item-link.component.html',
  styleUrls: ['./list-item-link.component.scss'],
})
export class ListItemLinkComponent implements OnInit {
  @Input() character!: DataFromAPI;
  status!: Status;
  constructor() {}

  ngOnInit(): void {}

  characterStatus(status: Status) {
    this.status = status;
    if (this.status === 'Alive') {
      return { statusAlive: true };
    } else if (this.status === 'Dead') {
      return { statusDead: true };
    } else {
      return { statusUnknown: true };
    }
  }
}
