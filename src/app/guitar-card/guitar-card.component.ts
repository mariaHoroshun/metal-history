import { Component, OnInit, Input } from '@angular/core';
import { GuitarCard } from './guitar-card';
import {GuitarService} from '/../guitar-service'

@Component({
  selector: 'app-guitar-card',
  templateUrl: './guitar-card.component.html',
  styleUrls: ['./guitar-card.component.css'],
  providers: [GuitarService]
})
export class GuitarCardComponent implements OnInit {

  guitarCards: GuitarCard[];

  constructor(private guitarService:GuitarService){}

  ngOnInit() {
    this.guitarCards=this.guitarService.getGuitarCards();
  }
}
