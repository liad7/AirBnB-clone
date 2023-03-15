import { Component, Input } from '@angular/core'

@Component({
  selector: 'search-stay',
  templateUrl: './search-stay.component.html',
  styleUrls: ['./search-stay.component.scss']
})
export class SearchStayComponent {
  @Input() isOpen!: boolean
  
  isRegionShown: boolean = true

  toggleRegion() {
    this.isRegionShown = !this.isRegionShown
    console.log('this.isRegionShown:', this.isRegionShown);
  }
}
