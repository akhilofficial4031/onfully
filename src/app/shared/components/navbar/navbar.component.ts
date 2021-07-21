import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;
  subscriptions$ = new Subscription()
  sticky: boolean = false;
  elementPosition: any;
  currentMenu:string;

  logo = "../../../../assets/images/sf-logo.png";
  isMenuCollapsed = true;
  isShown = false
  constructor(
    private sharedService: SharedService
  ) {
    this.listenToMenuChanges()
  }

  listenToMenuChanges(){
    this.sharedService.navListener.subscribe(res=>{
      this.currentMenu = res;
    })
  }

  ngOnInit(): void {
    this.isMenuCollapsed = false;
  }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 100) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  toggleNavbar() {
    this.sharedService.toggleMenu();
  }

}
