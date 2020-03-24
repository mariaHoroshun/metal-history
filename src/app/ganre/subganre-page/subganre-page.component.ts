import { Component, OnInit, Input } from '@angular/core';
import { SubganreContent } from '../../models/subganre-content';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-subganre-page',
  templateUrl: './subganre-page.component.html',
  styleUrls: ['./subganre-page.component.css']
})
export class SubganrePageComponent implements OnInit {

  @Input()
  content: SubganreContent;

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

  public get videos(): string[] {
    if (this.content) {
      return this.content.videos;
    }

    return null;
  }

  constructor() { }

  ngOnInit() {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});
  }

}
