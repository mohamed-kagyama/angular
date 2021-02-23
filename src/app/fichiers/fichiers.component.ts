import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fichiers',
  templateUrl: './fichiers.component.html',
  styleUrls: ['./fichiers.component.css']
})
export class FichiersComponent implements OnInit {
  fichiers=[
    {
      nom:'Textes Fondateurs',
      type:'pdf'
    },
    {
      nom:'Politique associées au processus',
      type:'image'
    },
    {
      nom:'Organigrame',
      type:'image'
    },
    {
      nom:'Manuel de procedures',
      type:'pdf'
    },
    {
      nom:'Description de poste de travail',
      type:'pdf'
    },
    {
      nom:'Diagramme de flux de processus',
      type:'pdf'
    },
    {
      nom:'Incident',
      type:'xlsx'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
