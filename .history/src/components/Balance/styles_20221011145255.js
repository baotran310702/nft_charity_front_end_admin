import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: `275px`,
  },
  header: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  title: {
    margin: `0`,
    fontSize: `20px`,
    fontWeight: `bold`,
    marginLeft: `20px`,
  },
  addBtn: {
    padding: `0`,
    margin: `0`,
  },
  body: {},
  bodyUnit: {},
  dollar: {
    color: `#5A55D2`,
    fontSize: `20px`,
  },
  dollar_title: {
    margin: ``
  },
}));
