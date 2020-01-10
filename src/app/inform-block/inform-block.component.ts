import { Component, OnInit, Input } from '@angular/core';
import { GanreContent } from '../models/ganre-content';
import { GanreContentService } from '../ganrecontent-service.servise';
import { MetalType } from '../models/metal-type';

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

  ngOnInit() { }
}
