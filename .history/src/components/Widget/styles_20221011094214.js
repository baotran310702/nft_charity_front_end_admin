import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  widget: {
    display: "flex",
    width: `275px`,
    height: `178px`,
    gap: `16px`,
    justifyContent: `space-between`,
    backgroundColor: "white",
    borderRadius: "10px",
  },
  cardInfomation: {
    backgroundColor: `red`,
    width: `94px`,
    height: `136px`,
    display: `flex`,
    flexDirection: `row`,
  },
}));
