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
import { Person } from 'src/app/interfaces';

@Component({
  selector: 'tcm-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  personId: any;
  person$: Observable<Person>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.personId = this.route.snapshot.paramMap.get('id1') + '/' + this.route.snapshot.paramMap.get('id2');
    this.person$ = from(this.getPerson()).pipe(
      map(result => {
        return result.tcm.person;
      }),
    );
  }

  getPerson(): Promise<any> {
    return this.http.get('https://dev-tcmws.tcm.com/tcmws/participants/' + this.personId, {}).toPromise();
  }
}
