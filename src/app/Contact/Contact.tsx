export default function Contact() {
  return (
    <footer className="flex justify-between items-center py-16 z-20">
      <div className="flex gap-2 flex-col ">
        <h4 className="text-2xl text-textBlancDark-1000 ">Alexandre Hernandez</h4>
        <p className="bg-primaryDark-500 text-textBlancDark-1000 rounded text-center w-1/3 text-sm ">
          Développeur web
        </p>
        <p className="text-xl text-textBlancDark-1000">Rechercher de stage pour valider mon année d'étude</p>
      </div>
      <div className="flex flex-col justify-between gap-2">
        <button
          className="relative px-10 py-3 border-textBlancDark-1000 text-textBlancDark-1000 rounded-md bg-backgroundDark-1000 isolation-auto z-10 border-2 border-gradient
        before:absolute before:w-full before:transition-all before:duration-500 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-gradient before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
        >
          Me contacter
        </button>
        <button className="relative px-10 py-3 text-textBlancDark-1000 rounded-md bg-gradient   ease-in-out  hover:border-accentDark-1000 outline outline-offset-2 outline-1 outline-gradient hover:scale-[1.03] hover:outline-none duration-300 ">
          
          Voir mon CV
        </button>
        
      </div>
    </footer>
  );
}
