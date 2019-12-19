import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-tab',
  templateUrl: './country-tab.component.html',
  styleUrls: ['./country-tab.component.css']
})
export class CountryTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isClicked = false;

  onClick() {
    this.isClicked = true;
  }

}
