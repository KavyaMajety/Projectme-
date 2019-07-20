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

  constructor(private service: MeappService) { 
    this.FoodNutrition = {likes: 0, dislikes: 0, reports: 0, description: ''};
  }

  ngOnInit() {}
  addIdea() {
    console.log(this.FoodNutrition.userId);
    this.service.addUserIdea(this.FoodNutrition).subscribe();
 }
}

