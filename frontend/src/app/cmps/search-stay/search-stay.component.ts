import { Component, Input } from '@angular/core'
import { StayService } from 'src/app/services/stay.service'

@Component({
  selector: 'search-stay',
  templateUrl: './search-stay.component.html',
  styleUrls: ['./search-stay.component.scss']
})
export class SearchStayComponent {
  constructor(private stayService: StayService) { }

  @Input() isOpen!: boolean

  isRegionShown: boolean = true
  regions: { title: string, url: string }[] = this.stayService.getRegions()
  selectedRegion: string = 'Search destinations'

  toggleRegion(): void {
    this.isRegionShown = !this.isRegionShown
  }

  setSelectedRegion(region: string): void {
    this.selectedRegion = region
    this.toggleRegion()
  }
}
