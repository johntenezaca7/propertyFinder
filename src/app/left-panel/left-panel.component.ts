import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnChanges {
  @Input() displayList: any[];

  constructor() { }

  ngOnChanges() {
  }

}
