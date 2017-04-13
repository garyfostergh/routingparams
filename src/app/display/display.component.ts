import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'aap-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  foo: string;
  name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        this.foo = params.foo;
        this.name = params.name;
      });
  }  
}
