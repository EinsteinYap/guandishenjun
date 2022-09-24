import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards2',
  templateUrl: './cards2.component.html',
  styleUrls: ['./cards2.component.scss'],
})
export class Cards2Component implements OnInit {
  personPhotos = 'assets/person/';
  //   persons = [
  //     this.personPhotos + 'img1.jpg',
  //     this.personPhotos + 'img2.jpg',
  //     this.personPhotos + 'img3.jpg',
  //     this.personPhotos + 'img4.jpg'
  // ];
  persons = [
    { name:"Mr Alan Soo",role: 'President 主席', photo: this.personPhotos + 'img1.jpg' },
    { name:"Mr Choy",role: 'Vice President 副主席', photo: this.personPhotos + 'img2.jpg' },
    { name:"Mr Fatt",role: 'Treasurer 财政', photo: this.personPhotos + 'img3.jpg' },
    { name:"Mr Aou，欧英春",role: 'Foreign Affairs 交际', photo: this.personPhotos + 'img4.jpg' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
