import { Component, OnInit } from '@angular/core';
import { SubganreContent } from 'src/app/models/subganre-content';
import { NavBlock } from 'src/app/navigation-block/nav-block';
import { SubganreContentService } from 'src/app/subganrecontent-service.service';
import { NavService } from 'src/app/nav-service.service';
import { MetalSubganres } from 'src/app/models/metal-subganres';
import { MetalType } from 'src/app/models/metal-type';

@Component({
  selector: 'app-oldschool-death',
  templateUrl: './oldschool-death.component.html',
  styleUrls: ['./oldschool-death.component.css']
})
export class OldschoolDeathComponent implements OnInit {

  public content: SubganreContent;
  deathGanres: NavBlock[];

  constructor(private subganreService: SubganreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.subganreService.getSubganreContent(MetalSubganres.oldschoolDeath).subscribe(res => this.content = res);
    this.navService.getNavItems(MetalType.death).subscribe(r => this.deathGanres = r);
  }

}
