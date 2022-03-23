import { Image } from "ui/atoms/image";
import logo from "assets/images/logo.png";
import avatar from "assets/images/avatar.png";
import filter from "assets/images/filter.png";
import { TextInput } from "@ui";

export function Header() {
  return (
    <header className="py-4 flex flex-row items-center justify-between border-b-2 border-black">
      <div className="flex flex-row items-center">
        <Image src={logo} height="32px" width="32px" />
        <h1 className="font-brand ml-3">Auction™</h1>
      </div>
      <div className="grow px-12 flex flex-row items-center">
        <TextInput placeholder="Начинай вводить..." />
        <div className="ml-4 inline-block h-8">
          <Image src={filter} height="32px" width="32px" />
        </div>
      </div>
      <div className="h-8">
        <Image src={avatar} height="32px" width="32px" />
      </div>
    </header>
  );
}
