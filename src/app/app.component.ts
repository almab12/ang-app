import { Component } from '@angular/core';
import {WeatherService} from './services/weather.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

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
  timer = 0;
  private number:Observable<number>;
  private sub :any;

constructor(private weatherService:WeatherService){}


  onClickMe(){
    event.preventDefault();
    if(this.city)
      this.weatherService.getWeatherByCity(this.city).subscribe( (result) => { this.values = result.main.temp; });

    this.number = Observable.timer(0, 1);
    this.sub = this.number.subscribe(x => {this.timer = x});
  }

  onKey(event){
    this.city = event.target.value;
    
  }

  stop(){this.sub.unsubscribe()}
}

