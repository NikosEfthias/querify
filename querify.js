function querify(obj){
var str="";
	try{
		for(i in obj){
			if(!i)continue;
			str+="&"+i+"="+obj[i];
		}
		str=str.replace(/^&/,"");
		return str;
	}
	catch(e){
		console.error("Invalid Object");
		return !1;
	}
}