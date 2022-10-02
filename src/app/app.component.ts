import { Component, OnInit } from '@angular/core';
import { ApidataService } from './apidata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'idea';
  Students: any;
  allStudents: number = 0;
  pagination: number = 1;
  constructor(private apidataService: ApidataService) {}
  ngOnInit() {
    this.fetchStudents();
    console.log(this.fetchStudents());
  }
  fetchStudents() {
    this.apidataService.getStudents(this.pagination).subscribe((res: any) => {
      this.Students = res.data;
      this.allStudents = res.total;
      console.log(res.total);
    });
  }
  renderPage(event: number) {
    this.pagination = event;
    this.fetchStudents();
  }

}
