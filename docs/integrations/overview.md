---
sidebar_position: 1
sidebar_label: Overview
---

# Overview

Explore Neuropacs integration options and choose the workflow that fits your environment.

---

## At a Glance

| **Method**               | **Best for**                                            |
| ------------------------ | ------------------------------------------------------- |
| **Direct PACS-to-Cloud** | PACS-native connections via C-STORE or STOW-RS          |
| **Neuropacs™ Agent**     | On-prem routing, QC, and configurable workflows         |
| **REST API**             | OAuth2-secured API workflows with presigned uploads     |
| **Web Portal**           | Manual uploads and case management                      |
| **SFTP**                 | High-volume or batch uploads with standard SFTP tooling |

---

## Integration Details

### Direct PACS-to-Cloud

- **When to use:** Your PACS system can send and receive data outside the local network.
- **Highlights:**
  - PACS-native setup with minimal changes.
  - Secured via VPN tunnel or IP allowlist.
  - Send studies via DICOM C-STORE or STOW-RS.
  - Receive reports via C-STORE or STOW-RS (DICOM Encapsulated PDF and DICOM SR).

### Neuropacs™ Agent

- **When to use:** Your PACS cannot send/receive data externally, or data policies require on-prem processing.
- **Highlights:**
  - Highly configurable workflows and routing.
  - Built-in quality control.
  - Compatible with most PACS/RIS/EHR/EDC systems.
  - Local DICOM C-STORE ingest.
  - Minimal in-house maintenance.

### Web Portal

- **When to use:** You prefer a web UI for manual uploads and case management.
- **Highlights:**
  - User management and roles.
  - Case management and reporting.
  - Agent visibility and status.
  - Role-based access control (RBAC).
  - Password management.

### REST API

- **When to use:** You need programmatic integration or custom workflows.
- **Highlights:**
  - OAuth2 token-based authentication.
  - Multipart upload support.
  - Firewall-friendly HTTPS endpoints.
  - Simple REST protocol.
  - Example code snippets available.

### SFTP

- **When to use:** High-volume batch orders or grouped studies.
- **Highlights:**
  - Use any SFTP client.
  - On-demand high-volume processing.
  - Aggregated reporting.

---

_Last updated: February 11, 2026_
