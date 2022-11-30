import { NextPage } from "next"
import Layout from "@components/layout"
import Head from "next/head"
import Link from "next/link"
import Counter from "@components/Counter"

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-700">
        <Head>
          <title>Welcome</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold dark:text-white">Welcome</h1>
          <div className="mt-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4 dark:bg-gray-900">
              <img
                className="w-full"
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 pb-2">
                <div className="font-bold text-xl mb-2 dark:text-white">
                  My Boilerplate
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  This is NextJS, Tailwind, Typescript and Redux Boilerplate.
                  Feel free to use it in your project. Don&apos;t forget to give
                  me star and share it with your friends.
                </p>
              </div>
              <div className="px-6 py-4 dark:text-gray-400">
                <span className="badge mr-2">#nextjs</span>
                <span className="badge mr-2">#tailwind</span>
                <span className="badge mr-2">#typescript</span>
                <span className="badge">#redux</span>
              </div>
            </div>
          </div>

          <p className="mt-3 text-2xl dark:text-white">
            Get started by editing{" "}
            <code className="p-3 font-mono text-lg bg-gray-100 dark:bg-gray-800 rounded-md">
              pages/index.js
            </code>
          </p>

          <h1 className="text-4xl font-bold dark:text-white mt-10">
            Redux Toolkit Example
          </h1>
          <Counter />

          <p>
            <Link href="/other">To Other Page</Link>
          </p>
        </main>
      </div>
    </Layout>
  )
}

export default Home
