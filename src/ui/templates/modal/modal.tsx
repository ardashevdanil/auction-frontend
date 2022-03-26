import { Popup } from "reactjs-popup";
import type { ModalProps } from "./modal.types";

export function Modal(props: ModalProps) {
  const { children } = props;

  return <Popup {...props}>{children}</Popup>;
}
