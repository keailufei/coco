

define(function() {
	function checkEasyPassword(password){
		//��ȡ������ֵ,ȡ���һλ,�������俪ͷ��3�������� ������:555555(��һλΪ5),������456789(��һλΪ4),
		//�ݼ���654321(��һλΪ6),������ֵ����Ƚ�,�������ֵ������һ����ͬ,��Ϊ������
		var value = password.value;
		var start = value.charAt(0);
		var a1 = parseInt(start);
		var a2 = parseInt(start);
		var b = start;	
		var c = start;
		var d = a1+''+a1+''+a1+''+a1+''+a1+''+a1;//6λ����һ��
		var e = "";
		if(isNaN(start)){
			e = start+start+start+start+start+start;
		}
		for(var i=0;i<5;i++){
			if(a1 != 9){ 
				a1 = a1+1;
				b = b+''+a1;//6λ�������
			}
			if(a2 != 0){ 
				a2 = a2-1;
				c = c+''+a2;//6λ����ݼ�
			}    
		}
		if( value == d || value == b || value == c || value == e){
			alert("\u60a8\u7684\u5bc6\u7801\u8fc7\u4e8e\u7b80\u5355,\u8bf7\u91cd\u65b0\u8bbe\u7f6e. \u7b80\u5355\u5bc6\u7801\u4e0d\u80fd\u529e\u7406\u5176\u4ed6\u4efb\u4f55\u4e1a\u52a1\!\n\
\u7b80\u5355\u5bc6\u7801\u6307:\n        \(1):6\u4f4d\u5bc6\u7801\u4e00\u6837;\n        \(2):6\u4f4d\u5bc6\u7801\u9012\u589e;\n        \(3):6\u4f4d\u5bc6\u7801\u9012\u51cf;\n        \u5982'111111,123456,654321,ssssss'");
			password.value = "";
			
			return false;
		}
		return true;
	}
	

	return {
		checkEasyPassword : checkEasyPassword
	};
});