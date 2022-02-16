import { Component, Input, OnInit } from '@angular/core';
import {Game} from '../../models/game.model'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() item!:Game; 
  constructor() { }
 
  ngOnInit(): void {
    console.log(this.item)
  }
}
