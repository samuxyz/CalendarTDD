function F(){
	
}
F.prototype.setFlag = function(){
	return false;
}

F.prototype.getFlag = function(){
	if(this.setFlag())
		return true;
	else
		return false;
}