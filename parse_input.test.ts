import {describe, expect, test} from "bun:test";
import {converToArr, getFileName, getBoards} from "./parse_input.ts";
import Board from "./board.ts";

describe("Parse input files", () => {
    test("Correct file name is returned", () => {
        expect(getFileName(1)).toBe("part_one.ts")
        expect(getFileName(2)).toBe("part_two.ts")
        expect(() => {
            getFileName(3)
        }).toThrow()
    })
    test("Extract called numbers", () => {
        expect(converToArr("7,4,9,5,11", ",")).toEqual([7, 4, 9, 5, 11])
        expect(converToArr("", ",")).toEqual([])
    })
    test("Extract row in board", () => {
        expect(converToArr("22 13 17 11 0")).toEqual([22, 13, 17, 11, 0])
        expect(converToArr("4      24")).toEqual([4, 24])
    })
    test("Create board matrix", () => {
        const input = `line 1\n\n22 13 17 11 0\n8 2 23 4 24`

        const result = getBoards(input.split("\n"))
        const matrix = [
            [22, 13, 17, 11, 0],
            [8, 2, 23, 4, 24]
        ]
        const board = new Board(matrix)
        expect(result).toEqual([board])
    })
})

