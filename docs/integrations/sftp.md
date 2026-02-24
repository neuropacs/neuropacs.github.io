---
sidebar_position: 6
---

# SFTP

## Overview

The SFTP ingestion option provides a straightforward, secure method for healthcare facilities to transfer DICOM studies to our cloud platform. Leveraging standard SFTP clients and key-based authentication, this integration fits easily into existing workflows.

## Key Benefits

- **Security**: SSH key-based access and encrypted channels protect PHI in transit.
- **Simplicity**: Utilizes familiar SFTP tools—no specialized software required.
- **Reliability**: Automatic processing triggers upon upload, with status notifications.
- **Scalability**: Supports parallel uploads and large datasets through directory-based organization.

## How It Works

1. **Provisioning Access**
   - Receive SFTP endpoint, account credentials, and upload directory structure.
   - Register SSH public key for authentication.
2. **Uploading Studies**
   - Place each study as a zipped archive or folder into the designated input folder.
   - Our ingestion service detects new uploads and begins processing automatically.
3. **Processing & Acknowledgment**
   - Files are validated, ingested, and stored securely in our data lake.
   - Status updates and notifications are logged and available via the same SFTP endpoint.
4. **Retrieving Results**
   - As each study is processed from the incoming SFTP directory, reports become availble in the outgoing SFTP directory and can be retrieved at any time.
   - Aggregated reports with results of all processed studies are periodically generated and available in the outgoing SFTP directory.

## Tips

- Leverage concurrent processing by uploading many studies at once!

## Security and Compliance

- All connections enforce SSH encryption and strict host verification.
- Access controls restrict user permissions to assigned directories.
- Detailed audit logs record file transfers and processing events for compliance.

---

_Last updated: February 11, 2026_
