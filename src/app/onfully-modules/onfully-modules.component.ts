import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-onfully-modules',
  templateUrl: './onfully-modules.component.html',
  styleUrls: ['./onfully-modules.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})

export class OnfullyModulesComponent implements OnInit {

  menuState:string = 'out'
  constructor(
    private sharedService: SharedService
  ) {
    this.listenToToggleMenu();
   }

   listenToToggleMenu() {
      this.sharedService.toggleMenuListener.subscribe(res => {
        this.menuState = res;
      })
  }

  ngOnInit(): void {
  }

}
