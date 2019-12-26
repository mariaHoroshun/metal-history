import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-band-card',
  templateUrl: './band-card.component.html',
  styleUrls: ['./band-card.component.css']
})
export class BandCardComponent implements OnInit {
  faRight = faAngleRight;
  constructor() { }

  ngOnInit() {
  }

}
