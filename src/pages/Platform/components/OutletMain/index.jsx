import Header from "../Header";

export default function OutletMain({ title, children }) {
  return (
    <>
    <Header title={title}/>
    <main>
        {children}
    </main>
    </>
  )
}