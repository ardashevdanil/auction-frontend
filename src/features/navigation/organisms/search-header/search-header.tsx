import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { TextInput, ButtonText } from "@ui";
import { signIn } from "next-auth/client";
import MenuSvg from "assets/images/icons/menu.svg";

import type { SearchHeaderProps } from "./search-header.types";

export const SearchHeader = forwardRef<HTMLDivElement, SearchHeaderProps>(
  function SearchHeader(props, ref) {
    const { className } = props;

    const classes = twMerge("flex p-0 z-10 py-3 px-4 bg-indigo-400", className);

    const buttonClasses = "w-8 h-8 p-0 text-white";

    return (
      <header ref={ref} className={classes}>
        <ButtonText className={buttonClasses} onClick={() => signIn("google")}>
          <MenuSvg />
        </ButtonText>
        <TextInput
          placeholder="Французские булочки оптом..."
          className="grow mx-4"
        />
        <ButtonText className={buttonClasses}>
          <MenuSvg />
        </ButtonText>
      </header>
    );
  }
);
