import { Component, OnInit, Input } from '@angular/core';

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

  protected selectTab(tab: string) {
    this.currentTab = tab;
  }

  protected isActive(tab: string): boolean {
    return this.currentTab === tab;
  }

}
