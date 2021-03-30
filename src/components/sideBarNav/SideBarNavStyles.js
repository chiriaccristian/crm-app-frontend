import {makeStyles} from "@material-ui/core/styles";
//TODO change drawerWidth dinamic
let drawerWidth = 240;
const SideBarNavStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    listItemIcon: {
        textDecoration: 'none',
        '&.active': {
          color: 'red',
          fontWeight: 'bold'
        }
    }
}));

export default SideBarNavStyles;