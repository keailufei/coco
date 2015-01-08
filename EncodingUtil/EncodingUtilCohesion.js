/**
 * @fileOverview 文件描述：编码工具-内聚子模块文件
 * @author chencha
 * @version 版本1.0
 * @since 2014-08-27
 * @history
 **************************************************************
 * 修改历史
 * 序号 		日期			修改人 	修改原因
 * 1		2014-08-27	chencha 建立此模块
 * 2
 **************************************************************
 */
define([], function() {

	/**
	 * 编码工具：Cohesion（内聚）子对象
	 * @exports encodingUtil/cohesion
	 * @version 1.0
	 */
	var cohesion = {
	};

	/**
	 * @description 返回中文字符串的unicode编码
	 * @param {String} strContent  中文字符串
	 * @since 2014-07-04
	 * @author chencha
	 * @return 相应的unicode编码
	 */
	cohesion.doChinese2unicode = function(strContent) {
		var strTest = strContent.replace(/[^\u0000-\u00FF]/g, function($0) {
			return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;");
		});
		strTest = strTest.replace(/;/g, '');
		strTest = strTest.replace(/&#x/g, '\\u');
		return strTest;
	};

	/**
	 * @description 把中文unicode编码字符串转回中文
	 * @param {String} strContent unicode编码字符串
	 * @since 2014-07-04
	 * @author chencha
	 * @return 转换后的中文
	 */
	cohesion.doUnicode2chinese = function(strContent) {
		var strTest = unescape(strContent.replace(/\\u/g, '%u'));
		return strTest;
	};

	return cohesion;

});

