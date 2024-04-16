import TextComp from "../ui/textComp"
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import { z } from "zod"
import REQUEST_CALLBACK from "../../api/requestCallback"
import FormComp from "../shared/formComp"

export default function Footer() {
  const schema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email(),
    phone_number: z
      .string()
      .regex(/^\d+$/, "Please enter a valid phone number"),
  })

  function onSubmit(data: any) {
    REQUEST_CALLBACK(data).then((res) => console.log(res, "res callback"))
  }

  return (
    <footer className="bg-[#263238] min-h-[335px] flex mt-16 max-[800px]:flex-col ">
      {/* left */}
      <div className="flex-1 flex flex-col justify-between items-center py-12 px-10 ">
        {/* top */}
        <div className="flex flex-row justify-between w-full ">
          {/* logo */}
          <img
            src="/images/Sereneus-03.png"
            alt="logo"
            className="h-[40px]"
          />

          {/* links */}
          <div className="visible max-[800px]:hidden">
            <ul className="flex flex-col space-y-3">
              {links.map((el) => (
                <li>
                  <a href={el.url}>
                    <TextComp className="text-white">{el.name}</TextComp>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contacts */}
          <div className="flex flex-col space-y-3">
            {contacts.map((el, index) => (
              <div className="flex items-center space-x-2" key={index}>
                {el.icon}
                <TextComp className="text-white">{el.text}</TextComp>
              </div>
            ))}
          </div>
        </div>

        <div className="visible min-[800px]:hidden flex justify-start w-full">
          <ul className="flex flex-col space-y-3">
            {links.map((el) => (
              <li>
                <a href={el.url}>
                  <TextComp className="text-white">{el.name}</TextComp>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* bottom */}
        <div className="w-full flex justify-between items-center max-[800px]:items-start max-[800px]:mt-8 max-[800px]:flex-col">
          <TextComp className="text-gray-500">© 2024 Sereneus</TextComp>
          <div>
            <TextComp className="text-gray-500">{"privacy_policy"}</TextComp>
            <TextComp className="text-gray-500">{"terms_and_condition"}</TextComp>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="bg-sec flex-1 flex justify-center items-center max-[800px]:py-10">
        <div className="w-[70%] max-[1000px]:w-[90%] mx-auto">
          <FormComp inputs={inputs} schema={schema} onSubmit={onSubmit} />
        </div>
      </div>
    </footer>
  )
}

const links = [
  { name: "Home", url: "/" },
  { name: "Agencies", url: "/agencies" },
]

const contacts = [
  { text: "general_phone_number", icon: <FaPhoneAlt className="text-white" /> },
  { text: "ajuda@sereneus.pt", icon: <FaEnvelope className="text-white" /> },
]

const inputs = [
  {
    name: "email",
    type: "email",
    placeholder: "email",
  },
  {
    name: "phone_number",
    type: "number",
    placeholder: "phone",
  },
]
