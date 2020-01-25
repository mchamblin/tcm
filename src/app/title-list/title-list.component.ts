import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcm-title-list',
  templateUrl: './title-list.component.html',
})
export class TitleListComponent implements OnInit {
  titles: any;
  constructor() {
    this.titles = [
      {
        "name": "Casablanca",
        "img":"https://prod-images.tcm.com/Master-Profile-Images/casablanca1942.610.jpg",
        "description": "An American saloon owner in North Africa is drawn into World War II when his lost love turns up.",
        "id": "610"
      },
      {
        "name": "Gone with The Wind",
        "img":"https://prod-images.tcm.com/Master-Profile-Images/gonewiththewind1939.test.jpg",
        "description": "Classic tale of Scarlett O'Hara's battle to save her beloved Tara and find love during the Civil War.",
        "id": "414427"
      },
      {
        "name": "Back to the Future",
        "img":"http://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i450/backtothefuture1985_16306_1024x768_08282017045707.jpg",
        "description": "A young man travels into the past and almost keeps his parents from getting married.",
        "id": "16306"
      },
      {
        "name": "North by Northwest",
        "img":"https://prod-images.tcm.com/Master-Profile-Images/northbynorthwest1959.1036.final.jpg",
        "description": "An advertising man is mistaken for a spy, triggering a deadly cross-country chase.",
        "id": "1036"
      }
    ]

  }

  ngOnInit() {
  }

}
