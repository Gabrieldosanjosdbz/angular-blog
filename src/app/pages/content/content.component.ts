import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = ''
  contentTitle:string = ''
  contentDescription: string = ''
  private id: string | null = '0';
  
  contentDescriptionWithBreaks: string = '';

  constructor( private routes: ActivatedRoute ) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe( value => 
      this.id = value.get('id')
      )

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: String | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover

  // Adicionando quebras de linha
  this.contentDescriptionWithBreaks = this.contentDescription.replace(/\n/g, '<br/>')
  }
}
