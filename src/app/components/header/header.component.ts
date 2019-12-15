import { Component, OnInit } from '@angular/core';
import { locationsAndBranches } from "../../utils/common-utils";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) {}

  locations = [];
  ngOnInit() {
    this.locations = locationsAndBranches;
  }
  getCategory(branchId: string) {
    this._router.navigateByUrl('category/' + branchId);
  }
}
