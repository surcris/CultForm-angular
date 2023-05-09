import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cultform-angular';
  dataServe = '';


  getServer(){
    axios.get('https://cult-form-server.vercel.app/api/data/')
      .then(response => {
        console.log(response.data)
        this.dataServe  = response.data;
      })

    return this.dataServe;
  }
}
