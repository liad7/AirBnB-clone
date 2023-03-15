import { Injectable } from '@angular/core'
import { FilterBy, Review, Stay, StayFilter } from 'src/app/models/stay-model'
import { UtilService } from './util.service'
import data from '../../data/minified-stays.json'
import filters from '../../data/filters.json'

import { BehaviorSubject, Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class StayService {
  constructor(private utilService: UtilService) { }

  KEY = 'stayBD'

  private _stays$ = new BehaviorSubject<Stay[]>([]);
  public stays$ = this._stays$.asObservable()

  private _stayFilter$ = new BehaviorSubject<FilterBy>(this.getEmptyFilterBy())
  public stayFilter$ = this._stayFilter$.asObservable()

  public query() {
    const filterBy = this._stayFilter$.value
    let stays = this.utilService.loadFromStorage(this.KEY)
    if (!stays) {
      stays = data.map(stay => ({ ...stay, _id: this.utilService.makeId() }))
      this.utilService.saveToStorage(this.KEY, stays)
    }
    if (filterBy.selectedFilter) {
      stays = stays.filter((stay: Stay) => stay.labels.includes(filterBy.selectedFilter))
    }
    if (filterBy.minPrice > 0) {
      stays = stays.filter((stay: Stay) => stay.price > filterBy.minPrice)
    }
    if (filterBy.maxPrice) {
      stays = stays.filter((stay: Stay) => stay.price < filterBy.maxPrice)
    }
    if (filterBy.types.length) {
      stays = stays.filter((stay: Stay) => {
        return filterBy.types.includes(stay.type)
      })
    }
    this._stays$.next(stays)
  }

  public remove(stayId: string) {
    const stays = this.utilService.loadFromStorage(this.KEY)
    const stayIdx = stays.findIndex((stay: Stay) => stay._id === stayId)
    stays.splice(stayIdx, 1)
    this.utilService.saveToStorage(this.KEY, stays)
    this._stays$.next(stays)
    return of()
  }

  public getById(stayId: string): Observable<Stay> {
    const stays = this.utilService.loadFromStorage(this.KEY)
    const stay = stays.find((stay: Stay) => stay._id === stayId)
    return stay ? of({ ...stay }) : of()
  }

  public save(stay: Stay) {
    return stay._id ? this._edit(stay) : this._add(stay)
  }

  public setFilter(filterBy: FilterBy) {
    this._stayFilter$.next(filterBy)
    this.query()
  }
  public getFilters() {
    return filters

  }
  public getStayStatValue(reviews: Review[]) {
    return

  }

  getStayRating(stay: Stay) {
    return (
      stay.reviews.reduce((acc: number, review: Review) => {
        const values: number[] = Object.values(review.moreRate)
        const average = values.reduce((sum, value) => sum + value, 0) / values.length

        return acc + average
      }, 0) / stay.reviews.length
    )
  }
  getStayNicheRating(stay: Stay, nicheRating: string) {
    return (
      stay.reviews.reduce((acc: number, review: Review) => {
        return acc + review.moreRate[nicheRating]
      }, 0) / stay.reviews.length
    )
  }

  private _add(stay: Stay) {
    stay._id = this.utilService.makeId()
    const stays = this.utilService.loadFromStorage(this.KEY)
    stays.push(stay)
    this.utilService.saveToStorage(this.KEY, stays)
    this._stays$.next(stays)
    return of(stay)
  }

  private _edit(stay: Stay) {
    const stays = this.utilService.loadFromStorage(this.KEY)
    const stayIdx = stays.findIndex((_stay: Stay) => _stay._id === stay._id)
    stays.splice(stayIdx, 1, stay)
    this.utilService.saveToStorage(this.KEY, stays)
    this._stays$.next(stays)
    return of(stay)
  }

  public _getRandomDate() {
    const month = this.utilService.getRandomIntInclusive(0, 11)
    const startDay = this.utilService.getRandomIntInclusive(0, 30)
    const endDay = this.utilService.getRandomIntInclusive(startDay, 30)
    console.log(new Date(2023, month, startDay))


  }

  public getEmptyFilterBy(): FilterBy {
    return {
      selectedFilter: '',
      minPrice: 20,
      maxPrice: 1000,
      types: [],
    }
  }

  public getLocations() {
    return [
      {
        title: "I'm Flexible",
        url: 'https://airbnb-in-react.netlify.app/static/media/all.2a49ce1de0a165eaff60.webp'
      },
      {
        title: 'Middle East',
        url: 'https://airbnb-in-react.netlify.app/static/media/all.2a49ce1de0a165eaff60.webp'
      },
      {
        title: 'Italy',
        url: 'https://airbnb-in-react.netlify.app/static/media/italy.b00d91b4b8afceaa4985.webp'
      },
      {
        title: 'South America',
        url: 'https://airbnb-in-react.netlify.app/static/media/south-america.3f32b3945318eb0dbede.webp'
      },
      {
        title: 'France',
        url: 'https://airbnb-in-react.netlify.app/static/media/france.b75cf05b38e6bae34c31.webp'
      },
      {
        title: 'United States',
        url: 'https://airbnb-in-react.netlify.app/static/media/usa.bf6a17c846334e3873a4.webp'
      },
    ]
  }

}
