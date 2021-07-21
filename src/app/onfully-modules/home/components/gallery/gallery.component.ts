import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from 'ngx-gallery-9';
import {NgxGalleryImage} from 'ngx-gallery-9';
import {NgxGalleryAnimation,NgxGalleryImageSize} from 'ngx-gallery-9';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '80%',
        height: '500px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Zoom,
        imageSize:NgxGalleryImageSize.Cover,
        imageInfinityMove: true,
        thumbnailsSwipe:true,
        imageSwipe:true
        // preview: false
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery/1.jpeg',
        medium: 'assets/images/gallery/1.jpeg',
        big: 'assets/images/gallery/1.jpeg'
      },
      {
        small: 'assets/images/gallery/2.jpeg',
        medium: 'assets/images/gallery/2.jpeg',
        big: 'assets/images/gallery/2.jpeg'
      },
      {
        small: 'assets/images/gallery/3.jpeg',
        medium: 'assets/images/gallery/3.jpeg',
        big: 'assets/images/gallery/3.jpeg'
      },
      {
        small: 'assets/images/gallery/4.jpeg',
        medium: 'assets/images/gallery/4.jpeg',
        big: 'assets/images/gallery/4.jpeg'
      },
      {
        small: 'assets/images/gallery/5.jpeg',
        medium: 'assets/images/gallery/5.jpeg',
        big: 'assets/images/gallery/5.jpeg'
      },
      {
        small: 'assets/images/gallery/6.jpeg',
        medium: 'assets/images/gallery/6.jpeg',
        big: 'assets/images/gallery/6.jpeg'
      },
      {
        small: 'assets/images/gallery/7.jpeg',
        medium: 'assets/images/gallery/7.jpeg',
        big: 'assets/images/gallery/7.jpeg'
      },
      {
        small: 'assets/images/gallery/8.jpeg',
        medium: 'assets/images/gallery/8.jpeg',
        big: 'assets/images/gallery/8.jpeg'
      },
      {
        small: 'assets/images/gallery/9.jpeg',
        medium: 'assets/images/gallery/9.jpeg',
        big: 'assets/images/gallery/9.jpeg'
      },
      {
        small: 'assets/images/gallery/10.jpeg',
        medium: 'assets/images/gallery/10.jpeg',
        big: 'assets/images/gallery/10.jpeg'
      },
      {
        small: 'assets/images/gallery/11.jpeg',
        medium: 'assets/images/gallery/11.jpeg',
        big: 'assets/images/gallery/11.jpeg'
      },
      {
        small: 'assets/images/gallery/12.jpeg',
        medium: 'assets/images/gallery/12.jpeg',
        big: 'assets/images/gallery/12.jpeg'
      },
      {
        small: 'assets/images/gallery/13.jpeg',
        medium: 'assets/images/gallery/13.jpeg',
        big: 'assets/images/gallery/13.jpeg'
      },
      {
        small: 'assets/images/gallery/14.jpeg',
        medium: 'assets/images/gallery/14.jpeg',
        big: 'assets/images/gallery/14.jpeg'
      },
      {
        small: 'assets/images/gallery/15.jpeg',
        medium: 'assets/images/gallery/15.jpeg',
        big: 'assets/images/gallery/15.jpeg'
      },
      {
        small: 'assets/images/gallery/16.jpeg',
        medium: 'assets/images/gallery/16.jpeg',
        big: 'assets/images/gallery/16.jpeg'
      },
      {
        small: 'assets/images/gallery/17.jpeg',
        medium: 'assets/images/gallery/17.jpeg',
        big: 'assets/images/gallery/17.jpeg'
      },
      {
        small: 'assets/images/gallery/18.jpeg',
        medium: 'assets/images/gallery/18.jpeg',
        big: 'assets/images/gallery/18.jpeg'
      },
      {
        small: 'assets/images/gallery/19.jpeg',
        medium: 'assets/images/gallery/19.jpeg',
        big: 'assets/images/gallery/19.jpeg'
      },
      {
        small: 'assets/images/gallery/20.jpeg',
        medium: 'assets/images/gallery/20.jpeg',
        big: 'assets/images/gallery/20.jpeg'
      },
        
    ];
  }

}
