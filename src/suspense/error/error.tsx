import { FC } from "react"
import { Callout } from "@radix-ui/themes"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface Props {
  error: any;
}

export const Error: FC<Props> = ({ error }) => {
  return (
    <Callout.Root color="red" role="alert">
      <Callout.Icon>
        <ExclamationTriangleIcon />
      </Callout.Icon>
      <Callout.Text>
        {error.message}
      </Callout.Text>
    </Callout.Root>
  )
}

export default Error