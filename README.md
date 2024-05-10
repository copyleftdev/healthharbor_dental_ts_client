# Health Harbor Dental Client

This project provides an unofficial TypeScript client library for interacting with the Health Harbor Dental API. It is designed to help developers integrate Health Harbor Dental services into their applications with ease.

## Features

- Easy-to-use methods for fetching and creating dental inquiries.
- Integrated TypeScript typings for excellent developer experience and type safety.
- Configurable and ready for extension.

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later) or yarn

### Installation

To use this library in your project, run:

```bash
npm install healthharbor_dental_client
```

or with yarn:

```bash
yarn add healthharbor_dental_client
```

### Usage

Here's a quick example to get you started:

```typescript
import { HealthHarborDentalClient } from './client';

async function main() {
  const client = new HealthHarborDentalClient({
    baseURL: 'https://api.healthharbor.com',
    authToken: 'your_auth_token_here'
  });

  try {
    const inquiries = await client.getInquiries();
    console.log(inquiries);
    
    const newInquiryResponse = await client.createInquiry({
      patientName: "John Doe",
      dob: "1980-01-01",
      memberId: "123456789",
      npi: "987654321",
      taxId: "123456789",
      insurance: "CIGNA"
    });
    console.log(newInquiryResponse);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Development

To set up a local development environment for this library, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/copyleftdev/healthharbor_dental_ts_client.git
   ```
2. Navigate to the project directory:
   ```bash
   cd healthharbor_dental_client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the project:
   ```bash
   npm run build
   ```

## Testing

Run the automated tests for this project with:

```bash
npm test
```