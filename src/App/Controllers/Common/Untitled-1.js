function GenerateLineChart($scope, div_id) {
	setTimeout(function () {
		var dom = document.getElementById(div_id);
		var myChart = echarts.init(dom);

		var data = [];
		var timeArray = [];

		var now = [];
		var oneDay = 24 * 3600 * 1000;
		var value = [];
		// value[0] = parseInt($scope.bar_Data);
		console.log("Asdashgdkshdg", parseInt($scope.xAxis_Data));
		// var value = Math.random() * 1000;
		for (j = 0; j < ($scope.xAxis_Data).length; j++) {

			timeArray[j] = parseInt($scope.xAxis_Data[j]);
			value[j] = parseInt($scope.bar_Data[j]);

		}
		console.log(timeArray);
		// console.log(value);



		function randomData() {

			// for (j = 0; j < timeArray.length; j++) {
			// 	now[j] = timeArray[j];
			// }
			// value = value;
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
				console.log( formattedTime[j]);
	
			}
				//+ ('0' + (d.getSeconds()+1)).slice(-2);

			return {
				name: formattedTime,
				value: [
					[formattedTime.substr(0,2),formattedTime.substr(3,5), formattedTime.substr(6),
					value
				]
			}
		}

		// for (var i = 0; i < 1000; i++) {
		data.push(randomData());
		// }

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

		// setInterval(function () {
		// 	for (var i = 0; i < 5; i++) {
		// 		data.shift();
		// 		data.push(randomData());
		// 	}

		// 	if (option && typeof option === "object") {
		// 		myChart.setOption(option, true);
		// 	}
		// }, 1000);
	}, 500);
}