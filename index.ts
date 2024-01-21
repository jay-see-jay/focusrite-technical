import parseArgs from "./arguments.ts"
import partOne from "./part_one.ts";
import partTwo from "./part_two.ts";

const {part} = parseArgs(Bun.argv)

if (part === 1) {
    await partOne()
} else if (part === 2) {
    await partTwo()
} else {
    throw Error("Please choose either part 1 or 2.")
}
