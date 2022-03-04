export function reactive(raw: any) {
    console.log('raw', raw);
    return new Proxy(raw, {
        /**
        * @param target 指向的对象
        * @param key  用户访问的key
        * @param value  用户访问的value
        * 比如我的例子的对象是 {foo: 1}; key是foo
        */

        // TODO: 依赖收集
        get(target, key) {
            const res = Reflect.get(target, key)
            // todo: 依赖收集
            return res
        },

        // TODO: 依赖收集
        set(target, key, value) {
            const res = Reflect.set(target, key, value)
            return res
        }
    })
}