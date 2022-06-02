import React from "react";
import useCompanies from "../hooks/useCompanies";
import { removeTrailingSlash } from "../helpers/removeTrailingSlash";
import getCompany from "../helpers/getCompany";

const CompanyPage = () => {
  const {data, isLoading, isError} = useCompanies();

  if(isLoading) return <div>Loading ...</div>
  
  if(isError) return <div>500 Error</div>
  const companyName = removeTrailingSlash(window.location.pathname);
  const companyData = getCompany(data, companyName);

  const {
    image,
    address,
    phone,
    email

  } = companyData[0]

  return (
    <main>
    <h1>Company name</h1>
    <figure>
      <img src={image} alt="dassd" />
    </figure>
    <section>
      <h2>Address</h2>
      <address>
        {`
        ${address.number}, 
        ${address.street}, 
        ${address.zip}, 
        ${address.city}, 
        ${address.country}
        `}
      </address>
    </section>
    <section>
      <h2>Contact</h2>
      <p>{phone}</p>
      <p>{email}</p>
    </section>
    <section>
      <h2>Nerby places</h2>
    </section>
  </main>
  )
}


export default CompanyPage
