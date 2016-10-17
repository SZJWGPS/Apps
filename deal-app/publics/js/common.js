$(document).ready(function() {
		/*
	   *
	   * 引用laydate 控件
	   */
	  var startDate = {
	    elem:   '#startDate',
	    format: 'YYYY-MM-DD hh:mm:ss',
	    istime: true,
	    min: '2012-01-01 ',
	    max: laydate.now(),
	    choose: function(datas) {
	        //console.log(datas);
	        
	        var maxDate = adddays(new Date(datas), 30);

	        // console.log(maxDate);
	        var flag = new Date(laydate.now()).getTime();

	        if (maxDate.sumtimes > flag) 
	        {
	        	endDate.max = laydate.now();
	        }
	        else
	        {
	        	endDate.max = maxDate.endDate;
	        }
	        endDate.min = datas;
	    }
	  };
	  var endDate = {
	    elem:   '#endDate',
	    format: 'YYYY-MM-DD hh:mm:ss',
	    istime: true,
	    min: '2015-01-01',
	    max: laydate.now()
	  };
	  laydate(startDate);
	  laydate(endDate);


	  /*
	   * form script
	   */
		$('form').submit(function () {
		  var startDate = $('#startDate').val(),
		      endDate  = $('#endDate').val();
		      // startTime = $('#startTime').val(),
		      // endTime = $('#endTime').val();

		  if(startDate > endDate)
		  {
				alert('开始日期不能晚于结束日期，请重新选择或输入！');
				return false;
		  }
		  if(startDate.length == 0 || endDate.length == 0)
		  {
				alert('请输入正确的日期格式，如：2016-01-01');
				return false;
		  }
		  /*if(startTime>endTime){
		     alert('开始时间不能晚于结束时间，请重新选择！');
		     return false;
		   }  */
		  if ($('#staticType option:selected').text() == '企业' && $('#companyName').length > 0) {
		  	//$('#companyName').val() == ''
		  	alert('企业名称不能为空');
		  }
		  return false;
		  // return true;
		});

	// input onkeyup="value=value.replace(/[^0-9]/g,'')" 
	// onpaste="value=value.replace(/[^0-9]/g,'')" 
	// oncontextmenu = "value=value.replace(/[^0-9]/g,'')"
	/*
	 * 计算指定日期n天后的日期
	 */
	function adddays(starDate, interval) {  
	    var now = new Date(starDate);  
	    var newdate = new Date();  
	    var sumtimes = now.getTime()+(interval*24*60*60*1000);  
	    newdate.setTime(sumtimes);  
	    
	    var endDate = "'" + newdate.getFullYear() + "-" + (newdate.getMonth()+1) + "-" + newdate.getDate() + "'";
	    console.log(endDate);
	    return {
	    	sumtimes: sumtimes,
	    	endDate: endDate
	};
	    // alert(endDate);  
	}
});