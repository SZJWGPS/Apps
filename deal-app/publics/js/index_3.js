$(document).ready(function() {
	var dealTrend = echarts.init(document.getElementById('deal_trend_one'));
	
	/*
	 * datatable 
	 */
	var data = [
	             {
	             	'id': 1,
	             	'name': '鹏程电动',
	             	'sum_deal_count': 5000,
	             	'sum_deal_money': 100000,
	             	'average_deal_money': 20,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 2,
	             	'name': '鹏程电动',
	             	'sum_deal_count': 5000,
	             	'sum_deal_money': 100000,
	             	'average_deal_money': 20,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 3,
	             	'name': '鹏运电动',
	             	'sum_deal_count': 5,
	             	'sum_deal_money': 1000,
	             	'average_deal_money': 200,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 4,
	             	'name': '鹏程电动',
	             	'sum_deal_count': 500,
	             	'sum_deal_money': 10000,
	             	'average_deal_money': 20,
	             	'sum_time': 100,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 5,
	             	'name': '鹏程电动',
	             	'sum_deal_count': 5000,
	             	'sum_deal_money': 100000,
	             	'average_deal_money': 20,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 6,
	             	'name': '鹏运电动',
	             	'sum_deal_count': 5,
	             	'sum_deal_money': 1000,
	             	'average_deal_money': 200,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 7,
	             	'name': '鹏运电动',
	             	'sum_deal_count': 5,
	             	'sum_deal_money': 1000,
	             	'average_deal_money': 200,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 8,
	             	'name': '鹏运电动',
	             	'sum_deal_count': 5,
	             	'sum_deal_money': 1000,
	             	'average_deal_money': 200,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 9,
	             	'name': '鹏运电动',
	             	'sum_deal_count': 5,
	             	'sum_deal_money': 1000,
	             	'average_deal_money': 200,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 10,
	             	'name': '鹏运电动',
	             	'sum_deal_count': 5,
	             	'sum_deal_money': 1000,
	             	'average_deal_money': 200,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 11,
	             	'name': '鹏运电动',
	             	'sum_deal_count': 5,
	             	'sum_deal_money': 1000,
	             	'average_deal_money': 200,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
	             {
	             	'id': 12,
	             	'name': '鹏运电动',
	             	'sum_deal_count': 5,
	             	'sum_deal_money': 1000,
	             	'average_deal_money': 200,
	             	'sum_time': 1000,
	             	'average_time': 0.5
	             },
		];
		var option = {
		    title: {
		        text: '营业额走势',
		        x:    'center'
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['营业额'],
		        x:   'left'
		    },
		    toolbox: {
		        show: true,
		        orient: 'vertical',
		        feature: {
		            dataZoom: {
		                yAxisIndex: 'none'
		            },
		            dataView: {readOnly: false},
		            magicType: {
		            	show: true,
		            	type: ['line', 'bar']
		            },
		            restore: {show: true},
		            saveAsImage: {show: true}
		        }
		    },
		    xAxis:  {
		        type: 'category',
		        boundaryGap: false,
		        data: ['周一','周二','周三','周四','周五','周六','周日']
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel: {
		            formatter: '{value}'
		        }
		    },
		    series: [
		        {
		            name:'营业额',
		            type:'line',
		            data:[11, 11, 15, 13, 12, 13, 10],
		            markPoint: {
		                data: [
		                    {type: 'max', name: '最大值'},
		                    {type: 'min', name: '最小值'}
		                ]
		            },
		            markLine: {
		                data: [
		                    {type: 'average', name: '平均值'}
		                ]
		            }
		        }
		    ]
		};

		$('#table_id_example').DataTable({
			info: false,
			data: data,
			columns: [
						{data: 'id'},
						{data: 'name'},
						{data: 'sum_deal_count'},
						{data: 'sum_deal_money'},
						{data: 'average_deal_money'},
						{data: 'sum_time'},
						{data: 'average_time'}
			]
		});



		/*
		 * form check
		 */
		$('#companyName').keyup(function() {
		  $(this).val($(this).val().replace(/[^\u4E00-\u9FA5\a-\z\A-\Z]/g,''));
		});
		$('.sm-input').keyup(function() {
			// console.log(00);
			$(this).val($(this).val().replace(/[^0-9]/g, ''));
		});
		dealTrend.setOption(option);
});