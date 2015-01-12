/**
 * @fileOverview 文件描述：json工具
 * @author chencha
 * @version 版本1.0
 * @since 2015年1月12日
 * @history
 **************************************************************
 * 修改历史
 * 序号 		日期			修改人 	修改原因
 * 1		
 * 2
 **************************************************************
 */
define([], function() {



 //去除字符串左右两边的空格
  function  trim (chars){

        return (chars || "").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "" );
    }

  /**
	 * @description 解析json字符串
	 * @param {String} jsonData  json字符串
	 * @since 2015年1月12日 11:18:44
	 * @author chencha
	 * @return 相应的json对象
	 */
  function parseJSON (jsonData){//解析函数

        if (typeof jsonData === 'object') {  //判断是否为对象

            return jsonData;//直接返回对象
        }

        if ( window.JSON && window.JSON.parse ) {//如果存在原生的JSON解析API，则使用原生的解析API

            return window.JSON.parse( jsonData );//解析JSON字符
        }

        if ( typeof jsonData === "string" ) {

            jsonData = this.trim( jsonData );//简单的过滤字符，保证前后没有空格

            if ( jsonData ) {//如果不是空字符

                    return ( new Function( "return " + jsonData ) )();  //利用Function的特性，构造 JSON 对象
            }
        }
    }
    
    return {
      parseJSON:parseJSON
    };


});

