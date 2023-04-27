export const formatDate = (date, format = 'yyyy-MM-dd hh:mm:ss') => {
	if (typeof date === 'string') {
		if (/^\d+$/.test(date)) {
			date = parseInt(date);
		}
		date = new Date(date);
	} else if (typeof date === 'number') {
		date = new Date(date);
	}

	const map = {
		'M': date.getMonth() + 1, // 月份
		'd': date.getDate(), // 日
		'h': date.getHours(), // 小时
		'm': date.getMinutes(), // 分钟
		's': date.getSeconds(), // 秒
		'q': Math.floor((date.getMonth() + 3) / 3), // 季度
		'S': date.getMilliseconds() // 毫秒
	};
	format = format.replace(/([yMdhmsqS])+/g, (all, t) => {
		let v = map[t];
		if (v !== undefined) {
			if (all.length > 1) {
				v = '0' + v;
				v = v.substr(v.length - 2);
			}
			return v;
		} else if (t === 'y') {
			return (date.getFullYear() + '').substr(4 - all.length);
		}
		return all;
	});
	return format;
}


//数字格式化
function formatNumber(n) {
	n = n.toString()
	return n[1] ? n : '0' + n
}


//时间戳转日期格式
export const formatTime = (timestamp, format = 'yyy-mm-dd h:m:s') => {
	timestamp = Number(timestamp) ? Number(timestamp) : timestamp
	var formateArr = ['yyy', 'mm', 'dd', 'h', 'm', 's'];
	var returnArr = [];
	var date = new Date(timestamp);
	returnArr.push(date.getFullYear());
	returnArr.push(formatNumber(date.getMonth() + 1));
	returnArr.push(formatNumber(date.getDate()));
	returnArr.push(formatNumber(date.getHours()));
	returnArr.push(formatNumber(date.getMinutes()));
	returnArr.push(formatNumber(date.getSeconds()));
	for (var i in returnArr) {
		format = format.replace(formateArr[i], returnArr[i]);
	}
	return format;
}


export const formatTime1 = (timestamp, format = 'yyyy-mm-dd h:m:s') => {
  const date = new Date(Number(timestamp) || timestamp);
  const year = date.getFullYear();
  const month = formatNumber(date.getMonth() + 1);
  const day = formatNumber(date.getDate());
  const hour = formatNumber(date.getHours());
  const minute = formatNumber(date.getMinutes());
  const second = formatNumber(date.getSeconds());
  return format.replace(/yyyy/g, year)
               .replace(/mm/g, month)
               .replace(/dd/g, day)
               .replace(/h/g, hour)
               .replace(/m/g, minute)
               .replace(/s/g, second);
};
