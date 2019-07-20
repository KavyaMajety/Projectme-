import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeappService } from '../meapp.service';

@Component({
  selector: 'app-mealplans',
  templateUrl: './mealplans.component.html',
  styleUrls: ['./mealplans.component.css']
})
export class MealplansComponent implements OnInit {
  MealPlan : any;
  name : String;
  type : String;
  duration : any;
  description : any;
  fats : any;
  protiens : any;
  carbohydrates : any;
  fibre : any;

  constructor(private router:Router, private service:MeappService) { 
    this.MealPlan = {name:'', type: '', duration: '', description: '', fats: '', protiens: '', carbohydrates: '', fibre: ''};
  }
   ngOnInit() {
  }

}
