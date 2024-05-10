import 'reflect-metadata';
import setupConfig from './config';
import Container from 'typedi';
import HealthHarborDentalClient from './client';

setupConfig();

async function main() {
  const client = Container.get(HealthHarborDentalClient);
  const inquiries = await client.getInquiries();
  console.log(inquiries);
}

main().catch(console.error);
