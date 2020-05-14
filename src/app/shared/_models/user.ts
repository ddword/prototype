export class IUser {
  addressId: number;
  addressTypeId: number;
  city: string;
  country: string;
  email: string;
  firstName: string;
  guid: string;
  contactPhone: string;
  id: number;
  lastName: string;
  middleName: string;
  mobilePhone: string;
  organization: string;
  preferredLanguage: string;
  retired: number;
  role: string;
  state: string;
  street1: string;
  street2: string;
  userRoleId: number;
  workPhone: string;
  zipCode: string;
}

export class ILoginResponse extends IUser {
  isSystemAdministrator: boolean;
  isPartner: boolean;
  publicKey: string;
  token: string;
  success: string;
  userGroupRights: string;
  rightsList: [string];
}
