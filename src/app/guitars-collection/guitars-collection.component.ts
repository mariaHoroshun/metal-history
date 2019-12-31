import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitars-collection',
  templateUrl: './guitars-collection.component.html',
  styleUrls: ['./guitars-collection.component.css']
})
export class GuitarsCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }

}
