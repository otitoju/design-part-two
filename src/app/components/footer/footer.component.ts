import { Component, OnInit } from '@angular/core';
import { faBell, faCog, faHome, faShare } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faHome = faHome;
  faBell = faBell;
  faShare = faShare;
  faGear = faCog;

  constructor() { }

  ngOnInit(): void {
  }

}
