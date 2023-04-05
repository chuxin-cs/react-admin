import { FC, useEffect, useState } from "react";

// 案例1 useState 性能方面案例
const Demo: FC = () => {
    const [state, setState] = useState(0);

    console.log(state, "Demo 执行~")
    useEffect(() => {
        console.log(state, "useEffect 执行~")
        setTimeout(() => setState((v) => v + 1), 5000)
    }, [])

    return (
        <>
            <button onClick={() => {
                console.log(state, 'state');
                setState(state + 1)
            }}>{state}</button>
        </>
    )
    /** 
     * 这是一个非常反直觉的结果，原因在于第一次运行函数时，state 的值为 0，而 setTimeout 中的回调函数捕获了第一次运行 Demo 函数时 state 的值，也就是 0，所以 setState(state + 1)执行后 state 的值变成了 1，哪怕当前 state 值已经不是 0 了。
     */
}

export default Demo;