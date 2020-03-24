import { Component, OnInit } from '@angular/core';
import { TimelineItem } from './timeline-item';
import { TimelineServiseService as TimelineServise } from '../../timeline-servise.service';
import { MetalType } from '../../models/metal-type';

@Component({
  selector: 'app-album-timeline',
  templateUrl: './album-timeline.component.html',
  styleUrls: ['./album-timeline.component.css']
})
export class AlbumTimelineComponent implements OnInit {

  thrashItems: TimelineItem[];
  doomItems: TimelineItem[];
  blackItems: TimelineItem[];
  deathItems: TimelineItem[];

  constructor(public timelineService: TimelineServise) { }

  ngOnInit() {
    this.timelineService.getTimelineItems(MetalType.thrash).subscribe(r => this.thrashItems = r);
    this.timelineService.getTimelineItems(MetalType.death).subscribe(r => this.deathItems = r);
    this.timelineService.getTimelineItems(MetalType.doom).subscribe(r => this.doomItems = r);
    this.timelineService.getTimelineItems(MetalType.black).subscribe(r => this.blackItems = r);
  }
}
