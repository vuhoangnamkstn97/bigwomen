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
  ];
  revertSlidesStore: IOwlImage[] = [
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
    {
      id: '13',
      alt: '',
      src: 'assets/images/jpg/bigwomen-13.jpg',
      title: 'screenshot-13',
    },
    {
      id: '14',
      alt: '',
      src: 'assets/images/jpg/bigwomen-14.jpg',
      title: 'screenshot-14',
    },
    {
      id: '15',
      alt: '',
      src: 'assets/images/jpg/bigwomen-15.jpg',
      title: 'screenshot-15',
    },
    {
      id: '16',
      alt: '',
      src: 'assets/images/jpg/bigwomen-16.jpg',
      title: 'screenshot-16',
    },
    {
      id: '17',
      alt: '',
      src: 'assets/images/jpg/bigwomen-17.jpg',
      title: 'screenshot-17',
    },
    {
      id: '18',
      alt: '',
      src: 'assets/images/jpg/bigwomen-18.jpg',
      title: 'screenshot-18',
    },
    {
      id: '19',
      alt: '',
      src: 'assets/images/jpg/bigwomen-19.jpg',
      title: 'screenshot-19',
    },
    {
      id: '20',
      alt: '',
      src: 'assets/images/jpg/bigwomen-20.jpg',
      title: 'screenshot-20',
    },
  ];
  ngOnInit(): void {
    console.log('init app about');
  }
  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
