import React from 'react'
const Menu = React.lazy(() => import('MicroFrontend/App'))

export default function App() {
  return (
    <div>
      Main
      <Menu />
    </div>
  )
}
