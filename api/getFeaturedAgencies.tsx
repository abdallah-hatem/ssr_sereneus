import { ApiBaseUrl } from "@/services/Config"
import REQUEST from "@/services/Request"

export default async function GET_FEATURED_AGENCIES() {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `funerary_agencies?featured=true`,
  }).catch((error: any) => console.log(error))
}
