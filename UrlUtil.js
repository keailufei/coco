/**
 * @fileoverview URL工具文件
 * @author chencha
 * @version 2.0
 * @since 2015年1月30日 14:07:09
 * @history
 **************************************************************
 * 修改历史
 * 序号			日期		修改人		修改原因
 * 1
 * 2
 **************************************************************
 */
define({
	/**
	 * 返回当前页面的url
	 * @author chencha
	 * @since 2014-07-04
	 *
	 */
	getURL: function() {
		return document.URL; //大写哦！
	},


	/** 返回url参数数组，分别有name和value个属性
	 * @param {String} url - url字符串
	 * @author chencha
	 * @since 2014-07-04
	 *
	 */
	getURLParams: function(url) {
		var params = [];
		if (url.indexOf('?') > -1) {
			var a1 = url.split('?');
			var a2 = a1[1].split('&');
			var a3 = '';
			for (var i = 0; i < a2.length; i++) {
				a3 = a2[i].split('=');
				if (a3.length == 2) {
					params.push({
						'name': a3[0],
						'value': a3[1]
					})
				}
			}
		}
		return params;
	},


	/** 返回URL对象，属性是URL的参数们
	 * @param {String} url URL字符串
	 * @author chencha
	 * @since 2014-07-04
	 */
	getURLObject: function(url) {
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
	},


	/** 返回URL中的指定参数
	 * @param {String} url URL字符串
	 * @param {String} paramName 参数名
	 * @author chencha
	 * @since 2014-07-04
	 */
	getUrlParamByName: function(url, paramName) {
		var URLUtil = this;
		var urlObj = URLUtil.getURLObject(url);
		var res = urlObj[paramName];
		return res;
	}
});
