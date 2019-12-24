import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-tab',
  templateUrl: './country-tab.component.html',
  styleUrls: ['./country-tab.component.css']
})
export class CountryTabComponent implements OnInit {
  protected German = 'german';
  protected Usa = 'usa';
  protected Russia = 'russia';
  protected England = 'england';

  protected currentTab: string = this.German;

  constructor() { }

  ngOnInit() {
  }

  protected selectTab(tab: string) {
    this.currentTab = tab;
  }

  protected isActive(tab: string): boolean {
    return this.currentTab === tab;
  }

}
