module.exports = {
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
		'^.+\\.(css|scss)$': '<rootDir>/src/test/mockStyle.js'
	},
	collectCoverageFrom: [
		'src/js/**/*.test.js',
		],
	setupTestFrameworkScriptFile: '<rootDir>/src/test/enzyme.js',
	moduleNameMapper: {
		'^scss(.*)$': '<rootDir>/src/scss$1',
		'^config(.*)$': '<rootDir>/src/js/config$1',
		'^global(.*)$': '<rootDir>/src/js/global$1'
	}
};