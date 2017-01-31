import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService{

    result = '';
    constructor(public http:Http ){
       
    }

    getWeatherByCity(city){
        return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+",uk&appid=6fbc3c24a68fbbc4fd4ea578c660ff8e")
                        .map((res:Response) =>res.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
}