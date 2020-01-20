import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-tab',
  templateUrl: './country-tab.component.html',
  styleUrls: ['./country-tab.component.css']
})
export class CountryTabComponent implements OnInit {
  German = 'german';
  Usa = 'usa';
  Russia = 'russia';
  England = 'england';

  currentTab: string = this.German;

  @Input()
  americanBands: string[];

  @Input()
  germanBands: string[];

  @Input()
  britishBands: string[];

  @Input()
  russianBands: string[];

  @Input()
  russianImg: string;

  @Input()
  germanImg: string;

  @Input()
  britishImg: string;

  @Input()
  americanImg: string;

  constructor() { }

  ngOnInit() {
  }

  public selectTab(tab: string) {
    this.currentTab = tab;
  }

  public isActive(tab: string): boolean {
    return this.currentTab === tab;
  }

}
