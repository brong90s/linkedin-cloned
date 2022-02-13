import { getSession, useSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import { AnimatePresence } from "framer-motion"
import { modalState, modalTypeState } from "../atoms/modalAtom"
import { useRecoilState } from "recoil"
import Modal from "../components/Modal"

export default function Home() {
  const [modalOpen, setModalOpen] = useRecoilState(modalState)
  const [modalType, setModalType] = useRecoilState(modalTypeState)

  const router = useRouter()
  const { statue } = useSession({
    // The user is not authenticate, handle it here.
    required: true,
    onUnauthenticated() {
      router.push("/home")
    },
  })

  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          {/* SIDEBAR */}
          <Sidebar />
          {/* FEED */}
          <Feed />
        </div>
        {/* WIDGET */}
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // check if user is authenticated on the server...
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
