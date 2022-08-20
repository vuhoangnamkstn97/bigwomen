import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged } from 'rxjs';
@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.less'],
})
export class BaseComponentComponent implements OnInit {
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small])
    .pipe(distinctUntilChanged());
  currentBreakpoint: string = '';
  Breakpoints = Breakpoints;
  // eslint-disable-next-line no-unused-vars
  constructor(private breakpointObserver: BreakpointObserver) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

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
}
