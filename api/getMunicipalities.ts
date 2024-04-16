import { ApiBaseUrl } from "@/services/Config"
import REQUEST from "@/services/Request"

export default async function GET_MUNICIPALITIES(district: string) {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `suggestions/municipalities/${district}`,
  }).catch((error: any) => console.log(error))
}
