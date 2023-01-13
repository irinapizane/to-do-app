import { Component } from '@angular/core';
import { appData } from 'src/app/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = appData.appTitle;

  constructor() {}
}