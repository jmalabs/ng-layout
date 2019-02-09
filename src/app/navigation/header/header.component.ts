import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    this.menuToggle.emit();
  }

}
