import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { FoodandnutritionComponent } from './foodandnutrition/foodandnutrition.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { FoodandnutritionuserComponent } from './foodandnutritionuser/foodandnutritionuser.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { MealplansComponent } from './mealplans/mealplans.component';
import {HttpClientModule } from '@angular/common/http';

const appRoot: Routes=[{path: '', component: HomeComponent},
{path: 'login', canActivate:[AuthGuard], component: LoginComponent},
  {path: 'home', canActivate:[AuthGuard], component: HomeComponent},
  {path: 'register',  canActivate:[AuthGuard], component: RegisterComponent},
  {path: 'foodandnutrition',  canActivate:[AuthGuard], component: FoodandnutritionComponent},
  {path: 'foodandnutritionuser', canActivate:[AuthGuard], component: FoodandnutritionuserComponent},
  {path: 'workouts', canActivate:[AuthGuard], component: WorkoutsComponent},
  {path: 'mealplans', canActivate:[AuthGuard], component: MealplansComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    StartComponent,
    FoodandnutritionComponent,
    RegisterComponent,
    HomeComponent,
    FoodandnutritionuserComponent,
    WorkoutsComponent,
    MealplansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
  {path: '', component: HomeComponent},   
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'foodandnutrition', component: FoodandnutritionComponent},
  {path: 'foodandnutritionuser', component: FoodandnutritionuserComponent},
  {path: 'workouts', component: WorkoutsComponent},
  {path: 'mealplans', component: MealplansComponent}
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
