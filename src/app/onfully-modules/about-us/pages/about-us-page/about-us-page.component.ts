import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import AOS from 'aos';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    AOS.init()
    this.sharedService.menuChanged('about');
  }

}
