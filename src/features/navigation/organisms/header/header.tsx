import { observer } from "mobx-react";
import { useStore } from "@lib/hooks";

export const Header = observer(function Header() {
  const { user } = useStore();

  return <header>{user.id + "_" + user.name}</header>;
});
