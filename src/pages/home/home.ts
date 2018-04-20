import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>;
  humedad: Observable<any>;
  flujo: Observable<any>;

  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {
    this.items = afDB.list('valores').valueChanges();
    this.humedad = afDB.object('Humedad').valueChanges();
    this.flujo = afDB.object('Flujo').valueChanges();
  }

}
