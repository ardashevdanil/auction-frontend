import type { ReactNode, RefObject } from "react";

export type CommonPageTemplateProps = {
  children: ReactNode | ReactNode[] | null;
  classes?: {
    header?: string;
    main?: string;
    nav?: string;
  };
  refs?: {
    mainRef?: RefObject<HTMLDivElement>;
  };
};
