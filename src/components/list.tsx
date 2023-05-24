import { useCallback, useEffect, useMemo, useState } from "react";
import { Character } from "../models/character";
import { CharacterCard } from "./character.card";
import { Communication } from "./communications";
import { ApiRepository } from "../services/api.repository";

export function List() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const characterUrl = "http://localhost:3000/characters";

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>(characterUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedCharacter = await repo.getAll();
    setCharacters(loadedCharacter);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleUpdate = async (task: Task) => {
    try {
      const updatedTask = await repo.update(task.id, task);
      setTasks(tasks.map((item) => (item.id === task.id ? updatedTask : item)));
    } catch (error) {
      consoleError(error);
    }
  };

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          <CharacterCard></CharacterCard>
        </ul>
      </div>
      <div className="comunications">
        <Communication></Communication>
      </div>
    </>
  );
}
