import { Component, OnInit, Input } from '@angular/core';
import { NavBlock } from './nav-block';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.css']
})
export class NavigationBlockComponent implements OnInit {

  @Input()
  navItems: NavBlock[];

  constructor() { }

  ngOnInit() {
  }


}
