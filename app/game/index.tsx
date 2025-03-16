import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import Header from "@/layouts/header";
import Ionicons from "@expo/vector-icons/Ionicons";

const Index = () => {
  const router = useRouter();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [isGameOver, setIsGameOver] = useState(false); // Track if the game is over

  const checkWinner = (newBoard: string[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a]; // Return "X" or "O" as the winner
      }
    }

    return null;
  };

  const handlePress = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setIsGameOver(true); // Show the prompt when the game ends
    } else if (newBoard.every((cell) => cell !== null)) {
      setWinner("Draw");
      setIsGameOver(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsGameOver(false); // Hide the modal
  };
  return (
    <View className=" flex-1 w-full bg-lime-100">
      <Header
        left={
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </Link>
        }
        centerText="Fun Events"
      />
      <View className="flex-1 items-center justify-center -mt-16">
        <Text className="text-lime-800 text-3xl font-bold mb-4">
          Tic-Tac-Toe
        </Text>

        {/* 3x3 Grid Fix */}
        <View className="flex flex-wrap flex-row w-[240px]">
          {board.map((cell, index) => (
            <TouchableOpacity
              key={index}
              className="w-[70px] h-[70px] bg-lime-400 border border-lime-900 items-center justify-center rounded-lg m-1"
              onPress={() => handlePress(index)}
            >
              <Text className="text-lime-950 text-4xl font-bold">{cell}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          className="mt-2 px-6 py-3 bg-lime-500 rounded-lg"
          onPress={resetGame}
        >
          <Text className="text-lime-900 text-lg font-bold">Restart Game</Text>
        </TouchableOpacity>

        {/* Prompt Box (Modal) when Game Over */}
        <Modal visible={isGameOver} transparent animationType="slide">
          <View className="flex-1 justify-center items-center bg-black/60 ">
            <View className="bg-lime-300 p-6 rounded-lg justify-center items-center w-96 h-60">
              <Text className="text-lime-950 text-2xl font-bold mb-3">
                {winner === "Draw"
                  ? "🤝 It's a Draw!"
                  : `🎉 Player ${winner} Wins!`}
              </Text>

              <TouchableOpacity
                className="mt-4 px-6 py-3 bg-lime-950 rounded-lg"
                onPress={() => {
                  resetGame();
                  router.push("/funEvent"); // Navigate to review screen
                }}
              >
                <Text className="text-lime-300 text-lg font-bold">Review</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Index;
