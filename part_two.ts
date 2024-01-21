import parseInput from "./parse_input.ts";

export default async function partTwo(): Promise<void> {
    const {calledNumbers, boards} = await parseInput(2)

    const turns: number[] = new Array(boards.length).fill(0)

    let winningBoard: number | undefined

    for (const calledNumber of calledNumbers) {
        for (let i = 0; i < boards.length; i += 1) {
            if (boards[i].hasWon) {
                if (winningBoard === undefined) {
                    winningBoard = i
                }
                continue
            }
            boards[i].checkCalledNumber(calledNumber)
            turns[i] += 1
        }
    }

    if (winningBoard === undefined) {
        console.log('No board is a winner.')
    } else {
        console.log(`Pick board ${winningBoard + 1}, as it wins first after ${turns[winningBoard]} turns.\n\n${boards[winningBoard].matrix}`)
    }
}