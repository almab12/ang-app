import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  clickMessage = '';
  values = '';

  onClickMe(){this.clickMessage = "allo";}
  onKey(event:any){this.values = event.target.value;}
}
