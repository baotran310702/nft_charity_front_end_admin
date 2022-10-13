import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../../../assets/back.svg";
export default makeStyles((theme) => ({
  sidebar: {
    width: `calc(100% - 240px)`,
    height: `100vh`,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EFF3FD",
  },
  home: {
    backgroundImage: `url(${backgroundImg})`,

    backgroundColor: "#EFF3FD",
  },
  navbar: {
    height: "100vh",
  },

  // main content
  mainContent: {
    width: "100vw",
    height: "100vh",
  },

  //widget
  widget: {
    display: "flex",
    justifyContent: "space-between",
  },
  some: {
    display: "flex",
    justifyContent: "center",
  },

  //overview and balance
  overAndBal: {
    display: `flex`,
    backgroundColor: `red`,
    marginTop: 
  },

  over: {
    backgroundColor: `green`,
    display: `flex`,
    justifyContent: `center`,
  },

  bal: {
    backgroundColor: `blue`,
  },
}));