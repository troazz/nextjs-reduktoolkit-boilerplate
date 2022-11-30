import { NextPage } from "next"
import Navbar from "@components/navbar"

const Home: NextPage = () => {
  return (
    <main className="">
      <Navbar></Navbar>
      <div className="bg-white dark:bg-gray-700">
        <h1 className="text-xl font-bold text-blue-700 dark:text-white">
          Welcome Home
        </h1>
      </div>
    </main>
  )
}

export default Home
