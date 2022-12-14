import { twMerge } from "tailwind-merge";
import { SearchHeader, TouchMenu } from "@features/navigation";

import type { CommonPageTemplateProps } from "./common-page-template.types";

export function CommonPageTemplate(props: CommonPageTemplateProps) {
  const { classes, refs, children } = props;

  const headerClasses = twMerge("sticky top-0 z-10", classes?.header);

  const mainClasses = twMerge("bg-neutral-50", classes?.main);

  const navClasses = twMerge("fixed bottom-0", classes?.nav);

  return (
    <>
      <SearchHeader ref={refs?.headerRef} className={headerClasses} />
      <main ref={refs?.mainRef} className={mainClasses}>
        {children}
      </main>
      <TouchMenu ref={refs?.navRef} className={navClasses} />
    </>
  );
}
