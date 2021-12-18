export interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface CountryType {
  code: string;
  name: string;
  fronteiras: string[];
}
