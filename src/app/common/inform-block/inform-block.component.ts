import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inform-block',
  templateUrl: './inform-block.component.html',
  styleUrls: ['./inform-block.component.css']
})
export class InformBlockComponent implements OnInit {
  @Input()
  header: string;

  @Input()
  mainInfo: string;

  @Input()
  backgroundImage: string;

  @Input()
  mainImg: string;

  ngOnInit() { }
}
