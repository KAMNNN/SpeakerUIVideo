import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-list-item',
  templateUrl: './topic-list-item.component.html',
  styleUrls: ['./topic-list-item.component.css']
})
export class TopicListItemComponent implements OnInit {
  view = "list";

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (this.view == "list") {
      this.view = "item";
    }
    else {
      this.view = "list";
    }
  }

  close() {
    this.view = "list";
  }
}
