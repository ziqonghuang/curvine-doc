import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import './index.css';

/**
 * Main homepage component for Curvine documentation site
 * Converted from HTML to React with Docusaurus i18n support
 */
function HomePage() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Curvine - High-Performance Distributed Caching System',
        description: 'The homepage title'
      })}
      description={siteConfig.tagline}
      wrapperClassName="curvine-homepage"
    >
      <section className="hero">
        <div className="hero-background">
          <img src={useBaseUrl("/img/curvine-engine-hero.svg")} alt="Curvine" className="hero-image" />
        </div>
        <div className="container">
          <h1>
            <Translate
              id="homepage.hero.title"
              description="The hero title on the homepage"
            >
              High-Performance Distributed Caching System
            </Translate>
          </h1>
          <p>
            <Translate
              id="homepage.hero.subtitle"
              description="The hero subtitle on the homepage"
            >
              Curvine is a high-performance distributed caching system implemented in Rust, designed for low-latency and high-throughput workloads with powerful data governance capabilities.
            </Translate>
          </p>
          <div className="btn-container">
            <Link to="/docs/Deploy/quick-start" className="btn">
              <Translate
                id="homepage.hero.getStarted"
                description="Get started button text"
              >
                Get Started
              </Translate>
            </Link>
            <Link to="/docs/Overview/instroduction" className="btn btn-secondary">
              <Translate
                id="homepage.hero.learnMore"
                description="Learn more button text"
              >
                Learn More
              </Translate>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-title">
            <h2>
              <Translate
                id="homepage.features.title"
                description="Features section title"
              >
                Core Features
              </Translate>
            </h2>
            <p>
              <Translate
                id="homepage.features.subtitle"
                description="Features section subtitle"
              >
                Curvine delivers exceptional performance through innovative architecture and cutting-edge technology.
              </Translate>
            </p>
          </div>
          <div className="use-case-cards">
            {/* High Performance Card */}
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <div className="feature-content">
                <h3>
                  <Translate
                    id="homepage.features.performance.title"
                    description="High performance feature title"
                  >
                    High Performance
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.features.performance.description"
                    description="High performance feature description"
                  >
                    Built with Rust for maximum performance, delivering microsecond-level latency and millions of operations per second.
                  </Translate>
                </p>
              </div>
            </div>
            
            {/* Distributed Architecture Card */}
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <div className="feature-content">
                <h3>
                  <Translate
                    id="homepage.features.distributed.title"
                    description="Distributed architecture feature title"
                  >
                    Distributed Architecture
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.features.distributed.description"
                    description="Distributed architecture feature description"
                  >
                    Horizontally scalable architecture with automatic sharding and replication for high availability.
                  </Translate>
                </p>
              </div>
            </div>
            
            {/* Memory Efficiency Card */}
            <div className="feature-card">
              <div className="feature-icon">💾</div>
              <div className="feature-content">
                <h3>
                  <Translate
                    id="homepage.features.memory.title"
                    description="Memory efficiency feature title"
                  >
                    Memory Efficiency
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.features.memory.description"
                    description="Memory efficiency feature description"
                  >
                    Advanced memory management with intelligent caching strategies and automatic garbage collection.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases" id="use-cases">
        <div className="container">
          <div className="section-title">
            <h2>
              <Translate
                id="homepage.usecases.title"
                description="Use cases section title"
              >
                Why Choose Curvine
              </Translate>
            </h2>
            <p>
              <Translate
                id="homepage.usecases.subtitle"
                description="Use cases section subtitle"
              >
                With the development of big data and AI, the performance requirements for large-scale data processing are increasing. Curvine is designed to solve large-scale IO acceleration and break through single-machine memory cache capacity bottlenecks.
              </Translate>
            </p>
          </div>
          <div className="use-case-cards">
            {/* AI Training Acceleration Card */}
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <div className="feature-content">
                <h3>
                  <Translate
                    id="homepage.usecases.ai.title"
                    description="AI training acceleration use case title"
                  >
                    AI Training Acceleration
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.usecases.ai.description"
                    description="AI training acceleration use case description"
                  >
                    Provides high-speed data access for deep learning training, significantly reducing data loading time, improving GPU utilization, and accelerating model training processes.
                  </Translate>
                </p>
              </div>
            </div>
            
            {/* Large Model Inference Card */}
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <div className="feature-content">
                <h3>
                  <Translate
                    id="homepage.usecases.inference.title"
                    description="Large model inference use case title"
                  >
                    Large Model Inference Acceleration
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.usecases.inference.description"
                    description="Large model inference use case description"
                  >
                    Optimizes data access for large language model inference scenarios, reducing inference latency and improving model service response speed and throughput.
                  </Translate>
                </p>
              </div>
            </div>
            
            {/* OLAP Engine Card */}
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <div className="feature-content">
                <h3>
                  <Translate
                    id="homepage.usecases.olap.title"
                    description="OLAP engine use case title"
                  >
                    OLAP Engine Query Acceleration
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.usecases.olap.description"
                    description="OLAP engine use case description"
                  >
                    Provides high-speed caching for analytical databases and OLAP engines, significantly improving complex query performance and reducing data analysis time.
                  </Translate>
                </p>
              </div>
            </div>
            
            {/* Big Data Computing Card */}
            <div className="feature-card">
              <div className="feature-icon">🔢</div>
              <div className="feature-content">
                <h3>
                  <Translate
                    id="homepage.usecases.bigdata.title"
                    description="Big data computing use case title"
                  >
                    Big Data Computing
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.usecases.bigdata.description"
                    description="Big data computing use case description"
                  >
                    Provides hot data caching and shuffle acceleration for big data offline computing, significantly improving data processing efficiency.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="performance" id="performance">
        <div className="container">
          <div className="section-title">
            <h2>
              <Translate
                id="homepage.performance.title"
                description="Performance section title"
              >
                Exceptional Performance
              </Translate>
            </h2>
            <p>
              <Translate
                id="homepage.performance.subtitle"
                description="Performance section subtitle"
              >
                Curvine delivers industry-leading performance metrics that set new standards for distributed caching systems.
              </Translate>
            </p>
          </div>
          <div className="performance-stats">
            <div className="stat-card">
              <div className="stat-number">&lt; 1ms</div>
              <div className="stat-label">
                <Translate
                  id="homepage.performance.latency"
                  description="Latency performance metric"
                >
                  Average Latency
                </Translate>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10M+</div>
              <div className="stat-label">
                <Translate
                  id="homepage.performance.ops"
                  description="Operations per second metric"
                >
                  Operations/sec
                </Translate>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.99%</div>
              <div className="stat-label">
                <Translate
                  id="homepage.performance.uptime"
                  description="Uptime performance metric"
                >
                  Uptime SLA
                </Translate>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="getting-started" id="getting-started">
        <div className="container">
          <div className="section-title">
            <h2>
              <Translate
                id="homepage.gettingstarted.title"
                description="Getting started section title"
              >
                Get Started in Minutes
              </Translate>
            </h2>
            <p>
              <Translate
                id="homepage.gettingstarted.subtitle"
                description="Getting started section subtitle"
              >
                Deploy Curvine quickly with our comprehensive documentation and tools.
              </Translate>
            </p>
          </div>
          <div className="getting-started-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>
                <Translate
                  id="homepage.gettingstarted.step1.title"
                  description="Step 1 title"
                >
                  Install
                </Translate>
              </h3>
              <p>
                <Translate
                  id="homepage.gettingstarted.step1.description"
                  description="Step 1 description"
                >
                  Download and install Curvine using our simple installation script.
                </Translate>
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>
                <Translate
                  id="homepage.gettingstarted.step2.title"
                  description="Step 2 title"
                >
                  Configure
                </Translate>
              </h3>
              <p>
                <Translate
                  id="homepage.gettingstarted.step2.description"
                  description="Step 2 description"
                >
                  Set up your cluster configuration with our intuitive configuration files.
                </Translate>
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>
                <Translate
                  id="homepage.gettingstarted.step3.title"
                  description="Step 3 title"
                >
                  Deploy
                </Translate>
              </h3>
              <p>
                <Translate
                  id="homepage.gettingstarted.step3.description"
                  description="Step 3 description"
                >
                  Launch your high-performance caching cluster and start serving requests.
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>
            <Translate
              id="homepage.cta.title"
              description="CTA section title"
            >
              Ready to Get Started with Curvine?
            </Translate>
          </h2>
          <p>
            <Translate
              id="homepage.cta.subtitle"
              description="CTA section subtitle"
            >
              Download now and experience the high-performance distributed caching system that Curvine brings.
            </Translate>
          </p>
          <div className="btn-container">
            <Link to="http://github.com/curvineio/curvine/release/latest" className="btn">
              <Translate
                id="homepage.cta.download"
                description="Download button text"
              >
                Download Now
              </Translate>
            </Link>
            <Link to="https://github.com/CurvineIO/curvine" className="btn btn-secondary">
              <Translate
                id="homepage.cta.github"
                description="GitHub button text"
              >
                View Source
              </Translate>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;