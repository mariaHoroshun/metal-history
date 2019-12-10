import { Component, OnInit } from '@angular/core';
import {faCaretSquareDown, faAngleRight} from '@fortawesome/free-solid-svg-icons';

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
  }
  scrollToElement(e) {
    e.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
