const moment = require('moment');
const getDateXDaysAhead = require('../tools/createFutureDate');
const getDateXDaysPast = require('../tools/createPastDate');

const LOANS = [
  {
    customerFirstName: 'John',
    customerLastName: 'Doe',
    customerEmail: 'samsonajulor@gmail.com',
    customerPhoneNumber: '08130553102',
    loanId: '123345678',
    facilityType: 'this is a loan facility type',
    loanAmount: '400000',
    propertyType: 'Residential',
    propertyDescription: '4-bedroom bungalow, an uncompleted structure, a block of shops and a security house',
    lastValuationDate: '2022-03-21',
    // should be 14 days behind today
    revaluationDate: getDateXDaysAhead(14),
    nextRenewalDate: getDateXDaysAhead(14),
    disbursementDate: moment().format('YYYY-MM-DD'),
    repaymentDate: getDateXDaysAhead(17),
    openMarketValue: 68000000,
    forcedSalesValue: 68000000,
    repaymentAmount: 400000,
    valuersName: 'Ifebunandu & Associates',
    accountOfficer: 'Jude Okafor',
    accountOfficerEmailAddress: 'j.okafor@abbeymortgagebank.com',
    addedBy: 'Jude Okafor',
  },
  {
    customerFirstName: 'John',
    customerLastName: 'Doe',
    customerEmail: 'j.okafor@abbeymortgagebank.com',
    customerPhoneNumber: '08130553102',
    loanId: '123345678',
    facilityType: 'this is a loan facility type',
    loanAmount: '400000',
    propertyType: 'Residential',
    propertyDescription: '4-bedroom bungalow, an uncompleted structure, a block of shops and a security house',
    lastValuationDate: '2022-03-21',
    // should be 14 days behind today
    revaluationDate: getDateXDaysAhead(14),
    nextRenewalDate: getDateXDaysAhead(14),
    disbursementDate: moment().format('YYYY-MM-DD'),
    repaymentDate: getDateXDaysAhead(17),
    repaymentAmount: 400000,
    openMarketValue: 68000000,
    forcedSalesValue: 68000000,
    valuersName: 'Ifebunandu & Associates',
    accountOfficer: 'Samson Ajulor',
    accountOfficerEmailAddress: 's.ajulor@abbeymortgagebank.com',
    addedBy: 'Samson Ajulor',
  },
  {
    customerFirstName: 'John',
    customerLastName: 'Doe',
    customerEmail: 'samsonajulor@gmail.com',
    customerPhoneNumber: '08130553102',
    loanId: '123345678',
    facilityType: 'this is a loan facility type',
    loanAmount: '400000',
    propertyType: 'Residential',
    propertyDescription: '4-bedroom bungalow, an uncompleted structure, a block of shops and a security house',
    lastValuationDate: '2022-03-21',
    // should be 14 days behind today
    revaluationDate: getDateXDaysAhead(14),
    nextRenewalDate: getDateXDaysAhead(14),
    disbursementDate: getDateXDaysAhead(17),
    repaymentDate: getDateXDaysAhead(17),
    openMarketValue: 68000000,
    forcedSalesValue: 68000000,
    repaymentAmount: 400000,
    valuersName: 'Ifebunandu & Associates',
    accountOfficer: 'Jude Okafor',
    accountOfficerEmailAddress: 'j.okafor@abbeymortgagebank.com',
    addedBy: 'Jude Okafor',
  },
  {
    customerFirstName: 'John',
    customerLastName: 'Doe',
    customerEmail: 'j.okafor@abbeymortgagebank.com',
    customerPhoneNumber: '08130553102',
    loanId: '123345678',
    facilityType: 'this is a loan facility type',
    loanAmount: '400000',
    propertyType: 'Residential',
    propertyDescription: '4-bedroom bungalow, an uncompleted structure, a block of shops and a security house',
    lastValuationDate: '2022-03-21',
    // should be 14 days behind today
    revaluationDate: getDateXDaysAhead(14),
    nextRenewalDate: getDateXDaysAhead(14),
    disbursementDate: getDateXDaysAhead(17),
    repaymentDate: getDateXDaysAhead(17),
    repaymentAmount: 400000,
    openMarketValue: 68000000,
    forcedSalesValue: 68000000,
    valuersName: 'Ifebunandu & Associates',
    accountOfficer: 'Samson Ajulor',
    accountOfficerEmailAddress: 's.ajulor@abbeymortgagebank.com',
    addedBy: 'Samson Ajulor',
  },

  // for unpaid obligations
  {
    customerFirstName: 'John',
    customerLastName: 'Doe',
    customerEmail: 'samsonajulor@gmail.com',
    customerPhoneNumber: '08130553102',
    loanId: '123345678',
    facilityType: 'this is a loan facility type',
    loanAmount: '400000',
    propertyType: 'Residential',
    propertyDescription: '4-bedroom bungalow, an uncompleted structure, a block of shops and a security house',
    lastValuationDate: '2022-03-21',
    // should be 14 days behind today
    revaluationDate: getDateXDaysAhead(14),
    nextRenewalDate: getDateXDaysAhead(14),
    disbursementDate: getDateXDaysAhead(17),
    repaymentDate: getDateXDaysPast(8),
    openMarketValue: 68000000,
    forcedSalesValue: 68000000,
    repaymentAmount: 400000,
    valuersName: 'Ifebunandu & Associates',
    accountOfficer: 'Jude Okafor',
    accountOfficerEmailAddress: 'j.okafor@abbeymortgagebank.com',
    addedBy: 'Jude Okafor',
  },
  {
    customerFirstName: 'John',
    customerLastName: 'Doe',
    customerEmail: 'j.okafor@abbeymortgagebank.com',
    customerPhoneNumber: '08130553102',
    loanId: '123345678',
    facilityType: 'this is a loan facility type',
    loanAmount: '400000',
    propertyType: 'Residential',
    propertyDescription: '4-bedroom bungalow, an uncompleted structure, a block of shops and a security house',
    lastValuationDate: '2022-03-21',
    // should be 14 days behind today
    revaluationDate: getDateXDaysAhead(14),
    nextRenewalDate: getDateXDaysAhead(14),
    disbursementDate: getDateXDaysAhead(17),
    repaymentDate: getDateXDaysPast(8),
    repaymentAmount: 400000,
    openMarketValue: 68000000,
    forcedSalesValue: 68000000,
    valuersName: 'Ifebunandu & Associates',
    accountOfficer: 'Samson Ajulor',
    accountOfficerEmailAddress: 's.ajulor@abbeymortgagebank.com',
    addedBy: 'Samson Ajulor',
  },

  // payment update
  {
    customerFirstName: 'John',
    customerLastName: 'Doe',
    customerEmail: 'samsonajulor@gmail.com',
    customerPhoneNumber: '08130553102',
    loanId: '123345678',
    facilityType: 'this is a loan facility type',
    loanAmount: '400000',
    propertyType: 'Residential',
    propertyDescription: '4-bedroom bungalow, an uncompleted structure, a block of shops and a security house',
    lastValuationDate: '2022-03-21',
    // should be 14 days behind today
    revaluationDate: getDateXDaysAhead(14),
    nextRenewalDate: getDateXDaysAhead(14),
    disbursementDate: getDateXDaysAhead(17),
    repaymentDate: getDateXDaysPast(6),
    openMarketValue: 68000000,
    forcedSalesValue: 68000000,
    repaymentAmount: 400000,
    valuersName: 'Ifebunandu & Associates',
    accountOfficer: 'Jude Okafor',
    accountOfficerEmailAddress: 'j.okafor@abbeymortgagebank.com',
    addedBy: 'Jude Okafor',
  },
  {
    customerFirstName: 'John',
    customerLastName: 'Doe',
    customerEmail: 'j.okafor@abbeymortgagebank.com',
    customerPhoneNumber: '08130553102',
    loanId: '123345678',
    facilityType: 'this is a loan facility type',
    loanAmount: '400000',
    propertyType: 'Residential',
    propertyDescription: '4-bedroom bungalow, an uncompleted structure, a block of shops and a security house',
    lastValuationDate: '2022-03-21',
    // should be 14 days behind today
    revaluationDate: getDateXDaysAhead(14),
    nextRenewalDate: getDateXDaysAhead(14),
    disbursementDate: getDateXDaysAhead(17),
    repaymentDate: getDateXDaysPast(6),
    repaymentAmount: 400000,
    openMarketValue: 68000000,
    forcedSalesValue: 68000000,
    valuersName: 'Ifebunandu & Associates',
    accountOfficer: 'Samson Ajulor',
    accountOfficerEmailAddress: 's.ajulor@abbeymortgagebank.com',
    addedBy: 'Samson Ajulor',
  },
];

module.exports = LOANS;
