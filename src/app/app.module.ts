import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {DashboardsComponent} from './modules/dashboards/dashboards.component';
import {ProductContentComponent} from './modules/product-content/product-content.component';
import {PlacementComponent} from './modules/placement/placement.component';
import {AssortmentAvailabilityComponent} from './modules/assortment-availability/assortment-availability.component';
import {SalesShareComponent} from './modules/sales-share/sales-share.component';
import {PricingPromotionComponent} from './modules/pricing-promotion/pricing-promotion.component';
import {RatingsReviewsComponent} from './modules/ratings-reviews/ratings-reviews.component';
import {BottomMenuPipe} from './pipes/bottom-menu.pipe';
import {SettingsComponent} from './modules/settings/settings.component';
import {FeatureRequestsComponent} from './modules/feature-requests/feature-requests.component';
import {ResourcesComponent} from './modules/resources/resources.component';
import {SignOutComponent} from './modules/sign-out/sign-out.component';
import {TopMenuPipe} from './pipes/top-menu.pipe';
import {MenuComponent} from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardsComponent,
    ProductContentComponent,
    PlacementComponent,
    AssortmentAvailabilityComponent,
    SalesShareComponent,
    PricingPromotionComponent,
    RatingsReviewsComponent,
    BottomMenuPipe,
    SettingsComponent,
    FeatureRequestsComponent,
    ResourcesComponent,
    SignOutComponent,
    TopMenuPipe,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
