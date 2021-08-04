import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Switch } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/Inbox'
import HomeIcon from '@material-ui/icons/Home'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setTheme, setTitleName } from '../../store/features/theme'
import { useState } from 'react'
import { NavLink, useHistory, useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    activeLink: {
        // color:'#5f81fa'
        color: `${localStorage.getItem('theme') === 'dark' ? '#36e7ff' : '#06046b'}`,
    },
    navLink: {
        textDecoration: 'none',
        color: 'inherit',
    },
}))

export const VerticalMenuBar = ({ setShowVerticalMenu, showVerticalMenu }: any) => {
    const { themeState } = useSelector((state: RootState) => state.theme)
    const dispatch = useDispatch()

    const location = useLocation()

    useEffect(() => {
        const title = listMenu.filter((item: any) => item.path === location.pathname)
        dispatch(setTitleName(title[0].name))
    }, [location])

    const listMenu = [
        {
            name: 'English',
            path: '/',
            icon: <HomeIcon />,
        },
        {
            name: 'Form',
            path: '/form',
            icon: <InboxIcon />,
        },
    ]

    const handleChange = () => {
        localStorage.setItem('theme', themeState === 'dark' ? 'light' : 'dark')
        dispatch(setTheme(themeState === 'dark' ? 'light' : 'dark'))
    }
    const classes = useStyles()

    return (
        <>
            <Drawer anchor={'left'} open={showVerticalMenu} onClose={() => setShowVerticalMenu(false)}>
                <div className={classes.list} role="presentation">
                    <List>
                        <ListItem>
                            <ListItemText
                                style={{
                                    color: 'gray',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontFamily: 'MonteCarlo',
                                }}
                            >
                                ENGLISH 10
                            </ListItemText>
                        </ListItem>
                        <Divider />
                        {listMenu.map((item: any) => {
                            const style = item.path === location.pathname ? classes.activeLink : ''
                            return (
                                <NavLink to={item.path} className={classes.navLink} key={item.name}>
                                    <ListItem button onClick={() => setShowVerticalMenu(false)}>
                                        <ListItemIcon className={style}>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.name} className={style} />
                                    </ListItem>
                                </NavLink>
                            )
                        })}
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Theme (${themeState})`} />
                            <Switch
                                checked={themeState === 'dark' ? true : false}
                                onChange={handleChange}
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    )
}
