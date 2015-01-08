define(function() {

	/**功能：返回当前选中的option（包含text和value）
	 * 入参：下拉框控件
	 * 作者：陈长安
	 * 创建时间：2014-07-08
	 * 修改时间：*/
	function getSelectedOption(selectWidegt) {
		var mySelect = selectWidegt;
		var res = mySelect.options[mySelect.selectedIndex];
		return res;
	}

	/**功能：返回当前选中的option的下标
	 * 入参：下拉框控件
	 * 作者：陈长安
	 * 创建时间：2014-07-08
	 * 修改时间：*/
	function getSelectedIndex(selectWidegt) {
		return selectWidegt.selectedIndex;

	}

	/**功能：替换下拉框的options
	 * 入参：（下拉框控件，新options）
	 * 作者：陈长安
	 * 创建时间：2014-07-08
	 * 修改时间：*/
	function replaceOptions(selectWidegt, targetOptions) {
		//去掉旧的options
		var optionsLength = selectWidegt.options.length;
		for (var j = 0; j < optionsLength; j++) {
			selectWidegt.remove(0);
		}
		//添加新的options
		var newLength = targetOptions.length;
		for (var k = 0; k < newLength; k++) {
			//新option的取值
			var vo = targetOptions[k];
			var text = vo.text;
			var value = vo.value;
			//新option是否选中
			var option = new Option(text, value);
			if (vo.selected) {
				option.selected = true;
			}
			//添加一个新option
			selectWidegt.options.add(option);
		}
	}

	/**功能：替换下拉框为唯一指定的文本和内容
	 * 入参：（下拉框控件，文本，内容）
	 * 作者：陈长安
	 * 创建时间：2014-07-08
	 * 修改时间：*/
	function replaceOptionsToOne(selectWidegt, text, value) {
		var mySelectWidegtUtil = this;
		var oneOption = new Option(text, value);
		var options = [oneOption];
		mySelectWidegtUtil.replaceOptions(selectWidegt, options);
	}

	/**功能：移除指定下标的option
	 * 入参：（下拉框控件，option下标）
	 * 作者：陈长安
	 * 创建时间：2014-07-08
	 * 修改时间：*/
	function removeOptionByIndex(selectWidegt, index) {
		selectWidegt.options.remove(index);
	}

	function removeAllOptions(selectItem) {
		var length = selectItem.options.length;
		for (var i = 0; i < length; i++) {
			selectItem.options.remove(0);
		}

	}

	//下拉框用默认值（有此值就选上，没有此值就自己构造一个）
	function addDefaultOption(selectItem, defaultValue, text) {	
		var isValueExist=this.isValueExist(selectItem, defaultValue);
		if(isValueExist!=true){			
			var op = document.createElement("option");
			op.value = defaultValue;
			op.text = text;
			selectItem.options.add(op);		
		}		
		selectItem.value = defaultValue;
	}
	
	//给定值已经在下拉框中
	function isValueExist(selectItem,targetValue){		
		var optionsLength = selectItem.options.length;
		for ( var j = 0; j < optionsLength; j++) {
			var option=selectItem.options[j];
			var optionValue=option.value;
			if(optionValue==targetValue){
				return true;
			}
			
		}
		return false;
	}
	
	

	return {
		getSelectedOption : getSelectedOption,
		getSelectedIndex : getSelectedIndex,
		replaceOptions : replaceOptions,
		replaceOptionsToOne : replaceOptionsToOne,
		removeOptionByIndex : removeOptionByIndex,
		removeAllOptions : removeAllOptions,
		addDefaultOption:addDefaultOption,
		isValueExist:isValueExist
	};
});
