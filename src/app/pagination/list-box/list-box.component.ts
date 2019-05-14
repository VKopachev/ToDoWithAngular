import { Component, OnInit, Input } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  @Input() list;
  @Input() tasks;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }
}
