import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  from,
  Observable,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from 'src/app/interfaces';

@Component({
  selector: 'tcm-title',
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {
  titleId: any;
  title$: Observable<Title>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.titleId = this.route.snapshot.paramMap.get('id');
    this.title$ = from(this.getTitle()).pipe(
      map(result => {
        return result.tcm.title;
      }),
    );

  }

  getTitle(): Promise<any> {
    return this.http.get('https://tcmws.tcm.com/tcmws/titles/' + this.titleId, {}).toPromise();
  }
  getFilmLength(lengthInMeters) {
    let num = lengthInMeters.replace(',', '');
    num = +num;
    return (num * 3.28084).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
