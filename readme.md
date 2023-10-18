# Perfomance test

## JS Array.from implementation

```
➜  perf node index.js 
Sum:  50000005000000
array_from: 1.326s
➜  perf node index.js
Sum:  50000005000000
array_from: 1.115s
➜  perf bun index.js
Sum:  50000005000000
[159.51ms] array_from
➜  perf bun index.js
Sum:  50000005000000
[154.79ms] array_from
```

## JS Iterator implementation
```
➜  perf node iterator.js 
Sum:  50000005000000
iterator: 501.046ms
➜  perf node iterator.js
Sum:  50000005000000
iterator: 506.272ms
➜  perf bun iterator.js 
Sum:  50000005000000
[198.52ms] iterator
➜  perf bun iterator.js
Sum:  50000005000000
[185.22ms] iterator
```

## JS for loop implementation
```
➜  perf node for-loop.js 
Sum:  50000005000000
for-loop: 28.997ms
➜  perf node for-loop.js
Sum:  50000005000000
for-loop: 28.983ms
➜  perf bun for-loop.js 
Sum:  50000005000000
[55.70ms] for-loop
➜  perf bun for-loop.js
Sum:  50000005000000
[25.27ms] for-loop
```

## PHP implementation
```
➜  perf php index.php 
Sum: 50000005000000
Execution time: 346.09603881836 ms

➜  perf php index.php
Sum: 50000005000000
Execution time: 264.01090621948 ms
➜  perf php index.php
Sum: 50000005000000
Execution time: 257.40718841553 ms     
```
