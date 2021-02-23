import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  @Input() tache:any;
  constructor() { }

  ngOnInit(): void {
  }

}
