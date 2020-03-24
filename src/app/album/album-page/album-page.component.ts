import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../albums-service.service';
import { AlbumItem } from '../album-block/albumItem';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {

  myAlbums: AlbumItem[];
  searchStr = '';

  constructor(private albumsServise: AlbumsService) { }

  ngOnInit() {
    this.albumsServise.getAlbums().subscribe(result => this.myAlbums = result.results);
  }

}
