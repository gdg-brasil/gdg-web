import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private chapters: string[] = []

  constructor() { }

  getChapters() {
    this.chapters = ['GDG Pelotas','GDG Floripa', 'GDG Uberlândia', 'GDG Mogi Guaçu', 'GDG Fortaleza', 'GDG Itubiara', 'GDG São José do Rio Preto']
    return this.chapters
  }
}
