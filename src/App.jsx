import classes from "./App.module.css";
import "normalize.css";

import Main from "./components/Main";

export default function App() {
  return (
    <div className={classes.wrapper}>
      <Main />
    </div>
  );
}
