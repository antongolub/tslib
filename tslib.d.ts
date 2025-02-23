/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
export declare function __extends(d: Function, b: Function): void;
export declare function __assign(t: any, ...sources: any[]): any;
export declare function __rest(t: any, propertyNames: (string | symbol)[]): any;
export declare function __decorate(decorators: Function[], target: any, key?: string | symbol, desc?: any): any;
export declare function __param(paramIndex: number, decorator: Function): Function;
export declare function __metadata(metadataKey: any, metadataValue: any): Function;
export declare function __awaiter(thisArg: any, _arguments: any, P: Function, generator: Function): any;
export declare function __generator(thisArg: any, body: Function): any;
export declare function __exportStar(m: any, o: any): void;
export declare function __values(o: any): any;
export declare function __read(o: any, n?: number): any[];
/** @deprecated since TypeScript 4.2 */
export declare function __spread(...args: any[][]): any[];
/** @deprecated since TypeScript 4.2 */
export declare function __spreadArrays(...args: any[][]): any[];
export declare function __spreadArray(to: any[], from: any[], pack?: boolean): any[];
export declare function __await(v: any): any;
export declare function __asyncGenerator(thisArg: any, _arguments: any, generator: Function): any;
export declare function __asyncDelegator(o: any): any;
export declare function __asyncValues(o: any): any;
export declare function __makeTemplateObject(cooked: string[], raw: string[]): TemplateStringsArray;
export declare function __importStar<T>(mod: T): T;
export declare function __importDefault<T>(mod: T): T | { default: T };
/**
 * Reading from a private instance field
 */
export declare function __classPrivateFieldGet<T extends object, V>(
    receiver: T,
    state: { has(o: T): boolean, get(o: T): V | undefined },
    kind?: "f"
): V;
/**
 * Reading from a private static field
 */
export declare function __classPrivateFieldGet<T extends new (...args: any[]) => unknown, V>(
    receiver: T,
    state: T,
    kind: "f",
    f: { value: V }
): V;
/**
 * Reading from a private instance get accessor
 */
export declare function __classPrivateFieldGet<T extends object, V>(
    receiver: T,
    state: { has(o: T): boolean },
    kind: "a",
    f: () => V
): V;
/**
 * Reading from a private static get accessor
 */
export declare function __classPrivateFieldGet<T extends new (...args: any[]) => unknown, V>(
    receiver: T,
    state: T,
    kind: "a",
    f: () => V
): V;
/**
 * Reading from a private instance method
 */
export declare function __classPrivateFieldGet<T extends object, V extends (...args: any[]) => unknown>(
    receiver: T,
    state: { has(o: T): boolean },
    kind: "m",
    f: V
): V;
/**
 * Reading from a private static method
 */
export declare function __classPrivateFieldGet<T extends new (...args: any[]) => unknown, V extends (...args: any[]) => unknown>(
    receiver: T,
    state: T,
    kind: "m",
    f: V
): V;
/**
 * Writing to a private instance field
 */
 export declare function __classPrivateFieldSet<T extends object, V>(
    receiver: T,
    state: { has(o: T): boolean, set(o: T, value: V): unknown },
    value: V,
    kind?: "f"
): V;
/**
 * Writing to a private static field
 */
export declare function __classPrivateFieldSet<T extends new (...args: any[]) => unknown, V>(
    receiver: T,
    state: T,
    value: V,
    kind: "f",
    f: { value: V }
): V;
/**
 * Writing to a private instance set accessor
 */
export declare function __classPrivateFieldSet<T extends object, V>(
    receiver: T,
    state: { has(o: T): boolean },
    value: V,
    kind: "a",
    f: (v: V) => void
): V;
/**
 * Writing to a private static set accessor
 */
export declare function __classPrivateFieldSet<T extends new (...args: any[]) => unknown, V>(
    receiver: T,
    state: T,
    value: V,
    kind: "a",
    f: (v: V) => void
): V;
/**
 * Checking the existence of a private field/method/accessor
 */
export declare function __classPrivateFieldIn(
    state: (new (...args: any[]) => unknown) | { has(o: any): boolean },
    receiver: unknown,
): boolean;
export declare function __createBinding(object: object, target: object, key: PropertyKey, objectKey?: PropertyKey): void;
