
class ReactiveEffect {
    private _fn: any

    // 通过构造函数收接参数
    constructor(fn: any) {
        this._fn = fn
    }

    run() {
        this._fn()
    }
}

/**
 * @desc 接收外部传入的fn,将fn传给封装好的类,并在effect方法里执行该方法
 * @param fn 
 */
export function effect(fn: any) {
    // fn
    const _effect = new ReactiveEffect(fn)

    _effect.run()
}