import React from 'react'
const Menu = React.lazy(() => import('feature/Feature1'))

export default function App() {
  return (
    <div>
      <div style={{fontSize: '20px'}}>
        <h2>Shell App</h2>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  )
}
