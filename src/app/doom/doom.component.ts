import { Component, OnInit } from '@angular/core';
import { GanreContent } from '../models/ganre-content';
import { GanreContentService } from '../ganrecontent-service.servise';
import { MetalType } from '../models/metal-type';
import { NavBlock } from '../navigation-block/nav-block';
import { NavService } from '../nav-service.service';

@Component({
  selector: 'app-doom',
  templateUrl: './doom.component.html',
  styleUrls: ['./doom.component.css']
})
export class DoomComponent implements OnInit {

  protected content: GanreContent;
  doomGanres: NavBlock[];

  constructor(private ganreService: GanreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.ganreService.getGanreContent(MetalType.doom).subscribe(res => this.content = res);
    this.navService.getNavItems(MetalType.doom).subscribe(r => this.doomGanres = r);
  }

}
