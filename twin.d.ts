import 'twin.macro'
import styledImport, { css as cssImport, CSSProp } from 'styled-components'

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
  }
}

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}