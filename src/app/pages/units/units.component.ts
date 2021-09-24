import {Component, OnInit} from "@angular/core";
import {UnitService} from "src/app/services/unit.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

enum Cost {
  Wood = 'wood',
  Food = 'food',
  Gold = 'gold'
}

interface ICost {
  label: string;
  name: Cost;
  isChecked: boolean;
  value: number;
}

@Component({
  selector: "app-units",
  templateUrl: "./units.component.html",
  styleUrls: ["./units.component.scss"],
})
export class UnitsComponent implements OnInit {
  units: any[] = [];
  costs: ICost[] = [
    {
      label: "Wood",
      name: Cost.Wood,
      isChecked: false,
      value: 0,
    },
    {
      label: "Food",
      name: Cost.Food,
      isChecked: false,
      value: 0,
    },
    {
      label: "Gold",
      name: Cost.Gold,
      isChecked: false,
      value: 0,
    },
  ];

  ages = [{
    label: 'All',
    value: 'all',
  }, {
    label: 'Dark',
    value: 'Dark',
  }, {
    label: 'Feudal',
    value: 'Feudal',
  }, {
    label: 'Castle',
    value: 'Castle',
  }, {
    label: 'Imperial',
    value: 'Imperial',
  }]

  destroy$ = new Subject();

  constructor(
    public unitService: UnitService,
  ) {
  }

  ngOnInit(): void {
    this.unitService.getUnits()
      .pipe(takeUntil(this.destroy$))
      .subscribe((units) => {
        this.units = units;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
