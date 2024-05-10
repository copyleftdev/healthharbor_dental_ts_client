import axios, { AxiosInstance } from 'axios';
import { Service, Inject} from 'typedi';
import { DentalInquiry, DentalInquiryResponse } from './types';

@Service()
class HealthHarborDentalClient {
  private client: AxiosInstance;

  constructor(
    @Inject("API_BASE_URL") private baseURL: string,
    @Inject("AUTH_TOKEN") private authToken: string
  ) {
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: { Authorization: `Bearer ${this.authToken}` }
    });
  }

  async getInquiries(): Promise<DentalInquiryResponse[]> {
    try {
      const response = await this.client.get<DentalInquiryResponse[]>('/api/v0/dental/inquiries');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch inquiries:', error);
      throw new Error('Failed to fetch inquiries');
    }
  }

  async createInquiry(inquiryData: DentalInquiry): Promise<DentalInquiryResponse> {
    try {
      const response = await this.client.post<DentalInquiryResponse>('/api/v0/dental/inquiries', inquiryData);
      return response.data;
    } catch (error) {
      console.error('Failed to create inquiry:', error);
      throw new Error('Failed to create inquiry');
    }
  }
}

export default HealthHarborDentalClient;
