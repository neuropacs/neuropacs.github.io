---
layout: default
---

# Your software is 5 lines away from accurately diagnosing Parkinson's variations

Neuropacs can differentiate three major Parkinsonisms (PD, MSA, and PSP) with a proven accuracy > 90%.

We provide easy ways to integrate _neuropacs_ into your medical software. Whether it is a diagnostic tool, PACS system, or medical image viewer, _neuropacs_ can be easily integrated as a plugin.

# JavaScript SDK

Connect to _neuropacs_ diagnostic capabilities with our JavaScript SDK. [GitHub Source Code](https://github.com/neuropacs/neuropacs-js-sdk)

## Getting Started

### Setup

### Example

# Python SDK

Connect to _neuropacs_ diagnostic capabilities with our Python SDK. [GitHub Source Code](https://github.com/neuropacs/neuropacs-py-sdk)

## Getting Started

### Installation

```bash
pip install neuropacs
```

### Initialization

```py
import neuropacs

api_key = "your_api_key"
server_url = "https://your_neuropacs_url"
product_id = "PD/MSA/PSP-v1.0"
prediction_format = "XML"

# PRINT CURRENT VERSION
version = neuropacs.PACKAGE_VERSION

#INITIALIZE NEUROPACS SDK
npcs = neuropacs.init(api_key, server_url)

#GENERATE AN AES KEY
aes_key = npcs.generate_aes_key()
```

### Example

```py
#CONNECT TO NEUROPACS
connection_id = npcs.connect(api_key, aes_key)

#CREATE A NEW JOB
order_id = npcs.new_job(connection_id, aes_key)

#UPLOAD A DATASET
# --> dataset_path must be a valid path to a dataset <String>
upload_status = npcs.upload_dataset(dataset_path,connection_id, order_id, aes_key)

#START A JOB
# --> Valid product_id options: PD/MSA/PSP-v1.0
job_start_status = npcs.run_job(connection_id, aes_key, product_id, order_id)

#RETRIEVE JOB RESULTS
# --> Valid prediction_format options: TXT, PDF, XML, JSON, DICOMSR
job_results = npcs.get_results(prediction_format, order_id, connection_id, aes_key)
```
