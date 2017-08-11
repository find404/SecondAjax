    /**
     * 自用AJAX 2.0
     * zhy	find404@foxmail.com
     * 2017年8月11日 11:58:53
     */
	var SecondAjax = function(key){
			var DArray = new Array();
			if(key){
				DArray.push(VariousSet[key]);
			}else{
				DArray = VariousSet;
			}
			$.each(DArray ,function(k ,v) {
				FunctionName = v.replace(/\//g,'');
				var  func	 = eval(FunctionName);
				if(func.Operation == undefined)	func.Operation = 'post';
				$[func.Operation](v, func.Condition,function(data) {
					if(data){
						if(data.ret==100){
							func.SuccessAction(data);
						}else{
							if(typeof(eval(func.NullAction))=='function'){
									func.NullAction();
							}else{
                   alert(数据有误！');
							}
						}
					}else{
						if(typeof(eval(func.UnlinkAction))=='function'){
								func.UnlinkAction();
						}else{
                alert('网络错误！');
						}
					}
				});
			})
	};
  
  
  
  
  
  
  
  
  页面调用
          
  				var VariousSet= new Array('/User/orderList');
          //定义数据集合
  
  
				var UserorderList = {
						Condition : {
										order_sn: '',
										order_status: '',
										page:1,
										page_size:20
						},
						SuccessAction : function(data){
												var html = '';
												if($.isEmptyObject(data.data.data) == false){
													$.each(data.data.data ,function(k ,v) {
														if(v){
															html += '<p>';															
															html += '</p>';
														}
													})
														$('.p').html(html);
												}else{
													  $('.p').html('没有了');
											}
										},
				};  
  
        //初始化
  				SecondAjax();
  
  
          //页面指定调用，指定ajax的时候，传入，之前定义好的key，就可以了。
  				SecondAjax();
  
  
