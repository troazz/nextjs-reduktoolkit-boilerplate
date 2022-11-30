import { ReactElement } from "react"
import { useAppSelector, useAppDispatch } from "@hooks/useAppDispatch"
import { decrement, increment } from "@store/counterSlice"

export default function Counter(): ReactElement {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className="max-w-sm bg-yellow-200 rounded overflow-hidden shadow-lg mb-4 dark:bg-gray-900 p-3 mt-5">
        <h1 className="block text-2xl font-bold mt-5">Counter</h1>
        <span className="block text-4xl font-bold mb-3">{count}</span>
        <button
          className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none rounded-md px-6 py-3 mx-1 text-white transition duration-500 ease-in-out"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none rounded-md px-6 py-3 mx-1 text-white transition duration-500 ease-in-out"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
