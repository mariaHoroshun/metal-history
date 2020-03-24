import { Component, OnInit, Input } from '@angular/core';
import { GanreContent } from '../../models/ganre-content';
import { GanreContentService } from '../../ganrecontent-service.servise';
import { MetalType } from '../../models/metal-type';

@Component({
  selector: 'app-ganre-page',
  templateUrl: './ganre-page.component.html',
  styleUrls: ['./ganre-page.component.css']
})
export class GanrePageComponent implements OnInit {

  @Input()
  content: GanreContent;

  /*inform */
  public get header(): string {
    if (this.content) {
      return this.content.header;
    }

    return null;
  }

  public get mainInfo(): string {
    if (this.content) {
      return this.content.mainInfo;
    }

    return null;
  }

  public get backgroundImage(): string {
    if (this.content) {
      return this.content.backgroundImage;
    }

    return null;
  }

  public get mainImg(): string {
    if (this.content) {
      return this.content.mainImg;
    }

    return null;
  }

  /** sound*/

  public get soundImg(): string {
    if (this.content) {
      return this.content.soundImg;
    }

    return null;
  }

  public get soundInfo(): string {
    if (this.content) {
      return this.content.soundInfo;
    }
    return null;
  }
  /** lyrics*/
  public get lyricsImg(): string {
    if (this.content) {
      return this.content.lyricsImg;
    }
    return null;
  }

  public get lyricsInfo(): string {
    if (this.content) {
      return this.content.lyricsInfo;
    }
    return null;
  }

  public get firstLyr(): string {
    if (this.content) {
      return this.content.firstLyr;
    }
    return null;
  }

  public get secLyr(): string {
    if (this.content) {
      return this.content.secLyr;
    }
    return null;
  }

  /**bands */

  public get americanBands(): string[] {
    if (this.content) {
      return this.content.americanBands;
    }
    return null;
  }

  public get russianBands(): string[] {
    if (this.content) {
      return this.content.russianBands;
    }
    return null;
  }

  public get britishBands(): string[] {
    if (this.content) {
      return this.content.britishBands;
    }
    return null;
  }

  public get germanBands(): string[] {
    if (this.content) {
      return this.content.germanBands;
    }
    return null;
  }

  public get americanImg(): string {
    if (this.content) {
      return this.content.americanImg;
    }
    return null;
  }

  public get germanImg(): string {
    if (this.content) {
      return this.content.germanImg;
    }
    return null;
  }

  public get russianImg(): string {
    if (this.content) {
      return this.content.russianImg;
    }
    return null;
  }

  public get britishImg(): string {
    if (this.content) {
      return this.content.britishImg;
    }
    return null;
  }

  ngOnInit() {
  }
}
