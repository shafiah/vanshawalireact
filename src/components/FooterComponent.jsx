import React from 'react'

const FooterComponent = () => {
  return (
    <div>
        <footer style={{ background: "#9b1134ff", color: "#f4f5f8ff", padding: "1rem", 
            textAlign: "center" }}>
            <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default FooterComponent