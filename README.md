# coco
coco框架：我的js工具集

* 简介
	- 好用的js工具集
* 特点
  	- AMD模块化。
	- 可拆散使用：各模块提供内聚版——包含的函数都不依赖其他模块。
* 巨人的肩上
	- 实现AMD规范
	- 使用RequireJs加载器
	- jsDoc3注释文档化
* 走过的路：
	- 最开始是一些独立的代码段文件。
	- 后来改成一个ccaUtil的大的js文件，里面独立地提供各个工具对象，不过工具对象间难以支持互相的依赖。
	- 再后来改名为coco
	- 看了amd模块化规范后，决定基于requirejs支持amd模块化规范
	- 看了注释文档化后，决定基于jsdoc进行注释文档化。
* todo
	- 各模块都完成注释文档化。
	- 引入jQuery框架
	- 引入underscore框架
