import { useQuery } from "react-query";

export default function useCompanies() {
  return useQuery('companies', async() => {
    let res = await fetch('https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f');

    return res.json();
  })
}