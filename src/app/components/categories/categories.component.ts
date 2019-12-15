import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { getParticularBranch } from "../../utils/common-utils";
import { take } from "rxjs/operators";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: any = [];
  branchId: string;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.params
    .subscribe(param => {
      let branch = getParticularBranch(param.branchId);
      this.categories = branch ? branch.categories: [];
      this.branchId = param.branchId;
      console.log(branch)
    });
  }
  getSubCategory(categoryName: string) {
    this._router.navigateByUrl('subcategory/' + this.branchId + '/' + categoryName);
  }
}
