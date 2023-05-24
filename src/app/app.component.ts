import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular12courseProject';
  selectedFeature: string= 'recipe'

  onFetureSelected(features: string){
    this.selectedFeature= features;
   console.log(features)

  }
}
