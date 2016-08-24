String.Join = function (array, separator){
	var result = "";
  
  array.forEach(function (i) {
  	if (result !== "")
    	result += separator;
      
		result += i;
  });
  
  return result;
}

String.isNullOrEmpty = function (value) {
	return !value || value === "";
};

String.prototype.padLeft = function(length, char) {
  return Array(length - this.length + 1).join(char || " ") + this;
};