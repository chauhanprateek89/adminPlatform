function GenerateLineChart($scope, div_id) {
    setTimeout(function () {
        var dom = document.getElementById(div_id);
        var myChart = echarts.init(dom);

        var data = [];

        /** var now = +new Date(1997, 9, 3);**/
        
        var myDate = new Date($scope.timestamp * 1000);
        var hours = myDate.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + myDate.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + myDate.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
        var now = formattedTime;

        var oneDay = 24 * 3600 * 1000;

        var value = $scope.xAxis_Data;
        // var value = Math.random() * 1000;




        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() / 1000;
            // value = value + Math.random() * 21 - 10;
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