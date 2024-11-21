export default function SettingsModal() {
  const auth = localStorage.getItem("auth");
  const user = JSON.parse(auth)[0];

  const handleClick = () => {
    const confirmMessage = window.confirm("Deseja realmente sair?");
    if (!confirmMessage) return;
    localStorage.removeItem("auth");
    window.location.assign("/");
  };

  return (
    <dialog id="settings-modal" className="modal">
      <div className="modal-box flex flex-col gap-5">
        <h3 className="font-bold sm:text-lg">Configurações</h3>
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-5 top-6"
          onClick={() => document.getElementById("settings-modal").close()}
        >
          ✕
        </button>
        <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-14">
          <div className="flex flex-col gap-5">
            <h2 className="font-medium">Informações da Conta</h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <span className="font-medium">Nome de usuário</span>
                <span>{user.name}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Email</span>
                <span>{user.email}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Telefone</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:gap-10">
            <div className="flex flex-col sm:items-center">
              <span className="font-medium">Pontuação</span>
              <span className="text-7xl">{user.points}</span>
            </div>
            <div className="flex flex-col sm:items-center">
              <span className="font-medium">Categoria</span>
              <span>{user.category}</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="btn btn-outline btn-error w-1/3"
        >
          Sair
        </button>
      </div>
    </dialog>
  );
}
