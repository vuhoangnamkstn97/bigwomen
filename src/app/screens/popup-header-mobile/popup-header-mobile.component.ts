/* eslint-disable no-unused-vars */
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-popup-header-mobile',
  templateUrl: './popup-header-mobile.component.html',
  styleUrls: ['./popup-header-mobile.component.less'],
})
export class PopupHeaderMobileComponent implements OnInit {
  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<PopupHeaderMobileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  readonly tabs = [
    {
      tabName: 'Home',
      link: '/first-component',
    },
    {
      tabName: 'Detail',
      link: '/second-component',
    },
  ];
  faXmark = faXmark;
  ngOnInit(): void {
    console.log('init component');
  }
  closeDialog(url?: string) {
    this.dialogRef.close(url);
  }
}
