define(function() {
	
	/**功能：返回列表类对象是否有效（对象有效、有length属性、长度大于-1）
	 * 入参：列表类对象
	 * 作者：陈长安
	 * 创建时间：2014-07-011
	 * 修改时间：*/
	function isListValid(list) {
		if (!!list) {
			if (list.length == 0) {
				return true;
			} else {
				if (!!list.length && list.length > -1) {
					return true;
				} else {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	}

	/**功能：返回目标值是否在列表中存在（参数无效时返回undefined）
	 * 入参：（目标值，列表，目标值与列表中vo比较哪个属性（可选））
	 * 作者：陈长安
	 * 创建时间：2014-07-011
	 * 修改时间：*/
	function isInList(target, list, propertyName) {
		var myListUtil = this;
		if (myListUtil.isListValid(list)) {
			var length = list.length;
			for (var i = 0; i < length; i++) {
				var vo = list[i];
				if (!!propertyName) {
					var voValue = vo[propertyName];
					var targetValue = target[propertyName];
				} else {
					var voValue = vo;
					var targetValue = target;
				}
				if (voValue == targetValue && voValue != undefined) {//存在
					return true;
				}
			}
			//遍历后没找到
			return false;
		} else {
			alert("bad inputs");
			return undefined;
		}
	}

	/**功能：过滤出：在列表A中、不在列表B中的对象们
	 * 入参：（列表A，列表B，比较的值对应列表vo中的属性名（可选））
	 * 作者：陈长安
	 * 创建时间：2014-07-011
	 * 修改时间：*/
	function filterInANotInB(listA, listB, propertyName) {
		var myListUtil = this;
		var res = [];
		if (myListUtil.isListValid(listA) && myListUtil.isListValid(listB)) {
			var lengthA = listA.length;
			//遍历列表A（体现在列表A中）
			for (var idxA = 0; idxA < lengthA; idxA++) {
				var vo = listA[idxA];
				var isInB = myListUtil.isInList(vo, listB, propertyName);
				if (isInB == false) {//没在列表B中
					res.push(vo);
				}
			}//end of 遍历列表A
		} else {
			alert("bad inputs");
		}
		return res;
	}
	
	/**功能：过滤出2个列表中同时存在的
	 * 入参：（列表A，列表B，比较的值对应列表vo中的属性名（可选））
	 * 作者：陈长安
	 * 创建时间：2014-11-05
	 * 修改时间：*/
	function filterBothExist(listA, listB, propertyName) {
		var myListUtil = this;
		var res = [];
		if (myListUtil.isListValid(listA) && myListUtil.isListValid(listB)) {
			var lengthA = listA.length;
			//遍历列表A（体现在列表A中）
			for (var idxA = 0; idxA < lengthA; idxA++) {
				var vo = listA[idxA];
				var isInB = myListUtil.isInList(vo, listB, propertyName);
				if (isInB == true) {//在列表B中
					res.push(vo);
				}
			}//end of 遍历列表A
		} else {
			alert("bad inputs");
		}
		return res;
	}
	
	//从list中取出第一个属性值对应的对象
	//add by chencha in 2014年11月11日 14:32:32
	function getObjInList(list,propertyName,propertyValue){
		var myListUtil = this;
		if(myListUtil.isListValid(list)){
			var length=list.length;
			for(var i=0;i<length;i++ ){
				var obj=list[i];
				if(obj[propertyName]==propertyValue){
					return obj;
				}
				
			}
		}
		return null;
	}
	
	// 从list中取出第一个属性值对应的对象的目标属性值
	//add by chencha in 2014年11月11日 14:32:32
	function getTargetValue(list,propertyName,propertyValue,targetProperty){
		var obj=this.getObjInList(list,propertyName,propertyValue);
		var res=undefined;
		if(!!obj){
			res=obj[targetProperty];
		}
		return res;	
	}
	

	return {
		isListValid : isListValid,
		isInList : isInList,
		filterInANotInB : filterInANotInB,
		filterBothExist:filterBothExist,
		getObjInList:getObjInList,
		getTargetValue:getTargetValue
	};
});
