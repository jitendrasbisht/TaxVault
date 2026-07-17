import api from "@/lib/api";

export async function getTaxProfile(clientId:number){
  const {data}=await api.get(`/tax-profiles/${clientId}`);
  return data;
}

export async function createTaxProfile(payload:any){
  const {data}=await api.post("/tax-profiles",payload);
  return data;
}

export async function updateTaxProfile(id:number,payload:any){
  const {data}=await api.put(`/tax-profiles/${id}`,payload);
  return data;
}
