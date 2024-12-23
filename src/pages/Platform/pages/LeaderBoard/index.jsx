import OutletMain from "../../components/OutletMain";
import PositionCard from "./components/PositionCard";
import mockedCompanies from "./data/Companies.json"

export default function Leaderboard() {

  const companies = [...mockedCompanies]

  const user = JSON.parse(localStorage.getItem("user")) || {}

  const newCompanie = {
    name: user.name,
    points: user.pontuation,
    category: user.category,
    isUser: true
  }

  companies.push(newCompanie)

  const sortedCompanies = companies.sort((a, b) => b.points - a.points)

  return (
    <>
    <OutletMain title="Placar de Líderes">
      <section className="mx-10 xl:mx-32 py-20 flex flex-col gap-8 h-full">
        <div className="flex justify-between items-center gap-7 bg-eGray/20 py-2 px-4 rounded-lg">
          <h1 className="md:text-xl font-bold basis-1/3 md:basis-1/4">N°</h1>
          <h1 className="md:text-xl font-bold basis-1/3 md:basis-1/4">Nome</h1>
          <h1 className="md:text-xl font-bold md:basis-1/4 hidden md:block">Categoria</h1>
          <h1 className="md:text-xl font-bold basis-1/3 md:basis-1/4 text-end pr-4">Pontuação</h1>
        </div>
        <div className="flex flex-col gap-5 overflow-y-scroll">
          {
            sortedCompanies.map((company, index) => (
              <PositionCard key={index} position={index + 1} {...company} />
            ))
          }
        </div>
      </section>
    </OutletMain>
    </>
  )
}