/* eslint-disable quotes */
import logo from "./assets/logo.svg";
import { Input } from "./components/Input";
import { NewNoteCard } from "./components/NewNoteCard";
import { NoteCard } from "./components/NoteCard";


export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 font-inter">
      <img src={logo} alt="NLW Logo"/>
      <form onSubmit={e => e.preventDefault()}>
        <Input type="text"
        required
        placeholder="Busque em suas notas..." />
      </form>

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard/>
        <NoteCard note={{
          createdDate: new Date(2022, 12, 15),
          content: `Lorem ipsum dolor sit.
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
        `
        }}/>
        <NoteCard note={{
          createdDate: new Date(),
          content: `Lorem ipsum dolor sit.
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
        `
        }}/>
        <NoteCard note={{
          createdDate: new Date(),
          content: `Lorem ipsum dolor sit.
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea?
        `
        }}/>
      </div>
    </div>
  );
}