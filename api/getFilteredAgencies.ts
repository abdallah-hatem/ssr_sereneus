import { ApiBaseUrl } from "@/services/Config"
import REQUEST from "@/services/Request"

export default async function GET_FilTERED_AGENCIES(data: any) {
  let dataString = "?" + new URLSearchParams(data).toString() + "&"

  return await REQUEST({
    method: "GET",
    url:
      ApiBaseUrl +
      `funerary_agencies${dataString}orderBy=featured&ascending=false`,
  }).catch((error: any) => console.log(error))
}
