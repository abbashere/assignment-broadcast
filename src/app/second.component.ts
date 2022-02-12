import { Component } from '@angular/core';
import { SharedService } from '../app/component.service';

@Component({
  selector: 'second-component',
  template: `
  <label>Pasted text: </label>
  <input type="text" [(ngModel)]="pasteText">`,

})
export class SecondComponent {
  pasteText: any;
  constructor(private _shareService: SharedService) {
    this._shareService.itemValue.subscribe((nextValue) => {
      this.pasteText = nextValue
    });

    setInterval(() => {
      this.pasteText =  _shareService.theItem
      }, 5000);
  }
}
