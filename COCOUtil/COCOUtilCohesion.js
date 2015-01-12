/**
 * @fileOverview 文件描述：COCO工具-内聚子模块文件
 * @author chencha
 * @version 版本1.0
 * @since 2014-08-26
 * @history
 **************************************************************
 * 修改历史
 * 序号 		日期			修改人 	修改原因
 * 1		2014-08-26	chencha 建立此模块
 * 2
 **************************************************************
 */
define([], function() {

	/**
	 * COCO工具：Cohesion（内聚）子对象
	 * @exports cocoUtil/cohesion
	 * @version 1.0
	 */
	var cohesion = {

	};

	/**
	 * @description 扩展对象（同名属性被覆盖）
	 * @param {Object} destination 目标对象
	 * @param {Object} source 内容来源对象
	 * @return 扩展后的目标对象
	 */
	cohesion.extend = function(destination, source) {// 一个静态方法表示继承, 目标对象将拥有源对象的所有属性和方法
		for (var property in source) {
			destination[property] = source[property];
			// 利用动态语言的特性, 通过赋值动态添加属性与方法
		}
		return destination;
		// 返回扩展后的对象
	};

	/**
	 * @description 删除dom节点或对象的指定属性
	 * @param {DOM} target 要处理的dom节点
	 * @param {String} attName 要删除的属性名
	 * @since 2014-07-08
	 * @return void
	 */
	cohesion.deleteOneAttribute = function(target, attName) {
		//若属性不存在，运行完后也会返回true
		delete target[attName];
	};

	/**
	 * @description 抛出一个异常（js中异常就是error）
	 * @param {String} errMessage  错误信息
	 * @since 2014-07-09
	 * @return void
	 */
	cohesion.throwOneError = function(errMessage) {
		var err = new Error();
		err.message = errMessage;
		throw (err);
	};
	
	/**
	 * @description 返回异常对象的信息
	 * @param {Object} err  错误对象（异常对象）
	 * @since 2014-09-02
	 * @return String
	 */
	cohesion.getErrorMessage = function(err) {
		return err.message;
	};
	
	    /**
	 * @description 将数据导出Excel
	 * @param {String} tableid  table的id
	 * @since 2015年1月12日 11:39:09
	 * @return 电子表格
	 */
	    cohesion.exportExcel = function(tableid){
	    	//来自《超实用的javaScript代码段》最后一章
	        if (!!+[1,]){//判断是否为IE
	            alert("不是IE浏览器，不支持此方法！");
	            return;
	        }
	        var curTbl = document.getElementById(tableid);
	                /*
	                * 如果IE浏览器报错：SCRIPT429: Automation 服务器不能创建对象
	                * 打开Internet Explorer “工具”菜单栏中的“选项”一栏，单击“安全”栏中的“自定义级别”选项卡，
	                * 将第三项“对没有标记为安全的activex控件进行初始化和脚本运行”设置成“启用”即可
	                * */
	
	                oXL = new ActiveXObject("Excel.Application"),
	
	                oWB = oXL.Workbooks.Add(),//创建AX对象excel
	
	                xlsheet = oWB.Worksheets(1),//获取workbook对象
	
	                sel = document.body.createTextRange();//激活当前sheet
	
	            sel.moveToElementText(curTbl);//把表格中的内容移到TextRange中
	
	            sel.select();//全选TextRange中内容
	
	            sel.execCommand("Copy");//复制TextRange中内容
	
	            xlsheet.Paste();//粘贴到活动的EXCEL中
	
	            oXL.Visible = true;//设置excel可见属性
	
	            try{
	                var fname = oXL.Application.GetSaveAsFilename("save.xls", "Excel Spreadsheets (*.xls), *.xls");
	            }catch(error){
	                print("Nested catch caught " + error);
	            }finally{
	                if(fname){
	                    oWB.SaveAs(fname);
	                    oWB.Close(savechanges=false);
	
	                    oXL.Quit();
	
	                    oXL=null;
	                }else{
	                    alert("导出失败");
	                }
	
	
	
	                _W.setTimeout(function(){//结束excel进程，退出完成
	                    CollectGarbage();
	                },1);
	
	            }
	    }
    

	//isNaN 不是有效数字字符串，返回true
	return cohesion;

});

