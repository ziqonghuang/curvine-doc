# Command Line Tools

This section introduces the command-line tools supported by Curvine and their usage methods.

## Cluster Status Monitoring

| Command Format                 | Description                                    |
|-------------------------------|------------------------------------------------|
| bin/curvine report            | Output cluster summary information             |
| bin/curvine report capacity   | Output cluster summary and detailed capacity information for each worker |
| bin/curvine report info       | Output cluster and worker node information     |

## HDFS-Compatible Commands

Curvine is compatible with the HDFS access protocol. You can execute operations that are fully compatible with the `hdfs fs` command syntax through the `bin/curvine fs` command, as shown in the following examples:

Examples:
```bash
# List files and directories
bin/curvine fs -ls /

# Create directories
bin/curvine fs -mkdir -p /dir/a
```

Currently, Curvine and Hadoop are not 100% fully compatible. Some commands may not execute or have no effect. The following commands have passed rigorous testing:

| Command | Description                           |
|---------|---------------------------------------|
| ls      | List directory contents               |
| mkdir   | Create directories                    |
| cat     | View file contents                    |
| put     | Upload files                          |
| get     | Download files                        |
| count   | Count files and directories           |
| du      | Calculate directory space usage       |
| df      | Show file system available space     |
| mv      | Rename/move files                     |
| stat    | Query file/directory status           |
| rm      | Delete files or directories           |

:::tip
Commands not listed in the table do not necessarily mean they are unsupported, but rather that they have not undergone complete testing.
:::

## POSIX Commands

Curvine implements a POSIX-compliant FUSE (Filesystem in Userspace) interface. After mounting Curvine in Linux systems, users can interact through standard Linux file operation commands. This implementation has the following technical characteristics:

**System Compatibility:**
1. Complies with FUSE 3.0 interface specifications and is compatible with FUSE 2.0
2. Compatible with mainstream file system operation semantics like ext4/xfs
3. Supports Linux kernel 3.10+ versions

**Functional Features:**
1. Provides complete POSIX file operation interface
2. Supports atomic operation guarantees

**Command Line Operation Support:**
Users can operate through the following core Linux commands:
```bash
# Basic file operations
ls, cp, mv, rm, mkdir

# File content operations
cat, grep, sed, awk

# File system management
df -h, du -sh, stat
```

Curvine currently does not implement permission management. When executing the following permission-related commands:
```bash
chmod   # Command executes but does not actually modify permission bits
chown   # User/group change operations have no effect
getfacl # Cannot obtain valid ACL information
```

## Rust Command Line Tool

`cv fs` is a Rust-implemented command-line tool compatible with hdfs fs commands. Currently supports `ls`, `mkdir`, and `rename`.

```bash
bin/cv fs -ls curvine://x/y
```

## Mounting

Currently supports the `s3`.
Example: Mount `s3://testing` to `/s3-testing`
```bash
bin/cv mount s3://ai/xuen-test /s3 \
-c s3.endpoint_url=http://hostname.com \
-c s3.region_name=cn \
-c s3.credentials.access=access_key \
-c s3.credentials.secret=secret_key \
-c s3.path_style=true
```

Check mount table
```bash
bin/cv monut-list
```

:::warning
A unique UFS source can only mount to one curvine path. 
:::

## Unmount

```bash
bin/cv umount /s3-testing/
```

## Load
:::warning
You should mount ufs source to curvine before using load.
:::

```bash
bin/curvine load s3://my-bucket/test.data
```

load comond output will show jobid when success. you can using $jobid to check load status, see following load-status command.


## Load Status

```bash
bin/cv load-status $jobid
```