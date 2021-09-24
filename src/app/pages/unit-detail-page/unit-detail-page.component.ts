import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {switchMap, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {UnitService} from "../../services/unit.service";

@Component({
  selector: "app-unit-detail-page",
  templateUrl: "./unit-detail-page.component.html",
  styleUrls: ["./unit-detail-page.component.scss"],
})
export class UnitDetailPageComponent implements OnInit {

  columns = [
    {title: 'Id', dataIndex: 'id'},
    {title: 'Name', dataIndex: 'name'},
    {title: 'Description', dataIndex: 'description'},
    {title: 'Build Time', dataIndex: 'build_time'},
    {title: 'Reload Time', dataIndex: 'reload_time'},
    {title: 'Hit Points', dataIndex: 'hit_points'},
    {title: 'Attack', dataIndex: 'attack'},
    {title: 'Accuracy', dataIndex: 'accuracy'},

  ]
  costColumns = [

    {title: 'Wood', dataIndex: 'cost', val:'Wood'},
    {title: 'Food', dataIndex: 'cost', val: 'Food'},
    {title: 'Gold', dataIndex: 'cost', val:'Gold'}
  ]

  constructor(
    private _route: ActivatedRoute,
    private _unitService: UnitService
  ) {
  }

  unit: any;
  destroy$ = new Subject();

  ngOnInit(): void {
    this._route.params
      .pipe(
        switchMap(({id}) => this._unitService.getUnit(+id)),
        takeUntil(this.destroy$)
      )
      .subscribe(unit => {
        this.unit = unit;
      })
  }
}
