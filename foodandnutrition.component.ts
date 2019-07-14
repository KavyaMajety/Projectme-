import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MeappService } from '../meapp.service';


@Component({
  selector: 'app-foodandnutrition',
  templateUrl: './foodandnutrition.component.html',
  styleUrls: ['./foodandnutrition.component.css']
})
export class FoodandnutritionComponent implements OnInit {
 FoodNutrition : any;
 tip : number;
 likes : number;
 dislikes : number;
 reports : number;
 description : string;
 userId: number;

  constructor(private service: MeappService) { 
    this.FoodNutrition = {tip: '',likes: '', dislikes:'', reports: '', description: '', userId: ''};
  }

  ngOnInit() {}
  addIdea() {
    console.log(this.FoodNutrition.userId);
    this.service.addUserIdea(this.FoodNutrition).subscribe();
 }
}

