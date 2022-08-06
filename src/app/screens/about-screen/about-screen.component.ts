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
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 20,
    rtl: false,
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
  customRevertOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 20,
    rtl: true,
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
  slidesStore: IOwlImage[] = [
    {
      id: '1',
      alt: '',
      src: 'assets/images/jpg/bigwomen-1.jpg',
      title: 'screenshot-1',
    },
    {
      id: '2',
      alt: '',
      src: 'assets/images/jpg/bigwomen-2.jpg',
      title: 'screenshot-2',
    },
    {
      id: '3',
      alt: '',
      src: 'assets/images/jpg/bigwomen-3.jpg',
      title: 'screenshot-3',
    },
    {
      id: '4',
      alt: '',
      src: 'assets/images/jpg/bigwomen-4.jpg',
      title: 'screenshot-4',
    },
    {
      id: '5',
      alt: '',
      src: 'assets/images/jpg/bigwomen-5.jpg',
      title: 'screenshot-5',
    },
    {
      id: '6',
      alt: '',
      src: 'assets/images/jpg/bigwomen-6.jpg',
      title: 'screenshot-6',
    },
  ];
  revertSlidesStore: IOwlImage[] = [
    {
      id: '7',
      alt: '',
      src: 'assets/images/jpg/bigwomen-7.jpg',
      title: 'screenshot-7',
    },
    {
      id: '8',
      alt: '',
      src: 'assets/images/jpg/bigwomen-8.jpg',
      title: 'screenshot-8',
    },
    {
      id: '9',
      alt: '',
      src: 'assets/images/jpg/bigwomen-9.jpg',
      title: 'screenshot-9',
    },
    {
      id: '10',
      alt: '',
      src: 'assets/images/jpg/bigwomen-10.jpg',
      title: 'screenshot-10',
    },
    {
      id: '11',
      alt: '',
      src: 'assets/images/jpg/bigwomen-11.jpg',
      title: 'screenshot-11',
    },
    {
      id: '12',
      alt: '',
      src: 'assets/images/jpg/bigwomen-12.jpg',
      title: 'screenshot-12',
    },
  ];
  ngOnInit(): void {
    console.log('init app about');
    this.slidesStore = [
      {
        id: '1',
        alt: '',
        src: 'assets/images/jpg/bigwomen-1.jpg',
        title: 'screenshot-1',
      },
      {
        id: '2',
        alt: '',
        src: 'assets/images/jpg/bigwomen-2.jpg',
        title: 'screenshot-2',
      },
      {
        id: '3',
        alt: '',
        src: 'assets/images/jpg/bigwomen-3.jpg',
        title: 'screenshot-3',
      },
      {
        id: '4',
        alt: '',
        src: 'assets/images/jpg/bigwomen-4.jpg',
        title: 'screenshot-4',
      },
      {
        id: '5',
        alt: '',
        src: 'assets/images/jpg/bigwomen-5.jpg',
        title: 'screenshot-5',
      },
      {
        id: '6',
        alt: '',
        src: 'assets/images/jpg/bigwomen-6.jpg',
        title: 'screenshot-6',
      },
    ];
  }
  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
