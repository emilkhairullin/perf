<?php
ini_set('memory_limit', '512M');

$startTime = microtime(true);

$numbers = range(1, 10000000);

$sum = 0;

foreach($numbers as $number) {
    $sum += $number;
}

$endTime = microtime(true);

$executionTime = $endTime - $startTime;

echo "Sum: $sum\n";

$executionTime *= 1000;

echo "Execution time: $executionTime ms";