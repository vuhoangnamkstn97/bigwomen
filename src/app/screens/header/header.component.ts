/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { PopupHeaderMobileComponent } from '../popup-header-mobile/popup-header-mobile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small])
    .pipe(
      tap((value) => console.log(value)),
      distinctUntilChanged()
    );
  activeItemIndex = 0;
  readonly tabs = [
    {
      tabName: 'HOME',
      link: '/home',
    },
    {
      tabName: 'ABOUT',
      link: '/about',
    },
    {
      tabName: 'ROADMAP',
      link: '/roadmap',
    },
  ];
  currentBreakpoint: string = '';
  Breakpoints = Breakpoints;
  faBars = faBars;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.breakpoint$.subscribe(() => this.breakpointChanged());
  }
  private breakpointChanged() {
    console.log(this.breakpointObserver);
    if (
      this.breakpointObserver.isMatched(Breakpoints.Small) ||
      this.breakpointObserver.isMatched(Breakpoints.XSmall)
    ) {
      this.currentBreakpoint = Breakpoints.Small;
    } else {
      this.currentBreakpoint = Breakpoints.Large;
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(PopupHeaderMobileComponent, {
      height: '100vh',
      width: '100%',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {},
    });
    dialogRef.afterClosed().subscribe((link) => {
      if (!link) {
        return;
      }
      this.router.navigateByUrl(link);
    });
  }
}
