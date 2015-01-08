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

	return {
		textContent : TextContent,
		cDATASection : CDATASection,
		leafStringStream : LeafStringStream
	};

});
