import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus=[{
    name:"主页",
    link:"/home",
    icon:"home"
  },{
    name:"关于关帝庙",
    link:"/about",
    icon:"info"
  },{
    name:"Gallery",
    link:"/gallery",
    icon:"photo_library"
  },
  {
    name:"Road Map",
    link:"/roadmap",
    icon:"map"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
