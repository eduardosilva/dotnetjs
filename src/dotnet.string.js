String.prototype.padLeft = function(length, char) {
  return Array(length - this.length + 1).join(char || " ") + this;
};
