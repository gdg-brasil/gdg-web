import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SanitizeService {
  constructor(private sanitizer: DomSanitizer) {}

  safeYoutubeUrl(embedded: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embedded}`);
  }

  safeYoutubeChatUrl(embedded: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/live_chat?v=${embedded}&embed_domain=devfest.com.br`);
  }

}
