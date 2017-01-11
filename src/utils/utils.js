//Ajax的简单封装
export function httpResponse(api, success, error) {
	var _this = this;
	api.then(response => {
		success && success(response);
	}, response => {
		error && error(response.status)
		if (response.status == 404 || response.status == 500) {
			console.log('服务器无响应-' + response.status)
		}
	})
}

//判断中文英文长度
export function is_Cn_En(str) {
	var len = 0;
	for (var i = 0; i < str.length; i++) {
		var c = str.charCodeAt(i);
		//单字节加1
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
			len++;
		} else {
			len += 2;
		}
	}
	return len;
}

//判断对象是否为空
export function isEmptyObject(e) {
	var t;
	for (t in e)
		return !1;
	return !0
}

//存储localstorage
export function setLocal(key, value) {
	localStorage.setItem(key, value)
}

//获取localstorage
export function getLocal(key) {
	return localStorage.getItem(key)
}

//删除localstorage
export function removeLocal(key) {
	localStorage.removeItem(key)
}

export function catIn(target, parent) {
	let path = [], parentNode = target
	while (parentNode && parentNode !== document.body) {
		path.push(parentNode)
		parentNode = parentNode.parentNode
	}
	return path.indexOf(parent) !== -1
}

export function dataFormatYMD(time, type) {
	var myDate = new Date(time);
	var m = myDate.getMonth() + 1;
	//var min=myDate.getMinutes();
	let Year = myDate.getFullYear();
	let month = m < 10 ? "0"+m : m;
	let day = myDate.getDate();
	//let Hours =  myDate.getHours();
	//let Minutes =  min==0?"0"+min:min;
	if (type == "Y") {
		return Year
	} else if (type == "M") {
		return month
	} else if (type == "D") {
		return day
	}
}

export function pad(val) {
	val = Math.floor(val)
	if (val < 10) {
		return '0' + val
	}
	return val + ''
}