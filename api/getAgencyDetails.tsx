import { ApiBaseUrl } from "@/services/Config"
import REQUEST from "@/services/Request"

export default async function GET_AGENCY_DETAILS(id: string | number) {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `funerary_agencies/${id}`,
  }).catch((error: any) => console.log(error))
}
