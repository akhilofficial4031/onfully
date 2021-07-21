import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

currentState = 'out';
navListener = new Subject<string>();
toggleMenuListener = new Subject<string>();
constructor() { }

menuChanged(menu){
  this.navListener.next(menu);
}

toggleMenu(){
  this.currentState = this.currentState === 'out' ? 'in' : 'out';
  this.toggleMenuListener.next(this.currentState);
}

}
