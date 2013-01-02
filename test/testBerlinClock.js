describe('testing...', function() {
    it("is an object", function() {
        expect(typeof new berlinClock).toBe("object");
    });
    it("midnight", function() {
        b = new berlinClock();
        expect(b.formatDate("00:00:00")).toBe("Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });
    it("midnight+1m", function() {
        b = new berlinClock();
        expect(b.formatDate("00:01:00")).toBe("Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYOOO");
    });
    it("midnight+2m", function() {
        b = new berlinClock();
        expect(b.formatDate("00:02:00")).toBe("Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYOO");
    })
    it("midnight+3m", function() {
        b = new berlinClock();
        expect(b.formatDate("00:03:00")).toBe("Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYO");
    })
    it("midnight+4m", function() {
        b = new berlinClock();
        expect(b.formatDate("00:04:00")).toBe("Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYY");
    });
    it("midnight+45m", function() {
        b = new berlinClock();
        expect(b.formatDate("00:45:00")).toBe("Y\nOOOO\nOOOO\nYYRYYRYYROO\nOOOO");
    });
    it("midnight+10m", function() {
        b = new berlinClock();
        expect(b.formatDate("00:10:00")).toBe("Y\nOOOO\nOOOO\nYYOOOOOOOOO\nOOOO");
    });/*
    it("13:17:01", function() {
        b = new berlinClock();
        expect(b.formatDate("13:17:01")).toBe("O\nRROO\nRRRO\nYYROOOOOOOO\nYYOO");
    });*/
});
