import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    height: `300px`,
    width: `calc(100% - 90px)`,
    backgroundColor: `red`,
  },
  card__header: {
    margin: `20px`,
  },
  card__title: {
    margin: `0`,
    fontSize: `20px`,
    fontWeight: `bold`,
  },
  card__result: {
    margin: `0`,
    fontSize: `14px`,
    fontWeight: `bold`,
  },
}));
