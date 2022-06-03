export interface CompanyData {
  name: string;
  id: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: {
    zip: string;
    city: string;
    country: string;
    street: string;
    number: string;
  };
}

export interface StyleProps {
  primary?: boolean
}