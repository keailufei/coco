/**
 * @fileoverview 鼠标工具文件
 * @author chencha
 * @version 1.0
 * @since 2015年2月27日
 */
define({


	/** jQuery展示鼠标的坐标
	 * @param {Object} $
	 * @param {Object} selector 页面中展示鼠标坐标的span选择器
	 * @param {Object} coordinatesType 鼠标坐标类型（"screen","client","page"）
	 */
	showMouseCoordinates: function($, selector, coordinatesType) {
		/**定义函数*/
		//展示鼠标在屏幕中的坐标
		var doShowScreenCoordinates = function(e) {
			x = e.screenX;
			y = e.screenY;
			$(selector).text("X:" + x + ", Y:" + y);
		};
		//展示鼠标在窗口客户区中的坐标
		var doShowClientCoordinates = function(e) {
			x = e.clientX;
			y = e.clientY;
			$(selector).text("X:" + x + ", Y:" + y);
		};
		//展示鼠标在窗口页面中的坐标
		var doShowPageCoordinates = function(e) {
			x = e.pageX;
			y = e.pageY;
			$(selector).text("X:" + x + ", Y:" + y);
		};
		/**绑定事件*/
		$(document).mousemove(function(e) {
			switch (coordinatesType) {
				case "screen":
					doShowScreenCoordinates(e);
					break;
				case "client":
					doShowClientCoordinates(e);
					break;
				case "page":
					doShowPageCoordinates(e);
					break;
				default:
					//不支持的坐标类型，do nothing
			}
		});

	}

});