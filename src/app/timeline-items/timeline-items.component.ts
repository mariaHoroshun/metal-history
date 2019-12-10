import { Component, OnInit, Input } from '@angular/core';
import { TimelineItem } from '../album-timeline/timeline-item';

@Component({
  selector: 'app-timeline-items',
  templateUrl: './timeline-items.component.html',
  styleUrls: ['./timeline-items.component.css']
})
export class TimelineItemsComponent implements OnInit {

  @Input()
  timelineItems: TimelineItem[];
   
  constructor() { }

  ngOnInit() {
  }

}
