import Board from "./board.ts";

type FileContents = {
    calledNumbers: number[],
    boards: Board[],
}

export default async function parseFile(part: number): Promise<FileContents> {
    const fileName = getFileName(part)

    const file = await Bun.file(`./${fileName}`).text()
    const lines = file.split("\n")
    const calledNumbers = converToArr(lines[0], ",")
    const boards = getBoards(lines)

    return {
        calledNumbers,
        boards
    }
}

export function getFileName(part: number): string {
    if (part === 1) {
        return "part_one.ts"
    }
    if (part === 2) {
        return "part_two.ts"
    }

    throw Error(`No input file found for part ${part}`)
}

export function getBoards(input: string[]): Board[] {
    const boards: Board[] = []

    let curr: number[][] = []
    for (let i = 2; i <= input.length; i += 1) {
        const line = input[i]
        if (!line || line.length === 0 || line[0] === " ") {
            const board = new Board(curr)
            boards.push(board)
            curr = []
            continue
        }
        const row = converToArr(line)
        curr.push(row)
    }

    return boards

}

export function converToArr(line: string, separator: string = " "): number[] {
    const output: number[] = []

    let curr = ""
    for (let i = 0; i <= line.length; i += 1) {
        const char = line[i]
        if (!char || char === separator) {
            if (curr.length > 0) {
                output.push(Number(curr))
                curr = ""
                continue
            }
        }

        if (!char || char.charCodeAt(0) === 32 || isNaN(Number(char))) {
            continue
        }

        curr += char
    }

    return output
}