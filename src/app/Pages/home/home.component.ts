import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  col="#FFD700"
  about="À propos"
  services="Nos services"

  constructor() { }

  ngOnInit(): void {
  }
  
}
