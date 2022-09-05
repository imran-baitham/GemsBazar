import { Loader } from "@mantine/core";

// const Skelton = () => {
//   return (
//     <div className="w-full h-auto w-5/6 m-auto rounded-md">
//       <Loader size="xl" />;
//     </div>
//   );
// }

// export default Skelton;

/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";

export default function Skelton() {
  const [open, setOpen] = useState(true);

  return (
    <div className="text-center flex justify-center h-screen align-center items-center">
      <Loader size="xl" />
    </div>
  );
}
