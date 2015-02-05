/**
 * @fileoverview 单选按钮工具类
 * @author chencha
 * @version 1.0
 * @since 2015年2月5日 15:56:48
 */
define({

	/** 返回被选中的单选按钮
	 * @param {String} radioName 单选按钮name
	 * @author chencha
	 * @since 2015年2月5日 15:41:05
	 */
	getSelectedRadio: function(radioName) {
		var radios = document.getElementsByName(radioName);
		if (!!radios && radios.length > 0) {
			var radioLength = radios.length;
			for (var i = 0; i < radioLength; i++) {
				var oneRadio = radios[i];
				if (oneRadio.checked) {
					return oneRadio;
				}
			}

		} else {
			alert("未找到单选按钮：" + radioName);
		}
	},

	/** 返回被选中的单选按钮的值
	 * @param {String} radioName  单选按钮name
	 * @author chencha
	 * @since 2015年2月5日 15:41:17
	 */
	getSelectedRadioValue: function(radioName) {
		var selectedRadio = this.getSelectedRadio(radioName);
		return selectedRadio.value;
	}


});
