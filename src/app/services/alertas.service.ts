import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AlertaInterface } from '../models/alerta';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  alertasCollection: AngularFirestoreCollection<AlertaInterface>;
  alertas: Observable<AlertaInterface[]>;
  alertaDoc: AngularFirestoreDocument<AlertaInterface>;

  alertasssss;

  constructor(
    private afs: AngularFirestore
  ) {
    // @ts-ignore
    this.alertas = afs.collection('alerta').valueChanges();
    console.log(this.alertas);
  }

  getAlertas(): Observable<AlertaInterface[]> {
    return this.alertas;
  }


}
