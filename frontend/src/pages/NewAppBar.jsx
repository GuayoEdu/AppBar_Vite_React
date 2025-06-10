import { useMediaQuery } from 'usehooks-ts';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';

import ListAltIcon from '@mui/icons-material/ListAlt';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import DriveFileMoveRoundedIcon from '@mui/icons-material/DriveFileMoveRounded';
import DriveFileMoveRtlRoundedIcon from '@mui/icons-material/DriveFileMoveRtlRounded';
import LockIcon from '@mui/icons-material/Lock';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import ManageHistoryRoundedIcon from '@mui/icons-material/ManageHistoryRounded';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerHeaderHeight = 48;
const drawerWidth = 230;
const miniDrawerWidth = 76;
const duration = 200;

export default function NewAppBar({ title, drawerOpen, setDrawerOpen }) {
    const isMobile = useMediaQuery('(max-width: 600px)');
    const [drawerHover, setDrawerHover] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();

    const isDrawerExpanded = drawerOpen || (!drawerOpen && drawerHover);
    const azul = 'rgb(37, 118, 240)';
    const plomo = '#e0e0e0';

    const [openParents, setOpenParents] = useState({
        registros: false,
        flujo: false,
        config: false,
    });
    const [selected, setSelected] = useState({ parent: 'config', child: 'categorias' });

    const handleParentClick = (key) => {
        setOpenParents((prev) => ({ ...prev, [key]: !prev[key] }));
        setSelected((prev) => ({ ...prev, parent: key }));
    };

    const handleChildClick = (parentKey, childKey) => {
        setSelected({ parent: parentKey, child: childKey });
    };

    const menu = [
        {
            key: 'registros',
            label: 'Registros',
            icon: <ListAltIcon />,
            children: [
                { key: 'stock', label: 'Stock Actual', icon: <LayersRoundedIcon /> },
                { key: 'entrada', label: 'Registros Entrada', icon: <DriveFileMoveRoundedIcon /> },
                { key: 'salida', label: 'Registros Salida', icon: <DriveFileMoveRtlRoundedIcon /> },
                { key: 'bloqueos', label: 'Bloquear Registros', icon: <LockIcon /> },
            ],
        },
        {
            key: 'flujo',
            label: 'Flujo Sistema',
            icon: <MenuBookRoundedIcon />,
            children: [
                { key: 'flujo', label: 'Flujo', icon: <ImportExportIcon /> },
            ],
        },
        {
            key: 'config',
            label: 'Configuración',
            icon: <SettingsIcon />,
            children: [
                { key: 'auditoria', label: 'Control auditoria', icon: <AssignmentIcon /> },
                { key: 'productos', label: 'Productos', icon: <AccountBalanceRoundedIcon /> },
                { key: 'categorias', label: 'Categorias', icon: <CategoryRoundedIcon /> },
                { key: 'unidad', label: 'Unidad Medida', icon: <LocalLibraryRoundedIcon /> },
                { key: 'movimientos', label: 'Tipos de movimientos', icon: <ManageHistoryRoundedIcon /> },
            ],
        },
    ];

    return (
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
            {/* AppBar superior */}
            <AppBar
                position="absolute"
                sx={{
                    ml: isMobile ? 0 : `${drawerOpen ? drawerWidth : miniDrawerWidth}px`,
                    width: isMobile ? '100%' : `calc(100% - ${drawerOpen ? drawerWidth : miniDrawerWidth}px)`,
                    transition: theme.transitions.create(['margin-left', 'width'], {
                        easing: theme.transitions.easing.sharp,
                        duration: duration,
                    }),
                    height: drawerHeaderHeight,
                    bgcolor: 'rgb(255, 255, 255)',
                    boxShadow: 'none',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    zIndex: theme.zIndex.appBar,
                }}
            >
                <Toolbar
                    sx={{
                        minHeight: drawerHeaderHeight,
                        height: drawerHeaderHeight,
                        px: 2,
                        py: 0,
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            left: 10,
                            top: 0,
                            height: `${drawerHeaderHeight}px`,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(!drawerOpen)}
                        >
                            <MenuIcon sx={{ color: 'rgb(84, 84, 84)' }} />
                        </IconButton>
                    </Box>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            position: 'absolute',
                            left: 40,
                            right: 0,
                            top: 0,
                            height: `${drawerHeaderHeight}px`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left',
                            pointerEvents: 'none',
                            color: 'rgb(84, 84, 84)',
                        }}
                    >
                        {title}
                    </Typography>

                    <Box
                        sx={{
                            position: 'absolute',
                            right: 10,
                            top: 0,
                            height: `${drawerHeaderHeight}px`,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'rgb(84, 84, 84)',
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: 'rgb(37, 118, 240)',
                                color: 'white',
                                '&:hover': {
                                    bgcolor: 'rgb(25, 94, 192)',
                                },
                                textTransform: 'none',
                                fontWeight: 500,
                            }}
                        >
                            Cerrar Sesión
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Overlay para mobile */}
            {isMobile && drawerOpen && (
                <Box
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        bgcolor: 'rgba(0,0,0,0.3)',
                        zIndex: theme.zIndex.appBar + 0.5,
                    }}
                />
            )}
            {isMobile && (
                <Box
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        bgcolor: drawerOpen ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)',
                        opacity: drawerOpen ? 1 : 0,
                        pointerEvents: drawerOpen ? 'auto' : 'none',
                        zIndex: theme.zIndex.appBar + 1,
                        transition: 'background-color 0.6s, opacity 0.6s',
                    }}
                />
            )}

            {/* Sidebar */}
            <Box
                onMouseEnter={() => !isMobile && setDrawerHover(true)}
                onMouseLeave={() => !isMobile && setDrawerHover(false)}
                sx={{
                    width: isMobile
                        ? (drawerOpen ? drawerWidth : 0)
                        : (isDrawerExpanded ? drawerWidth : miniDrawerWidth),
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: duration,
                    }),
                    height: '100vh',
                    overflowX: 'hidden',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    zIndex: theme.zIndex.appBar + 1,
                    boxShadow: 12,
                    borderRight: 'none',
                    display: isMobile ? 'block' : 'block',
                    pointerEvents: isMobile && !drawerOpen ? 'none' : 'auto',
                    bgcolor: 'rgb(255, 255, 255)',
                }}
            >
                <Box
                    sx={{
                        borderRight: 'none',
                        opacity: isMobile ? (drawerOpen ? 1 : 0) : 1,
                        transition: 'opacity 0.2s',
                        pointerEvents: isMobile && !drawerOpen ? 'none' : 'auto',
                    }}
                >
                    <Box sx={{ borderRight: 'none', bgcolor: 'rgb(37, 118, 240)', display: 'flex', alignItems: 'center', height: drawerHeaderHeight, px: 0 }}>
                        <List sx={{ width: '100%', p: 0 }}>
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    component="a"
                                    href="/"
                                    sx={{
                                        minHeight: 48,
                                        px: 3,
                                        justifyContent: 'initial',
                                        color: 'white',
                                        '&:hover': {
                                            bgcolor: 'rgba(255,255,255,0.08)',
                                        },
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            justifyContent: 'center',
                                            mr: 1,
                                            color: 'white',
                                            fontSize: 18,
                                        }}
                                    >
                                        <WarehouseIcon sx={{ color: 'white', fontSize: 22, ml: 0 }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                fontSize={14}
                                                sx={{
                                                    color: 'white',
                                                    fontWeight: 500,
                                                    position: 'relative',
                                                    top: '2.5px',
                                                }}
                                            >
                                                App Bar System lol
                                            </Typography>
                                        }
                                        sx={{
                                            opacity: isDrawerExpanded ? 1 : 0,
                                            transition: 'opacity 0.2s',
                                            whiteSpace: 'nowrap',
                                            width: '100%',
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>

                    <List sx={{ width: '100%', p: 4 }}></List>
                    <Divider />
                    <List sx={{ width: '100%', p: 0 }}>
                        {menu.map((parent) => (
                            <Box key={parent.key}>
                                <ListItemButton
                                    onClick={() => handleParentClick(parent.key)}
                                    sx={{
                                        minHeight: 32,
                                        px: 1.5,
                                        justifyContent: 'initial',
                                        borderRadius: 1,
                                        mx: 0.25,
                                        my: 0.25,
                                        bgcolor: selected.parent === parent.key ? azul : 'transparent',
                                        color: selected.parent === parent.key ? 'white' : 'rgb(84, 84, 84)',
                                        '&:hover': { bgcolor: azul, color: 'white' },
                                        fontWeight: selected.parent === parent.key ? 700 : 500,
                                    }}
                                >
                                    <ListItemIcon sx={{ color: selected.parent === parent.key ? 'white' : 'rgb(33, 33, 33)', minWidth: 0, justifyContent: 'center', mr: 1, fontSize: 17 }}>
                                        {parent.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                fontSize={12}
                                                sx={{
                                                    color: selected.parent === parent.key ? 'white' : 'rgb(84, 84, 84)',
                                                    fontWeight: 500,
                                                    position: 'relative',
                                                    top: '2px',
                                                }}
                                            >
                                                {parent.label}
                                            </Typography>
                                        }
                                        sx={{
                                            opacity: isDrawerExpanded ? 1 : 0,
                                            transition: 'opacity 0.2s',
                                            whiteSpace: 'nowrap',
                                            width: '100%',
                                        }}
                                    />
                                    {isDrawerExpanded && (
                                        openParents[parent.key]
                                            ? <ExpandLess sx={{ color: selected.parent === parent.key ? 'white' : 'rgb(84, 84, 84)', fontSize: 18 }} />
                                            : <ExpandMore sx={{ color: selected.parent === parent.key ? 'white' : 'rgb(84, 84, 84)', fontSize: 18 }} />
                                    )}
                                </ListItemButton>
                                <Collapse in={openParents[parent.key]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {parent.children.map((child) => (
                                            <ListItemButton
                                                key={child.key}
                                                onClick={() => {
                                                    handleChildClick(parent.key, child.key);

                                                    const routes = {
                                                        stock: '/stock-actual',
                                                        entrada: '/registros-entrada',
                                                        salida: '/registros-salida',
                                                        bloqueos: '/bloquear-registros',
                                                        flujo: '/flujo',
                                                        auditoria: '/control-auditoria',
                                                        productos: '/productos',
                                                        categorias: '/categorias',
                                                        unidad: '/unidad-medida',
                                                        movimientos: '/tipos-movimientos',
                                                    };
                                                    navigate(routes[child.key]);
                                                }}
                                                sx={{
                                                    minHeight: 28,
                                                    px: 1.5,
                                                    justifyContent: 'initial',
                                                    borderRadius: 1,
                                                    mx: 0.25,
                                                    my: 0.15,
                                                    bgcolor:
                                                        selected.parent === parent.key && selected.child === child.key
                                                            ? plomo
                                                            : 'transparent',
                                                    color:
                                                        selected.parent === parent.key && selected.child === child.key
                                                            ? azul
                                                            : 'rgb(84, 84, 84)',
                                                    fontWeight:
                                                        selected.parent === parent.key && selected.child === child.key
                                                            ? 700
                                                            : 400,
                                                    '&:hover': { bgcolor: plomo, color: azul },
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected.parent === parent.key && selected.child === child.key ? azul : 'rgb(150, 150, 150)', minWidth: 0, justifyContent: 'center', mr: 1 }}>
                                                    {child.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography fontSize={12} sx={{ position: 'relative', top: '2px' }}>
                                                            {child.label}
                                                        </Typography>
                                                    }
                                                    sx={{
                                                        opacity: isDrawerExpanded ? 1 : 0,
                                                        transition: 'opacity 0.2s',
                                                        whiteSpace: 'nowrap',
                                                        width: '100%',
                                                    }}
                                                />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            </Box>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
}