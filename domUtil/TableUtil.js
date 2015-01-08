

define(function() {

	//���ر�����
	function getHeadTr(headNames) {
		var headTr = document.createElement('tr');//������
		for ( var i = 0; i < headNames.length; i++) {
			var headName = headNames[i];
			var oneTh = document
					.createElement('th');//���塰���ⵥԪ��
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
