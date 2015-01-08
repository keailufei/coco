define(function() {
	/**功能：获取系统日期字符串（例如：""20140728""）
	 * 入参：无
	 * 作者：陈长安
	 * 创建时间：2014-07-28
	 * 修改时间：*/
	function getTodayYYYYMMDD() {
		var day = new Date();
		var Year = 0;
		var Month = 0;
		var Day = 0;
		var CurrentDate = "";
		Year = day.getFullYear();
		//支持IE和火狐浏览器.
		Month = day.getMonth() + 1;
		Day = day.getDate();
		CurrentDate += Year;
		if (Month >= 10) {
			CurrentDate += Month;
		} else {
			CurrentDate += "0" + Month;
		}
		if (Day >= 10) {
			CurrentDate += Day;
		} else {
			CurrentDate += "0" + Day;
		}
		return CurrentDate;
	}

	/**功能：判断日期字符串（格式“yyyymmdd”）是否合法（例如："20141121"是true，"dsfdfsd"是false）
	 * 入参：无
	 * 作者：陈长安
	 * 创建时间：2014-07-07
	 * 修改时间：*/
	function ifValidDate(dateStr) {//格式：yyyymmdd
		var ifDate = false;
		if (!!dateStr && dateStr.length == 8) {
			var year = parseInt(dateStr.substring(0, 4), 10);
			var month = parseInt(dateStr.substring(4, 6), 10);
			var day = parseInt(dateStr.substring(6, 8), 10);
			if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
				var t = new Date(year, month - 1, day);
				if (year == t.getFullYear() && (month == (t.getMonth() + 1)) && day == t.getDate()) {
					ifDate = true;
				}
			}
		}
		return ifDate;
	}

	/**功能：获取系统日期字符串（例如："2014年7月7日 星期一"）
	 * 入参：无
	 * 作者：陈长安
	 * 创建时间：2014-07-07
	 * 修改时间：*/
	function getTodayStr() {
		var now = new Date();
		//获取日期对象
		var year = now.getYear();
		//获取年
		var month = now.getMonth();
		//获取月
		var date = now.getDate();
		//获取日
		var day = now.getDay();
		//获取星期
		month = month + 1;
		var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
		var week = arr_week[day];
		//返回系统日期
		var time = year + "年" + month + "月" + date + "日 " + week;
		return time;
	}

	/**功能：获取系统当前时间字符串（例如："17:52"）
	 * 入参：无
	 * 作者：陈长安
	 * 创建时间：2014-07-07
	 * 修改时间：*/
	function getNowTimeStr() {
		//获取Date对象的一个实例
		var nowDate = new Date();
		//获取小时数
		var hour = nowDate.getHours();
		//获取分钟数
		var minu = nowDate.getMinutes();
		//返回系统时间
		var time = hour + ":" + minu;
		return time;
	}

	/**功能：将yyyy-mm-dd格式的字符串转化为Date类型对象
	 * 入参：
	 * 作者：陈长安
	 * 创建时间：2014-07-17
	 * 修改时间：*/
	function getDateFromString(dateString) {
		if (!dateString) {
			return null;
		}
		var dateArray = dateString.split("-");
		var year = parseInt(dateArray[0], 10);
		var month = parseInt(dateArray[1], 10) - 1;
		var date = parseInt(dateArray[2], 10);
		var oDate = new Date(year, month, date);
		return oDate;
	}

	/**功能：日期辅助对象
	 * 入参：
	 * 作者：陈长安
	 * 创建时间：2014-07-24
	 * 修改时间：*/
	function getDateHelper() {
		var append = function(s) {
			return s.length == 1 ? "0" + s : s;
		};
		var format = function(date, simple) {
			var type = Object.prototype.toString.apply(date);
			if (/Number/i.test(type)) {
				date = new Date(date);

			} else if (/String/i.test(type) && /^\d+$/.test(date)) {
				date = new Date(parseInt(date))
			} else if (/Date/i.test(type)) {

				date = date;
			}

			if ( date instanceof Date) {
				var y = "" + date.getFullYear(), M = "" + (date.getMonth() + 1), d = "" + (date.getDate()), h = "" + (date.getHours()), m = "" + (date.getMinutes()), s = "" + (date.getSeconds()), firstPart = y + "-" + append(M) + "-" + append(d), lastPart = " " + append(h) + ":" + append(m) + ":" + append(s);
				return simple ? firstPart : (firstPart + lastPart);

			} else {
				return date;

			}

		};

		return {
			format : format,
			formatDate : function(date) {
				var iMonth = date.getMonth() + 1;
				var sMonth = new String(iMonth);
				if (sMonth.length == 1) {
					sMonth = "0" + sMonth;
				}
				var iDate = date.getDate();
				var sDate = new String(iDate);
				if (sDate.length == 1) {
					sDate = "0" + sDate;
				}
				var iHour = date.getHours();
				var sHour = new String(iHour);
				if (sHour.length == 1) {
					sHour = "0" + sHour;
				}
				var iMin = date.getMinutes();
				var sMin = new String(iMin);
				if (sMin.length == 1) {
					sMin = "0" + sMin;
				}
				var iSec = date.getSeconds();
				var sSec = new String(iSec);
				if (sSec.length == 1) {
					sSec = "0" + sSec;
				}
				return date.getFullYear() + '-' + sMonth + '-' + sDate + ' ' + sHour + ':' + sMin + ':' + sSec;
			},
			getDateFromString : function(dateString, flag) {
				if (!dateString) {
					return null;
				}
				var oDate;
				if ( typeof dateString == 'number') {
					oDate = new Date(dateString);
				} else {
					var dateArr = dateString.split(" ");
					var dateYMD = dateArr[0].split("-");
					var year = parseInt(dateYMD[0], 10);
					var month = parseInt(dateYMD[1], 10) - 1;
					var date = parseInt(dateYMD[2], 10);
					var hour = "";
					var min = "";
					var sec = "";
					if (dateArr[1] != null && dateArr[1] != undefined) {
						var dateHMS = dateArr[1].split(":");
						hour = parseInt(dateHMS[0], 10);
						min = parseInt(dateHMS[1], 10);
						sec = parseInt(dateHMS[2], 10);
					}
					if (flag && flag == 1) {// 预约销售品，开始时间只保留年月日
						oDate = new Date(year, month, date);
					} else {
						oDate = new Date(year, month, date, hour, min, sec);
					}
				}
				return oDate;
			},

			getStringFirstDayOFNextMonth : function() {
				var now = new Date();
				var year = now.getFullYear();
				//获取年份
				var month = now.getMonth();
				//获取月份
				month = month + 1;
				var date = now.getDate();
				//获取日期
				var today = year + "-" + month + "-" + date;
				// 获取当前系统时间
				var todayDateType = this.getDateFromString(today, 1);
				todayDateType.setDate(1);
				return this.format(todayDateType["setMonth"](todayDateType["getMonth"]() + parseInt(1, 10)));
			},

			compareDateValue : function(firstDate, secondDate) {
				// 该方法用来比较两个时间值的大小，返回true，则传入的第一个时间大，返回false，则第二个时间大
				if (this.getDateFromString(firstDate, true) > this.getDateFromString(secondDate, true)) {
					return true;
				}
				return false;
			}
		}// end of return语句in DateHelper 函数
	}//end of DateHelper 函数

	return {
		getTodayYYYYMMDD : getTodayYYYYMMDD,
		ifValidDate : ifValidDate,
		getTodayStr : getTodayStr,
		getNowTimeStr : getNowTimeStr,
		getDateFromString : getDateFromString,
		dateHelper : getDateHelper()
	};
});
