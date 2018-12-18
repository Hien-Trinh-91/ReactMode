import * as React from 'react';
import 'moment';
import * as Chart from 'chart.js';
declare var $: any;
class ChartComponent extends React.Component {
    private chart: any;
    private ctx: any;
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        const canvas: any = this.refs.canvas;
        this.ctx = canvas.getContext("2d");
        this.chart = new Chart(this.ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: 'Chart Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
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
    changeStatistic = () => {
        this.chart.type = 'line';
        this.chart.data.datasets.forEach((dataset: any) => {
            dataset.label = ' New Votes';
            dataset.data = [10 * Math.random(), 11 * Math.random(), 12 * Math.random(), 13 * Math.random(), 14 * Math.random(), 15 * Math.random(), 16 * Math.random()];
            dataset.backgroundColor = [
                `rgba(255, 99, 132, ${Math.random()})`,
                `rgba(54, 162, 235, ${Math.random()})`,
                `rgba(255, 206, 86, ${Math.random()})`,
                `rgba(75, 192, 192, ${Math.random()})`,
                `rgba(153, 102, 255, ${Math.random()})`,
                `rgba(255, 159, 64, ${Math.random()})`
            ];
        });
        this.chart.update();
    }
    render() {
        return (
            <div>
                <canvas ref="canvas" width="400" height="200"></canvas>
                <button className="btn btn-success" onClick={this.changeStatistic}>Change Value</button>
            </div>
        );
    }
}

export default ChartComponent