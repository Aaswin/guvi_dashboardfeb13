import { Component } from '@angular/core';
import {ddObj} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard1';

data:Array<object>=[
  { 
    earning:"EARNINGS (MONTHLY)",
    currency:"$40,000",
    icon:"fas fa-calendar fa-2x text-gray-300"
  },
  { 
    earning:"EARNINGS (ANNUAL)",
    currency:"$215,000",
    icon:"fas fa-dollar-sign fa-2x text-gray-300"
  },
  { 
    earning:"EARNINGS (MONTHLY)",
    currency:"60%",
    icon:"fas fa-clipboard-list fa-2x text-gray-300"
  },
  { 
    earning:"TASKS",
    currency:"18",
    icon:"fas fa-comments fa-2x text-gray-300"
  }
]
}