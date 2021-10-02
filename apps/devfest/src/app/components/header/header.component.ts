import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'dfb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  scrollTop: number = window.scrollY;

  ngOnInit() {
    console.log(this.scrollTop);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollTop = window.scrollY;
  }
}
