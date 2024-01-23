import { Effect } from "effect"

// $ExpectType Effect<never, never, string>
const program = Effect.gen(function* (_) {
  console.log("start doing something...")
  yield* _(Effect.sleep("2 seconds"))
  console.log("my job is finished!")
  return "some result"
})

// $ExpectType Effect<never, NoSuchElementException, string>
const main = program.pipe(Effect.timeout("3 seconds"))

Effect.runPromise(main).then(console.log, console.error)
/*
Output:
start doing something...
my job is finished!
some result
*/