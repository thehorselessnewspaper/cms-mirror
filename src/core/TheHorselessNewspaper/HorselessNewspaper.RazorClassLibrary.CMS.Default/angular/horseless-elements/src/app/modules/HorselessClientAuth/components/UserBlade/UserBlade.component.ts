import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'lib-UserBlade',
  templateUrl: './UserBlade.component.html',
  styleUrls: ['./UserBlade.component.css'],
})
export class UserBladeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      }
    });
  }
}
