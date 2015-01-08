

define(function() {

	//返回标题行
	function getHeadTr(headNames) {
		var headTr = document.createElement('tr');//定义行
		for ( var i = 0; i < headNames.length; i++) {
			var headName = headNames[i];
			var oneTh = document
					.createElement('th');//定义“标题单元格”
			var content = document
					.createTextNode(headName);
			oneTh.appendChild(content);
			headTr.appendChild(oneTh);
		}
		return headTr;
	}


	return {
		getHeadTr : getHeadTr,
		getSelectedIndex : getSelectedIndex,
		replaceOptions : replaceOptions,
		replaceOptionsToOne : replaceOptionsToOne,
		removeOptionByIndex : removeOptionByIndex,
		removeAllOptions : removeAllOptions,
		addDefaultOption:addDefaultOption,
		isValueExist:isValueExist
	};
});
