import React from "react";
import { useRouter } from "next/router";

// MUI
import {
    List,
    ListItemIcon,
    ListItemText,
    Collapse,
    ListItemButton,
    IconButton,
} from '@mui/material';
import {
    ExpandLess,
    ExpandMore,
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight,
} from '@mui/icons-material';

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setDrawerOpen } from "../../../../redux/reducers/component/template/dashboard/menu";
import { setProperties } from "../../../../redux/reducers/component/template/main/header";

// styles
import { listItemStyle, iconStyle } from "./styles";

// component
import { menuItem } from "./menuItem";

export default function MenuList() {

    const router = useRouter();
    const dispatch = useDispatch();
    const drawerOpen = useSelector(state => state.menu.drawerOpen);

    const [openSubMenu, setOpenSubMenu] = React.useState(
        menuItem.reduce((acc, item) => ({ ...acc, [item.item]: item.open }), {})
    );

    const [isHovered, setIsHovered] = React.useState(
        menuItem.reduce((acc, item) => ({ ...acc, [item.item]: item.hovered }), {})
    );

    function handleHover(item) {
        setIsHovered(prevState => ({
            ...Object.keys(prevState).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
            [item]: true
        }));
    }

    function handleOpenSubMenu(item) {
        setOpenSubMenu(prevState => ({
            ...Object.keys(prevState).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
            [item]: !prevState[item]
        }));
    }

    const MenuComponent = ({ item, icon, link, subMenu }) => {
        return (
            <>
                <ListItemButton
                    sx={listItemStyle(isHovered[item])}
                    onMouseDown={() => {
                        dispatch(setDrawerOpen(true));

                        if (subMenu.length > 0) {
                            handleOpenSubMenu(item)
                        } else {
                            router.push(link);
                            dispatch(setDrawerOpen(false));
                            dispatch(setProperties({ pageTitle: item, breadcrumbs: item, breadcrumbsLine: false }));
                        }
                    }}
                    onMouseEnter={() => handleHover([item])}
                >
                    <ListItemIcon style={iconStyle(isHovered[item])}>
                        {icon}
                    </ListItemIcon>
                    {drawerOpen &&
                        <>
                            <ListItemText primary={item} />
                            {subMenu.length > 0 && (openSubMenu[item] ? <ExpandLess /> : <ExpandMore />)}
                        </>
                    }
                </ListItemButton>
                {subMenu.length > 0 &&
                    <Collapse in={openSubMenu[item]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {subMenu.map((subItem, index) => (
                                <ListItemButton
                                    key={index}
                                    sx={{ pl: 4 }}
                                    onClick={() => {
                                        router.push(subItem.link)
                                        handleOpenSubMenu(item)
                                        dispatch(setDrawerOpen(false));
                                        dispatch(setProperties({ pageTitle: subItem.item, breadcrumbs: item + " > " + subItem.item, breadcrumbsLine: true }));
                                    }}>
                                    <ListItemText primary={subItem.item} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                }
            </>
        );
    }

    return (
        <List
            component="nav"
            sx={{
                color: 'var(--text-primary-color)'
            }}
            onMouseLeave={() => handleHover(null)}
        >

            {menuItem.map((item, index) => (
                <MenuComponent key={index} {...item} />
            ))}
        </List>
    )
}