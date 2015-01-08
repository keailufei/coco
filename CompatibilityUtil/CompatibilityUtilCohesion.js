/**
 * @fileOverview 文件描述：兼容性工具-内聚子模块文件
 * @author chencha
 * @version 版本1.0
 * @since 2014-08-26
 * @history
 **************************************************************
 * 修改历史
 * 序号 		日期			修改人 	修改原因
 * 1		2014-08-26	chencha 建立此模块
 * 2
 **************************************************************
 */
define([], function() {

	/**
	 * 兼容性工具：Cohesion（内聚）子对象
	 * @exports compatibilityUtil/cohesion
	 * @version 1.0
	 */
	var cohesion = {
	};

	/**
	 * @description 返回当前浏览器的字符串
	 * @since 2014-07-04
	 * @return void
	 */
	cohesion.getExplorer = function() {
		var explorer = window.navigator.userAgent;
		//ie
		if (explorer.indexOf("MSIE") >= 0) {
			return ("ie");
		}
		//firefox
		else if (explorer.indexOf("Firefox") >= 0) {
			return ("Firefox");
		}
		//Chrome
		else if (explorer.indexOf("Chrome") >= 0) {
			return ("Chrome");
		}
		//Opera
		else if (explorer.indexOf("Opera") >= 0) {
			return ("Opera");
		}
		//Safari
		else if (explorer.indexOf("Safari") >= 0) {
			return ("Safari");
		}
	};

	/**
	 * @description alert当前的浏览器
	 * @author 陈长安
	 * @since 2014-07-04
	 * @return void
	 */
	cohesion.alertExplorer = function() {
		alert(cohesion.getExplorer());
	};

	return cohesion;

});

