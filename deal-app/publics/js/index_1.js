$(document).ready(function() {
	var deal_summary_pie = echarts.init(document.getElementById('deal-summary-pie'));

	var deal_summary_pie_opt = {
    title : {
        text: '单笔营业额分布',
        // subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        // left: 'left',
        x: 'left',
        data: ['0-19','20-39','40-59','60-79','80-99', '>100']
    },
    toolbox: {
        show : true,
        orient: 'vertical',
        feature : {
            mark : {show: false},
            // dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name: '单笔营业额',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'0-19'},
                {value:310, name:'20-39'},
                {value:234, name:'40-59'},
                {value:135, name:'60-79'},
                {value:1548, name:'80-99'},
                {value:1548, name:'>100'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
	};

	/*
   *
   * 引用laydate 控件
   */
  var startDate = {
    elem:   '#startDate',
    format: 'YYYY-MM-DD',
    min: '2012-01-01',
    max: laydate.now(),
    choose: function(datas) {
        // console.log(typeof(datas));
        endDate.min = datas;
        endDate.start = datas;
    }
  }
  var endDate = {
    elem:   '#endDate',
    format: 'YYYY-MM-DD',
    min: '2015-01-01',
    max: laydate.now()
  }
  laydate(startDate);
  laydate(endDate);

  /*
   * datatable 
   */
  var data = [
               {
               		'id': 1,
               		'taxi_no': '粤B8888',
               		'price': '2.4',
               		'distance': '40',
               		'task_amount': '300',
               		'taxi_company': '鹏程交通',
               		'taxi_type': '红的',
               		'sumDistance': '9000'
               },
               {
               		'id': 2,
               		'taxi_no': '粤B8998',
               		'price': '2.4',
               		'distance': '80',
               		'task_amount': '500',
               		'taxi_company': '鹏程交通',
               		'taxi_type': '红的',
               		'sumDistance': '900'
               },
               {
               		'id': 3,
               		'taxi_no': '粤B5998',
               		'price': '2.4',
               		'distance': '100',
               		'task_amount': '550',
               		'taxi_company': '前海交通',
               		'taxi_type': '绿的',
               		'sumDistance': '1000'
               },
               {
               		'id': 4,
               		'taxi_no': '粤B5698',
               		'price': '2.4',
               		'distance': '200',
               		'task_amount': '750',
               		'taxi_company': '前海交通',
               		'taxi_type': '绿的',
               		'sumDistance': '300'
               },
               {
               		'id': 5,
               		'taxi_no': '粤B5998',
               		'price': '2.4',
               		'distance': '100',
               		'task_amount': '550',
               		'taxi_company': '前海交通',
               		'taxi_type': '绿的',
               		'sumDistance': '1000'
               },
               {
               		'id': 1,
               		'taxi_no': '粤B8888',
               		'price': '2.4',
               		'distance': '40',
               		'task_amount': '300',
               		'taxi_company': '鹏程交通',
               		'taxi_type': '红的',
               		'sumDistance': '9000'
               },
               {
               		'id': 2,
               		'taxi_no': '粤B8998',
               		'price': '2.4',
               		'distance': '80',
               		'task_amount': '500',
               		'taxi_company': '鹏程交通',
               		'taxi_type': '红的',
               		'sumDistance': '900'
               },
               {
               		'id': 3,
               		'taxi_no': '粤B5998',
               		'price': '2.4',
               		'distance': '100',
               		'task_amount': '550',
               		'taxi_company': '前海交通',
               		'taxi_type': '绿的',
               		'sumDistance': '1000'
               },
               {
               		'id': 4,
               		'taxi_no': '粤B5698',
               		'price': '2.4',
               		'distance': '200',
               		'task_amount': '750',
               		'taxi_company': '前海交通',
               		'taxi_type': '绿的',
               		'sumDistance': '300'
               },
               {
               		'id': 5,
               		'taxi_no': '粤B5998',
               		'price': '2.4',
               		'distance': '100',
               		'task_amount': '550',
               		'taxi_company': '前海交通',
               		'taxi_type': '绿的',
               		'sumDistance': '1000'
               },
               {
               		'id': 1,
               		'taxi_no': '粤B8888',
               		'price': '2.4',
               		'distance': '40',
               		'task_amount': '300',
               		'taxi_company': '鹏程交通',
               		'taxi_type': '红的',
               		'sumDistance': '9000'
               },
               {
               		'id': 2,
               		'taxi_no': '粤B8998',
               		'price': '2.4',
               		'distance': '80',
               		'task_amount': '500',
               		'taxi_company': '鹏程交通',
               		'taxi_type': '红的',
               		'sumDistance': '900'
               },
               {
               		'id': 3,
               		'taxi_no': '粤B5998',
               		'price': '2.4',
               		'distance': '100',
               		'task_amount': '550',
               		'taxi_company': '前海交通',
               		'taxi_type': '绿的',
               		'sumDistance': '1000'
               },
               {
               		'id': 4,
               		'taxi_no': '粤B5698',
               		'price': '2.4',
               		'distance': '200',
               		'task_amount': '750',
               		'taxi_company': '前海交通',
               		'taxi_type': '绿的',
               		'sumDistance': '300'
               },
               {
               		'id': 5,
               		'taxi_no': '粤B5998',
               		'price': '2.4',
               		'distance': '100',
               		'task_amount': '550',
               		'taxi_company': '前海交通',
               		'taxi_type': '绿的',
               		'sumDistance': '1000'
               }
  	];
  	$('#table_id_example').DataTable({
  		info: false,
  		data: data,
  		columns: [
  					{data: 'id'},
  					{data: 'taxi_no'},
  					{data: 'price'},
  					{data: 'distance'},
  					{data: 'task_amount'},
  					{data: 'taxi_company'},
  					{data: 'taxi_type'},
  					{data: 'sumDistance'}
  		]
  	});
  /*
   * form check
   */
  $('#singleDeal > input').keyup(function() {
    $(this).val($(this).val().replace(/[^0-9]/g,''));
  });
  /*
   * echart data
   */
  deal_summary_pie.setOption(deal_summary_pie_opt);
});