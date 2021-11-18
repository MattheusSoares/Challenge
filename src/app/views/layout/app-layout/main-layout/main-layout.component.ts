import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isOpen = false; 
  constructor() {}

  ngOnInit(): void {
  }

  changeStatus(event){
   if(event)
     this.isOpen = true;
   else 
    this.isOpen = false;
  }
  

}
