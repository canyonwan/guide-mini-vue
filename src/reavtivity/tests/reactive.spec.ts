import { reactive } from "../reactive"

describe('reactive', () => {
    it('happy path', () => {
        const original = { foo: 1 } // 原始数据
        const observed = reactive(original) // 监测,收集数据
        expect(observed).not.toBe(original) // original & observed不能相待
        expect(observed.foo).toBe(1)
    })
})