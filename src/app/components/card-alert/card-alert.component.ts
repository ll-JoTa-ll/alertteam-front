import { Component, OnInit } from '@angular/core';
import { AlertaInterface } from '../../models/alerta';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-card-alert',
  templateUrl: './card-alert.component.html',
  styleUrls: ['./card-alert.component.sass']
})
export class CardAlertComponent implements OnInit {

  listAlretas: any[];

  constructor(
    private alertasService: AlertasService
  ) { }

  ngOnInit() {
    this.getAlertas();
  }

  getAlertas() {
    this.alertasService.getAlertas().subscribe(data => {
      this.listAlretas = data;
      console.log(this.listAlretas);
    });
  }

}
