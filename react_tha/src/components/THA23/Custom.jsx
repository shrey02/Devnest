import useIncreaseCounter from "./useIncreaseCounter";
import useToggle from "./useToggle";

 function Custom() {
    const [isTextChanged, setIsTextChanged] = useToggle();
    const count = useIncreaseCounter();
    return(
        <>
        <button onClick={count.increase}>{count.count}</button>
        <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
        </>
    ) 
}
export default Custom;