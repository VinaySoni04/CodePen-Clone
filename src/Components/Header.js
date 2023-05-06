import React from 'react'
import { AppBar,Toolbar,styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    height: 10vh
`
const Header= () => {
    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvF4iXxidUR-EAx1QUp5uu37e6R0qMs9Wf3Q&usqp=CAU";
    
  return (
    <Container position='static' >
        <Toolbar>
            <img src={ logo } alt='logo' style={{ width: 200 }} />
            By Vinay Soni
        </Toolbar>
    </Container>
  )
}

export default Header
