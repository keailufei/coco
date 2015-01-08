define(function() { /**功能：返回当前页面的url
	 * 入参：无
	 * 作者：陈长安
	 * 创建时间：2014-07-04
	 * 修改时间：*/
	var getURL = function() {
		return document.URL;//大写哦！
	};

	/**功能：返回url参数数组，分别有name和value个属性
	 * 入参：URL字符串
	 * 作者：陈长安
	 * 创建时间：2014-07-04
	 * 修改时间：*/
	var getURLParams = function(url) {
		var params = [];
		if (url.indexOf('?') > -1) {
			var a1 = url.split('?');
			var a2 = a1[1].split('&');
			var a3 = '';
			for (var i = 0; i < a2.length; i++) {
				a3 = a2[i].split('=');
				if (a3.length == 2) {
					params.push({
						'name' : a3[0],
						'value' : a3[1]
					})
				}
			}
		}
		return params;
	};

	/**功能：返回URL对象，属性是URL的参数们
	 * 入参：URL字符串
	 * 作者：陈长安
	 * 创建时间：2014-07-04
	 * 修改时间：*/
	var getURLObject = function(url) {
		var URLUtil = this;
		var res = {};
		var urlParams = URLUtil.getURLParams(url);
		for (var i = 0; i < urlParams.length; i++) {
			var oneParam = urlParams[i];
			var name = oneParam.name;
			var value = oneParam.value;
			res[name] = value;
		};
		return res;
	};

	/**功能：返回URL中的指定参数
	 * 入参：URL字符串，参数名
	 * 作者：陈长安
	 * 创建时间：2014-07-04
	 * 修改时间：*/
	var getUrlParamByName = function(url, paramName) {
		var URLUtil = this;
		var urlObj = URLUtil.getURLObject(url);
		var res = urlObj[paramName];
		return res;
	};
	
    return { 
       getUrlParamByName:getUrlParamByName,
       getURLObject:getURLObject,
       getURLParams:getURLParams,
       getURL:getURL
    }; 
}); 
