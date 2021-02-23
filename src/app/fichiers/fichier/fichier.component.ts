import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fichier',
  templateUrl: './fichier.component.html',
  styleUrls: ['./fichier.component.css']
})
export class FichierComponent implements OnInit {
  @Input() fichier;
  constructor() { }

  ngOnInit(): void {
  }

}
