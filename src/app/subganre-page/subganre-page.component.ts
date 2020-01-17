import { Component, OnInit, Input } from '@angular/core';
import { SubganreContent } from '../models/subganre-content';

@Component({
  selector: 'app-subganre-page',
  templateUrl: './subganre-page.component.html',
  styleUrls: ['./subganre-page.component.css']
})
export class SubganrePageComponent implements OnInit {

  @Input()
  content: SubganreContent;

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

  protected get videos(): string[] {
    if (this.content) {
      return this.content.videos;
    }

    return null;
  }

  constructor() { }

  ngOnInit() {
  }

}
