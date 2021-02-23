import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  taches=[
    {
      responsable:"Vincent Richards",
      tache:"Assurer la communication interne et externe",
      status:"Faible",
      date_evaluation:"17 juil 2019"
    },
    {
      responsable:"Carme Pearson",
      tache:"Lorem ipsum dolor sit amet consectetur adipisicing.",
      status:"Moyen",
      date_evaluation:"17 juil 2019"
    },
    {
      responsable:"Amber Elliot",
      tache:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status:"Moyen",
      date_evaluation:"17 juil 2019"
    },
    {
      responsable:"Harry James",
      tache:"Neque porro quisquam est qui dolorem ipsum quia dolor",
      status:"Elevé",
      date_evaluation:"17 juil 2019"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
