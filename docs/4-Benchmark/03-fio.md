# FIO Performance Testing

This chapter introduces using FIO to test Curvine's performance.

## Test Environment

The test machine configuration is as follows:
- Worker machine type: i3en.24xlarge, Operating system: RedHat 9
- Client machine type: c5n.18xlarge, Operating system: RedHat 9
- FIO version: 3.5

## Test Tools

Using FIO to test Curvine's performance. The test cases are as follows:

```
# 256KB sequential read
fio -iodepth=1 -rw=read \
-ioengine=libaio -bs=256k -group_reporting -size=100gb \
-filename=/curvine-fuse/0  -name=read_test --readonly \
-direct=1 --runtime=60 -numjobs={job_num}

# 256K random read
fio -iodepth=1 -rw=randread \
-ioengine=libaio -bs=256k -group_reporting -size=100gb \
-filename=/curvine-fuse/0  -name=read_test --readonly \
-direct=1 --runtime=60 -numjobs={job_num}

# 4k random read
fio -iodepth=1 -rw=randread \
-ioengine=libaio -bs=4k -group_reporting -size=100gb \
-filename=/curvine-fuse/0  -name=read_test --readonly \
-direct=1 --runtime=60 -numjobs={job_num}
```

## Test Results

256KB sequential read:

| Threads | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Throughput (GiB/s) | 2.2 | 3.7 | 6.8 | 8.9 | 9.2 | 9.5 | 9.2 | 9.2 |

256K random read:

| Threads | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Throughput (GiB/s) | 0.3 | 0.7 | 1.4 | 2.8 | 5.2 | 7.8 | 8.7 | 9.0 |

4k random read:

| Threads | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IOPS(K) | 2.5 | 5.1 | 12.5 | 25.4 | 42.1 | 85.0 | 138.4 | 186 |
