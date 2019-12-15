import { Component, OnInit } from '@angular/core';
import { AllCategories, getParticularBranch, getParticularCategory, locationsAndBranches } from "./utils/common-utils";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'catalog';

  ngOnInit(): void {

  }
}
