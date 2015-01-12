define(function() {
	/**
	 * 获取一个叶子节点的文字内容
	 * @param {Object} leafElement
	 */
	function TextContent(leafElement) {
		var textContent = "";
		this.toString = function() {
			if (!leafElement.firstChild) {
				return textContent;
			}
			if (textContent == leafElement.firstChild.data) {
				return textContent;
			}
			textContent = leafElement.firstChild.data;
			return textContent;
		};
		this.getLeafElement = function() {
			return leafElement;
		};
	}

	/**
	 * 根据节点名和节点内容生成节点加CDATA片段
	 * @param {Object} doc
	 * @param {Object} tagName
	 * @param {Object} text
	 */
	function CDATASection(doc, tagName, text) {
		this.getText = function() {
			return text;
		};
		this.getTagName = function() {
			return tagName;
		};
		this.toElement = function() {
			var leafElement = doc.createElement(tagName);
			var section = doc.createCDATASection(text);
			leafElement.appendChild(section);
			return leafElement;
		};
	}

	/**
	 * 将叶子节点字符串转化为key值对
	 * @param {Object} leafString
	 */
	function LeafStringStream(leafString) {
		this.getLeafString = function() {
			return leafString;
		};
		this.toMap = function() {
			var map = {};
			var doc = xmlCore.getDoc("<root>" + leafString + "</root>");
			var nodes = doc.selectNodes("root/*");
			for (var i = 0, len = nodes.length; i < len; i++) {
				var node = nodes[i];
				map[node.nodeName] = new Pongo.XmlUtils.Element.TextContent(node).toString();
			}
			return map;
		};
	}
	
	/**
	 * 解析xml字符串
	 * @param {Object} xmlData xml字符串
	 * @author chencha
	 * @date 2015年1月12日
	 * @source 来自《超实用javaScript代码段》最后一章
	 */
	function parseXML(xmlData){//解析函数
	        var
	            /*
	            * 初始化数据
	            * */
	
	            xml = null, //默认为null
	
	            domP;
	        if ( !xmlData || typeof xmlData !== "string" ) {
	
	            return xml;
	        }
	        try {
	
	            /*
	            * 检测浏览器支持哪种xml解析方法
	            * DOMParser 对象解析 XML 文本并返回一个 XML Document 对象,浏览器支持：Firefox, Mozilla, Opera, etc.
	            * 目前在全球市场份额中，IE的整体占有率，在降低，因此将这个方法放在第一检测位置
	            * */
	
	             if ( window.DOMParser ) {
	
	                domP = new DOMParser();//构建加载对象
	
	                xml = domP.parseFromString( xmlData , "text/xml" );  //执行解析，加载文件
	
	            } else { //IE支持的方法
	
	                xml = new ActiveXObject( "Microsoft.XMLDOM" );  //构建IE浏览器的xml加载对象
	
	                xml.async = "false"; //关闭异步加载，这样可确保在文档完整加载之前，解析器不会继续执行脚本
	
	                xml.loadXML( xmlData ); //执行解析，加载文件
	            }
	        } catch( e ) {
	
	            xml = "Parse failure";//解析失败，返回提示性信息
	        }
	        if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
	            new Error( "损坏的XML: " + xmlData );
	        }
	        return xml;
	    }

	return {
		parseXML:parseXML,
		textContent : TextContent,
		cDATASection : CDATASection,
		leafStringStream : LeafStringStream
	};

});
