import { Component, Input, OnInit, Output } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-setting-menu',
  templateUrl: './setting-menu.component.html',
  styleUrls: ['./setting-menu.component.css']
})
export class SettingMenuComponent implements OnInit {

  @Input() item: {name: string, icon: string};

  faChevronRight = faChevronRight

  constructor() { }

  ngOnInit(): void {
  }

}
