import React from 'react'

const InlineCss = () => {
    const mystyle = {
        color: 'red'
    }
    return (
        <div>
            <h1 style={mystyle}>Inline Css</h1>
            <h2 style={{ backgroundColor: 'blue' }}>Hello World</h2>
        </div>
    )
}

export default InlineCss