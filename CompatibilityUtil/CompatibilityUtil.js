/**
 * @fileOverview 文件描述：兼容性工具文件
 * @author chencha
 * @version 版本2.0
 * @since 2014-07-04
 * @history
 **************************************************************
 * 修改历史
 * 序号 		日期			修改人 		修改原因
 * 1  		2014-07-04	chencha		建立代码
 * 2		2014-08-26  chencha 	把内聚模块独立出去，按照jsdoc3的官方规范写注释
 **************************************************************
 */
define(["../COCOUtil/COCOUtil", "./CompatibilityUtilCohesion"], function(cocoUtil, myCohesion) {

	var cohesion = myCohesion;

	/**
	 * 兼容性工具：Coupling（耦合）子对象
	 * @exports compatibilityUtil/coupling
	 * @version 1.0
	 */
	var coupling = {
	};
	

	//整合内聚、耦合子对象 begin
	/**
	 * 兼容性工具对象
	 * @exports compatibilityUtil
	 * @version 1.0
	 */
	var res = {
		/**内聚子对象*/
		cohesion : cohesion,
		/**耦合子对象*/
		coupling : coupling
	};
	cocoUtil.extend(res, cohesion);
	cocoUtil.extend(res, coupling);
	//整合内聚、耦合子对象 end

	return res;

});

