/**
 * @fileoverview 扩展html的widget
 * @author chencha
 * @version 1.0
 * @since 2015年3月1日 15:01:07
 */
define({

	/* 【来自 jquery插件】
	 * 	Character Count Plugin - jQuery plugin
	 * 	Dynamic character count for text areas and input fields
	 *	written by Alen Grakalic
	 *	http://cssglobe.com/post/7161/jquery-plugin-simplest-twitterlike-dynamic-character-count-for-textareas
	 *
	 *	Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
	 *	Dual licensed under the MIT (MIT-LICENSE.txt)
	 *	and GPL (GPL-LICENSE.txt) licenses.
	 *
	 *	Built for jQuery library
	 *	http://jquery.com
	 *
	 */
	doCharCount: function(options) {

		// default configuration properties
		var defaults = {
			allowed: 140,
			warning: 25,
			css: 'counter',
			counterElement: 'span',
			cssWarning: 'warning',
			cssExceeded: 'exceeded',
			counterText: '剩余字数：'
		};

		var options = $.extend(defaults, options);

		function calculate(obj) {
			var count = $(obj).val().length;
			var available = options.allowed - count;
			if (available <= options.warning && available >= 0) {
				$(obj).next().addClass(options.cssWarning);
			} else {
				$(obj).next().removeClass(options.cssWarning);
			}
			if (available < 0) {
				$(obj).next().addClass(options.cssExceeded);
			} else {
				$(obj).next().removeClass(options.cssExceeded);
			}
			$(obj).next().html('上限：' + options.allowed + '，提示：' + options.warning + "，" + options.counterText + available);
		};

		this.each(function() {
			$(this).after('<' + options.counterElement + ' class="' + options.css + '">' + options.counterText + '</' + options.counterElement + '>');
			calculate(this);
			$(this).keyup(function() {
				calculate(this)
			});
			$(this).change(function() {
				calculate(this)
			});
		});

	},
	/** 类似微博输入字数限制
	 * @param {Object} $ jquery对象
	 * @param {Object} selector jq选择器
	 * @param {Object} paraOptions 附加参数，例如：{allowed:150,warning:120,counterText:'剩余字数: '}
	 */
	charCount: function($, textareaSelector, paraOptions) {


		/**把函数注入jquery框架 begin*/

		$.fn.charCount = this.doCharCount;
		/**把函数注入jquery框架 */

		/**实际执行 begin*/
		if (!!paraOptions) {
			$(textareaSelector).charCount(paraOptions);
		} else {
			$(textareaSelector).charCount();
		}
		/**实际执行 end*/

	}

});