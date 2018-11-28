/**
 * Created by kta pc on 6/1/2017.
 */
/**
 * Created by ipsita on 7/4/17.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from "./app/signup/signup.component";
import {ProfileComponent} from "./app/profile/profile.component";
import {CompetitionComponent} from "./app/competition/competition.component";
import {TrendingartistComponent} from "./app/trendingartist/trendingartist.component";




const appRoutes: Routes = [

    { path: '', component: SignupComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'signup/:uname', component: SignupComponent},
    { path: 'signup/:uname/:mediaid', component: SignupComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'competition', component: CompetitionComponent},
    { path: 'trending-artist', component: TrendingartistComponent},

];


export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: false });