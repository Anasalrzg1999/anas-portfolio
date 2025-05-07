"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Game = "tictactoe" | "snake" | "memory" | null

interface GameContextType {
  activeGame: Game
  setActiveGame: (game: Game) => void
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export function GameProvider({ children }: { children: ReactNode }) {
  const [activeGame, setActiveGame] = useState<Game>(null)

  return <GameContext.Provider value={{ activeGame, setActiveGame }}>{children}</GameContext.Provider>
}

export function useGameContext() {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameProvider")
  }
  return context
}
