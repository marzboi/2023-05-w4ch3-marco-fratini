import { CharacterCard } from "./character.card";

export function List() {
  return (
    <ul className="characters-list row list-unstyled">
      <CharacterCard></CharacterCard>
    </ul>
  );
}
