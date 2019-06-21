export function sortArrayOfObject(data, key, order) {
	key = key.toLowerCase();
	if (order === 'ascending') {
		return data.sort(function(a, b) {
			var x = a[key];
			var y = b[key];
			return x < y ? -1 : x > y ? 1 : 0;
		});
	} else if (order === 'descending') {
		return data.sort(function(a, b) {
			var x = a[key];
			var y = b[key];
			return x < y ? 1 : x > y ? -1 : 0;
		});
	}
}
