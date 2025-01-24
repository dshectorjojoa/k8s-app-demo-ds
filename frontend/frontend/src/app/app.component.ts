import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{ message }}</h1>
      <p>Visitas: {{ visits }}</p>
      <p>Ambiente: {{ environment }}</p>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      padding: 20px;
    }
  `]
})
export class AppComponent implements OnInit {
  message = '';
  visits = 0;
  environment = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://api:5000').subscribe((data: any) => {
      this.message = data.message;
      this.visits = data.visits;
      this.environment = data.environment;
    });
  }
}