import { Component, Input, OnInit } from '@angular/core';
import { FilterBy } from 'src/app/models/stay-model';

@Component({
  selector: 'filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.scss']
})
export class FilterPriceComponent {
  @Input() filterBy!: FilterBy


}
