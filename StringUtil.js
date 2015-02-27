/**
 * @fileoverview 字符串工具文件
 * @author chencha
 * @version 2.0
 * @since 2015年1月30日
 */
define({

	/** 返回去掉左右空格的字符串
	 * @param {String} str 目标字符串
	 * @author chencha
	 * @since 2014-07-07
	 */
	trimLAndR: function(str) {
		var regExp = /(^\s*)|(\s*$)/g;
		//验证左右空格的正则表达式
		str = str.replace(regExp, "");
		//去掉字符串的左右空格
		return str;
	},

	/** 去掉字符串全部空格
	 * @param {String} str 目标字符串
	 * @author chencha
	 * @since 2014-07-07
	 */
	trimAll: function(str) {
		var regExp = /\s/g;
		str = str.replace(regExp, "");
		return str;
	},

	/** 删除左边的空格
	 * @param {String} str 目标字符串
	 * @author chencha
	 */
	ltrim: function(str) {
		return str.replace(/(^\s*)/g, "");
	},


	/** 删除右边的空格
	 * @param {String} str 目标字符串
	 * @author chencha
	 */
	rtrim: function(str) {

		return str.replace(/(\s*$)/g, "");
	},


	/** 小写字母——>大写字母
	 * @param {String} str 目标字符串
	 * @param {String} type 是否采取本地转换格式，不传也能用
	 * @author chencha
	 */
	getUpCase: function(str, type) {

		type = type || "locale"; //是否采取本地转换格式

		return type === "locale" && str.toLocaleUpperCase() || str.toUpperCase(); //返回转换后的值
	},
	
	/**清除字符串换行符
	 * @param {String} str
	 * @author chencha
	 * @since 2015年2月27日 18:55:09
	 */
	removeLineBreak: function(str) {
		var res = "",
			len = 0;
		res = str.replace(/\r\n/g, "\\n").replace(/\n/g, "");
		return res;
	}


});