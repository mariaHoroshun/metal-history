import { Component, OnInit } from '@angular/core';
import { SubganreContent } from 'src/app/models/subganre-content';
import { NavBlock } from 'src/app/navigation-block/nav-block';
import { SubganreContentService } from 'src/app/subganrecontent-service.service';
import { NavService } from 'src/app/nav-service.service';
import { MetalSubganres } from 'src/app/models/metal-subganres';
import { MetalType } from 'src/app/models/metal-type';

@Component({
  selector: 'app-first-black',
  templateUrl: './first-black.component.html',
  styleUrls: ['./first-black.component.css']
})
export class FirstBlackComponent implements OnInit {

  public content: SubganreContent;
  blackGanres: NavBlock[];

  constructor(private subganreService: SubganreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.subganreService.getSubganreContent(MetalSubganres.firstBlack).subscribe(res => this.content = res);
    this.navService.getNavItems(MetalType.black).subscribe(r => this.blackGanres = r);
  }

}
