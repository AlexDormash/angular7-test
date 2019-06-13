import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardsComponent } from './modules/dashboards/dashboards.component';
import { ProductContentComponent } from './modules/product-content/product-content.component';
import { PlacementComponent } from './modules/placement/placement.component';
import { AssortmentAvailabilityComponent } from './modules/assortment-availability/assortment-availability.component';
import { SalesShareComponent } from './modules/sales-share/sales-share.component';
import { PricingPromotionComponent } from './modules/pricing-promotion/pricing-promotion.component';
import { RatingsReviewsComponent } from './modules/ratings-reviews/ratings-reviews.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { FeatureRequestsComponent } from './modules/feature-requests/feature-requests.component';
import { ResourcesComponent } from './modules/resources/resources.component';
import { SignOutComponent } from './modules/sign-out/sign-out.component';

export const routes: Routes = [
  {path: 'Dashboards', component: DashboardsComponent, data: {name: 'Dashboards', img: '../assets/favicon.ico'}},
  {path: 'SalesShare', component: SalesShareComponent, data: {name: 'Sales & Share', img: '../assets/favicon.ico'}},
  {path: 'ProductContent', component: ProductContentComponent, data: {name: 'Product Content', img: '../assets/favicon.ico'}},
  {path: 'Placement', component: PlacementComponent, data: {name: 'Placement', img: '../assets/favicon.ico'}},
  {path: 'PricingPromotion', component: PricingPromotionComponent, data: {name: 'Pricing & Promotion', img: '../assets/favicon.ico'}},
  {path: 'AssortmentAvailability', component: AssortmentAvailabilityComponent, data: {name: 'Assortment & Availability', img: '../assets/favicon.ico'}},
  {path: 'RatingsReviews', component: RatingsReviewsComponent, data: {name: 'Ratings & Reviews', img: '../assets/favicon.ico'}},
  {path: 'Settings', component: SettingsComponent, data: {name: 'Settings', img: '../assets/favicon.ico', position: 'bottom'}},
  {path: 'FeatureRequests', component: FeatureRequestsComponent, data: {name: 'Feature Requests', img: '../assets/favicon.ico', position: 'bottom'}},
  {path: 'Resources', component: ResourcesComponent, data: {name: 'Resources', img: '../assets/favicon.ico', position: 'bottom'}},
  {path: 'SignOut', component: SignOutComponent, data: {name: 'Sign Out', img: '../assets/favicon.ico', position: 'bottom'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
