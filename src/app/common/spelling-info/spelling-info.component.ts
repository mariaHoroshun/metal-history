import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faSmile, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spelling-info',
  templateUrl: './spelling-info.component.html',
  styleUrls: ['./spelling-info.component.css']
})
export class SpellingInfoComponent implements OnInit {

  showInfo = false;

  constructor() { }
  faInfo = faInfoCircle;
  faSmile = faSmile;
  faDownAr = faChevronDown;

  ngOnInit() {
  }

  changeValue() {
    this.showInfo = !this.showInfo;
  }
}
