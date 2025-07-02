# 元数据性能测试
本章节介绍了Curvine元数据性能测试的方法和结果。

## 测试环境
测试机器配置如下：
- CPU：80核 
- 内存：128GB
- 磁盘：1SSD


## 测试工具
使用curvine自带的性能测试工具进行测试，测试工具位于bin目录下，测试工具名meta-bench，该工具由hdfs nnbench修改而论

测试运行的脚本如下：
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

## 测试结果
| 操作类型               | QPS      |
|------------------------|----------|
| createWrite            | 19985    |
| openRead               | 60376    |
| rename                 | 43009    |
| delete                 | 39013    |
| createWrite (1kb)      | 11707    |
| openRead (1kb)         | 29019    |
