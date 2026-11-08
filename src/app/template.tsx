import { type ReactNode } from "react"

// Next remounts templates on navigation, giving every route a short entry transition.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>
}
