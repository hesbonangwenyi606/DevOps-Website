export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Kubernetes: A Beginner\'s Guide',
    slug: 'getting-started-with-kubernetes',
    excerpt: 'Learn the fundamentals of Kubernetes, from pods and deployments to services and ingress controllers. This comprehensive guide will help you understand container orchestration.',
    content: `
# Getting Started with Kubernetes: A Beginner's Guide

Kubernetes has become the de facto standard for container orchestration, and understanding it is essential for any DevOps engineer. In this guide, I'll walk you through the fundamentals of Kubernetes and help you get started with your first cluster.

## What is Kubernetes?

Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Originally developed by Google, it's now maintained by the Cloud Native Computing Foundation (CNCF).

## Core Concepts

### Pods

A Pod is the smallest deployable unit in Kubernetes. It represents a single instance of a running process in your cluster and can contain one or more containers.

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
\`\`\`

### Deployments

Deployments provide declarative updates for Pods and ReplicaSets. You describe the desired state, and the Deployment Controller changes the actual state to match.

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21
        ports:
        - containerPort: 80
\`\`\`

### Services

Services provide a stable network endpoint for accessing your Pods. They enable load balancing and service discovery.

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
\`\`\`

## Setting Up Your First Cluster

### Using Minikube

Minikube is perfect for local development:

\`\`\`bash
# Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Start your cluster
minikube start

# Verify installation
kubectl get nodes
\`\`\`

## Best Practices

1. **Use namespaces** to organize your resources
2. **Set resource limits** to prevent resource starvation
3. **Use labels and selectors** for organization
4. **Implement health checks** with liveness and readiness probes
5. **Use ConfigMaps and Secrets** for configuration management

## Conclusion

Kubernetes is a powerful platform that can seem overwhelming at first, but by understanding these core concepts, you're well on your way to becoming proficient. Start small, experiment with Minikube, and gradually expand your knowledge.

Happy orchestrating! 🚀
    `,
    category: 'Kubernetes',
    tags: ['Kubernetes', 'Containers', 'DevOps', 'Orchestration'],
    coverImage: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689717229_f3b2c961.jpg',
    author: {
      name: 'Hesbon Angwenyi',
      avatar: 'HA',
    },
    publishedAt: '2025-01-05',
    readingTime: 8,
  },
  {
    id: '2',
    title: 'Building Robust CI/CD Pipelines with GitHub Actions',
    slug: 'cicd-pipelines-github-actions',
    excerpt: 'Discover how to create automated CI/CD pipelines using GitHub Actions. From basic workflows to advanced deployment strategies with security scanning.',
    content: `
# Building Robust CI/CD Pipelines with GitHub Actions

GitHub Actions has revolutionized how we think about CI/CD pipelines. In this article, I'll share my experience building production-ready pipelines that include testing, security scanning, and automated deployments.

## Why GitHub Actions?

GitHub Actions offers several advantages:
- **Native integration** with GitHub repositories
- **Generous free tier** for public repositories
- **Marketplace** with thousands of pre-built actions
- **Matrix builds** for testing across multiple environments

## Basic Workflow Structure

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
\`\`\`

## Adding Security Scanning

Security should be integrated into your pipeline from day one:

\`\`\`yaml
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          ignore-unfixed: true
          severity: 'CRITICAL,HIGH'
      
      - name: Run SAST with CodeQL
        uses: github/codeql-action/analyze@v2
\`\`\`

## Deployment Strategies

### Blue-Green Deployment

\`\`\`yaml
  deploy:
    needs: [build, security]
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to staging
        run: |
          kubectl apply -f k8s/staging/
          kubectl rollout status deployment/app -n staging
      
      - name: Run smoke tests
        run: npm run test:e2e
      
      - name: Switch traffic
        run: |
          kubectl patch service app -p '{"spec":{"selector":{"version":"green"}}}'
\`\`\`

## Environment Secrets

Always use GitHub Secrets for sensitive data:

\`\`\`yaml
env:
  AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
  AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
  KUBECONFIG_DATA: \${{ secrets.KUBECONFIG_DATA }}
\`\`\`

## Pro Tips

1. **Use caching** to speed up builds
2. **Implement branch protection** rules
3. **Use environments** for deployment approvals
4. **Monitor workflow runs** and set up alerts
5. **Keep actions updated** for security patches

## Conclusion

GitHub Actions provides everything you need to build sophisticated CI/CD pipelines. Start simple and iterate as your needs grow.
    `,
    category: 'CI/CD',
    tags: ['GitHub Actions', 'CI/CD', 'Automation', 'DevOps'],
    coverImage: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689733863_631170df.jpg',
    author: {
      name: 'Hesbon Angwenyi',
      avatar: 'HA',
    },
    publishedAt: '2025-01-03',
    readingTime: 10,
  },
  {
    id: '3',
    title: 'AWS Lambda Best Practices for Production Workloads',
    slug: 'aws-lambda-best-practices',
    excerpt: 'Master AWS Lambda with these production-tested best practices. Learn about cold starts, memory optimization, error handling, and monitoring strategies.',
    content: `
# AWS Lambda Best Practices for Production Workloads

After deploying numerous Lambda functions to production, I've compiled the essential best practices that will help you build reliable, cost-effective serverless applications.

## Understanding Cold Starts

Cold starts occur when AWS needs to initialize a new execution environment. Here's how to minimize their impact:

### Keep Functions Warm

\`\`\`python
import json

# Initialize outside handler for reuse
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('MyTable')

def handler(event, context):
    # Handler code here
    return {
        'statusCode': 200,
        'body': json.dumps('Success')
    }
\`\`\`

### Optimize Package Size

- Use Lambda Layers for shared dependencies
- Remove unnecessary files from deployment packages
- Consider using container images for complex dependencies

## Memory and Performance

Memory allocation directly affects CPU allocation:

\`\`\`yaml
# AWS SAM template
Resources:
  MyFunction:
    Type: AWS::Serverless::Function
    Properties:
      MemorySize: 1024  # Experiment to find optimal
      Timeout: 30
      Runtime: python3.11
\`\`\`

### Power Tuning

Use AWS Lambda Power Tuning to find the optimal memory configuration:

\`\`\`bash
# Deploy power tuning state machine
sam deploy --template-file power-tuning.yaml

# Run optimization
aws stepfunctions start-execution \\
  --state-machine-arn arn:aws:states:... \\
  --input '{"lambdaARN": "arn:aws:lambda:...", "powerValues": [128, 256, 512, 1024, 2048]}'
\`\`\`

## Error Handling

Implement robust error handling:

\`\`\`python
import logging
from functools import wraps

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def error_handler(func):
    @wraps(func)
    def wrapper(event, context):
        try:
            return func(event, context)
        except ValueError as e:
            logger.error(f"Validation error: {e}")
            return {'statusCode': 400, 'body': str(e)}
        except Exception as e:
            logger.exception("Unexpected error")
            return {'statusCode': 500, 'body': 'Internal error'}
    return wrapper

@error_handler
def handler(event, context):
    # Your logic here
    pass
\`\`\`

## Monitoring and Observability

### CloudWatch Metrics

\`\`\`python
import boto3

cloudwatch = boto3.client('cloudwatch')

def put_custom_metric(name, value, unit='Count'):
    cloudwatch.put_metric_data(
        Namespace='MyApp',
        MetricData=[{
            'MetricName': name,
            'Value': value,
            'Unit': unit
        }]
    )
\`\`\`

### X-Ray Tracing

\`\`\`python
from aws_xray_sdk.core import xray_recorder
from aws_xray_sdk.core import patch_all

patch_all()

@xray_recorder.capture('process_data')
def process_data(data):
    # Processing logic
    pass
\`\`\`

## Cost Optimization

1. **Right-size memory** - Use power tuning
2. **Optimize execution time** - Profile and optimize code
3. **Use Provisioned Concurrency** wisely - Only for latency-sensitive workloads
4. **Implement request batching** - Process multiple items per invocation

## Conclusion

Following these best practices will help you build Lambda functions that are reliable, performant, and cost-effective. Remember to continuously monitor and optimize based on real-world usage patterns.
    `,
    category: 'Cloud',
    tags: ['AWS', 'Lambda', 'Serverless', 'Cloud'],
    coverImage: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689765971_f286ce14.png',
    author: {
      name: 'Hesbon Angwenyi',
      avatar: 'HA',
    },
    publishedAt: '2025-01-01',
    readingTime: 12,
  },
  {
    id: '4',
    title: 'Terraform Modules: Building Reusable Infrastructure',
    slug: 'terraform-modules-reusable-infrastructure',
    excerpt: 'Learn how to create modular, reusable Terraform configurations. From basic module structure to advanced patterns for enterprise-scale infrastructure.',
    content: `
# Terraform Modules: Building Reusable Infrastructure

Terraform modules are the key to maintaining clean, reusable, and scalable infrastructure code. In this article, I'll share patterns I've developed for building production-ready modules.

## Module Structure

A well-organized module follows this structure:

\`\`\`
modules/
└── vpc/
    ├── main.tf
    ├── variables.tf
    ├── outputs.tf
    ├── versions.tf
    └── README.md
\`\`\`

## Creating a VPC Module

### variables.tf

\`\`\`hcl
variable "name" {
  description = "Name prefix for resources"
  type        = string
}

variable "cidr_block" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones" {
  description = "List of availability zones"
  type        = list(string)
}

variable "enable_nat_gateway" {
  description = "Enable NAT Gateway for private subnets"
  type        = bool
  default     = true
}
\`\`\`

### main.tf

\`\`\`hcl
resource "aws_vpc" "main" {
  cidr_block           = var.cidr_block
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "\${var.name}-vpc"
  }
}

resource "aws_subnet" "public" {
  count             = length(var.availability_zones)
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.cidr_block, 8, count.index)
  availability_zone = var.availability_zones[count.index]

  tags = {
    Name = "\${var.name}-public-\${count.index + 1}"
    Type = "public"
  }
}

resource "aws_subnet" "private" {
  count             = length(var.availability_zones)
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.cidr_block, 8, count.index + 10)
  availability_zone = var.availability_zones[count.index]

  tags = {
    Name = "\${var.name}-private-\${count.index + 1}"
    Type = "private"
  }
}
\`\`\`

## Using the Module

\`\`\`hcl
module "vpc" {
  source = "./modules/vpc"

  name               = "production"
  cidr_block         = "10.0.0.0/16"
  availability_zones = ["us-east-1a", "us-east-1b", "us-east-1c"]
  enable_nat_gateway = true
}

output "vpc_id" {
  value = module.vpc.vpc_id
}
\`\`\`

## Best Practices

1. **Version your modules** using Git tags
2. **Document inputs and outputs** thoroughly
3. **Use consistent naming** conventions
4. **Implement validation** for variables
5. **Test modules** with Terratest

## Conclusion

Well-designed Terraform modules save time and reduce errors. Invest in building a solid module library for your organization.
    `,
    category: 'IaC',
    tags: ['Terraform', 'IaC', 'AWS', 'Infrastructure'],
    coverImage: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689240259_a3e0a2a1.png',
    author: {
      name: 'Hesbon Angwenyi',
      avatar: 'HA',
    },
    publishedAt: '2024-12-28',
    readingTime: 9,
  },
  {
    id: '5',
    title: 'Monitoring Kubernetes with Prometheus and Grafana',
    slug: 'monitoring-kubernetes-prometheus-grafana',
    excerpt: 'Set up comprehensive monitoring for your Kubernetes clusters using Prometheus and Grafana. Learn about metrics collection, alerting, and dashboard creation.',
    content: `
# Monitoring Kubernetes with Prometheus and Grafana

Effective monitoring is crucial for maintaining healthy Kubernetes clusters. In this guide, I'll walk you through setting up a complete monitoring stack using Prometheus and Grafana.

## Architecture Overview

Our monitoring stack consists of:
- **Prometheus** - Metrics collection and storage
- **Grafana** - Visualization and dashboards
- **AlertManager** - Alert routing and notifications
- **Node Exporter** - Host-level metrics

## Installing with Helm

\`\`\`bash
# Add Prometheus community Helm repo
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

# Install kube-prometheus-stack
helm install prometheus prometheus-community/kube-prometheus-stack \\
  --namespace monitoring \\
  --create-namespace \\
  --set grafana.adminPassword=securepassword
\`\`\`

## Custom Metrics

### ServiceMonitor for Your Apps

\`\`\`yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: my-app
  namespace: monitoring
spec:
  selector:
    matchLabels:
      app: my-app
  endpoints:
  - port: metrics
    interval: 30s
    path: /metrics
\`\`\`

## Alerting Rules

\`\`\`yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: app-alerts
spec:
  groups:
  - name: app.rules
    rules:
    - alert: HighErrorRate
      expr: |
        sum(rate(http_requests_total{status=~"5.."}[5m])) 
        / sum(rate(http_requests_total[5m])) > 0.05
      for: 5m
      labels:
        severity: critical
      annotations:
        summary: High error rate detected
\`\`\`

## Grafana Dashboards

Import these essential dashboards:
- **315** - Kubernetes cluster monitoring
- **6417** - Kubernetes pods
- **1860** - Node Exporter Full

## Conclusion

A well-configured monitoring stack is essential for production Kubernetes clusters. Start with the basics and expand as your needs grow.
    `,
    category: 'Monitoring',
    tags: ['Prometheus', 'Grafana', 'Kubernetes', 'Monitoring'],
    coverImage: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689257689_f53f0573.jpg',
    author: {
      name: 'Hesbon Angwenyi',
      avatar: 'HA',
    },
    publishedAt: '2024-12-25',
    readingTime: 11,
  },
  {
    id: '6',
    title: 'Docker Security Best Practices',
    slug: 'docker-security-best-practices',
    excerpt: 'Secure your Docker containers with these essential best practices. From image scanning to runtime security and secrets management.',
    content: `
# Docker Security Best Practices

Container security is a critical aspect of DevOps that's often overlooked. In this article, I'll share essential security practices for Docker containers.

## Image Security

### Use Minimal Base Images

\`\`\`dockerfile
# Instead of
FROM ubuntu:latest

# Use
FROM alpine:3.18
# Or distroless
FROM gcr.io/distroless/static-debian11
\`\`\`

### Scan Images for Vulnerabilities

\`\`\`bash
# Using Trivy
trivy image myapp:latest

# Using Docker Scout
docker scout cves myapp:latest
\`\`\`

## Dockerfile Best Practices

\`\`\`dockerfile
# Use specific versions
FROM node:20-alpine

# Create non-root user
RUN addgroup -g 1001 appgroup && \\
    adduser -u 1001 -G appgroup -D appuser

# Set working directory
WORKDIR /app

# Copy only necessary files
COPY package*.json ./
RUN npm ci --only=production

COPY --chown=appuser:appgroup . .

# Switch to non-root user
USER appuser

# Use HEALTHCHECK
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD wget -q --spider http://localhost:3000/health || exit 1

EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

## Runtime Security

### Read-only Filesystem

\`\`\`bash
docker run --read-only --tmpfs /tmp myapp:latest
\`\`\`

### Resource Limits

\`\`\`yaml
services:
  app:
    image: myapp:latest
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
\`\`\`

## Secrets Management

Never embed secrets in images:

\`\`\`bash
# Use Docker secrets
docker secret create db_password password.txt

# Or environment variables at runtime
docker run -e DB_PASSWORD_FILE=/run/secrets/db_password myapp
\`\`\`

## Conclusion

Security should be built into your container workflow from the start. Implement these practices to significantly reduce your attack surface.
    `,
    category: 'Containers',
    tags: ['Docker', 'Security', 'Containers', 'DevSecOps'],
    coverImage: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689220862_058bddbe.jpg',
    author: {
      name: 'Hesbon Angwenyi',
      avatar: 'HA',
    },
    publishedAt: '2024-12-20',
    readingTime: 7,
  },
];

export const blogCategories = [
  { id: 'all', label: 'All Posts', count: blogPosts.length },
  { id: 'Kubernetes', label: 'Kubernetes', count: blogPosts.filter(p => p.category === 'Kubernetes').length },
  { id: 'CI/CD', label: 'CI/CD', count: blogPosts.filter(p => p.category === 'CI/CD').length },
  { id: 'Cloud', label: 'Cloud', count: blogPosts.filter(p => p.category === 'Cloud').length },
  { id: 'IaC', label: 'Infrastructure as Code', count: blogPosts.filter(p => p.category === 'IaC').length },
  { id: 'Monitoring', label: 'Monitoring', count: blogPosts.filter(p => p.category === 'Monitoring').length },
  { id: 'Containers', label: 'Containers', count: blogPosts.filter(p => p.category === 'Containers').length },
];
