import { Component } from '@angular/core';
import { faCompactDisc, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metal-history';
  faHome = faHome;
  faDisk = faCompactDisc;
  faSearch = faSearch;
}
