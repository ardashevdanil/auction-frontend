import { twMerge } from "tailwind-merge";
import { ButtonText } from "@ui";
import SearchSVG from "@assets/images/icons/search.svg";
import CartSVG from "@assets/images/icons/cart.svg";
import ProfileSVG from "@assets/images/icons/profile.svg";

import type { TouchMenuProps } from "./touch-menu.types";

export function TouchMenu(props: TouchMenuProps) {
  const { className } = props;
  const buttonClasses = "grow h-12 p-0 text-indigo-400";

  return (
    <nav className={twMerge("flex w-full bg-white", className)}>
      <ButtonText as="a" href="/" className={buttonClasses}>
        <SearchSVG />
      </ButtonText>
      <ButtonText as="a" href="/" className={buttonClasses}>
        <CartSVG />
      </ButtonText>
      <ButtonText as="a" href="/" className={buttonClasses}>
        <ProfileSVG />
      </ButtonText>
    </nav>
  );
}
