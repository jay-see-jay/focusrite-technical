type Arguments = {
    part: number
}

export default function parseArgs(args: string[]): Arguments {
    const partIndex = args.indexOf("--part")
    let part = 1
    if (partIndex >= 0) {
        part = Number(args[partIndex + 1])
    }
    if (isNaN(part)) {
        throw Error("Please supply a part number")
    }
    return {
        part,
    }
}