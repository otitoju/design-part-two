import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  menuItems = [
    {icon:"assets/images/icon1.png", name: "App usage problem"},
    {icon:"assets/images/icon2.png", name: "Features"},
    {icon:"assets/images/icon3.png", name: "Lock installation"},
    {icon:"assets/images/icon4.png", name: "Normal trouble shooting"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
