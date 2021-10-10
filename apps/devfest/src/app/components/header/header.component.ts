import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'dfb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  scrollTop: number = window.scrollY;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollTop = window.scrollY;
  }

  ngOnInit() {}

  navigateToIndeeds(): void {
    window.open('https://www.sympla.com.br/devfest-brasil-2021__1221956', '_blank');
  }

}
