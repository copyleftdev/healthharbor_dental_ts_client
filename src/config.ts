import 'reflect-metadata';
import { Container } from 'typedi';

function setupConfig() {
  Container.set("API_BASE_URL", process.env.API_BASE_URL || 'https://api.healthharbor.com');
  Container.set("AUTH_TOKEN", process.env.AUTH_TOKEN);
}

export default setupConfig;
