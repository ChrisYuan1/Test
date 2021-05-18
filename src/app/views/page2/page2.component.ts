import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less']
})
export class Page2Component implements OnInit {
  name=""
  constructor( public router:Router) { }
  goPage(){
    this.router.navigateByUrl('page')
  }
  ngOnInit(): void {
  }

}
