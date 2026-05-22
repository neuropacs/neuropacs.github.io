---
id: tech-specs
title: Technical Specifications
slug: /tech-specs
sidebar_position: 1
---

# Technical Specifications

All submitted imaging data must comply with the specifications detailed below. Any datasets that fail to meet these requirements will be deemed unsuitable for processing and rejected or may produce unreliable results.

**_The required MRI sequence is a diffusion-weighted, single-shot spin echo-planar imaging (EPI) acquisition with whole-brain coverage._**

### MRI Acquisition Parameters

Whole-brain diffusion MRI obtained with a single-shot spin echo EPI sequence sensitized to diffusion effects with the following acquisition parameters:

| Parameter                | Value        |
| ------------------------ | ------------ |
| Field strength, T        | 3            |
| Repetition time (TR), ms | 6000 – 17000 |
| Echo time (TE), ms       | 55 – 104     |
| In-plane resolution, mm² | 1.85 – 2.15  |
| Slice thickness, mm      | 2            |
| Slices, n                | 64 – 86      |
| Slice acquisition        | Interleaved  |
| Slice gap, mm            | 0            |
| Flip angle, degrees      | 90           |
| b-values, s/mm²          | 0, 1000      |
| b0 images, n             | ≥ 2          |
| Directions, n            | ≥ 30         |

### Instructions for Use (IFU) Requirements

The following patient information is also required as input:

| Parameter            | Value                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------- |
| Study Description    | "MRI Brain with DTI Non-Contrast"                                                        |
| Series Description   | "neuropacs DTI"                                                                          |
| Age                  | An integer indicating the years of age of the patient at the time of the MRI acquisition |
| Sex (Male or Female) | The biological sex of the patient at birth                                               |

### Supported DICOM Transfer Syntaxes (lossless-only)

Imaging acquired with lossy compression may fail processing or produce unreliable results. The following lossless DICOM transfer syntaxes are supported:

| UID                    | Name                                                  |
| ---------------------- | ----------------------------------------------------- |
| 1.2.840.10008.1.2      | Implicit VR Little Endian                             |
| 1.2.840.10008.1.2.1    | Explicit VR Little Endian                             |
| 1.2.840.10008.1.2.2    | Explicit VR Big Endian (Retired)                      |
| 1.2.840.10008.1.2.1.99 | Deflated Explicit VR Little Endian                    |
| 1.2.840.10008.1.2.4.70 | JPEG Lossless, Non-Hierarchical, 1st-Order Prediction |
| 1.2.840.10008.1.2.4.80 | JPEG-LS Lossless                                      |
| 1.2.840.10008.1.2.4.90 | JPEG 2000 Lossless Only                               |
| 1.2.840.10008.1.2.4.91 | JPEG 2000 (Lossless Only)                             |
| 1.2.840.10008.1.2.5    | RLE Lossless                                          |

### Diffusion Parameters DICOM Tags

The header of DICOM images must contain the acquisition parameters using one or more of the following tags:

| DICOM Tag        | Use                      |
| ---------------- | ------------------------ |
| (0008, 0070)     | Scanner name             |
| (2005, 1415) [a] | b-vectors                |
| (2005, 1599) [a] | b-vectors                |
| (0019, 10bb) [b] | b-vectors                |
| (0019, 10bc) [b] | b-vectors                |
| (0019, 10bd) [b] | b-vectors                |
| (0019, 10e0) [b] | b-directions             |
| (0019, 100e) [c] | b-directions             |
| (0043, 1039) [b] | b-value                  |
| (0019, 100c) [c] | b-value                  |
| (0019, 1027) [c] | b-matrix                 |
| (0019, 100d) [c] | Diffusion directionality |
| (0018, 1312) [b] | Phase encoder            |

[a] - Usually used by Philips scanners <br/>
[b] - Usually used by GE scanners <br/>
[c] - Usually used by Siemens scanners

### Supported DICOM Tags

Image processing supports many additional tags such as the ones below:

| DICOM Tag                    | Value                                                     |
| ---------------------------- | --------------------------------------------------------- |
| Patient Age (0010, 0010)     | Biological age of patient in years (e.g., "060Y", "048Y") |
| Patient Sex (0010, 0040)     | Biological sex of patient (e.g., "F", "M")                |
| Accession Number (0008,0050) | Acquisition accession number                              |
| Sender AE Title (0008, 0055) | Application Entity title                                  |

### Alternative Formats

Our platform also supports the following formats for imaging ingestion:

| Format              | Details                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| ZIP Archive (DICOM) | A single ZIP archive containing all DICOM imaging data with an optional JSON sidecar                    |
| ZIP Archive (NIfTI) | A single ZIP archive containing NIfTI volume(s), with corresponding b-vector, b-value, and JSON sidecar |

#### Supported JSON Sidecar Structure

| JSON Key                                         | Value                                                        |
| ------------------------------------------------ | ------------------------------------------------------------ |
| PatientAge/patientAge/patient_age                | Biological age of patient in years (e.g., "048Y", "48")      |
| PatientSex/patientSex/patient_sex                | Biological sex of patient (e.g., "F", "M", "Female", "Male") |
| AccessionNumber/accessionNumber/accession_number | Acquisition accession number (optional)                      |

Example file contents

```json
{
  "PatientAge": "045Y",
  "PatientSex": "M",
  "AccessionNumber": "ACC-12345"
}
```

---

_Last updated: February 11, 2026_
