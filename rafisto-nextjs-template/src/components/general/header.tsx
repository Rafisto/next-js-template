import React from 'react'

import { AppBar, Toolbar, Box, Container, MenuItem, Typography } from '@mui/material'
import { Slide, useScrollTrigger } from '@mui/material'

interface HideOnScrollProps {
    children: React.ReactElement;
}

const navPages = [
    "Index",
    "Articles",
    "Options",
]

const Header = () => {
    const HideOnScroll = (props: HideOnScrollProps) => {
        const { children } = props;
        const Window = () => {
            if (typeof window !== "undefined") {
                return { target: window }
            }
            else {
                return undefined
            }
        }
        const trigger = useScrollTrigger(Window())
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        )
    }
    return (
        <HideOnScroll>
            <AppBar className='red'>
                <Toolbar>
                    <Typography variant="h6">Webpage</Typography>
                    <Box sx={{ paddingInline: "10pt", display: 'flex' }}>
                        {navPages.map((name) => (
                            <MenuItem key={name}>
                                <Typography>{name}</Typography>
                            </MenuItem>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Header