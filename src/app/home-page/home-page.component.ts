import { Component, OnInit } from '@angular/core';
import { faCaretSquareDown, faAngleRight, faInfoCircle, faSmile } from '@fortawesome/free-solid-svg-icons';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }

  faDown = faCaretSquareDown;
  faRight = faAngleRight;

  ngOnInit() {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});
  }

  scrollToElement(e) {
    e.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
