define({
//cca：测试git分支 in 2019年5月13日 21:29:20

	/** 返回列表类对象是否有效（对象有效、有length属性、长度大于-1）
	 * @author chencha
	 * @since 2014-07-011
	 * @param {Object} list 列表类对象
	 */
	isListValid: function(list) {
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
	},


	/** 返回目标值是否在列表中存在（参数无效时返回undefined）
	 * @author chencha
	 * @since 2014-07-011
	 * @param {Object} target 目标值
	 * @param {Object} list 列表
	 * @param {Object} propertyName 目标值与列表中vo比较哪个属性（可选）
	 */
	isInList: function(target, list, propertyName,isPropertyOnlyForList) {
		var myListUtil = this;
		if (myListUtil.isListValid(list)) {
			var length = list.length;
			for (var i = 0; i < length; i++) {
				var vo = list[i];
				if (!!propertyName) {//指明了属性
					var voValue = vo[propertyName];					
					if(isPropertyOnlyForList==true){
						var targetValue = target;
					}else{
						var targetValue = target[propertyName];
					}					
				} else {
					var voValue = vo;
					var targetValue = target;
				}
				if (voValue == targetValue && voValue != undefined) { //存在
					return true;
				}
			}
			//遍历后没找到
			return false;
		} else {
			alert("bad inputs");
			return undefined;
		}
	},


	/** 过滤出：在列表A中、不在列表B中的对象们
	 * @author chencha
	 * @since 2014-07-011
	 * @param {Object} listA
	 * @param {Object} listB
	 * @param {Object} propertyName 比较的值对应列表vo中的属性名（可选）
	 */
	filterInANotInB: function(listA, listB, propertyName) {
		var myListUtil = this;
		var res = [];
		if (myListUtil.isListValid(listA) && myListUtil.isListValid(listB)) {
			var lengthA = listA.length;
			//遍历列表A（体现在列表A中）
			for (var idxA = 0; idxA < lengthA; idxA++) {
				var vo = listA[idxA];
				var isInB = myListUtil.isInList(vo, listB, propertyName);
				if (isInB == false) { //没在列表B中
					res.push(vo);
				}
			} //end of 遍历列表A
		} else {
			alert("bad inputs");
		}
		return res;
	},


	/** 过滤出2个列表中同时存在的
	 * @author chencha
	 * @since 2014-07-011
	 * @param {Object} listA 列表A
	 * @param {Object} listB 列表B
	 * @param {Object} propertyName 比较的值对应列表vo中的属性名（可选）
	 */
	filterBothExist: function(listA, listB, propertyName) {
		var myListUtil = this;
		var res = [];
		if (myListUtil.isListValid(listA) && myListUtil.isListValid(listB)) {
			var lengthA = listA.length;
			//遍历列表A（体现在列表A中）
			for (var idxA = 0; idxA < lengthA; idxA++) {
				var vo = listA[idxA];
				var isInB = myListUtil.isInList(vo, listB, propertyName);
				if (isInB == true) { //在列表B中
					res.push(vo);
				}
			} //end of 遍历列表A
		} else {
			alert("bad inputs");
		}
		return res;
	},


	/** 从list中取出第一个属性值对应的对象
	 * @author chencha
	 * @since 2014年11月11日 14:32:32
	 * @param {Object} list
	 * @param {Object} propertyName
	 * @param {Object} propertyValue
	 */
	getObjInList: function(list, propertyName, propertyValue) {
		var myListUtil = this;
		if (myListUtil.isListValid(list)) {
			var length = list.length;
			for (var i = 0; i < length; i++) {
				var obj = list[i];
				if (obj[propertyName] == propertyValue) {
					return obj;
				}

			}
		}
		return null;
	},


	/** 从list中取出第一个属性值对应的对象的目标属性值
	 *@author chencha
	 * @since 2014年11月11日 14:32:32
	 * @param {Object} list
	 * @param {Object} propertyName
	 * @param {Object} propertyValue
	 * @param {Object} targetProperty
	 */
	getTargetValue: function(list, propertyName, propertyValue, targetProperty) {
		var obj = this.getObjInList(list, propertyName, propertyValue);
		var res = undefined;
		if (!!obj) {
			res = obj[targetProperty];
		}
		return res;
	}


	// return {
	// isListValid: isListValid,
	// isInList: isInList,
	// filterInANotInB: filterInANotInB,
	// filterBothExist: filterBothExist,
	// getObjInList: getObjInList,
	// getTargetValue: getTargetValue
	// };
});
