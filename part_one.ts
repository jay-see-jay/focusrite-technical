import parseInput from "./helpers/parse_input.ts";

export default async function partOne(): Promise<void> {
    const {calledNumbers, boards} = await parseInput(1)
    const board = boards[0]

    for (const calledNumber of calledNumbers) {
        board.checkCalledNumber(calledNumber)
        if (board.hasWon) {
            break
        }
    }

    console.log(`Board ${board.hasWon ? 'is' : 'is not'} a winner:\n\n${board.matrix}`)
}

