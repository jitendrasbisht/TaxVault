import { useState } from "react";

export function useCaseSelection() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  function toggle(id: number) {
    setSelectedIds(current =>
      current.includes(id)
        ? current.filter(x => x !== id)
        : [...current, id]
    );
  }

  function toggleAll(ids: number[]) {
    setSelectedIds(current =>
      current.length === ids.length ? [] : ids
    );
  }

  function clear() {
    setSelectedIds([]);
  }

  return {
    selectedIds,
    toggle,
    toggleAll,
    clear,
  };
}
