import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ganre-album',
  templateUrl: './ganre-album.component.html',
  styleUrls: ['./ganre-album.component.css']
})
export class GanreAlbumComponent implements OnInit {
  faRight = faAngleRight;
  constructor() { }

  ngOnInit() {
  }

}
