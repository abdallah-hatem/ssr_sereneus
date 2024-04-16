import { ApiBaseUrl } from "@/services/Config"
import REQUEST from "@/services/Request"

export default async function MAKE_CALL(agencyId: string | number) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `funerary_agencies/click_to_call/${agencyId}`,
  }).catch((error: any) => console.log(error))
}
