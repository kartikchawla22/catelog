import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, first, map, switchMap, take, tap } from "rxjs/operators";
import { getBranchNameFromBranchId } from "../../utils/common-utils";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit{

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router ) { }
  branchId: string;
  category: string;
  branchName: string;

  ngOnInit(): void {
  this._router.events.pipe(filter(e => e instanceof NavigationEnd ),
    map((): ActivatedRoute => {
      let route = this._activatedRoute;
      while(route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }),
    filter((route: ActivatedRoute) => route.outlet === 'primary'),
    switchMap((route: ActivatedRoute) => route.paramMap) )
    .subscribe(res => { let params = res['params'];
      this.branchId = params.branchId ? params.branchId : '' ;
      this.category = params.categoryName ? params.categoryName: '';
      this.branchName = this.branchId ? getBranchNameFromBranchId(this.branchId) : '';
      }
      );
  }
  goBackToCategory() {
    this._router.navigateByUrl('category/' + this.branchId );
  }
}
