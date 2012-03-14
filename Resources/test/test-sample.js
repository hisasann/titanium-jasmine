var j = require('/test/lib/jasmine');
var test = function() {
}
test.start = function() {
	var sample = require('/lib/sample');
	j.describe('sample.sample', function() {
		j.it('sample.sampleは1を返すよね。', function() {
			j.expect(sample.sample()).toBe(1);
		});
	});
}

module.exports = test;
