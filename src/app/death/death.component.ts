import { Component, OnInit } from '@angular/core';
import { GanreContent } from '../models/ganre-content';
import { GanreContentService } from '../ganrecontent-service.servise';
import { MetalType } from '../models/metal-type';
import { NavBlock } from '../navigation-block/nav-block';
import { NavService } from '../nav-service.service';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.css']
})
export class DeathComponent implements OnInit {

  deathGanres: NavBlock[];
  public content: GanreContent;

  constructor(private ganreService: GanreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.navService.getNavItems(MetalType.death).subscribe(r => this.deathGanres = r);
    this.ganreService.getGanreContent(MetalType.death).subscribe(res => this.content = res);
  }

}
