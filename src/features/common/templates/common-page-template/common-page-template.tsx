import { twMerge } from "tailwind-merge";
import { SearchHeader, TouchMenu } from "@features/navigation";

import type { CommonPageTemplateProps } from "./common-page-template.types";

export function CommonPageTemplate(props: CommonPageTemplateProps) {
  const { classes, children } = props;

  const headerClasses = twMerge("sticky top-0 z-10", classes?.header);

  const navClasses = twMerge("fixed bottom-0", classes?.nav);

  return (
    <>
      <SearchHeader className={headerClasses} />
      <main className={classes?.main}>{children}</main>
      <TouchMenu className={navClasses} />
    </>
  );
}
