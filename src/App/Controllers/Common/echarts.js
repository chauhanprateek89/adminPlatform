function GenerateBarChart($scope, div_id) {
	setTimeout(function () {
		var dom = document.getElementById(div_id);
		var myChart = echarts.init(dom);

		var intDate = [];
		var formattedTime = [];
		for (j = 0; j < ($scope.xAxis_Data).length; j++) {
			// console.log("J is",j);
			intDate[j] = parseInt($scope.xAxis_Data[j]);
			// console.log("Int date",intDate); 

			// var stringDate = parseInt($scope.xAxis_Data);
			// console.log(typeof parseInt($scope.xAxis_Data));

			intDate[j] = new Date(intDate[j] * 1000);
			// console.log("something",$scope.xAxis_Data );
			// var date = new Date($scope.xAxis_Data * 1000);
			// Hours part from the timestamp
			var year = [];
			var day = [];
			var month = [];
			var hours = [];
			var minutes = [];
			var seconds = [];

			year[j] = intDate[j].getFullYear();
			month[j] = intDate[j].getMonth();
			month[j] = month[j] + 1;
			day[j] = intDate[j].getDay();
			hours[j] = intDate[j].getHours();

			// Minutes part from the timestamp
			minutes[j] = "0" + intDate[j].getMinutes();

			// Seconds part from the timestamp
			seconds[j] = "0" + intDate[j].getSeconds();

			// Will display time in 10:30:23 format
			formattedTime[j] = hours[j] + ':' + minutes[j].substr(-2) + ':' + seconds[j].substr(-2);
			// formattedTime[j] = day[j] + '/' + month[j] + '/' + year[j] + ':-' + hours[j] + ':' + minutes[j].substr(-2) + ':' + seconds[j].substr(-2);
			// console.log("test time is", formattedTime[j]);

		}


		var option = {
			color: ['#3398DB'],
			title: {
				fontSize: 4
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow' // 'line' | 'shadow'
				}
			},
			toolbox: {
				show: true,
				orient: 'horizontal',
				top: 'top',
				feature: {
					magicType: {
						show: true,
						type: ['line', 'bar'],
						title: {
							line: 'Line',
							bar: 'Bar',
							stack: 'Stack',
							tiled: 'Tiled'
						}
					},
					saveAsImage: {
						show: true,
						title: 'Save'
					}
				},
				right: '60px',
			},
			grid: {
				left: '50px',
				right: '50px',
				bottom: '30px',
				containLabel: false
			},
			xAxis: [{
				type: 'category',
				name: '',
				// data: $scope.xAxis_Data,
				data: formattedTime,
				// data: formattedTime,
				axisTick: {
					alignWithLabel: true
				}
			}],
			yAxis: [{
				type: 'value',
				name: $scope.yAxis_Name,
			}],
			series: [{
				name: $scope.bar_Name,
				type: 'line',
				barWidth: '60%',
				data: $scope.bar_Data,
				markLine: {
					data: [
					  // 1st line we want to draw
					  [
						// start point of the line
						// we have to defined line attributes only here (not in the end point)
						{
						  xAxis: formattedTime[0],
						  yAxis: -18,
						  symbol: 'none',
						  lineStyle: {
							normal: {
							  color: "#00F"
							}
						  },
						  label: {
							normal: {
							  show: true,
							  position: 'end',
							  formatter: 'Threshold'
							}
						  }
						},
						// end point of the line
						{
						  xAxis: formattedTime[(formattedTime.length)-1],
						  yAxis: -18,
						  symbol: 'none'
						}
					  ]
					]
				  },
				itemStyle: {
					normal: {
						label: {
							show: true,
							textStyle: {
								fontSize: '13',
								fontWeight: '100'
							},
							position: 'top'
						}
					}
				},
			},
				// {
				// name : 'Line Chart',
				// type : 'line',
				// data : $scope.bar_Data
				// }
			]
		};

		//attempt for epoch to hr
		// Create a new JavaScript Date object based on the timestamp
		// multiplied by 1000 so that the argument is in milliseconds, not seconds.

		// console.log("test time is", formattedTime);


		// console.log("Temperature is: ", $scope.temperature);
		// console.log("Time js", $scope.timestamp);


		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
	}, 500);
}

function GenerateComparisonBarChart($scope, div_id) {
	setTimeout(function () {
		var dom = document.getElementById(div_id);
		var myChart = echarts.init(dom);

		option = {
			color: ['#3398DB', '#3fd5c0'],
			title: {
				fontSize: 5,
				text: 'My Line Charasdajsdhlkjasdht'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow' // 'line' | 'shadow'
				},
				right: '50px',
			},
			legend: {
				data: ['Current', 'Last Year']
			},
			toolbox: {
				show: true,
				orient: 'horizontal',
				top: 'top',
				feature: {
					magicType: {
						show: true,
						type: ['line', 'bar', 'stack', 'tiled'],
						title: {
							line: 'Line',
							bar: 'Bar',
							stack: 'Stack',
							tiled: 'Tiled'
						}
					},
					saveAsImage: {
						show: true,
						title: 'Save'
					}
				}
			},
			grid: {
				left: '30px',
				right: '10px',
				bottom: '10px',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				name: '',
				data: $scope.xAxis_Data,
				axisTick: {
					alignWithLabel: true
				}
			}],
			yAxis: [{
				type: 'value',
				name: $scope.yAxis_Name,
			}],
			series: [{
				name: $scope.bar_Name1,
				type: 'bar',
				barGap: 0,
				// barWidth: '60%',
				data: $scope.bar_Data1,
				itemStyle: {
					normal: {
						label: {
							show: true,
							textStyle: {
								fontSize: '13',
								fontWeight: '100'
							},
							position: 'top'
						}
					}
				},
			}, {
				name: $scope.bar_Name2,
				type: 'bar',
				// barWidth: '60%',
				data: $scope.bar_Data2,
				itemStyle: {
					normal: {
						label: {
							show: true,
							textStyle: {
								fontSize: '13',
								fontWeight: '100'
							},
							position: 'top'
						}
					}
				},
			}]
		};
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
	}, 500);
}

function GeneratePieChart($scope, div_id) {
	setTimeout(function () {
		var dom = document.getElementById(div_id);
		var myChart = echarts.init(dom);

		var option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				data: $scope.legend_Data
			},
			toolbox: {
				show: true,
				feature: {
					saveAsImage: {
						show: true,
						title: 'Save'
					}
				}
			},
			calculable: true,
			series: [{
				name: $scope.series_name,
				type: 'pie',
				radius: '80%',
				center: ['50%', '50%'],
				data: $scope.pie_Data
			}]
		};
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
	}, 500);
}


function GenerateLineChart($scope, div_id) {
	setTimeout(function () {
		var dom = document.getElementById(div_id);
		var myChart = echarts.init(dom);

		var data = [];
		var now = +new Date(1997, 9, 3);
		var oneDay = 24 * 3600 * 1000;
		var value = Math.random() * 1000;


		function randomData() {
			now = new Date(+now + oneDay);
			value = value + Math.random() * 21 - 10;
			return {
				name: now.toString(),
				value: [
					[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
					Math.round(value)
				]
			}
		}

		for (var i = 0; i < 1000; i++) {
			data.push(randomData());
		}

		var option = {
			title: {
				text: 'My Line Chart'
			},
			tooltip: {
				trigger: 'axis',
				formatter: function (params) {
					params = params[0];
					var date = new Date(params.name);
					return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
				},
				axisPointer: {
					animation: false
				}
			},
			xAxis: {
				type: 'time',
				splitLine: {
					show: false
				}
			},
			yAxis: {
				type: 'value',
				boundaryGap: [0, '100%'],
				splitLine: {
					show: false
				}
			},
			series: [{
				name: '模拟数据',
				type: 'line',
				showSymbol: false,
				hoverAnimation: false,
				data: data
			}]
		};

		/*myChart.setOption({
			series: [{
				data: data
			}]
		});*/

		setInterval(function () {
			for (var i = 0; i < 5; i++) {
				data.shift();
				data.push(randomData());
			}

			if (option && typeof option === "object") {
				myChart.setOption(option, true);
			}
		}, 1000);
	}, 500);
}

function GenerateGaugeChart($scope, div_id) {
	setTimeout(function () {
		var dom = document.getElementById(div_id);
		var myChart = echarts.init(dom);

		var option = {
			tooltip: {
				formatter: "{a} <br/>{b} : {c}%"
			},
			toolbox: {
				feature: {
					restore: {},
					saveAsImage: {}
				}
			},
			series: [
				{
					name: 'Heat',
					type: 'gauge',
					detail: { formatter: '{value}%' },
					data: [{ value: 50, name: 'Gauge Data' }]
				}
			]
		};

		//setInterval(function () {
		//option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		option.series[0].data[0].value = $scope.value;
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
		//}, 2000);		
	}, 500);
}