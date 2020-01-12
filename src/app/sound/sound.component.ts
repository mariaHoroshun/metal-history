import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent implements OnInit {

  @Input()
  soundImg: string;

  @Input()
  soundInfo: string;

  constructor() { }

  ngOnInit() {
  }

}
