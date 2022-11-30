import { NextPage } from "next"
import Layout from "@components/layout"
import Head from "next/head"
import Link from "next/link"
import Counter from "@components/Counter"
import Pokemon from "@components/Pokemon"

const Other: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-700">
        <Head>
          <title>Welcome</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-4xl font-bold dark:text-white mt-10">
            Other Page
          </h1>

          <Counter />
          <Pokemon />

          <p>
            <Link href="/">To Homepage</Link>
          </p>
        </main>
      </div>
    </Layout>
  )
}

export default Other
