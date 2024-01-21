import {describe, expect, test} from "bun:test";
import Board from "./board.ts";

describe("Board Class", () => {
    test("Create new instance and call row", () => {
        const matrix = [
            [22, 13, 17, 11, 0],
            [8, 2, 23, 4, 24],
            [21, 9, 14, 16, 7]
        ]
        const board = new Board(matrix)
        expect(board.hasWon).toBe(false)
        board.checkCalledNumber(22)
        board.checkCalledNumber(13)
        board.checkCalledNumber(17)
        expect(board.hasWon).toBe(false)
        board.checkCalledNumber(11)
        board.checkCalledNumber(0)
        expect(board.hasWon).toBe(true)
    })
    test("Create new instance and call column", () => {
        const matrix = [
            [22, 13, 17, 11, 0],
            [8, 2, 23, 4, 24],
            [21, 9, 14, 16, 7]
        ]
        const board = new Board(matrix)
        expect(board.hasWon).toBe(false)
        board.checkCalledNumber(22)
        board.checkCalledNumber(8)
        expect(board.hasWon).toBe(false)
        board.checkCalledNumber(21)
        expect(board.hasWon).toBe(true)
    })
})