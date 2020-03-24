import { Component, OnInit } from '@angular/core';
import { SubganreContent } from 'src/app/models/subganre-content';
import { NavBlock } from 'src/app/navigation/navigation-block/nav-block';
import { SubganreContentService } from 'src/app/subganrecontent-service.service';
import { NavService } from 'src/app/nav-service.service';
import { MetalSubganres } from 'src/app/models/metal-subganres';
import { MetalType } from 'src/app/models/metal-type';

@Component({
  selector: 'app-crossover-thrash',
  templateUrl: './crossover-thrash.component.html',
  styleUrls: ['./crossover-thrash.component.css']
})
export class CrossoverThrashComponent implements OnInit {

  public content: SubganreContent;
  thrashGanres: NavBlock[];

  constructor(private subganreService: SubganreContentService, private navService: NavService) {
  }

  ngOnInit() {
    this.subganreService.getSubganreContent(MetalSubganres.crossover).subscribe(res => this.content = res);
    this.navService.getNavItems(MetalType.thrash).subscribe(r => this.thrashGanres = r);
  }

}
