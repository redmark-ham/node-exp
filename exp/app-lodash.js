const _ = require('lodash');

const supertoolAccounts = [
  {
    AccountName: 'ACME-Cloud4',
    FullName: 'Sully Burger',
    License: 'Editor',
    LastLogin: 'Never',
    Admin: 'No',
    Enabled: 'Yes',
    Licensed: 'Yes',
    accountServer: 'https://bwlux-web.canlab.acme.com',
    accountType: 'Full',
    accountStatus: 'Suspended',
    accountExpiryDate: '02/14/2019',
    invitedOn: 'N/A',
    userLocked: 'No'
  },
  {
    AccountName: 'ACME-Cloud5',
    FullName: 'Sully Burger',
    License: 'Editor',
    LastLogin: 'Never',
    Admin: 'No',
    Enabled: 'Yes',
    Licensed: 'Yes',
    accountServer: 'https://acme.com',
    accountType: 'Full',
    accountStatus: 'Suspended',
    accountExpiryDate: '11/29/2018',
    invitedOn: '08/31/2018 09:55 (Invitation expired)',
    userLocked: 'No'
  },
  {
    AccountName: 'ACME-Cloud',
    FullName: 'Sully Burger',
    License: 'Editor',
    LastLogin: '10/05/2018 12:19',
    Admin: 'No',
    Enabled: 'Yes',
    Licensed: 'Yes',
    accountServer: 'https://acme.com',
    accountType: 'Full',
    accountStatus: 'Active',
    accountExpiryDate: '05/04/2020',
    invitedOn: 'N/A',
    userLocked: 'No'
  }
];

const doc =
  {
    special_accounts_aliases: [
      {
        aliases: [
          'ACME'
        ],
        admin_users: [
          'cto@acme.com'
        ],
        email_body: '<p>Dear <customer>,</p><p>Due to cloud policy ACME Support is not allowed to make any changes related to cloud accounts.</p><p>Please contact the cloud administration team for further assistance: help@acme.com</p><p>Thank you.</p><p>Kind regards,</p><p>ACME Support</p>',
        dry_run: false,
        email_subject: 'Re: user original email subject'
      },
      {
        aliases: [
          'ACME-Cloud6'
        ],
        admin_users: [
          ''
        ],
        email_body: '<p>Dear <customer>,</p><p>Due to cloud policy ACME Support is not allowed to make any changes related to cloud accounts.</p><p>Please contact the cloud administration team for further assistance: help@acme.com</p><p>Thank you.</p><p>Kind regards,</p><p>ACME Support</p>',
        dry_run: true,
        email_subject: 'Re: user original email subject'
      },
      {
        aliases: [
          'testSpecialAccount1'
        ],
        admin_users: [
          'specialAccount1AdminUser1@us.acme.com'
        ],
        email_body: '<p>Dear <customer>,</p><p>Due to cloud policy ACME Support is not allowed to make any changes related to cloud accounts.</p><p>Please contact the cloud administration team for further assistance: help@acme.com</p><p>Thank you.</p><p>Kind regards,</p><p>ACME Support</p>',
        email_subject: 'Special customer account auto-response'
      },
      {
        aliases: [
          'ACME-Cloud3',
          'ACME-Cloud4'
        ],
        email_body: '<p>Dear <customer>,</p><p>Due to policy ACME Support is not allowed</p>',
        email_subject: 'Configured email subject'
      },
      {
        aliases: [
          'ACME-Cloud5'
        ],
        admin_users: ['sburger@us.acme.com'],
        email_body: '<p>Dear <customer>,</p><p>Due to policy ACME Support is not allowed</p>',
        email_subject: 'Configured email subject'
      },
      {
        aliases: [
          'ACME2',
          'ACME3'
        ],
        email_body: '<p>Dear <customer>,</p><p>Due to cloud policy ACME Support is not allowed to make any changes related to cloud accounts.</p><p>Please contact the cloud administration team for further assistance: help@acme.com</p><p>Thank you.</p><p>Kind regards,</p><p>ACME Support</p>',
        email_subject: 'Special customer account auto-response',
        dry_run: false
      },
      {
        aliases: [
          'MONSTERS-INC'
        ],
        no_email: true
      },
      {
        aliases: [
          'CLOUD27'
        ],
        admin_users: [],
        email_body: '<p>Dear <customer>,</p><p>Due to cloud policy ACME Support is not allowed to make any changes related to cloud accounts.</p><p>Please contact the cloud administration team for further assistance: help@acme.com</p><p>Thank you.</p><p>Kind regards,</p><p>ACME Support</p>',
        dry_run: true,
        email_subject: 'Special customer account auto-response'
      },
      {
        aliases: [
          'testNoEmailSpecialAccount1'
        ],
        no_email: true
      },
      {
        aliases: [
          'ACME-EMA'
        ],
        admin_users: [
          'jefferson@de.acme.com'
        ],
        email_body: '<p>Dear <customer>,</p><p>Due to cloud policy ACME Support is not allowed to make any changes related to cloud accounts.</p><p>Please contact the cloud administration team for further assistance: help@acme.com</p><p>Thank you.</p><p>Kind regards,</p><p>ACME Support</p>',
        dry_run: false,
        email_subject: 'Special customer account auto-response'
      },
      {
        aliases: [
          'ACME-US'
        ],
        admin_users: [
          'daniel@us.acme.com'
        ],
        email_domains: [
          'acme.com',
          'us.acme.com'
        ],
        email_body: '<p>Dear <customer>,</p><p>Due to cloud policy ACME Support is not allowed to make any changes related to cloud accounts.</p><p>Please contact the cloud administration team for further assistance: help@acme.com</p><p>Thank you.</p><p>Kind regards,</p><p>ACME Support</p>',
        dry_run: false,
        email_subject: 'Special customer account auto-response'
      },
      {
        aliases: [
          'ACME-Cloudx'
        ],
        admin_users: [],
        email_subject: 'Configured email subject',
        email_body: '<p>Dear <customer>,</p><p>Due to policy ACME Support is not allowed</p>',
        no_email: false
      }
    ]
  };
const specialAccounts = doc.special_accounts_aliases;

//  -----
const getSpecialAccountByName = (specialAccs, name) =>
  _.find(specialAccs, e => _.includes(_.map(e.aliases, _.method('toLowerCase')), name.toLowerCase()));

const account = getSpecialAccountByName(specialAccounts, 'ACME-Cloudx');
console.log(JSON.stringify(account.email_body, null, 2));
// -----

// -----
const getSupertoolAccountInSpecialAccounts = (supertoolAcc, specialAccs) =>
  // We need to make sure the all account names are lower case, then take each
  // supertool account name and see if there is a match in the special accounts
  // eslint-disable-next-line implicit-arrow-linebreak
  _.filter(specialAccs, specialAcc => _.includes(_.map(specialAcc.aliases, _.method('toLowerCase')), supertoolAcc.AccountName.toLowerCase()));
// -----

// -----
const getMatchingSupertoolAccounts = (supertoolAccs, specialAccs) => _.filter(supertoolAccs, (supertoolAcc) => {
  const match = getSupertoolAccountInSpecialAccounts(supertoolAcc, specialAccs);
  // If the array length is one then we have a match so return a truthy
  return (match && (match.length === 1));
});
const matchedAccounts = getMatchingSupertoolAccounts(supertoolAccounts, specialAccounts);
console.log(JSON.stringify(matchedAccounts, null, 2));
// -----

// -----
const getNonAdminUserAccounts = (supertoolAccs, specialAccs, email) => _.filter(supertoolAccs, (supertoolAcc) => {
  const match = getSupertoolAccountInSpecialAccounts(supertoolAcc, specialAccs);
  // If the array length is one then we have a match between the supertool accounts
  // and special accounts, next check if the user is in the special accounts admin list,
  // then only return accounts that the user is NOT an admin in list
  return ((match && match.length === 1) && !_.includes(_.map(match[0].admin_users, _.method('toLowerCase')), email.toLowerCase().trim()));
});
const emailAccounts = getNonAdminUserAccounts(matchedAccounts, specialAccounts, 'sburger@us.acme.com');
console.log(JSON.stringify(emailAccounts, null, 2));
// -----

// -----
const getOtherEnabledAccounts = (supertoolAccs, specialAccs) => _.filter(supertoolAccs, (supertoolAcc) => {
  const match = getSupertoolAccountInSpecialAccounts(supertoolAcc, specialAccs);
  // If the array length is zero then we have a supertool account that is not in
  // the special accounts, next check if supertool account has Enabled === 'Yes'
  return (match && (match.length === 0) && supertoolAcc.Enabled === 'Yes');
});
const otherEnabledAccounts = getOtherEnabledAccounts(supertoolAccounts, specialAccounts);
console.log(JSON.stringify(otherEnabledAccounts, null, 2));
// -----

// -----
const getMatchingDomainAccounts = (specialAccs, name) =>
  _.find(specialAccs, e => _.includes(_.map(e.email_domains, _.method('toLowerCase')), name.toLowerCase()));

const domainAccounts = getMatchingDomainAccounts(specialAccounts, 'us.acme.com');
console.log(JSON.stringify(domainAccounts, null, 2));
// -----
