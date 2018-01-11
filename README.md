This is just a big report [minimal reproduction](http://stackoverflow.com/help/mcve).

```
$ ava --tap test.js 

/Users/redacted/dev/oss/bug-reports/ava/node_modules/indent-string/index.js:9
		throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof str}\``);
		^

TypeError: Expected `input` to be a `string`, got `object`
    at module.exports (/Users/redacted/dev/oss/bug-reports/ava/node_modules/indent-string/index.js:9:9)
    at test.logs.forEach.log (/Users/redacted/dev/oss/bug-reports/ava/node_modules/ava/lib/reporters/tap.js:64:23)
    at Array.forEach (<anonymous>)
    at appendLogs (/Users/redacted/dev/oss/bug-reports/ava/node_modules/ava/lib/reporters/tap.js:63:15)
    at TapReporter.test (/Users/redacted/dev/oss/bug-reports/ava/node_modules/ava/lib/reporters/tap.js:83:4)
    at Logger.test (/Users/redacted/dev/oss/bug-reports/ava/node_modules/ava/lib/logger.js:27:28)
    at emitTwo (events.js:126:13)
    at RunStatus.emit (events.js:214:7)
    at RunStatus.handleTest (/Users/redacted/dev/oss/bug-reports/ava/node_modules/ava/lib/run-status.js:105:8)
    at emitOne (events.js:121:20)
    at ChildProcess.emit (events.js:211:7)
    at ChildProcess.ps.on.event (/Users/redacted/dev/oss/bug-reports/ava/node_modules/ava/lib/fork.js:79:7)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at emit (internal/child_process.js:772:12)
    at _combinedTickCallback (internal/process/next_tick.js:141:11)
```
