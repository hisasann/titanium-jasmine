var test = function() {

}
test.start = function() {
	var jasmine = require('/test/lib/jasmine');
	var TitaniumReporter = require('/test/lib/jasmine-titanium');

	var testSample = require('/test/test-sample');
	testSample.start();

	jasmine.jasmine.getEnv().addReporter(new TitaniumReporter());
	jasmine.jasmine.getEnv().execute();
}

module.exports = test;
