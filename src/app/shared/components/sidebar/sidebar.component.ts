import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentMenu:string;
  constructor(
    private sharedService:SharedService,
    private router:Router
  ) {
    this.listenToMenuChanges();
   }

  ngOnInit() {
  }

  listenToMenuChanges(){
    this.sharedService.navListener.subscribe(res=>{
      this.currentMenu = res;
    })
  }

  closePanel(){
    this.sharedService.toggleMenu();
  }

  onMenuClicked(menu){
    switch(menu){
      case 'home':
        this.router.navigate(['/']);
        this.sharedService.toggleMenu();
        break;
      case 'about':
        this.router.navigate(['/about']);
        this.sharedService.toggleMenu();
        break;
      case 'contact':
        this.router.navigate(['/contact']);
        this.sharedService.toggleMenu();
        break;
    }
  }

}
