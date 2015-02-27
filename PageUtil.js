/**
 * @fileoverview 页面工具文件
 * @author chencha
 * @version 1.0
 * @since 2015年2月27日 19:05:22
 */
define({


	/**jQuery实现iframe自适应高度（必须用在$(document).ready(function(){})中？）
	 * @param {Object} $
	 * @param {Object} iframeSelector
	 * @author chencha
	 * @since 2015年2月27日 19:10:54
	 */
	iframeAutoH: function($, iframeSelector) {
		$(iframeSelector).load(function() {
			var vHeight = $(this).contents().find("body").height() + 32;
			$(this).height(vHeight < 300 ? 300 : vHeight);
		});
	},
	/** 2个div自适应相同高度（offsetHeight虽不是W3C标准属性，但广泛被浏览器支持．）
	 * @param {String} domId1
	 * @param {String} domId2
	 * @author chencha
	 * @since 2015年2月27日 19:21:51
	 */
	divAutoHeight: function(domId1, domId2) {
		var getDomById = function(id) {
			return document.getElementById(id);
		};
		if (getDomById(domId1).offsetHeight >= getDomById(domId2).offsetHeight) {
			getDomById(domId2).style.height = getDomById(domId1).offsetHeight + "px";
		} else {
			getDomById(domId1).style.height = getDomById(domId2).offsetHeight + "px";
		}
	}



});