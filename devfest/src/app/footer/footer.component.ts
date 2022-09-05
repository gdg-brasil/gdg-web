import {Component, OnInit} from '@angular/core';
import {FooterService} from "./footer.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [FooterService]
})
export class FooterComponent implements OnInit {

  chapters: string[] = []

  constructor(private footerService: FooterService) {
    this.footerService = new FooterService()
  }

  ngOnInit(): void {
    this.chapters = this.footerService.getChapters()
  }

}
