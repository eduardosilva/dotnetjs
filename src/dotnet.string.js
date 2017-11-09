String.join = function (separator, array) {
	var result = "";

	for (let index = 0; index < array.length; index++) {
		const element = array[index];

		if (result !== "")
			result += separator;

		result += element;
	}

	return result;
}

String.isNullOrEmpty = function (value) {
	return !value || value === "";
};

String.prototype.padLeft = function (length, char) {
	return Array(length - this.length + 1).join(char || " ") + this;
};