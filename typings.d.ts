// 例: typings.d.ts
declare module '*.md' {
    import type React from 'react'
    const ReactComponent: React.VFC
    export default ReactComponent
    export const attributes: Record<string, unknown>
}
