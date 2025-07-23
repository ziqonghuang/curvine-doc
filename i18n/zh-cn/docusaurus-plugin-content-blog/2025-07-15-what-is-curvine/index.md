---
authors: [david]
tags: [teams]
---

# 高性能分布式缓存Curvine，低调开源

## Curvine是什么
&emsp;Curvine是一套分布式缓存系统，基于Rust实现，具备 高并发，高吞吐，低延迟，资源消耗低等特点。不同于Redis、TiKV等KV缓存，Curvine只提供文件缓存能力。Curvine不是存储系统，只提供缓存能力，数据持久化还是需要底层文件或者对象存储系统支撑。

## 解决什么问题

1. 大规模数据IO性能瓶颈
2. 单机缓存系统容量瓶颈

实际应用中，有哪些场景适用Curvine加速？

<div style={{ textAlign: 'center' }}>
  <img src={require("./Curvine-application.png").default} alt="Curvine Application Scenarios." style={{ width: '80%', maxWidth: '800px' }}></img>
  <p style={{ fontSize: '0.8em', color: '#666', marginTop: '8px' }}>
    <b>Fig. 1</b>：Curvine Application Scenarios.
  </p>
</div>

如上图所示，Curvine适用于以下五大场景：

1. 大数据shuffle 中间数据加速
2. 大数据热表数据缓存加速
3. AI训练数据缓存加速
4. 模型文件分发缓存加速
5. 多云数据缓存，解决跨云专线性能瓶颈

以上场景总结，只是抛砖引玉，通俗的理解，Curvine其实就是解决： 日益增长的计算性能需求与分布式存储系统的IO能力瓶颈的矛盾。

## 性能表现

我们从以下几个方面展示性能和资源使用情况：

**1. 元数据操作性能**
<!-- 表格区 -->
   <table>
  <thead>
    <tr style={{ backgroundColor: '#2ecc71', color: 'white' }}>
      <th>Operation Type</th>
      <th>Curvine (QPS)</th>
      <th>Juicefs (QPS)</th>
      <th>oss (QPS)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>create</td>
      <td style={{ textAlign: 'right' }}>19,985</td>
      <td style={{ textAlign: 'right' }}>16,000</td>
      <td style={{ textAlign: 'right' }}>2,000</td>
    </tr>
    <tr>
      <td>open</td>
      <td style={{ textAlign: 'right' }}>60,376</td>
      <td style={{ textAlign: 'right' }}>50,000</td>
      <td style={{ textAlign: 'right' }}>3,900</td>
    </tr>
    <tr>
      <td>rename</td>
      <td style={{ textAlign: 'right' }}>43,009</td>
      <td style={{ textAlign: 'right' }}>21,000</td>
      <td style={{ textAlign: 'right' }}>200</td>
    </tr>
    <tr>
      <td>delete</td>
      <td style={{ textAlign: 'right' }}>39,013</td>
      <td style={{ textAlign: 'right' }}>41,000</td>
      <td style={{ textAlign: 'right' }}>1,900</td>
    </tr>
  </tbody>
</table>

&emsp;**注**： 对比数据选取的并发度均为40

&emsp;**详细结果**： https://curvineio.github.io/docs/Benchmark/meta/

&emsp;**业界类似产品测试数据**：https://juicefs.com/zh-cn/blog/engineering/meta-perf-hdfs-oss-jfs


**2. 数据读写性能**

相同硬件条件下，测试对比Alluxio性能：

● 256k顺序读
  <!-- 表格区 -->
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#2ecc71', color: 'white' }}>
        <th>Thread count</th>
        <th>Curvine Open Source Edition (GiB/s)</th>
        <th>Throughput of Open Source Alluxio (GiB/s)</th>
      </tr>
    </thead>
    <tbody>
      <!-- 数据行模板 -->
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>1</td>
        <td style={{ textAlign: 'right' }}>2.2</td>
        <td style={{ textAlign: 'right' }}>0.6</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>2</td>
        <td style={{ textAlign: 'right' }}>3.7</td>
        <td style={{ textAlign: 'right' }}>1.1</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>4</td>
        <td style={{ textAlign: 'right' }}>6.8</td>
        <td style={{ textAlign: 'right' }}>2.3</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>8</td>
        <td style={{ textAlign: 'right' }}>8.9</td>
        <td style={{ textAlign: 'right' }}>4.5</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>16</td>
        <td style={{ textAlign: 'right' }}>9.2</td>
        <td style={{ textAlign: 'right' }}>7.9</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>32</td>
        <td style={{ textAlign: 'right' }}>9.5</td>
        <td style={{ textAlign: 'right' }}>8.8</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>64</td>
        <td style={{ textAlign: 'right' }}>9.2</td>
        <td style={{ textAlign: 'right' }}>N/A</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>128</td>
        <td style={{ textAlign: 'right' }}>9.2</td>
        <td style={{ textAlign: 'right' }}>N/A</td>
      </tr>
    </tbody>
  </table>
  
● 256k随机读
<!-- 表格区 -->
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#2ecc71', color: 'white' }}>
        <th>Thread count</th>
        <th>Curvine Open Source Edition (GiB/s)</th>
        <th>Throughput of Open Source Alluxio (GiB/s)</th>
      </tr>
    </thead>
    <tbody>
      <!-- 数据行模板 -->
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>1</td>
        <td style={{ textAlign: 'right' }}>0.3</td>
        <td style={{ textAlign: 'right' }}>0.0</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>2</td>
        <td style={{ textAlign: 'right' }}>0.7</td>
        <td style={{ textAlign: 'right' }}>0.1</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>4</td>
        <td style={{ textAlign: 'right' }}>1.4</td>
        <td style={{ textAlign: 'right' }}>0.1</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>8</td>
        <td style={{ textAlign: 'right' }}>2.8</td>
        <td style={{ textAlign: 'right' }}>0.2</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>16</td>
        <td style={{ textAlign: 'right' }}>5.2</td>
        <td style={{ textAlign: 'right' }}>0.4</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>32</td>
        <td style={{ textAlign: 'right' }}>7.8</td>
        <td style={{ textAlign: 'right' }}>0.3</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>64</td>
        <td style={{ textAlign: 'right' }}>8.7</td>
        <td style={{ textAlign: 'right' }}>N/A</td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
        <td style={{ textAlign: 'right' }}>128</td>
        <td style={{ textAlign: 'right' }}>9.0</td>
        <td style={{ textAlign: 'right' }}>N/A</td>
      </tr>
    </tbody>
  </table>

&emsp; Alluxio官网数据披露：https://www.alluxio.com.cn/alluxio-enterprise-vs-open-source/


**3. 资源消耗情况**

&emsp; 得益于Rust语言的特性，我们在大数据shuffle加速场景下，对比线上使用Curvine和Alluxio资源消耗情况，内存降低90%+，cpu降低50%+。
 
## 架构简介

&emsp;Curvine架构设计理念：简单、极致、通用。


<div style={{ textAlign: 'center' }}>
  <img src={require("./Curvine-architechure.png").default} alt="Curvine Architecture Diagram." style={{ width: '80%', maxWidth: '800px' }}></img>
  <p style={{ fontSize: '0.8em', color: '#666', marginTop: '8px' }}>
    <b>Fig. 2</b>：Curvine Application Scenarios.
  </p>
</div>

&emsp;**简单**：简单轻量，缓存服务只有两个角色：master、worker。非性能瓶颈的模块，尽量复用开源或者已有的技术，代码最大可能轻量化。

&emsp;**极致**：对性能影响较大的关键节点：底层rpc通信架构、Fuse 实现性能等关键组件，自主设计实现，以极致性能优化思维构建。

&emsp;**通用**:：兼容多种现有接入模式，底层存储兼容主流分布式文件和对象存储做到足够通用，易用。

## 关于开源
&emsp;我们在内部大数据高并发高吞吐场景下使用Curvine加速数据IO，取得比较大的收益。希望吸引外部的伙伴共同建设，一起加速基础设施向Rust转变。
&emsp;https://github.com/curvineio/curvine

&emsp; 由OPPO大数据提供支持。
