import { Component, OnInit } from '@angular/core';
import { SubganreContent } from 'src/app/models/subganre-content';
import { NavBlock } from 'src/app/navigation-block/nav-block';
import { SubganreContentService } from 'src/app/subganrecontent-service.service';
import { NavService } from 'src/app/nav-service.service';
import { MetalSubganres } from 'src/app/models/metal-subganres';
import { MetalType } from 'src/app/models/metal-type';

@Component({
  selector: 'app-dsbm',
  templateUrl: './dsbm.component.html',
  styleUrls: ['./dsbm.component.css']
})
export class DsbmComponent implements OnInit {

  protected content: SubganreContent;
  blackGanres: NavBlock[];

  constructor(private subganreService: SubganreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.subganreService.getSubganreContent(MetalSubganres.dsbm).subscribe(res => this.content = res);
    this.navService.getNavItems(MetalType.black).subscribe(r => this.blackGanres = r);
  }

}
