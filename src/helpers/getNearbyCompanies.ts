const getNearbyCompanies = (city: string, obj: any[]) => {
  return obj.filter(obj => {
    return obj.address.city === city;
  })
}

export default getNearbyCompanies