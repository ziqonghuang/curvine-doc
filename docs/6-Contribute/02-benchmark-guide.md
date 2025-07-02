---
sidebar_position: 2
---

# Benchmark Guide

This guide provides instructions for running performance benchmarks on Curvine.

## Overview

Curvine provides several benchmarking tools to evaluate performance across different scenarios:

- **Meta Benchmark**: Tests metadata operations performance
- **Concurrent Benchmark**: Tests concurrent read/write performance
- **FIO Benchmark**: Tests filesystem performance using FIO tool

## Prerequisites

- Curvine cluster deployed and running
- Test data prepared
- Benchmark tools compiled

## Running Benchmarks

### Metadata Performance Test

Refer to the [Metadata Performance Testing](../4-Benchmark/01-meta.md) documentation for detailed instructions.

### Concurrent Performance Test

Refer to the [Concurrent Performance Testing](../4-Benchmark/02-concurrent.md) documentation for detailed instructions.

### FIO Performance Test

Refer to the [FIO Performance Testing](../4-Benchmark/03-fio.md) documentation for detailed instructions.

## Best Practices

1. **Environment Consistency**: Ensure consistent test environment across runs
2. **Baseline Measurements**: Establish baseline performance metrics
3. **Multiple Runs**: Run tests multiple times and average results
4. **Resource Monitoring**: Monitor system resources during tests
5. **Documentation**: Document test configurations and results

## Troubleshooting

- Check cluster health before running benchmarks
- Verify network connectivity between test clients and cluster
- Monitor system logs for errors during testing
- Ensure sufficient resources (CPU, memory, disk) are available