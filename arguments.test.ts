import {describe, expect, test} from "bun:test"
import parseArgs from "./arguments.ts";

describe("Validate arguments", () => {
    test("No arguments", () => {
        const args = parseArgs([])
        expect(args).toEqual({part: 1})
    })

    test("Provide part as number", () => {
        const args = parseArgs(["--part", "2"])
        expect(args).toEqual({part: 2})
    })

    test("Provide part as word", () => {
        expect(() => {
            parseArgs(["--part", "three"])
        }).toThrow()
    })
})