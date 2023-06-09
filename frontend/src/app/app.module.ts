import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app-root/app.component'
import { StayIndexComponent } from './views/stay-index/stay-index.component'
import { StayListComponent } from './cmps/stay-list/stay-list.component'
import { StayPreviewComponent } from './cmps/stay-preview/stay-preview.component'
import { AppHeaderComponent } from './cmps/app-header/app-header.component'
import { ToolBarComponent } from './cmps/tool-bar/tool-bar.component'
import { StayDetailsComponent } from './views/stay-details/stay-details.component'
import { DetailsInfoComponent } from './cmps/details-info/details-info.component'
import { DetailsAmenitiesComponent } from './cmps/details-amenities/details-amenities.component'
import { DetailsReviewStatComponent } from './cmps/details-review-stat/details-review-stat.component'
import { ImgCarouselComponent } from './cmps/img-carousel/img-carousel.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { DetailsReviewsComponent } from './cmps/details-reviews/details-reviews.component'
import { DetailsReviewPreviewComponent } from './cmps/details-review-preview/details-review-preview.component'
import { StayEditComponent } from './views/stay-edit/stay-edit.component'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DetailsReserveComponent } from './cmps/details-reserve/details-reserve.component'
import { GuestModalComponent } from './cmps/guest-modal/guest-modal.component'
import { AirbnbCalendarModule } from 'ngx-airbnb-calendar';
import { GoogleMapsModule } from '@angular/google-maps'
import { SearchStayComponent } from './cmps/search-stay/search-stay.component'
import { ReservationModalComponent } from './cmps/reservation-modal/reservation-modal.component'
import { FilterModalComponent } from './cmps/filter-modal/filter-modal.component'
import { FilterPriceComponent } from './cmps/filter-price/filter-price.component'
import { FilterTypeComponent } from './cmps/filter-type/filter-type.component'



@NgModule({
  declarations: [
    AppComponent,
    StayIndexComponent,
    StayListComponent,
    StayPreviewComponent,
    AppHeaderComponent,
    ToolBarComponent,
    StayDetailsComponent,
    DetailsInfoComponent,
    ImgCarouselComponent,
    DetailsAmenitiesComponent,
    DetailsReviewStatComponent,
    DetailsReviewsComponent,
    DetailsReviewPreviewComponent,
    StayEditComponent,
    DetailsReserveComponent,
    GuestModalComponent,
    SearchStayComponent,
    ReservationModalComponent,
    FilterModalComponent,
    FilterPriceComponent,
    FilterTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AirbnbCalendarModule,
    GoogleMapsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
