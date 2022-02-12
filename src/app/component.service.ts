import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable()
export class SharedService {
  itemValue = new BehaviorSubject(this.theItem);

  set theItem(value) {
    this.itemValue.next(value);
    localStorage.setItem('theItem', JSON.stringify(value));
  }

  get theItem() {
    return localStorage.getItem('theItem');
  }

}
