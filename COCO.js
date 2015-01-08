/**
 * @fileoverview 文件描述：coco框架核心模块文件
 * @author chencha
 * @since 2014-08-09
 * @version 版本2.0
 **/
define(["./COCOUtil/COCOUtil", "./relyOn/jquery", "./relyOn/underscore", "./CompatibilityUtil/CompatibilityUtil", "./domUtil/DomUtilCore", "./EncodingUtil/EncodingUtil", "./ListUtil", "./StringUtil", "./TimeUtil", "./UrlUtil", "./XmlUtil"], function(cocoUtil, jqueryCanNotUseAsAParam, underscoreCanNotUseAsAParam, compatibilityUtil, domUtil, encodingUtil, listUtil, stringUtil, timeUtil, urlUtil, xmlUtil) {
	/**
	 * COCO：Coupling（耦合）子对象
	 * @exports COCO/coupling
	 * @version 1.0
	 */
	var coupling = {

		//返回子模块
		/**
		 * 兼容性工具模块
		 * @type Object
		 */
		compatibilityUtil : compatibilityUtil,
		/**
		 * DOM工具模块
		 * @type Object
		 */
		domUtil : domUtil,
		/**
		 * 编码工具模块
		 * @type Object
		 */
		encodingUtil : encodingUtil,
		/**
		 * List工具模块
		 * @type Object
		 */
		listUtil : listUtil,
		/**
		 * 字符串工具模块
		 * @type Object
		 */
		stringUtil : stringUtil,
		/**
		 * Time工具模块
		 * @type Object
		 */
		timeUtil : timeUtil,
		/**
		 * Url工具模块
		 * @type Object
		 */
		urlUtil : urlUtil,
		/**
		 * Xml工具模块
		 * @type Object
		 */
		xmlUtil : xmlUtil,
		
		/**
		 * jQuery对象
		 * @type Object
		 */
		jQuery : $,
		/**
		 * underscore对象
		 * @type Object
		 */
		underscore : _
	};
	/**
	 * COCO：Cohesion（内聚）子对象
	 * @exports COCO/cohesion
	 * @version 1.0
	 */
	var cohesion = {
		//框架描述性属性
		/**框架名
		 * @type String
		 * @default coco
		 * */
		FrameName : 'coco',
		/**框架作者
		 * @type String
		 * @default 'chencha'
		 * */
		Author : 'chencha',
		/**
		 * 框架版本
		 * @type String
		 * @default '1.1'
		 */
		Version : '1.1',
		/**
		 * 框架备注
		 * @type String
		 */
		Note : "（*）支持AMD（使用requireJs加载器）\n" + "（*）支持非AMD场景——各模块的纯内聚部分是独立模块\n" + "（*）耦合部分集成jQuery和underscore框架\n" + "（*）注释采用jsdoc3规范\n",
		/**
		 * 框架展望
		 * @type String
		 * @default '集成Jquery框架，支持coco框架的快速开发'
		 */
		ToDo : "集成Jquery框架，支持coco框架的快速开发",
		/**
		 * 框架的target
		 * @type String
		 */
		target:"方便复用的js个人代码库，顺便学习下有用东西（requireJs，jsdoc3，jQuery，underscore）"
	};

	/**
	 * COCO对象
	 * @exports COCO
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

	return res;

});
