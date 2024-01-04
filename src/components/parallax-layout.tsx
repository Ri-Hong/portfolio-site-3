/** @jsxImportSource theme-ui */

import * as React from "react"
import { get } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { Global } from "@emotion/react"
import MdxComponents from "./mdx-components"

type LayoutProps = { children: React.ReactNode; className?: string }

const ParallaxLayout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: get(t, `colors.primary`),
          color: get(t, `colors.background`),
        },
      })}
    />
    <MDXProvider components={MdxComponents}>
      <main sx={{  marginTop: `-3.75rem` }} className={className}>{children}</main>
    </MDXProvider>
  </React.Fragment>
)

export default ParallaxLayout
