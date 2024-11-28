const baseUrl="http://124.93.196.45:10091";
function request(url,data=null,type="GET",cType="application/json",async=true){
	let token=localStorage.getItem("token"); 
	console.log(token);
	return new Promise((res,rej)=>{
		mui.ajax(baseUrl+url,{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:type,//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			async:async,
			headers:{
				'Content-Type':cType,
				'Authorization':url=="/prod-api/api/login"?"":localStorage.getItem("token")
			},
			success:function(data){
				res(data);
			},
			error:function(xhr,type,errorThrown){
				rej(xhr,type,errorThrown);
			},
		});
	})
}