if(!DISABLED_DATES){
    var DISABLED_DATES = new Array();
}
window.jscal2Disabled = window.jscal2Disabled || {};
window.jscal2Cache = window.jscal2Cache || {};
function calendarObj(inputField, min, max, disableDates){
	this.inputField = inputField;
	this.min = min;
	this.max = max;
	this.disableDates = disableDates;
}
calendarObj.prototype.runCalendar = function(){
	var disable = this.disableDates.split(",");
	console.log(disable);
	DISABLED_DATES[this.inputField] = {};
	for(var i = 0; i<disable.length;i++){
		DISABLED_DATES[this.inputField][disable[i]] = true;
	}
	
	window.jscal2Cache[this.inputField] = Calendar.setup({
		inputField: ''+this.inputField+'',
		trigger: ''+this.inputField+'',
		onSelect: function() {
			this.hide();
		},
		showTime: false,
		bottomBar: false,
		fdow: 0,
		dateFormat: "%Y-%m-%d",
		min: ''+this.min+'',
		max: ''+this.max+'',
		disabled: function(date) {
			date = Calendar.dateToInt(date);
			return date in DISABLED_DATES[this.inputField];
		}

	});
                
	window.jscal2Disabled[this.inputField] = function(date) {
			date = Calendar.dateToInt(date);
			return date in DISABLED_DATES[this.inputField];
	}; 
	return true;
}
var disableDates = "{20151005:true,20151006:true}";
var c = new calendarObj("open-calendar", "2014-10-01", "2015-10-12", "20151008,20151009");
c.runCalendar();