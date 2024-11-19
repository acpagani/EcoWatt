import Header from "../Header";

export default function OutletMain({ title, children }) {
  return (
    <>
    <Header title={title}/>
    <main className="w-full h-[80vh]">
        {children}
    </main>
    </>
  )
}