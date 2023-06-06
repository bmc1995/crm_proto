import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Customer } from 'src/app/models/customer.model';
import { Lead } from 'src/app/models/lead.model';
import { Opportunity } from 'src/app/models/opportunity.model';
import { ContactService } from 'src/app/services/contact.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LeadService } from 'src/app/services/lead.service';
import { OpportunityService } from 'src/app/services/opportunity.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private leadService: LeadService,
    private contactService: ContactService,
    private opportunityService: OpportunityService
  ) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((val) => {
      this.customers = val;
    });
    this.contactService.getContacts().subscribe((val) => {
      this.contacts = val;
    });
    this.opportunityService.getOpportunities().subscribe((val) => {
      this.opportunities = val;
    });
    this.leadService.getLeads().subscribe((val) => {
      this.leads = val;
    });
  }

  customers: Customer[] = [];
  leads: Lead[] = [];
  contacts: Contact[] = [];
  opportunities: Opportunity[] = [];

  dummyLeads: Lead[] = [
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bjohnson@gmail.com',
      phone: '555-555-5555',
      address: '789 Maple Ave',
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345',
      country: 'USA',
      status: 'New',
      source: 'Website',
      budget: 50000,
      customerId: 1,
    },
    {
      id: 2,
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'asmith@hotmail.com',
      phone: '111-111-1111',
      address: '456 Oak St',
      city: 'Sometown',
      state: 'NY',
      postalCode: '67890',
      country: 'USA',
      status: 'Contacted',
      source: 'Referral',
      budget: 25000,
      customerId: 2,
    },
  ];

  dummyContacts: Contact[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'jdoe@abcinc.com',
      phone: '123-456-7890',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345',
      country: 'USA',
      customerId: 1,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jsmith@xyzcorp.com',
      phone: '987-654-3210',
      address: '456 Oak St',
      city: 'Sometown',
      state: 'NY',
      postalCode: '67890',
      country: 'USA',
      customerId: 2,
    },
  ];

  dummyOpportunities: Opportunity[] = [
    {
      id: 1,
      name: 'ABC Inc Website Redesign',
      description:
        'Redesign ABC Inc website for better user experience and increased sales',
      amount: 20000,
      closeDate: new Date('2023-06-30'),
      stage: 'Qualification',
      probability: 20,
      contactId: 1,
    },
    {
      id: 2,
      name: 'XYZ Corp Mobile App Development',
      description:
        'Develop mobile app for XYZ Corp to improve customer engagement and retention',
      amount: 50000,
      closeDate: new Date('2023-09-30'),
      stage: 'Needs Analysis',
      probability: 50,
      contactId: 2,
    },
  ];

  customerKeys = [
    'id',
    'name',
    'email',
    'phone',
    'address',
    'city',
    'state',
    'postalCode',
    'country',
    'website',
  ];
  contactKeys = [
    'id',
    'firstName',
    'lastName',
    'email',
    'phone',
    'address',
    'city',
    'state',
    'postalCode',
    'country',
    'customerId',
  ];
  opportunityKeys = [
    'id',
    'name',
    'description',
    'amount',
    'closeDate',
    'stage',
    'probability',
    'contactId',
  ];
  leadKeys = [
    'id',
    'firstName',
    'lastName',
    'email',
    'phone',
    'address',
    'city',
    'state',
    'postalCode',
    'country',
    'status',
    'source',
    'budget',
    'customerId',
  ];
}
