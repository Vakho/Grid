import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubes',
  templateUrl: './cubes.component.html',
  styleUrls: ['./cubes.component.scss'],
})
export class CubesComponent implements OnInit {
  fakeArray = new Array(49);
  constructor() {}

  ngOnInit(): void {}
}
