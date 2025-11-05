import { useState } from "react"


export default function CounterComponent() {

    const [count,setCount] = useState<number>(0)

    const handelCount = () => {
        setCount((prev) => prev + 1)
    }

  return (
    <div className="border w-52 h-56 bg-white shadow-2xl">
        <p className="mt-5">{count}</p>
        <button onClick={handelCount} className="bg-blue-600 text-white px-4 py-1 rounded mt-5">Increase Count: {count}</button>
        <input onChange={(e) => setCount(Number(e.target.value))} className="border mt-5 pl-4 w-36" type="number" name="" id="" value={count} />
    </div>
  )
}
