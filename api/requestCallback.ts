import { ApiBaseUrl } from "@/services/Config"
import REQUEST from "@/services/Request"

interface RequestCalbackDto {
  email: string
  phone_number: string
}

export default async function REQUEST_CALLBACK(data: RequestCalbackDto) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `callbacks`,
    data,
  }).catch((error: any) => console.log(error))
}
