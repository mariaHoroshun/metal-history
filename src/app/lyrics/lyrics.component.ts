import { Component, OnInit, Input } from '@angular/core';
import { faCaretSquareDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  @Input()
  lyricsInfo: string;

  @Input()
  lyricsImg: string;

  @Input()
  firstLyr: string;

  @Input()
  secLyr: string;

  faDown = faCaretSquareDown;
  faUp = faChevronUp;
  constructor() { }

  isShowed = true;
  ngOnInit() {
  }

  showInfo() {
    this.isShowed = true;
  }
  closeInfo() {
    this.isShowed = false;
  }
}
