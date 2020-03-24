import { Component, OnInit } from '@angular/core';
import { GanreContent } from '../models/ganre-content';
import { GanreContentService } from '../ganrecontent-service.servise';
import { MetalType } from '../models/metal-type';
import { NavBlock } from '../navigation/navigation-block/nav-block';
import { NavService } from '../nav-service.service';

@Component({
  selector: 'app-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.css']
})
export class BlackComponent implements OnInit {

  public content: GanreContent;
  blackGanres: NavBlock[];

  constructor(private ganreService: GanreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.ganreService.getGanreContent(MetalType.black).subscribe(res => this.content = res);
    this.navService.getNavItems(MetalType.black).subscribe(r => this.blackGanres = r);
  }
}
