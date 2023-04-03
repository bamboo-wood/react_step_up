import { useCallback, useState, useMemo } from "react";
import { ChildArea } from "./components/ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => {
    console.log("usememo");
    return 1 + 3;
  }, []);
  console.log(temp);

  return (
    <>
      <div className="App">
        <input type="text" value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </div>
    </>
  );
}
