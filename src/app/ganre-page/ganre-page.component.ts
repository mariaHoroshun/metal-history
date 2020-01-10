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

  ngOnInit() {
  }
}
