define(function() {
	/**功能：返回去掉左右空格的字符串
	 *入参：目标字符串
	 * 作者：陈长安
	 * 创建时间：2014-07-07
	 * 修改时间：*/
	function trim(str) {
		var regExp = /(^\s*)|(\s*$)/g;
		//验证左右空格的正则表达式
		str = str.replace(regExp, "");
		//去掉字符串的左右空格
		return str;
	}
	
	　/**删除左边的空格*/
　　 function ltrim(str){
　　     return str.replace(/(^\s*)/g,"");
　　 }
	
	/**删除右边的空格*/
　　 function rtrim(str){ 
　　     return str.replace(/(\s*$)/g,"");
　　 }
	

	return {
		trim : trim,
		ltrim:ltrim,
		rtrim:rtrim
	};
});
