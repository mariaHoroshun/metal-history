import { Component, OnInit } from '@angular/core';
import { faCaretSquareDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  faDown = faCaretSquareDown;
  faUp = faChevronUp;
  constructor() { }

  ngOnInit() {
  }
  isShowed = false;

  showInfo() {
    this.isShowed = true;
  }
  closeInfo() {
    this.isShowed = false;
  }
}
