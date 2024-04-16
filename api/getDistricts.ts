import { ApiBaseUrl } from "@/services/Config"
import REQUEST from "@/services/Request"

export default async function GET_DISTRICTS() {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `suggestions/districts`,
  }).catch((error: any) => console.log(error))
}
