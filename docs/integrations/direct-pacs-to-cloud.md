---
sidebar_position: 2
---

# Direct PACS-to-Cloud

## Overview

We provide secure VPN or IP allowlist connectivity options that allow healthcare institutions to establish a secure network tunnel between their on-premises PACS system and our cloud services. This integration supports DICOM standard protocols C-STORE and STOW-RS to facilitate reliable image and metadata transmission.

## Key Benefits

- **Enhanced Security**: Encrypted communication over a private VPN tunnel.
- **Compliance**: Meets HIPAA and industry security requirements.
- **Performance**: Low-latency data transfer for real-time workflows.
- **Simplicity**: Minimal changes to existing PACS infrastructure.

## How It Works

1. **VPN Tunnel Establishment**
   - A site-to-site or client VPN is configured between the hospital network and our cloud environment.
   - IP routing ensures that PACS traffic is directed through the tunnel.
2. **DICOM Protocol Support**
   - Simply add Neuropacs to your DICOM destinations and begin processing studies immediately.
   - **C-STORE**: Traditional DICOM push mechanism for sending studies from PACS to cloud.
   - **STOW-RS**: RESTful DICOM web service for modern HTTP-based transfers.
3. **Integration Workflow**
   - PACS pushes images via C-STORE or STOW-RS through the VPN tunnel.
   - Our cloud services automatically ingest, process, and store the incoming studies.
   - Analysis reports are returned to the PACS system over the same secure channel, using PACS imaging hierarchies to return the report to the relevant location.

## Tips

- Choose where your reports will be returned in your PACS system, or let our intelligent archiving system to choose for you.
- Reports can be delivered either as DICOM-encapsulated PDFs or DICOM Structured Reporting (SR) documents.
- Identical studies with the same StudyInstanceID uploaded within a 5-minute period will be overwritten

## Security and Compliance

- All VPN connections use industry-standard encryption (e.g., IPsec, TLS).
- Access controls and network segmentation enforce strict isolation.
- Audit logs track all DICOM transactions for compliance reporting.

---

_Last updated: February 17, 2026_
