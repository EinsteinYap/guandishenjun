import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
 //function to return list of numbers from 0 to n-1
 numSequence(n: number): Array<number> {
  return Array(n);
}
}
