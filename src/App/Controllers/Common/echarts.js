function GenerateBarChart($scope, div_id) {
	setTimeout(function () {
		var dom = document.getElementById(div_id);
		var myChart = echarts.init(dom);

		option = {
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
				name: $scope.bar_Name,
				type: 'bar',
				barWidth: '60%',
				data: $scope.bar_Data,
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

		option = {
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

		option = {
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