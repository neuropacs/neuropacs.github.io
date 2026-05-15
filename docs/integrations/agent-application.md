---
sidebar_position: 3
---

# Neuropacs Agent

## Overview

The Neuropacs Agent is an on-premises software solution designed to operate within your data center, seamlessly integrating with your existing infrastructure while securely interfacing with the Neuropacs Cloud. It establishes an encrypted connection to transmit medical imaging for analysis, manage orders, retrieve reports, and automatically route them to designated destinations.

The Agent also supports fully on-premises workflows to provide an additional layer of data protection and control. With local quality control and preprocessing performed entirely within your internal network, sensitive data remains on site at all times—never leaving your environment.

## Key Benefits

- **Direct DICOM Integration**: Seamless connection to PACS systems and other DICOM-supported archives as a standard DICOM destination.
- **Integrated Web Portal**: Centralized platform to configure workflows, monitor system activity, and manage studies.
- **Automated Workflow**: Automatic routing, quality control, and report delivery without manual intervention.
- **Secure Processing**: Encrypted connections and configurable de-identification rules ensure data protection.
- **Comprehensive Monitoring**: Real-time logs and transparent tracking of all system operations.
- **Healthcare Compliant**: Full compliance with healthcare regulations and standards.

## Getting Started

### Usage Guide (PDF)

[Download the Neuropacs Agent Usage Guide](https://d13kmmwctlljvu.cloudfront.net/agent/docs/neuropacs_agent_usage_guide_v1.0.7.pdf)

## Tips & Best Practices

### Supported Environments

#### Supported Operating Systems

- Native Linux Hosts (Ubuntu 22.04+ recommended) - Modern Linux distributions with support for Docker Engine and Docker Compose
- Windows hosts - Windows 10/11 Pro, Enterprise, Education, and Server with Hyper-V/VMware virtualization capabilities
- macOS hosts - Modern macOS versions with Docker Desktop or VMware Fusion

#### Supported Virtualization Platforms

- VMware (VMware Workstation, VMware Fusion, VMware vSphere)
- HyperV

#### Supported Cloud Deployments

- Amazon Web Services (AWS)
- Microsoft Azure
- Google Cloud Platform (GCP)

### Optimal Performance

- Configure routing rules to send only relevant studies
- Monitor system resources and storage capacity
- Schedule maintenance tasks during low-activity periods

### Security Best Practices

- Enable all available de-identification options
- Regularly update Agent software and security patches
- Monitor access logs and user activity
- Enable TLS for secure network communication

### Workflow Optimization

- Set up automated routing for common study types
- Configure notification preferences for critical events deliverable via webhook or email
- Use quality control reports to improve upstream processes
- Leverage group processing for high-volume environments

---

_Last updated: February 12, 2026_
