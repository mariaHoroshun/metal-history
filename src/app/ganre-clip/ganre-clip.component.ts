import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-ganre-clip',
  templateUrl: './ganre-clip.component.html',
  styleUrls: ['./ganre-clip.component.css']
})
export class GanreClipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }

}
