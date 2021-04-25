import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const toolbar = document.querySelector('.toolbar');
    toolbar.setAttribute('style', 'position: relative; background-color: #303030;');
    toolbar.classList.add('mat-elevation-z6');
  }
}
