import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcm-person-list',
  templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit {
participants: any;
  constructor() {
    this.participants = [
      {
        "name": "George Pal",
        "img": "http://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i84/georgepal_cu_188x141_080520090301.jpg",
        "description": "Set designer with UFA before moving in the 1930s to Western Europe, where he produced ingenious short advertising films featuring wire-jointed, stylized puppets.",
        "id": "146648/59186"
      },
      {
        "name": "Humphrey Bogart",
        "img": "https://dev-images.tcm.com/Master-Profile-Images/HumphreyBogart-new.jpg",
        "description": "The very definition of the term \"film icon,\" Humphrey Bogart rose from a bit player on Broadway, to a supporting B-movie actor, to eventually become the undisputed reigning box-office star of his day.",
        "id": "18290/71928"
      },
      {
        "name": "Cary Grant",
        "img": "http://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i46/CaryGrant_CU_188x141_071320061247.jpg",
        "description": "\"By Bryce Coleman\" opposite Constance Bennett gave Cary Grant his first financial hit, thanks to a share of the hefty profits, while \"The Awful Truth\" (1937) co-starring Irene Dunne made him a bona fide movie star.",
        "id": "75180/28068"
      },
      {
        "name": "Joan Crawford",
        "img": "http://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i138/joancrawford_cu_188x141_062120110106.jpg",
        "description": "Joan Crawford's extraordinary career encompassed over 45 years and some 80 films.",
        "id": "40864/83574"
      },
      {
        "name": "Bette Davis",
        "img": "http://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i44/BetteDavis_CU_188x141_041320061630.jpg",
        "description": "A strong-willed, independent woman with heavy-cast eyes, clipped New England diction, and distinctive mannerisms, Bette Davis left an indelible - and often parodied - mark on cinema history as being one of Hollywood's most important and decorated actresses.",
        "id": "45076/20235"
      }
    ]

  }

  ngOnInit() {
  }

}
