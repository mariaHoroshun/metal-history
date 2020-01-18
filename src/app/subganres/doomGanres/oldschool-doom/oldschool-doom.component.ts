import { Component, OnInit } from '@angular/core';
import { SubganreContent } from 'src/app/models/subganre-content';
import { NavBlock } from 'src/app/navigation-block/nav-block';
import { SubganreContentService } from 'src/app/subganrecontent-service.service';
import { NavService } from 'src/app/nav-service.service';
import { MetalSubganres } from 'src/app/models/metal-subganres';
import { MetalType } from 'src/app/models/metal-type';

@Component({
  selector: 'app-oldschool-doom',
  templateUrl: './oldschool-doom.component.html',
  styleUrls: ['./oldschool-doom.component.css']
})
export class OldschoolDoomComponent implements OnInit {

  protected content: SubganreContent;
  doomGanres: NavBlock[];

  constructor(private subganreService: SubganreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.subganreService.getSubganreContent(MetalSubganres.oldschoolDoom).subscribe(res => this.content = res);
    this.navService.getNavItems(MetalType.doom).subscribe(r => this.doomGanres = r);
  }
}
