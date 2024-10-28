{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array.....
     */

    //number
    const num: number = 1;

    // string
    const str: string = "hello";

    // boolean
    const bool: boolean = false;

    // undefined
    let name: undefined;// 💩
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null; // 💩
    let person2: string | null;

    // unknown 💩 - 어떤게 들어올지 모르겠어... : 자바스크립트 라이브러리와 연동해야 하는경우 때문에 존재함
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩 - 어떤것이든 가능하다
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }

    let unusable: void = undefined;// 💩

    // never
    // 에러핸들링에서 자세히
    // 예상치못한 핸들링할수 없는 에러
    function throwError(message: string): never {
        // message -> server(log)
        throw new Error(message);
    }
    let neverEnding: never; // 💩

    //objectn 
    let obj: object; // 💩
    function acceptSomeObject(ob: object) { }

    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });

}