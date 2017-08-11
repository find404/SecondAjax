# SecondAjax
自用AJAX2.0
 
第一 版本的封装AJAX，只用于相同AJAX的，增删改，前端展示是个弱点，
第二 版本的AJAX，着重于查询功能，



 
  用法  eg:
          
  					var VariousSet= new Array('/User/orderList');
            //定义  链接和方法名
            var UserorderList = {
            
						Condition : {
										order_sn: '',
										order_status: '',
										page:1,
										page_size:20
						},
            //AJAX传递值
						SuccessAction : function(data){
												var html = '';
												if($.isEmptyObject(data.data) == false){
													$.each(data.data ,function(k ,v) {
														if(v){
															html += '<div class="goods-item">';													
															html += '</div>';
														}
													})
														$('.content-slide').html(html);
												}else{
														$('.loading').html('没有了~~');
											}
										},
              //替换页面。
				};
