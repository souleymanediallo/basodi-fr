import React from 'react'

const Loading = () => {
  return (
    <div style={{ position: "relative"}}>
        <h2>
            <span style={{ 
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                }}
                >Loading...</span>
        </h2>
        </div>
  )
}

export default Loading