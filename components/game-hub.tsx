"use client"

import { motion } from "framer-motion"
import { useGameContext } from "./game-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import TicTacToeGame from "./games/tic-tac-toe"
import SnakeGame from "./games/snake"
import MemoryGame from "./games/memory"

export default function GameHub() {
  const { activeGame, setActiveGame } = useGameContext()

  const games = [
    {
      id: "tictactoe",
      title: "Tic Tac Toe",
      description: "Das klassische Spiel für zwei Spieler",
      component: <TicTacToeGame />,
    },
    {
      id: "snake",
      title: "Snake",
      description: "Steuere die Schlange und sammle Punkte",
      component: <SnakeGame />,
    },
    {
      id: "memory",
      title: "Memory Card",
      description: "Finde die passenden Kartenpaare",
      component: <MemoryGame />,
    },
  ]

  return (
    <section id="gamehub" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text-purple">Anas Spiele</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Entdecke meine interaktiven Minispiele, die ich mit JavaScript und React entwickelt habe.
          </p>
        </motion.div>

        {activeGame ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-neon-purple/30 shadow-lg max-w-4xl mx-auto"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveGame(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Schließen</span>
            </Button>

            <h3 className="text-2xl font-bold mb-6 text-center neon-text-cyan">
              {games.find((game) => game.id === activeGame)?.title}
            </h3>

            <div className="game-container">{games.find((game) => game.id === activeGame)?.component}</div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="game-card h-full bg-gray-900/60 border border-gray-800 hover:border-neon-purple/50 overflow-hidden"
                  onClick={() => setActiveGame(game.id as any)}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <h3 className="text-xl font-bold mb-2 neon-text-cyan">{game.title}</h3>
                    <p className="text-gray-400 mb-4">{game.description}</p>
                    <Button
                      variant="outline"
                      className="mt-auto border-neon-purple text-neon-purple hover:bg-neon-purple/10"
                    >
                      Click to Play
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
