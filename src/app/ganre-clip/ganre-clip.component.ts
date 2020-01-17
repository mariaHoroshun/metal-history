import { Component, OnInit, Input } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
import { SubganreContentService } from '../subganrecontent-service.service';

@Component({
  selector: 'app-ganre-clip',
  templateUrl: './ganre-clip.component.html',
  styleUrls: ['./ganre-clip.component.css']
})
export class GanreClipComponent implements OnInit {

  @Input()
  videos: string[];

  @Input()
  header: string;

  constructor(private subganreServise: SubganreContentService) { }

  ngOnInit() {
    const self = this;

    setTimeout(() => {
      const elems = document.querySelectorAll('.carousel');
      M.Carousel.init(elems, { indicators: true });
    }, 1000);
  }

}
