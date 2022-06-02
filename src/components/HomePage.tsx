import React from 'react';
import { Link } from "react-router-dom";
import useCompanies from '../hooks/useCompanies';

interface ListContent {
  name: string;
  id: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: string;	
}

function HomePage() {
  const {data, isLoading, isError} = useCompanies();

  if(isLoading) return <div>Loading ...</div>
  
  if(isError) return <div>500 Error</div>

  console.log(data)
  const jsx = data.map((company:ListContent) => (
    <li key={company.id}>
      <Link to={`/${company.name}`}>
        <dl>
          <dt>{company.name}</dt>
          <dd>{company.description}</dd>
        </dl>
      </Link>
    </li>

  ))
  return <section>
    <ul>
      {jsx}
    </ul>
    </section>
}

export default HomePage;
