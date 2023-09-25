export interface LimitedArrayConfig {
    size?: number;
}

export class LimitedArray extends Array {

    constructor(options: LimitedArrayConfig) {
        super();
        Object.defineProperty(this, '_size', {
            value: options.size || -1,
            writable: false,
        });
    }

    get _size(): number {
        return this._size;
    }

    push(...items: any[]): number {
        if (this._size !== -1 && this.length >= this._size) {
            this.shift();
        }
        return super.push(...items);
    }
}
