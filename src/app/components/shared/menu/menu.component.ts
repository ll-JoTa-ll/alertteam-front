import { Component, OnInit } from '@angular/core';
import { AlertaInterface } from '../../../models/alerta';
import { AlertasService } from '../../../services/alertas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(
    private alertasService: AlertasService
  ) { }

  ngOnInit() {
    this.alertasService.getAlertas().subscribe(data => {
      console.log(data);
    });
  }

}
