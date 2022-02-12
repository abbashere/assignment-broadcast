import { Component } from '@angular/core';
import { SharedService } from '../app/component.service';

@Component({
  selector: 'first-component',
  template: `
  <label>FirstName: </label>
  <input type="text" [(ngModel)]="name">
  <br><br>
  <input type="button" value="Send" (click)="sendIt()" />
  <br><br>`,
})
export class FirstComponent {
  name: any;
  constructor(private _setNameService: SharedService) {}

  sendIt() {
    this._setNameService.theItem = this.name;
  }

}
