---
layout: default
---

# Your software is 5 lines away from accurately diagnosing Parkinson's variations

Neuropacs can differentiate three major Parkinsonisms (PD, MSA, and PSP) with [proven accuracy > 90%](https://neuropacs.com).

We provide easy ways to integrate _neuropacs_ into your medical software. Whether it is a diagnostic tool, PACS system, or medical image viewer, _neuropacs_ can be easily integrated as a plugin.

# JavaScript API

Connect to _neuropacs_ diagnostic capabilities with our JavaScript API. [GitHub Source Code](https://github.com/neuropacs/neuropacs-js-sdk)

## Getting Started

### Setup

Include the _neuropacs_ JavaScript API using the following line:

```html
<script src="https://neuropacs.com/js/neuropacs.min.js"/>
```

### Initialization

```js
const apiKey = "your_api_key";
const serverUrl = "http://your_neuropacs_url";
const productId = "PD/MSA/PSP-v1.0";
const prediction_format = "XML";

// INITIALIZE NEUROPACS API
const npcs = new Neuropacs(apiKey, serverUrl);

// GENERATE AN AES KEY
const aesKey = npcs.generateAesKey();
```

### Example

```js
//CONNECT TO NEUROPACS
const connectionID = await npcs.connect(apiKey, aesKey);

//CREATE A NEW JOB
const orderID = await npcs.newJob(connectionID, aesKey);

//UPLOAD A DATASET
const dataset = [file1, file2, file3];
const uploadStatus = await npcs.uploadDataset(dataset, orderID, connectionID, aesKey);

//START A JOB
const job = await npcs.runJob(productId, orderID, connectionID, aesKey);

//GET RESULTS
//--> Valid prediction_format options: TXT, PDF, XML, JSON, DICOMSR
const results = await npcs.getResults(prediction_format, orderID, connectionID, aesKey);
```

# Python API

Connect to _neuropacs_ diagnostic capabilities with our Python API. [GitHub Source Code](https://github.com/neuropacs/neuropacs-py-sdk)

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

#INITIALIZE NEUROPACS API
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
