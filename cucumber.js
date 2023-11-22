let config = [
    './src/features/**/*.feature',
    '--require-module ts-node/register',
    '--require ./src/steps/**/*.ts',
    '--format progress-bar',
    `--format html:./reports/cucumber-report.html`,
    `--format-options '{"snippetInterface": "async-await"}'`
].join(' ');

module.exports = {
    default: config
};