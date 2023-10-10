import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  constructor() {}

  seeMore() {
    let dot: any = document.getElementById('dot');
    let moreText: any = document.getElementById('more');
    let showMore: any = document.getElementById('showMore');

    if (dot.style.display === 'none') {
      dot.style.display = 'inline';
      moreText.style.display = 'none';
      showMore.innerHTML = 'ver mais';
    } else {
      dot.style.display = 'none';
      moreText.style.display = 'inline';
      showMore.innerHTML = 'ver menos';
    }
  }

  ngOnInit(): void {}
}
