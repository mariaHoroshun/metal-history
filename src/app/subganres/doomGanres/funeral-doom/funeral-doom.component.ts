import { Component, OnInit } from '@angular/core';
import { SubganreContent } from 'src/app/models/subganre-content';
import { NavBlock } from 'src/app/navigation-block/nav-block';
import { SubganreContentService } from 'src/app/subganrecontent-service.service';
import { NavService } from 'src/app/nav-service.service';
import { MetalSubganres } from 'src/app/models/metal-subganres';
import { MetalType } from 'src/app/models/metal-type';

@Component({
  selector: 'app-funeral-doom',
  templateUrl: './funeral-doom.component.html',
  styleUrls: ['./funeral-doom.component.css']
})
export class FuneralDoomComponent implements OnInit {

  public content: SubganreContent;
  doomGanres: NavBlock[];

  constructor(private subganreService: SubganreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.subganreService.getSubganreContent(MetalSubganres.funeral).subscribe(res => this.content = res);
    this.navService.getNavItems(MetalType.doom).subscribe(r => this.doomGanres = r);
  }

}
