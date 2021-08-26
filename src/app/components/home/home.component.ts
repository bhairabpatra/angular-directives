import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isActive:boolean= false;
  selectedValue: string= 'One';

  isBlue:boolean=false;
  names = [
      {
          name:"muna",
          age:25
      },
      {
          name:"runa",
          age:25
      },
      {
          name:"kanha",
          age:25
      }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngClick(){
      this.isActive = !this.isActive
  }


  items  = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];


}
