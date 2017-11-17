import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  toggleShow= false;

  constructor(private router: Router) { }

  ngOnInit() {
  }


    nextPage() {
    this.router.navigateByUrl('/secondpage');
    }
    popup() {
this.toggleShow = !this.toggleShow;


    }


}
