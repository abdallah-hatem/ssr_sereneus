import React from "react"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import REQUEST_CALLBACK from "../../api/requestCallback"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Fragment } from "react"
import TextComp from "../ui/textComp"

interface Props {
  className?: string
  inputs: any[]
  schema: any
  onSubmit: any
}

export default function FormComp({ inputs, schema, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
      {inputs.map((el, index) => (
        <Fragment key={index}>
          <Input
            key={index}
            type={el.type}
            placeholder={el.placeholder}
            className="rounded-3xl"
            {...register(el.name)}
          />
          {errors[el.name] && (
            <TextComp className="text-xs italic text-red-500 mt-2">
              {/* @ts-ignore */}
              {errors[el.name].message}
            </TextComp>
          )}
        </Fragment>
      ))}

      <Button children="request_call_back" className="rounded-3xl bg-prim" />
    </form>
  )
}
