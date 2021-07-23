import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  parentSubject:Subject<any> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  notifyChildren(){
    this.parentSubject.next();
  }

}
