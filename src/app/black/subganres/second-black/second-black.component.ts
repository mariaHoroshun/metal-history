import { Component, OnInit } from '@angular/core';
import { SubganreContent } from 'src/app/models/subganre-content';
import { NavBlock } from 'src/app/navigation/navigation-block/nav-block';
import { SubganreContentService } from 'src/app/subganrecontent-service.service';
import { NavService } from 'src/app/nav-service.service';
import { MetalSubganres } from 'src/app/models/metal-subganres';
import { MetalType } from 'src/app/models/metal-type';

@Component({
  selector: 'app-second-black',
  templateUrl: './second-black.component.html',
  styleUrls: ['./second-black.component.css']
})
export class SecondBlackComponent implements OnInit {

  public content: SubganreContent;
  blackGanres: NavBlock[];

  constructor(private subganreService: SubganreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.subganreService.getSubganreContent(MetalSubganres.secondBlack).subscribe(res => this.content = res);
    this.navService.getNavItems(MetalType.black).subscribe(r => this.blackGanres = r);
  }
}
