import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClicBuscar(id: string): void {

    if (!id) { return; }

    console.log(id);
    this.router.navigate([ '/usuario', id]);

  }

}
