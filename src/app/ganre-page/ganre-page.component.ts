import { Component, OnInit, Input } from '@angular/core';
import { GanreContent } from '../models/ganre-content';
import { GanreContentService } from '../ganrecontent-service.servise';
import { MetalType } from '../models/metal-type';

@Component({
  selector: 'app-ganre-page',
  templateUrl: './ganre-page.component.html',
  styleUrls: ['./ganre-page.component.css']
})
export class GanrePageComponent implements OnInit {

  @Input()
  content: GanreContent;

  /*inform */
  protected get header(): string {
    if (this.content) {
      return this.content.header;
    }

    return null;
  }

  protected get mainInfo(): string {
    if (this.content) {
      return this.content.mainInfo;
    }

    return null;
  }

  protected get backgroundImage(): string {
    if (this.content) {
      return this.content.backgroundImage;
    }

    return null;
  }

  protected get mainImg(): string {
    if (this.content) {
      return this.content.mainImg;
    }

    return null;
  }

  /** sound*/

  protected get soundImg(): string {
    if (this.content) {
      return this.content.soundImg;
    }

    return null;
  }

  protected get soundInfo(): string {
    if (this.content) {
      return this.content.soundInfo;
    }
    return null;
  }
  /** lyrics*/
  protected get lyricsImg(): string {
    if (this.content) {
      return this.content.lyricsImg;
    }
    return null;
  }

  protected get lyricsInfo(): string {
    if (this.content) {
      return this.content.lyricsInfo;
    }
    return null;
  }

  protected get firstLyr(): string {
    if (this.content) {
      return this.content.firstLyr;
    }
    return null;
  }

  protected get secLyr(): string {
    if (this.content) {
      return this.content.secLyr;
    }
    return null;
  }

  /**bands */

  protected get americanBands(): string[] {
    if (this.content) {
      return this.content.americanBands;
    }
    return null;
  }

  protected get russianBands(): string[] {
    if (this.content) {
      return this.content.russianBands;
    }
    return null;
  }

  protected get britishBands(): string[] {
    if (this.content) {
      return this.content.britishBands;
    }
    return null;
  }

  protected get germanBands(): string[] {
    if (this.content) {
      return this.content.germanBands;
    }
    return null;
  }

  protected get americanImg(): string {
    if (this.content) {
      return this.content.americanImg;
    }
    return null;
  }

  protected get germanImg(): string {
    if (this.content) {
      return this.content.germanImg;
    }
    return null;
  }

  protected get russianImg(): string {
    if (this.content) {
      return this.content.russianImg;
    }
    return null;
  }

  protected get britishImg(): string {
    if (this.content) {
      return this.content.britishImg;
    }
    return null;
  }

  ngOnInit() {
  }
}
