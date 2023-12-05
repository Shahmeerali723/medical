'use strict';

$(document).ready(function() {

	function generateData(baseval, count, yrange) {
		var i = 0;
		var series = [];
		while (i < count) {
			var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
			var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
			var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

			series.push([x, y, z]);
			baseval += 86400000;
			i++;
		}
		return series;
	}


	// Column chart
	if($('#sales_chart').length > 0) {
		var columnCtx = document.getElementById("sales_chart"),
		columnConfig = {
			colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
			series: [
				{
				name: "Video Call",
				type: "column",
				data: [4, 2.8, 5, 2, 3.2, 1.2, 2, 3, 2, 3.5, 5, 2]
				},
				{
				name: "Audio call",
				type: "column",
				data: [3, 3, 2, 3, 1.5, 1, 3, 2, 3, 1.5, 2, 3]
				},
				{
					name: "Chat",
					type: "column",
					data: [4.5, 3.8, 2.5, 3, 4.5, 3, 4.5, 3, 4, 5, 1.5, 2]
				}
			],
			chart: {
				type: 'bar',
				fontFamily: 'Poppins, sans-serif',
				height: 350,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '60%',
				},
			},
			dataLabels: {
				enabled: false
			},
			grid: {
				show: false,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
			 },
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return val + "k"
					}
				},
				axisBorder: {
					show: true,
				},
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return val + "k"
					}
				}
			}
		};
		var columnChart = new ApexCharts(columnCtx, columnConfig);
		columnChart.render();
	}
	
	// Column chart
	if($('#totsales_chart').length > 0) {
		var columnCtx = document.getElementById("totsales_chart"),
		columnConfig = {
			colors: ['#0CE0FF'],
			series: [
				{
				name: "Video Call",
				type: "column",
				data: [4, 2.8, 5, 2, 3.2, 1.2, 2, 3]
				}
			],
			chart: {
				type: 'bar',
				fontFamily: 'Poppins, sans-serif',
				height: 360,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '30%',
				},
			},
			dataLabels: {
				enabled: false
			},
			grid: {
				show: false,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
			 },
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021', '25/11/2021', '25/11/2021', '27/11/2021', '28/11/2021'],
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return val + "k"
					}
				},
				axisBorder: {
					show: true,
				},
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return val + "k"
					}
				}
			}
		};
		var columnChart = new ApexCharts(columnCtx, columnConfig);
		columnChart.render();
	}	
	
	// Income Report
	if($('#income-report').length > 0) {
		var options = {
				series: [{
					name: "Video Call",
					data: [0, 1, 1.5, 3.5, 2]
				},
				{
					name: "Audio Call",
					data: [0, 3, 3.5, 2.5, 3.5]
				},
				{
					name: "Chat",
					data: [0, 4, 4.5, 3.8, 4]
				}
			],
			colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
			  chart: {
			  height: 300,
			  type: 'area',
			  toolbar: {
					show: false
				},
			  zoom: {
				enabled: false
			  }
			},
			dataLabels: {
			  enabled: false
			},
			stroke: {
			  curve: 'straight',
			  width: 1,
			},
			markers: {
				size: 3,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
			 },
			grid: {
			  show: false,
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return val + "k"
					}
				},
				axisBorder: {
					show: true,
				},
			},
			xaxis: {
			  categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021'],
				}
		};

		var chart = new ApexCharts(document.querySelector("#income-report"), options);
		chart.render();
	}
	
	// Income Report
	if($('#totincome-report').length > 0) {
	var options = {
			series: [{
				name: "Video Call",
				data: [0, 2.5, 1, 3, 4, 2, 3, 2, 4]
			},
			{
				name: "Audio Call",
				data: [0, 2, 4, 4.3, 4, 2.5, 3.5, 2.5, 4, 3]
			},
			{
				name: "Chat",
				data: [0, 4, 4.5, 3.8, 4, 2, 3, 3.5, 4, 3]
			}
		],
		colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
          chart: {
          height: 300,
          type: 'area',
		  toolbar: {
				show: false
			},
          zoom: {
            enabled: false
          }
        },
		markers: {
			size: 3,
		},
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
		  width: 1,
        },
		legend: {
			position: 'top',
			horizontalAlign: 'right',
		 },
        grid: {
          show: false,
        },
		yaxis: {
			labels: {
				formatter: function (val) {
					return val + "k"
				}
			},
			axisBorder: {
				show: true,
			},
		},
        xaxis: {
          categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021', '26/11/2021', '27/11/2021', '28/11/2021', '25/11/2021', '25/11/2021'],
		}
    };

    var chart = new ApexCharts(document.querySelector("#totincome-report"), options);
    chart.render();
	}

	//Pie Chart
	if($('#status_chart').length > 0) {
		var pieCtx = document.getElementById("status_chart"),
		pieConfig = {
			colors: ['#0CE0FF', '#1B5A90'],
			series: [650, 250],
			 plotOptions: {
				pie: {
				  donut: {
						  size: '60%',
					labels: {
					  show: true,
					   total: {
			  show: false,
					   },
					},
				  },
				},
			 },
			  stroke: {
				lineCap: "round",
			  },
			chart: {
				fontFamily: 'Poppins, sans-serif',
				height: 194,
				type: 'donut',
			},
			labels: ['Completed', 'Cancelled'],
			legend: {show: true,
			position: 'bottom',
				horizontalAlign: 'left',},
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
		};
		var pieChart = new ApexCharts(pieCtx, pieConfig);
		pieChart.render();
	}
	
	// Simple Column Stacked
	if($('#income-month').length > 0) {
	var sColStacked = {
		chart: {
			height: 165,
			type: 'bar',
			stacked: true,
			toolbar: {
			  show: false,
			}
		},
		colors: ['#0CE0FF', '#1B5A90', '#EEF1FE'],
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					position: 'bottom',
					offsetX: -10,
					offsetY: 0
				}
			}
		}],
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '30px',			
			},
		},
		grid: {
			padding: {
				left: -15,
				right: 0
			  },
			 show: false,
		},
		dataLabels: {
			enabled: false,
		},
		series: [{
			name: 'Scheduled Appointment',
			data: [1.6, 1.6, 1.5]
		},{
			name: 'Doctors Available Now',
			data: [4, 2, 1.8]
		},{
			name: 'Home Visits',
			data: [9, 4, 6]
		}],
		xaxis: {
			categories: ['09:00', '10:00', '11:00'],
			axisBorder: {
				show: true,
			},
		}, 
		legend: {
			show: false,
		},
		fill: {
			opacity: 1
		},
		yaxis: {
			show: false,
			labels: {
      offsetX: 0,
			}
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "€ " + val + "k"
				}
			}
		}
	}

	var chart = new ApexCharts(
		document.querySelector("#income-month"),
		sColStacked
	);

	chart.render();
	
	}


	
	
  
});