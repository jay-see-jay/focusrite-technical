type Coord = {
    row: number,
    col: number,
    seen: boolean
}

export default class Board {
    private coordMap: Map<number, Coord>
    private readonly rows: number[]
    private readonly cols: number[]
    private _hasWon: boolean

    constructor(board: number[][]) {
        this.coordMap = this.initialiseCoordMap(board)
        const rows = board.length
        const cols = board[0].length
        this.rows = new Array(rows).fill(0)
        this.cols = new Array(cols).fill(0)
        this._hasWon = false
    }

    private initialiseCoordMap(board: number[][]): Map<number, Coord> {
        const map = new Map<number, Coord>()

        for (let i = 0; i < board.length; i += 1) {
            for (let j = 0; j < board[i].length; j += 1) {
                const number = board[i][j]
                const coord: Coord = {
                    row: i,
                    col: j,
                    seen: false
                }
                map.set(number, coord)
            }
        }

        return map
    }

    public checkCalledNumber(calledNumber: number): void {
        const coord = this.coordMap.get(calledNumber)
        if (!coord || coord.seen) {
            return
        }

        this.incrementRow(coord.row)
        this.incrementCol(coord.col)

        coord.seen = true
    }

    public get hasWon(): boolean {
        return this._hasWon
    }

    private incrementRow(row: number): void {
        this.increment(this.rows, row)
    }

    private incrementCol(col: number): void {
        this.increment(this.cols, col)
    }

    private increment(line: number[], index: number): void {
        let count = line[index]
        count += 1
        line[index] = count
        if (count === line.length && !this.hasWon) {
            this._hasWon = true
        }
    }

}