import { effect } from "../effect"
import { reactive } from "../reactive"

describe('effect', () => {
    it('happy path', () => {
        const user = reactive({
            age: 10
        })
        let newAge
        effect(() => {
            newAge = user.age + 1
        })
        console.log('newAge', newAge)
        expect(newAge).toBe(11)

        // update
        user.age++
        expect(newAge).toBe(12)
    })
})