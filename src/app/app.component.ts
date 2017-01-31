import { Component } from '@angular/core';
import {WeatherService} from './services/weather.service';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app works!';
  clickMessage = '';
  values = '';
  city = '';

constructor(private weatherService:WeatherService){}


  onClickMe(){
    event.preventDefault();
    this.weatherService.getWeatherByCity(this.city).subscribe( (result) => { this.values = result.main.temp; });
  }

  onKey(event){
    this.city = event.target.value;
    
  }
}

