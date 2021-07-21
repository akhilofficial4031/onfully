import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import AOS from 'aos';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { 
    this.sharedService.menuChanged('contact');
  }

  ngOnInit() {
    AOS.init();
  }

}
