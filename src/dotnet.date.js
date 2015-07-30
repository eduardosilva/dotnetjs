Date.prototype.format = function(format) {
  var result;
  result = format;
  result = result.replace('dd', this.getDate().toString().padLeft(2, '0'));
  result = result.replace('d', this.getDate());
  result = result.replace('MM', (this.getMonth() + 1).toString().padLeft(2, '0'));
  result = result.replace('M', this.getMonth() + 1);
  result = result.replace('yyyy', this.getFullYear());
  result = result.replace('HH', this.getHours().toString().padLeft(2, '0'));
  result = result.replace('H', this.getHours());
  result = result.replace('mm', this.getMinutes().toString().padLeft(2, '0'));
  result = result.replace('m', this.getMinutes());
  result = result.replace('SS', this.getSeconds().toString().padLeft(2, '0'));
  result = result.replace('S', this.getSeconds());
  return result;
};

Date.now = function() {
  return new Date();
};

Date.today = function() {
  var now, today;
  now = new Date();
  today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  return today;
};

Date.prototype.addDays = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + days, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
};

Date.prototype.addMonths = function(months) {
  return new Date(this.getFullYear(), this.getMonth() + months, this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
};
