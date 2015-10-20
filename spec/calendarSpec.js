describe("calendar", function() {
	beforeEach(function(){
		$("<button id=\"open-calendar\" style=\"display:block;\"></button>").appendTo(document.body);
		expect($("#open-calendar").length).toBe(1);
	});
	it("it should create a calendar and run it", function() {
	
	
	var calendar = new calendarObj("open-calendar", "2015-10-01", "2015-10-12", "");
	expect(calendar.runCalendar()).toBe(true);
	
	});
});