describe("mock", function() {
	
	it("it should show the behavior of mock", function() {
	var f = new F();
	
	spyOn(f, "setFlag").and.returnValue(true);
	
	expect(f.getFlag()).toBe(true);
	});
});