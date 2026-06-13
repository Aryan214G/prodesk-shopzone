import React from 'react'

const App = () => {
  return (
    <div>
      <Routes>

        <Route
        path="/"
        element={<Home />} />

        <Route
        path="/shop"
        element={<Shop />} 
        />

        <Route
        path="/contact"
        element={<Contact />}
        />

      </Routes>
    </div>
  )
}

export default App