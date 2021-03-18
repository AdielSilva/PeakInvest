import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasicService } from '../../services/BasicService.service';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public NomeId : number = 0;
  public Nome : string =''; //Solução para o erro S2532: Object is possibly 'undefined'. (a revisar)
 
  constructor(private service: BasicService) { 
     
  }


  ngOnInit() {
  }

  OnInput(event: any) {
    this.NomeId = event.target.value;

  }

  limparCampos()
  {
  }

  getNome()
  {
    this.service.getCliente(this.NomeId).subscribe(
      response => {this.Nome= response ;  },
      error => {
        console.log(error);
      });
  }
}
