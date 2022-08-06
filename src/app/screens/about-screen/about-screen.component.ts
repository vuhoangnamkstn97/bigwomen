import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface IOwlImage {
  id: string;
  alt: string;
  src: string;
  title: string;
}
@Component({
  selector: 'app-about-screen',
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.less'],
})
export class AboutScreenComponent implements OnInit, AfterViewInit {
  constructor() {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  slidesStore: IOwlImage[] = [];
  ngOnInit(): void {
    console.log('init app about');
    this.slidesStore = [
      {
        id: '1',
        alt: '',
        src: 'assets/images/jpg/screenshot-1.jpg',
        title: 'screenshot-1',
      },
      {
        id: '2',
        alt: '',
        src: 'assets/images/jpg/screenshot-2.jpg',
        title: 'screenshot-2',
      },
      {
        id: '3',
        alt: '',
        src: 'assets/images/jpg/screenshot-3.jpg',
        title: 'screenshot-3',
      },
      {
        id: '4',
        alt: '',
        src: 'assets/images/jpg/screenshot-4.jpg',
        title: 'screenshot-4',
      },
    ];
  }
  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
