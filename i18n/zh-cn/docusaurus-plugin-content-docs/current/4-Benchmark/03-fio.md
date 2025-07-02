# fio性能测试
本章节介绍了使用fio测试curivne的性能。

## 测试环境
测试机器配置如下：
- worker 机器类型：i3en.24xlarge，操作系统：redhat 9
- client 机器类型：c5n.18xlarge，操作系统：redhat 9，
- fio版本：3.5


## 测试工具
使用fio测试curivne的性能，测试用例如下：
```
# 256KB顺序读
fio -iodepth=1 -rw=read \
-ioengine=libaio -bs=256k -group_reporting -size=100gb \
-filename=/curvine-fuse/0  -name=read_test --readonly \
-direct=1 --runtime=60 -numjobs={job_num}

# 256K随机读
fio -iodepth=1 -rw=randread \
-ioengine=libaio -bs=256k -group_reporting -size=100gb \
-filename=/curvine-fuse/0  -name=read_test --readonly \
-direct=1 --runtime=60 -numjobs={job_num}

# 4k随机读
fio -iodepth=1 -rw=randread \
-ioengine=libaio -bs=4k -group_reporting -size=100gb \
-filename=/curvine-fuse/0  -name=read_test --readonly \
-direct=1 --runtime=60 -numjobs={job_num}
```

## 测试结果

256KB顺序读：

| 线程数 | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 吞吐（GiB/s） | 2.2 | 3.7 | 6.8 | 8.9 | 9.2 | 9.5 | 9.2 | 9.2 |


256K随机读：

| 线程数 | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 吞吐（GiB/s） | 0.3 | 0.7 | 1.4 | 2.8 | 5.2 | 7.8 | 8.7 | 9.0 |

4k随机读：

| 线程数 | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IOPS(K) | 2.5 | 5.1 | 12.5 | 25.4 | 42.1 | 85.0 | 138.4 | 186 |