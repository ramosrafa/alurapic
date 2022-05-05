import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  photos = [
    {
      url:'https://static-cse.canva.com/blob/613334/freestockphotos.jpg',
      description: 'Leão'
    },
    {
      url:'https://i.pinimg.com/originals/1e/94/b1/1e94b117d29d1f5c5c272d9eda17d9dc.png',
      description: 'Paisagem'
    }
  ]
}
