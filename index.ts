import parseArgs from "./arguments.ts"
import partOne from "./part_one.ts";

const {part} = parseArgs(Bun.argv)

if (part === 1) {
    const result = partOne()
}