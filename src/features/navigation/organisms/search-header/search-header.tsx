import { observer } from "mobx-react";
import { twMerge } from "tailwind-merge";
import { useStore } from "@lib/hooks";
import { TextInput, ButtonText } from "@ui";
import MenuSvg from "assets/images/icons/menu.svg";

import type { SearchHeaderProps } from "./search-header.types";

export const SearchHeader = observer(function SearchHeader(
  props: SearchHeaderProps
) {
  const { className } = props;
  const { user } = useStore();

  const classes = twMerge("flex p-0 z-10 py-3 px-4 bg-indigo-400", className);

  const buttonClasses = "w-8 h-8 p-0 text-white";

  return (
    <header className={classes}>
      <ButtonText className={buttonClasses}>
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
});
