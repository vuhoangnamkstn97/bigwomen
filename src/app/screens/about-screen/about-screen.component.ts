import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-screen',
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.less'],
})
export class AboutScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('init app about');
  }
}
