import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = 'https://www.meioemensagem.com.br/wp-content/uploads/2024/01/Marta-Itau-Campanha_Credito_divulgacao.jpg'

  contentTitle:string = 'NOTICIA EXEMPLO'
  contentDescription: string = 'bla bla bla'

  constructor() { }

  ngOnInit(): void {
  }

}
