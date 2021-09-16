import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards =[];
  pieData = [];
  constructor(private dashService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart =  this.dashService.bigChart();
    this.cards = this.dashService.cards();
    this.pieData = this.dashService.pieData();
  }

}
