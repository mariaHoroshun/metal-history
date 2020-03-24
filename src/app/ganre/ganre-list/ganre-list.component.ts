import { Component, OnInit } from '@angular/core';
import { NavBlock } from '../../navigation/navigation-block/nav-block';
import { NavService } from '../../nav-service.service';
import { MetalType } from '../../models/metal-type';

@Component({
  selector: 'app-ganre-list',
  templateUrl: './ganre-list.component.html',
  styleUrls: ['./ganre-list.component.css']
})
export class GanreListComponent implements OnInit {

  thrashGanres: NavBlock[];
  doomGanres: NavBlock[];
  blackGanres: NavBlock[];
  deathGanres: NavBlock[];

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.getNavItems(MetalType.thrash).subscribe(r => this.thrashGanres = r);
    this.navService.getNavItems(MetalType.doom).subscribe(r => this.doomGanres = r);
    this.navService.getNavItems(MetalType.death).subscribe(r => this.deathGanres = r);
    this.navService.getNavItems(MetalType.black).subscribe(r => this.blackGanres = r);
  }


}
