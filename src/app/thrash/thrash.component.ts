import { Component, OnInit, Input } from '@angular/core';
import { GanreContent } from '../models/ganre-content';
import { GanreContentService } from '../ganrecontent-service.servise';
import { MetalType } from '../models/metal-type';
import { NavBlock } from '../navigation/navigation-block/nav-block';
import { NavService } from '../nav-service.service';

@Component({
  selector: 'app-thrash',
  templateUrl: './thrash.component.html',
  styleUrls: ['./thrash.component.css']
})
export class ThrashComponent implements OnInit {
  thrashGanres: NavBlock[];
  public content: GanreContent;

  constructor(private ganreService: GanreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.navService.getNavItems(MetalType.thrash).subscribe(r => this.thrashGanres = r);
    this.ganreService.getGanreContent(MetalType.thrash).subscribe(res => this.content = res);
  }

}
