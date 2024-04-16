import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import TextComp from "../ui/textComp"

interface Props {
  title: string
  constent: React.ReactNode
  trigger: React.ReactNode
}
export default function ModalComp({ constent, title, trigger }: Props) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{trigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <TextComp className="text-2xl">{title}</TextComp>
            </DialogTitle>

          {constent}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
