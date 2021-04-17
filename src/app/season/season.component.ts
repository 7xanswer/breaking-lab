import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const toolbar = document.querySelector('.toolbar');
    toolbar.setAttribute('style', 'position: relative; background-color: #673ab7;');
    toolbar.classList.add('mat-elevation-z6');
  }

}
