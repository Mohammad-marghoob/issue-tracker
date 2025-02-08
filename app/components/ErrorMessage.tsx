import { Callout } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <Callout.Root color="red" className="mb-5">
      <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  );
};

export default ErrorMessage;
