/**
 * @fileOverview 文件描述：COCO工具文件
 * @author chencha
 * @version 版本2.0
 * @since 2014-07-04
 * @history
 **************************************************************
 * 修改历史
 * 序号 		日期			修改人 		修改原因
 * 1  		2014-07-04	chencha		建立代码
 * 2		
 **************************************************************
 */
define(["./COCOUtilCohesion"], function(myCohesion) {
	var cohesion = myCohesion;

	/**
	 * COCO工具：Coupling（耦合）子对象
	 * @exports cocoUtil/coupling
	 * @version 1.0
	 */
	var coupling = {
	};

	//整合内聚、耦合子对象
	/**
	 * COCO工具对象
	 * @exports cocoUtil
	 * @version 1.0
	 */
	var res = {
		/**内聚子对象*/
		cohesion : cohesion,
		/**耦合子对象*/
		coupling : coupling
	};
	cohesion.extend(res, cohesion);
	cohesion.extend(res, coupling);

	return res;
});
