import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={0}>{children}</Box>
    </Typography>
  );
}

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <React.Fragment>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="light"
        centered
        classname="test"
      >
        <StyledTab label="Projects" {...a11yProps(0)}></StyledTab>
        <StyledTab label="About" {...a11yProps(1)}></StyledTab>
        <StyledTab label="Contact" {...a11yProps(2)}></StyledTab>
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <Projects></Projects>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About></About>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact></Contact>
      </TabPanel>
    </React.Fragment>
  );
}

const StyledTabs = withStyles({
  root: {
    maxWidth: "500px",
    margin: "auto",
    borderRadius: "5px",
    zIndex: "101",
    position: "relative"
  },
  indicator: {
    position: "relative",
    bottom: "5px",
    zIndex: "101",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "black"
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);
const StyledTab = withStyles(theme => ({
  root: {
    background: "#f0f0f0",
    borderRadius: "5px",
    position: "relative",
    textTransform: "uppercase",
    color: "gray",
    fontWeight: "bold",
    marginRight: theme.spacing(1),
    "&:focus": {
      outline: "0",
      color: "black"
    },
    "&:hover": {
      opacity: 1,
      color: "black"
    },
    "&$selected": {
      color: "black"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);
