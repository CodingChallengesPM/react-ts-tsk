export default function getCompany(object: any[], companieName: string) {
  let result = object.filter(obj => {
    return obj.name === companieName;
  })
  return result
}

