export interface Opportunity {
  id: number;
  name: string;
  description: string;
  amount: number;
  closeDate: Date;
  stage: string;
  probability: number;
  contactId: number;
}
