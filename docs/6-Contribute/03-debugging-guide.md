---
sidebar_position: 3
---

# Debugging Guide

This guide provides instructions for debugging Curvine components and troubleshooting common issues.

## Logging Configuration

### Server Logging

Curvine uses structured logging with configurable levels. Configure logging in `curvine.toml`:

```toml
[log]
level = "info"  # trace, debug, info, warn, error
dir = "/var/log/curvine"
max_size = "100MB"
max_files = 10
```

### Client Logging

For client debugging, set the log level in client configuration:

```toml
[client.log]
level = "debug"
dir = "/tmp/curvine-client"
```

## Common Debugging Scenarios

### Master/Worker Connection Issues

1. **Check network connectivity**:
   ```bash
   telnet <master-host> <master-port>
   ```

2. **Verify configuration**:
   - Check `master_addrs` in worker configuration
   - Verify firewall settings
   - Check DNS resolution

3. **Review logs**:
   ```bash
   tail -f /var/log/curvine/master.log
   tail -f /var/log/curvine/worker.log
   ```

### Performance Issues

1. **Monitor system resources**:
   ```bash
   htop
   iostat -x 1
   sar -n DEV 1
   ```

2. **Check Curvine metrics**:
   ```bash
   curl http://localhost:9000/metrics  # Master metrics
   curl http://localhost:9001/metrics  # Worker metrics
   ```

3. **Profile with perf**:
   ```bash
   perf record -g ./curvine-server
   perf report
   ```

### FUSE Mount Issues

1. **Check mount status**:
   ```bash
   mount | grep curvine
   fusermount -u /mnt/curvine  # Unmount if needed
   ```

2. **Debug FUSE operations**:
   ```bash
   # Enable FUSE debug logging
   curvine-fuse -o debug /mnt/curvine
   ```

3. **Check permissions**:
   ```bash
   ls -la /dev/fuse
   groups $USER  # Check if user is in fuse group
   ```

## Debugging Tools

### Built-in Tools

- **curvine-cli**: Command-line interface for cluster management
- **curvine-bench**: Performance testing and profiling
- **Health checks**: Built-in health monitoring endpoints

### External Tools

- **strace**: System call tracing
- **gdb**: Debugging with core dumps
- **valgrind**: Memory debugging
- **perf**: Performance profiling

## Core Dump Analysis

1. **Enable core dumps**:
   ```bash
   ulimit -c unlimited
   echo '/tmp/core.%e.%p' > /proc/sys/kernel/core_pattern
   ```

2. **Analyze with gdb**:
   ```bash
   gdb ./curvine-server /tmp/core.curvine-server.12345
   (gdb) bt
   (gdb) info registers
   ```

## Log Analysis

### Key Log Patterns

- **Connection errors**: Look for "connection refused" or "timeout"
- **Memory issues**: Search for "out of memory" or "allocation failed"
- **Disk errors**: Check for "I/O error" or "disk full"
- **Performance**: Monitor "slow operation" warnings

### Log Aggregation

```bash
# Collect logs from all nodes
for host in master worker1 worker2; do
  scp $host:/var/log/curvine/*.log ./logs/$host/
done

# Search across all logs
grep -r "ERROR" ./logs/
```

## Troubleshooting Checklist

1. **System Health**:
   - [ ] Sufficient disk space
   - [ ] Memory availability
   - [ ] Network connectivity
   - [ ] Process status

2. **Configuration**:
   - [ ] Valid configuration files
   - [ ] Correct network addresses
   - [ ] Proper permissions
   - [ ] Environment variables

3. **Logs**:
   - [ ] No critical errors
   - [ ] Reasonable log levels
   - [ ] Recent log entries
   - [ ] Consistent timestamps

## Getting Help

- Check the [GitHub Issues](https://github.com/curvine/curvine/issues)
- Review documentation and FAQ
- Join the community discussions
- Provide detailed logs and configuration when reporting issues