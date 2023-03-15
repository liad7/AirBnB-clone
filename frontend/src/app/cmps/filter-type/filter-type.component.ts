import { Component, Input, OnInit } from '@angular/core';
import { FilterBy } from 'src/app/models/stay-model';

@Component({
  selector: 'filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.scss']
})
export class FilterTypeComponent {
  @Input() filterBy!: FilterBy


}
