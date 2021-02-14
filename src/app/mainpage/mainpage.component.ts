import { Component, Input, OnInit } from '@angular/core';
import {ddObj} from '../model'
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  @Input('myPData') myPData:Partial<ddObj>={}
  constructor() { }

  ngOnInit(): void {
  }

}
