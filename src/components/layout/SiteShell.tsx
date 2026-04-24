import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="min-w-0 flex-1 overflow-x-hidden">{children}</div>
      <SiteFooter />
    </>
  );
}
