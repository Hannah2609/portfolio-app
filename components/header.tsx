import { ModeToggle } from "./ui/modeToggle";

export function Header() {

return (
  <header className="flex flex-row w-full justify-between p-8 pb-20 gap-16 sm:px-20">
    <div>
      <h2 className="text-2xl">Hannah Isabel</h2>
      <h2 className="text-2xl leading-0 -mt-4">
        Grenade{" "}
        <span className="text-7xl leading-0 dark:text-zinc-700 text-zinc-300">
          .
        </span>
      </h2>
    </div>
    <ModeToggle />
  </header>
);
}