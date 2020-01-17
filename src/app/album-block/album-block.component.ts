import { Component, OnInit, Input } from '@angular/core';
import { AlbumItem } from './albumItem';

@Component({
  selector: 'app-album-block',
  templateUrl: './album-block.component.html',
  styleUrls: ['./album-block.component.css']
})
export class AlbumBlockComponent implements OnInit {

  @Input()
  album: AlbumItem;

  ngOnInit() {
  }

}
