import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { getParticularCategory, getParticularBranch } from "../../utils/common-utils";

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent {

  subCategories: any = [];
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.params
      .subscribe(param => {
        let category = getParticularCategory(param.categoryName);
        this.subCategories = category ? category.subcategories: [];
      });
  }
}
