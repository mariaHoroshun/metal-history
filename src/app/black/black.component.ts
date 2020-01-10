import { Component, OnInit } from '@angular/core';
import { GanreContent } from '../models/ganre-content';
import { GanreContentService } from '../ganrecontent-service.servise';
import { MetalType } from '../models/metal-type';

@Component({
  selector: 'app-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.css']
})
export class BlackComponent implements OnInit {

  protected content: GanreContent;

  constructor(private ganreService: GanreContentService) {
  }

  ngOnInit() {
    this.ganreService.getGanreContent(MetalType.black).subscribe(res => this.content = res);
  }
}
