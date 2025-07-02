# Metadata Performance Testing

This chapter introduces the methods and results of Curvine metadata performance testing.

## Test Environment

The test machine configuration is as follows:
- CPU: 80 cores
- Memory: 128GB
- Disk: 1 SSD

## Test Tools

Using Curvine's built-in performance testing tool for testing. The test tool is located in the bin directory and is named meta-bench. This tool is modified from hdfs nnbench.

The test script runs as follows:
```
java -Xms10g -Xmx10g \
io.curvine.bench.NNBenchWithoutMR \
-operation $ACTION \
-bytesToWrite 0 \
-confDir ${CURVINE_HOME}/conf \
-threads 40 \
-baseDir /fs-meta \
-numFiles 5000
```

## Test Results

| Operation Type         | QPS      |
|------------------------|----------|
| createWrite            | 19985    |
| openRead               | 60376    |
| rename                 | 43009    |
| delete                 | 39013    |
| createWrite (1kb)      | 11707    |
| openRead (1kb)         | 29019    |