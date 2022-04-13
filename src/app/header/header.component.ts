import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Output() navFeature = new EventEmitter<string>();
  ngOnInit(): void {}

  onNavClicked(navigator: string) {
    this.navFeature.emit(navigator);
  }
}
