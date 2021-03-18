import { Component, OnInit } from '@angular/core';
import { BasicService} from '../../services/BasicService.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public Valor : number = 0 ;
  public QtdParcelas : number = 0;

  public Resultado : number = 0;
  constructor(private service:BasicService) { 
     
  }

  ngOnInit() {
  }
  atualizaValor(event: any)
  {
    this.Valor = event.target.value;
  }

  atualizaParcela(event: any)
  {
    this.QtdParcelas = event.target.value;
  }
  limparCampos()
  {
    
  }
  getValor()
  {
 
    this.service.getValor(this.Valor, this.QtdParcelas).subscribe(
      response => { this.Resultado = response;  }, 
      error => {console.log(error)}
    );
  }

}
