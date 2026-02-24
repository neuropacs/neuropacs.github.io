---
sidebar_position: 4
---

# Web Portal

## Overview

Our secure web portal provides a user-friendly interface for uploading, managing, and retrieving analysis reports. This guide walks you through the main workflows, illustrated with screenshots to help you get started quickly.

## Key Benefits

- **Intuitive Interface**: Clean, responsive design for desktop and tablet.
- **Secure Access**: Enforced via OAuth2 with MFA options.
- **Fast Uploads**: Drag‑and‑drop upload of DICOM studies.
- **Real‑Time Status**: Live progress indicators and notifications.
- **Comprehensive Reporting**: View and download analysis results in multiple formats.

## Getting Started

1. **Access the Portal**  
   Sign into the portal using your designated credentials. You can also update your password using the login dialog. After logging in, enter your MFA code or setup MFA using the guide displayed after logging in for the first time.
   ![Login Page](/img/web_portal_sign_in.png)

2. **Landing Page**  
   The landing page displays metrics on your individual and group orders. You can also view recent activity to keep up-to-date with your orders.
   ![Landing Page](/img/web_portal_landing.png)

3. **Order Management Page**  
    The order management page allows you to create new orders, view details on existing orders, and retrieve reports.
   ![Order Management Page](/img/web_portal_order_manage_page.png)

4. **Agent Management Page**  
   For administrative users, the Agent management page allows users to view all Neuropacs Agents currently in operation. You can view metrics on existing agents including order statuses, error messages, CPU/Memory/Disk usage, and other basic metrics. The information here depends on heartbeat permissions set on the individual agents.
   ![Agent Management Page](/img/web_portal_agent_manage_page.png)

5. **Profile Page**  
   Open your Profile to view details on the user profile. This includes account information, permissions, and session information.
   ![Profile Page](/img/web_portal_agent_profile_page.png)

## Troubleshooting

- **Upload Errors**

  - Check network connectivity and retry.
  - Contact support if issues persist.

- **Authentication Issues**
  - Authentication sessions expire after 1 hour.
  - Contact support if you’re locked out.

## Tips & Best Practices

- The information displayed in the web portal depends on the permission level of the user. To change your permission level, contact your administrator or Neuropacs support.
- Use a wired connection for large uploads.
- Regularly review your orders to stay on top of processing.
- Use the web portal to reset password and manage users, agents, and processing jobs within your organization.
- View the [Technical Specifications](/docs/specifications) before uploading to review imaging requirements.
- Do not close or leave the web portal during an active upload.

---

_Last updated: February 12, 2026_
