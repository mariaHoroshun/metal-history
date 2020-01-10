import { Component, OnInit, Input } from '@angular/core';
import { GanreContent } from '../models/ganre-content';
import { GanreContentService } from '../ganrecontent-service.servise';
import { MetalType } from '../models/metal-type';

@Component({
  selector: 'app-thrash',
  templateUrl: './thrash.component.html',
  styleUrls: ['./thrash.component.css']
})
export class ThrashComponent implements OnInit {
  protected content: GanreContent;

  constructor(private ganreService: GanreContentService) {
  }

  ngOnInit() {
    this.ganreService.getGanreContent(MetalType.thrash).subscribe(res => this.content = res);
  }

}
