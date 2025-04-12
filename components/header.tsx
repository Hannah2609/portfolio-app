import { ModeToggle } from "./ui/modeToggle";

export function Header() {

return (
  <header className="flex flex-row w-full justify-between">
    <h2>Name</h2>
    <ModeToggle />
  </header>
);
}