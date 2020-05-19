import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart',
  template: `
    <canvas #canvas id="myChart"></canvas>
  `,
  styles: []
})
export class ChartComponent implements AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @Input() data: number[];
  @Input() labels: string[];
  @Input() title: string;
  public mainChart: Chart;

  constructor() {}

  ngAfterViewInit() {
    this.init();
  }
  init() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    this.mainChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: this.labels,
            datasets: [{
                label: this.title,
                data: this.data,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }
}