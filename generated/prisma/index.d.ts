
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model UserLocation
 * 
 */
export type UserLocation = $Result.DefaultSelection<Prisma.$UserLocationPayload>
/**
 * Model ShiftAssignment
 * 
 */
export type ShiftAssignment = $Result.DefaultSelection<Prisma.$ShiftAssignmentPayload>
/**
 * Model ShiftSwapRequest
 * 
 */
export type ShiftSwapRequest = $Result.DefaultSelection<Prisma.$ShiftSwapRequestPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model InventoryFlag
 * 
 */
export type InventoryFlag = $Result.DefaultSelection<Prisma.$InventoryFlagPayload>
/**
 * Model IssueReport
 * 
 */
export type IssueReport = $Result.DefaultSelection<Prisma.$IssueReportPayload>
/**
 * Model Ressource
 * 
 */
export type Ressource = $Result.DefaultSelection<Prisma.$RessourcePayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  active: 'active',
  inactive: 'inactive',
  pending: 'pending'
};

export type Status = (typeof Status)[keyof typeof Status]


export const SwapStatus: {
  pending_target: 'pending_target',
  pending_manager: 'pending_manager',
  approved: 'approved',
  rejected_by_target: 'rejected_by_target',
  rejected_by_manager: 'rejected_by_manager'
};

export type SwapStatus = (typeof SwapStatus)[keyof typeof SwapStatus]


export const FlagStatus: {
  open: 'open',
  resolved: 'resolved'
};

export type FlagStatus = (typeof FlagStatus)[keyof typeof FlagStatus]


export const ReportStatus: {
  open: 'open',
  acknowledged: 'acknowledged',
  resolved: 'resolved'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]


export const RessourceType: {
  recipe: 'recipe',
  procedure: 'procedure',
  policy: 'policy'
};

export type RessourceType = (typeof RessourceType)[keyof typeof RessourceType]


export const Role: {
  owner: 'owner',
  manager: 'manager',
  employee: 'employee'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type SwapStatus = $Enums.SwapStatus

export const SwapStatus: typeof $Enums.SwapStatus

export type FlagStatus = $Enums.FlagStatus

export const FlagStatus: typeof $Enums.FlagStatus

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

export type RessourceType = $Enums.RessourceType

export const RessourceType: typeof $Enums.RessourceType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Locations
 * const locations = await prisma.location.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Locations
   * const locations = await prisma.location.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLocation`: Exposes CRUD operations for the **UserLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLocations
    * const userLocations = await prisma.userLocation.findMany()
    * ```
    */
  get userLocation(): Prisma.UserLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftAssignment`: Exposes CRUD operations for the **ShiftAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftAssignments
    * const shiftAssignments = await prisma.shiftAssignment.findMany()
    * ```
    */
  get shiftAssignment(): Prisma.ShiftAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftSwapRequest`: Exposes CRUD operations for the **ShiftSwapRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftSwapRequests
    * const shiftSwapRequests = await prisma.shiftSwapRequest.findMany()
    * ```
    */
  get shiftSwapRequest(): Prisma.ShiftSwapRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryFlag`: Exposes CRUD operations for the **InventoryFlag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryFlags
    * const inventoryFlags = await prisma.inventoryFlag.findMany()
    * ```
    */
  get inventoryFlag(): Prisma.InventoryFlagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issueReport`: Exposes CRUD operations for the **IssueReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IssueReports
    * const issueReports = await prisma.issueReport.findMany()
    * ```
    */
  get issueReport(): Prisma.IssueReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ressource`: Exposes CRUD operations for the **Ressource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ressources
    * const ressources = await prisma.ressource.findMany()
    * ```
    */
  get ressource(): Prisma.RessourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Location: 'Location',
    User: 'User',
    RefreshToken: 'RefreshToken',
    UserLocation: 'UserLocation',
    ShiftAssignment: 'ShiftAssignment',
    ShiftSwapRequest: 'ShiftSwapRequest',
    InventoryItem: 'InventoryItem',
    InventoryFlag: 'InventoryFlag',
    IssueReport: 'IssueReport',
    Ressource: 'Ressource',
    Position: 'Position'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "location" | "user" | "refreshToken" | "userLocation" | "shiftAssignment" | "shiftSwapRequest" | "inventoryItem" | "inventoryFlag" | "issueReport" | "ressource" | "position"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      UserLocation: {
        payload: Prisma.$UserLocationPayload<ExtArgs>
        fields: Prisma.UserLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findFirst: {
            args: Prisma.UserLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findMany: {
            args: Prisma.UserLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          create: {
            args: Prisma.UserLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          createMany: {
            args: Prisma.UserLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          delete: {
            args: Prisma.UserLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          update: {
            args: Prisma.UserLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          deleteMany: {
            args: Prisma.UserLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          upsert: {
            args: Prisma.UserLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          aggregate: {
            args: Prisma.UserLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLocation>
          }
          groupBy: {
            args: Prisma.UserLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLocationCountArgs<ExtArgs>
            result: $Utils.Optional<UserLocationCountAggregateOutputType> | number
          }
        }
      }
      ShiftAssignment: {
        payload: Prisma.$ShiftAssignmentPayload<ExtArgs>
        fields: Prisma.ShiftAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ShiftAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          findMany: {
            args: Prisma.ShiftAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>[]
          }
          create: {
            args: Prisma.ShiftAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          createMany: {
            args: Prisma.ShiftAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ShiftAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          update: {
            args: Prisma.ShiftAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ShiftAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ShiftAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ShiftAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftAssignment>
          }
          groupBy: {
            args: Prisma.ShiftAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftAssignmentCountAggregateOutputType> | number
          }
        }
      }
      ShiftSwapRequest: {
        payload: Prisma.$ShiftSwapRequestPayload<ExtArgs>
        fields: Prisma.ShiftSwapRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftSwapRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftSwapRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          findFirst: {
            args: Prisma.ShiftSwapRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftSwapRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          findMany: {
            args: Prisma.ShiftSwapRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>[]
          }
          create: {
            args: Prisma.ShiftSwapRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          createMany: {
            args: Prisma.ShiftSwapRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftSwapRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>[]
          }
          delete: {
            args: Prisma.ShiftSwapRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          update: {
            args: Prisma.ShiftSwapRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          deleteMany: {
            args: Prisma.ShiftSwapRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftSwapRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftSwapRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>[]
          }
          upsert: {
            args: Prisma.ShiftSwapRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          aggregate: {
            args: Prisma.ShiftSwapRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftSwapRequest>
          }
          groupBy: {
            args: Prisma.ShiftSwapRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftSwapRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftSwapRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftSwapRequestCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      InventoryFlag: {
        payload: Prisma.$InventoryFlagPayload<ExtArgs>
        fields: Prisma.InventoryFlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload>
          }
          findFirst: {
            args: Prisma.InventoryFlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload>
          }
          findMany: {
            args: Prisma.InventoryFlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload>[]
          }
          create: {
            args: Prisma.InventoryFlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload>
          }
          createMany: {
            args: Prisma.InventoryFlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryFlagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload>[]
          }
          delete: {
            args: Prisma.InventoryFlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload>
          }
          update: {
            args: Prisma.InventoryFlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload>
          }
          deleteMany: {
            args: Prisma.InventoryFlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryFlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryFlagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload>[]
          }
          upsert: {
            args: Prisma.InventoryFlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryFlagPayload>
          }
          aggregate: {
            args: Prisma.InventoryFlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryFlag>
          }
          groupBy: {
            args: Prisma.InventoryFlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryFlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryFlagCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryFlagCountAggregateOutputType> | number
          }
        }
      }
      IssueReport: {
        payload: Prisma.$IssueReportPayload<ExtArgs>
        fields: Prisma.IssueReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          findFirst: {
            args: Prisma.IssueReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          findMany: {
            args: Prisma.IssueReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>[]
          }
          create: {
            args: Prisma.IssueReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          createMany: {
            args: Prisma.IssueReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssueReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>[]
          }
          delete: {
            args: Prisma.IssueReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          update: {
            args: Prisma.IssueReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          deleteMany: {
            args: Prisma.IssueReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssueReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>[]
          }
          upsert: {
            args: Prisma.IssueReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueReportPayload>
          }
          aggregate: {
            args: Prisma.IssueReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssueReport>
          }
          groupBy: {
            args: Prisma.IssueReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueReportCountArgs<ExtArgs>
            result: $Utils.Optional<IssueReportCountAggregateOutputType> | number
          }
        }
      }
      Ressource: {
        payload: Prisma.$RessourcePayload<ExtArgs>
        fields: Prisma.RessourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RessourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RessourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          findFirst: {
            args: Prisma.RessourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RessourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          findMany: {
            args: Prisma.RessourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>[]
          }
          create: {
            args: Prisma.RessourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          createMany: {
            args: Prisma.RessourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RessourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>[]
          }
          delete: {
            args: Prisma.RessourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          update: {
            args: Prisma.RessourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          deleteMany: {
            args: Prisma.RessourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RessourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RessourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>[]
          }
          upsert: {
            args: Prisma.RessourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          aggregate: {
            args: Prisma.RessourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRessource>
          }
          groupBy: {
            args: Prisma.RessourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RessourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RessourceCountArgs<ExtArgs>
            result: $Utils.Optional<RessourceCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    location?: LocationOmit
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    userLocation?: UserLocationOmit
    shiftAssignment?: ShiftAssignmentOmit
    shiftSwapRequest?: ShiftSwapRequestOmit
    inventoryItem?: InventoryItemOmit
    inventoryFlag?: InventoryFlagOmit
    issueReport?: IssueReportOmit
    ressource?: RessourceOmit
    position?: PositionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    users: number
    inventoryItems: number
    issueReports: number
    ressources: number
    position: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | LocationCountOutputTypeCountUsersArgs
    inventoryItems?: boolean | LocationCountOutputTypeCountInventoryItemsArgs
    issueReports?: boolean | LocationCountOutputTypeCountIssueReportsArgs
    ressources?: boolean | LocationCountOutputTypeCountRessourcesArgs
    position?: boolean | LocationCountOutputTypeCountPositionArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountInventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountIssueReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueReportWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountRessourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RessourceWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountPositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    shiftAssignments: number
    locations: number
    swapRequestsSent: number
    swapRequestsReceived: number
    inventoryFlags: number
    issueReports: number
    ressources: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftAssignments?: boolean | UserCountOutputTypeCountShiftAssignmentsArgs
    locations?: boolean | UserCountOutputTypeCountLocationsArgs
    swapRequestsSent?: boolean | UserCountOutputTypeCountSwapRequestsSentArgs
    swapRequestsReceived?: boolean | UserCountOutputTypeCountSwapRequestsReceivedArgs
    inventoryFlags?: boolean | UserCountOutputTypeCountInventoryFlagsArgs
    issueReports?: boolean | UserCountOutputTypeCountIssueReportsArgs
    ressources?: boolean | UserCountOutputTypeCountRessourcesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShiftAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSwapRequestsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSwapRequestsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryFlagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIssueReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRessourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RessourceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type ShiftAssignmentCountOutputType
   */

  export type ShiftAssignmentCountOutputType = {
    requesterShift: number
    targetShift: number
  }

  export type ShiftAssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requesterShift?: boolean | ShiftAssignmentCountOutputTypeCountRequesterShiftArgs
    targetShift?: boolean | ShiftAssignmentCountOutputTypeCountTargetShiftArgs
  }

  // Custom InputTypes
  /**
   * ShiftAssignmentCountOutputType without action
   */
  export type ShiftAssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignmentCountOutputType
     */
    select?: ShiftAssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShiftAssignmentCountOutputType without action
   */
  export type ShiftAssignmentCountOutputTypeCountRequesterShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
  }

  /**
   * ShiftAssignmentCountOutputType without action
   */
  export type ShiftAssignmentCountOutputTypeCountTargetShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
  }


  /**
   * Count Type InventoryItemCountOutputType
   */

  export type InventoryItemCountOutputType = {
    inventoryFlags: number
  }

  export type InventoryItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryFlags?: boolean | InventoryItemCountOutputTypeCountInventoryFlagsArgs
  }

  // Custom InputTypes
  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItemCountOutputType
     */
    select?: InventoryItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeCountInventoryFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryFlagWhereInput
  }


  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    shiftAssignments: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftAssignments?: boolean | PositionCountOutputTypeCountShiftAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountShiftAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    name: string
    address: string
    phone: string
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    users?: boolean | Location$usersArgs<ExtArgs>
    inventoryItems?: boolean | Location$inventoryItemsArgs<ExtArgs>
    issueReports?: boolean | Location$issueReportsArgs<ExtArgs>
    ressources?: boolean | Location$ressourcesArgs<ExtArgs>
    position?: boolean | Location$positionArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Location$usersArgs<ExtArgs>
    inventoryItems?: boolean | Location$inventoryItemsArgs<ExtArgs>
    issueReports?: boolean | Location$issueReportsArgs<ExtArgs>
    ressources?: boolean | Location$ressourcesArgs<ExtArgs>
    position?: boolean | Location$positionArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      users: Prisma.$UserLocationPayload<ExtArgs>[]
      inventoryItems: Prisma.$InventoryItemPayload<ExtArgs>[]
      issueReports: Prisma.$IssueReportPayload<ExtArgs>[]
      ressources: Prisma.$RessourcePayload<ExtArgs>[]
      position: Prisma.$PositionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phone: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Location$usersArgs<ExtArgs> = {}>(args?: Subset<T, Location$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryItems<T extends Location$inventoryItemsArgs<ExtArgs> = {}>(args?: Subset<T, Location$inventoryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    issueReports<T extends Location$issueReportsArgs<ExtArgs> = {}>(args?: Subset<T, Location$issueReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ressources<T extends Location$ressourcesArgs<ExtArgs> = {}>(args?: Subset<T, Location$ressourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    position<T extends Location$positionArgs<ExtArgs> = {}>(args?: Subset<T, Location$positionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly address: FieldRef<"Location", 'String'>
    readonly phone: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.users
   */
  export type Location$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    cursor?: UserLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * Location.inventoryItems
   */
  export type Location$inventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * Location.issueReports
   */
  export type Location$issueReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    where?: IssueReportWhereInput
    orderBy?: IssueReportOrderByWithRelationInput | IssueReportOrderByWithRelationInput[]
    cursor?: IssueReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueReportScalarFieldEnum | IssueReportScalarFieldEnum[]
  }

  /**
   * Location.ressources
   */
  export type Location$ressourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    where?: RessourceWhereInput
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    cursor?: RessourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Location.position
   */
  export type Location$positionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    cursor?: PositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    shiftAssignments?: boolean | User$shiftAssignmentsArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    swapRequestsSent?: boolean | User$swapRequestsSentArgs<ExtArgs>
    swapRequestsReceived?: boolean | User$swapRequestsReceivedArgs<ExtArgs>
    inventoryFlags?: boolean | User$inventoryFlagsArgs<ExtArgs>
    issueReports?: boolean | User$issueReportsArgs<ExtArgs>
    ressources?: boolean | User$ressourcesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftAssignments?: boolean | User$shiftAssignmentsArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    swapRequestsSent?: boolean | User$swapRequestsSentArgs<ExtArgs>
    swapRequestsReceived?: boolean | User$swapRequestsReceivedArgs<ExtArgs>
    inventoryFlags?: boolean | User$inventoryFlagsArgs<ExtArgs>
    issueReports?: boolean | User$issueReportsArgs<ExtArgs>
    ressources?: boolean | User$ressourcesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      shiftAssignments: Prisma.$ShiftAssignmentPayload<ExtArgs>[]
      locations: Prisma.$UserLocationPayload<ExtArgs>[]
      swapRequestsSent: Prisma.$ShiftSwapRequestPayload<ExtArgs>[]
      swapRequestsReceived: Prisma.$ShiftSwapRequestPayload<ExtArgs>[]
      inventoryFlags: Prisma.$InventoryFlagPayload<ExtArgs>[]
      issueReports: Prisma.$IssueReportPayload<ExtArgs>[]
      ressources: Prisma.$RessourcePayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      email: string
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shiftAssignments<T extends User$shiftAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$shiftAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends User$locationsArgs<ExtArgs> = {}>(args?: Subset<T, User$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swapRequestsSent<T extends User$swapRequestsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$swapRequestsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swapRequestsReceived<T extends User$swapRequestsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$swapRequestsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryFlags<T extends User$inventoryFlagsArgs<ExtArgs> = {}>(args?: Subset<T, User$inventoryFlagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    issueReports<T extends User$issueReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$issueReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ressources<T extends User$ressourcesArgs<ExtArgs> = {}>(args?: Subset<T, User$ressourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.shiftAssignments
   */
  export type User$shiftAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    cursor?: ShiftAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * User.locations
   */
  export type User$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    cursor?: UserLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * User.swapRequestsSent
   */
  export type User$swapRequestsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    cursor?: ShiftSwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * User.swapRequestsReceived
   */
  export type User$swapRequestsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    cursor?: ShiftSwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * User.inventoryFlags
   */
  export type User$inventoryFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    where?: InventoryFlagWhereInput
    orderBy?: InventoryFlagOrderByWithRelationInput | InventoryFlagOrderByWithRelationInput[]
    cursor?: InventoryFlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryFlagScalarFieldEnum | InventoryFlagScalarFieldEnum[]
  }

  /**
   * User.issueReports
   */
  export type User$issueReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    where?: IssueReportWhereInput
    orderBy?: IssueReportOrderByWithRelationInput | IssueReportOrderByWithRelationInput[]
    cursor?: IssueReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueReportScalarFieldEnum | IssueReportScalarFieldEnum[]
  }

  /**
   * User.ressources
   */
  export type User$ressourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    where?: RessourceWhereInput
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    cursor?: RessourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    refreshToken: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    revoked: boolean | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    refreshToken: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    revoked: boolean | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    refreshToken: number
    userId: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    revoked: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    revoked?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    revoked?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    revoked?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    refreshToken: string
    userId: string
    createdAt: Date
    updatedAt: Date
    expiresAt: Date
    revoked: boolean
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "refreshToken" | "userId" | "createdAt" | "updatedAt" | "expiresAt" | "revoked", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      refreshToken: string
      userId: string
      createdAt: Date
      updatedAt: Date
      expiresAt: Date
      revoked: boolean
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly refreshToken: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly updatedAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revoked: FieldRef<"RefreshToken", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model UserLocation
   */

  export type AggregateUserLocation = {
    _count: UserLocationCountAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  export type UserLocationMinAggregateOutputType = {
    userId: string | null
    locationId: string | null
    status: $Enums.Status | null
  }

  export type UserLocationMaxAggregateOutputType = {
    userId: string | null
    locationId: string | null
    status: $Enums.Status | null
  }

  export type UserLocationCountAggregateOutputType = {
    userId: number
    locationId: number
    status: number
    _all: number
  }


  export type UserLocationMinAggregateInputType = {
    userId?: true
    locationId?: true
    status?: true
  }

  export type UserLocationMaxAggregateInputType = {
    userId?: true
    locationId?: true
    status?: true
  }

  export type UserLocationCountAggregateInputType = {
    userId?: true
    locationId?: true
    status?: true
    _all?: true
  }

  export type UserLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocation to aggregate.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLocations
    **/
    _count?: true | UserLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLocationMaxAggregateInputType
  }

  export type GetUserLocationAggregateType<T extends UserLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLocation[P]>
      : GetScalarType<T[P], AggregateUserLocation[P]>
  }




  export type UserLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithAggregationInput | UserLocationOrderByWithAggregationInput[]
    by: UserLocationScalarFieldEnum[] | UserLocationScalarFieldEnum
    having?: UserLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLocationCountAggregateInputType | true
    _min?: UserLocationMinAggregateInputType
    _max?: UserLocationMaxAggregateInputType
  }

  export type UserLocationGroupByOutputType = {
    userId: string
    locationId: string
    status: $Enums.Status
    _count: UserLocationCountAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  type GetUserLocationGroupByPayload<T extends UserLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
            : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
        }
      >
    >


  export type UserLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    locationId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    locationId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    locationId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectScalar = {
    userId?: boolean
    locationId?: boolean
    status?: boolean
  }

  export type UserLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "locationId" | "status", ExtArgs["result"]["userLocation"]>
  export type UserLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type UserLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type UserLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $UserLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLocation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      locationId: string
      status: $Enums.Status
    }, ExtArgs["result"]["userLocation"]>
    composites: {}
  }

  type UserLocationGetPayload<S extends boolean | null | undefined | UserLocationDefaultArgs> = $Result.GetResult<Prisma.$UserLocationPayload, S>

  type UserLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLocationCountAggregateInputType | true
    }

  export interface UserLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLocation'], meta: { name: 'UserLocation' } }
    /**
     * Find zero or one UserLocation that matches the filter.
     * @param {UserLocationFindUniqueArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLocationFindUniqueArgs>(args: SelectSubset<T, UserLocationFindUniqueArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLocationFindUniqueOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLocationFindFirstArgs>(args?: SelectSubset<T, UserLocationFindFirstArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLocations
     * const userLocations = await prisma.userLocation.findMany()
     * 
     * // Get first 10 UserLocations
     * const userLocations = await prisma.userLocation.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userLocationWithUserIdOnly = await prisma.userLocation.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserLocationFindManyArgs>(args?: SelectSubset<T, UserLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLocation.
     * @param {UserLocationCreateArgs} args - Arguments to create a UserLocation.
     * @example
     * // Create one UserLocation
     * const UserLocation = await prisma.userLocation.create({
     *   data: {
     *     // ... data to create a UserLocation
     *   }
     * })
     * 
     */
    create<T extends UserLocationCreateArgs>(args: SelectSubset<T, UserLocationCreateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLocations.
     * @param {UserLocationCreateManyArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLocationCreateManyArgs>(args?: SelectSubset<T, UserLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLocations and returns the data saved in the database.
     * @param {UserLocationCreateManyAndReturnArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLocations and only return the `userId`
     * const userLocationWithUserIdOnly = await prisma.userLocation.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLocation.
     * @param {UserLocationDeleteArgs} args - Arguments to delete one UserLocation.
     * @example
     * // Delete one UserLocation
     * const UserLocation = await prisma.userLocation.delete({
     *   where: {
     *     // ... filter to delete one UserLocation
     *   }
     * })
     * 
     */
    delete<T extends UserLocationDeleteArgs>(args: SelectSubset<T, UserLocationDeleteArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLocation.
     * @param {UserLocationUpdateArgs} args - Arguments to update one UserLocation.
     * @example
     * // Update one UserLocation
     * const userLocation = await prisma.userLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLocationUpdateArgs>(args: SelectSubset<T, UserLocationUpdateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLocations.
     * @param {UserLocationDeleteManyArgs} args - Arguments to filter UserLocations to delete.
     * @example
     * // Delete a few UserLocations
     * const { count } = await prisma.userLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLocationDeleteManyArgs>(args?: SelectSubset<T, UserLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLocations
     * const userLocation = await prisma.userLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLocationUpdateManyArgs>(args: SelectSubset<T, UserLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocations and returns the data updated in the database.
     * @param {UserLocationUpdateManyAndReturnArgs} args - Arguments to update many UserLocations.
     * @example
     * // Update many UserLocations
     * const userLocation = await prisma.userLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLocations and only return the `userId`
     * const userLocationWithUserIdOnly = await prisma.userLocation.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLocation.
     * @param {UserLocationUpsertArgs} args - Arguments to update or create a UserLocation.
     * @example
     * // Update or create a UserLocation
     * const userLocation = await prisma.userLocation.upsert({
     *   create: {
     *     // ... data to create a UserLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLocation we want to update
     *   }
     * })
     */
    upsert<T extends UserLocationUpsertArgs>(args: SelectSubset<T, UserLocationUpsertArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationCountArgs} args - Arguments to filter UserLocations to count.
     * @example
     * // Count the number of UserLocations
     * const count = await prisma.userLocation.count({
     *   where: {
     *     // ... the filter for the UserLocations we want to count
     *   }
     * })
    **/
    count<T extends UserLocationCountArgs>(
      args?: Subset<T, UserLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLocationAggregateArgs>(args: Subset<T, UserLocationAggregateArgs>): Prisma.PrismaPromise<GetUserLocationAggregateType<T>>

    /**
     * Group by UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLocationGroupByArgs['orderBy'] }
        : { orderBy?: UserLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLocation model
   */
  readonly fields: UserLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLocation model
   */
  interface UserLocationFieldRefs {
    readonly userId: FieldRef<"UserLocation", 'String'>
    readonly locationId: FieldRef<"UserLocation", 'String'>
    readonly status: FieldRef<"UserLocation", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * UserLocation findUnique
   */
  export type UserLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findUniqueOrThrow
   */
  export type UserLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findFirst
   */
  export type UserLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findFirstOrThrow
   */
  export type UserLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findMany
   */
  export type UserLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocations to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation create
   */
  export type UserLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLocation.
     */
    data: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
  }

  /**
   * UserLocation createMany
   */
  export type UserLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLocation createManyAndReturn
   */
  export type UserLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLocation update
   */
  export type UserLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLocation.
     */
    data: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
    /**
     * Choose, which UserLocation to update.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation updateMany
   */
  export type UserLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLocations.
     */
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyInput>
    /**
     * Filter which UserLocations to update
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to update.
     */
    limit?: number
  }

  /**
   * UserLocation updateManyAndReturn
   */
  export type UserLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * The data used to update UserLocations.
     */
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyInput>
    /**
     * Filter which UserLocations to update
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLocation upsert
   */
  export type UserLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLocation to update in case it exists.
     */
    where: UserLocationWhereUniqueInput
    /**
     * In case the UserLocation found by the `where` argument doesn't exist, create a new UserLocation with this data.
     */
    create: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
    /**
     * In case the UserLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
  }

  /**
   * UserLocation delete
   */
  export type UserLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter which UserLocation to delete.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation deleteMany
   */
  export type UserLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocations to delete
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to delete.
     */
    limit?: number
  }

  /**
   * UserLocation without action
   */
  export type UserLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
  }


  /**
   * Model ShiftAssignment
   */

  export type AggregateShiftAssignment = {
    _count: ShiftAssignmentCountAggregateOutputType | null
    _min: ShiftAssignmentMinAggregateOutputType | null
    _max: ShiftAssignmentMaxAggregateOutputType | null
  }

  export type ShiftAssignmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    start: string | null
    end: string | null
    positionId: string | null
    createdAt: Date | null
  }

  export type ShiftAssignmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    start: string | null
    end: string | null
    positionId: string | null
    createdAt: Date | null
  }

  export type ShiftAssignmentCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    start: number
    end: number
    positionId: number
    createdAt: number
    _all: number
  }


  export type ShiftAssignmentMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    start?: true
    end?: true
    positionId?: true
    createdAt?: true
  }

  export type ShiftAssignmentMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    start?: true
    end?: true
    positionId?: true
    createdAt?: true
  }

  export type ShiftAssignmentCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    start?: true
    end?: true
    positionId?: true
    createdAt?: true
    _all?: true
  }

  export type ShiftAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftAssignment to aggregate.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftAssignments
    **/
    _count?: true | ShiftAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftAssignmentMaxAggregateInputType
  }

  export type GetShiftAssignmentAggregateType<T extends ShiftAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftAssignment[P]>
      : GetScalarType<T[P], AggregateShiftAssignment[P]>
  }




  export type ShiftAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithAggregationInput | ShiftAssignmentOrderByWithAggregationInput[]
    by: ShiftAssignmentScalarFieldEnum[] | ShiftAssignmentScalarFieldEnum
    having?: ShiftAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftAssignmentCountAggregateInputType | true
    _min?: ShiftAssignmentMinAggregateInputType
    _max?: ShiftAssignmentMaxAggregateInputType
  }

  export type ShiftAssignmentGroupByOutputType = {
    id: string
    userId: string
    date: Date
    start: string
    end: string
    positionId: string
    createdAt: Date
    _count: ShiftAssignmentCountAggregateOutputType | null
    _min: ShiftAssignmentMinAggregateOutputType | null
    _max: ShiftAssignmentMaxAggregateOutputType | null
  }

  type GetShiftAssignmentGroupByPayload<T extends ShiftAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ShiftAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    start?: boolean
    end?: boolean
    positionId?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    requesterShift?: boolean | ShiftAssignment$requesterShiftArgs<ExtArgs>
    targetShift?: boolean | ShiftAssignment$targetShiftArgs<ExtArgs>
    _count?: boolean | ShiftAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftAssignment"]>

  export type ShiftAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    start?: boolean
    end?: boolean
    positionId?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftAssignment"]>

  export type ShiftAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    start?: boolean
    end?: boolean
    positionId?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftAssignment"]>

  export type ShiftAssignmentSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    start?: boolean
    end?: boolean
    positionId?: boolean
    createdAt?: boolean
  }

  export type ShiftAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "start" | "end" | "positionId" | "createdAt", ExtArgs["result"]["shiftAssignment"]>
  export type ShiftAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    requesterShift?: boolean | ShiftAssignment$requesterShiftArgs<ExtArgs>
    targetShift?: boolean | ShiftAssignment$targetShiftArgs<ExtArgs>
    _count?: boolean | ShiftAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShiftAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }
  export type ShiftAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }

  export type $ShiftAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftAssignment"
    objects: {
      employee: Prisma.$UserPayload<ExtArgs>
      position: Prisma.$PositionPayload<ExtArgs>
      requesterShift: Prisma.$ShiftSwapRequestPayload<ExtArgs>[]
      targetShift: Prisma.$ShiftSwapRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      start: string
      end: string
      positionId: string
      createdAt: Date
    }, ExtArgs["result"]["shiftAssignment"]>
    composites: {}
  }

  type ShiftAssignmentGetPayload<S extends boolean | null | undefined | ShiftAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ShiftAssignmentPayload, S>

  type ShiftAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftAssignmentCountAggregateInputType | true
    }

  export interface ShiftAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftAssignment'], meta: { name: 'ShiftAssignment' } }
    /**
     * Find zero or one ShiftAssignment that matches the filter.
     * @param {ShiftAssignmentFindUniqueArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftAssignmentFindUniqueArgs>(args: SelectSubset<T, ShiftAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindFirstArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftAssignmentFindFirstArgs>(args?: SelectSubset<T, ShiftAssignmentFindFirstArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindFirstOrThrowArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftAssignments
     * const shiftAssignments = await prisma.shiftAssignment.findMany()
     * 
     * // Get first 10 ShiftAssignments
     * const shiftAssignments = await prisma.shiftAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftAssignmentWithIdOnly = await prisma.shiftAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftAssignmentFindManyArgs>(args?: SelectSubset<T, ShiftAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftAssignment.
     * @param {ShiftAssignmentCreateArgs} args - Arguments to create a ShiftAssignment.
     * @example
     * // Create one ShiftAssignment
     * const ShiftAssignment = await prisma.shiftAssignment.create({
     *   data: {
     *     // ... data to create a ShiftAssignment
     *   }
     * })
     * 
     */
    create<T extends ShiftAssignmentCreateArgs>(args: SelectSubset<T, ShiftAssignmentCreateArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftAssignments.
     * @param {ShiftAssignmentCreateManyArgs} args - Arguments to create many ShiftAssignments.
     * @example
     * // Create many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftAssignmentCreateManyArgs>(args?: SelectSubset<T, ShiftAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftAssignments and returns the data saved in the database.
     * @param {ShiftAssignmentCreateManyAndReturnArgs} args - Arguments to create many ShiftAssignments.
     * @example
     * // Create many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftAssignments and only return the `id`
     * const shiftAssignmentWithIdOnly = await prisma.shiftAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShiftAssignment.
     * @param {ShiftAssignmentDeleteArgs} args - Arguments to delete one ShiftAssignment.
     * @example
     * // Delete one ShiftAssignment
     * const ShiftAssignment = await prisma.shiftAssignment.delete({
     *   where: {
     *     // ... filter to delete one ShiftAssignment
     *   }
     * })
     * 
     */
    delete<T extends ShiftAssignmentDeleteArgs>(args: SelectSubset<T, ShiftAssignmentDeleteArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftAssignment.
     * @param {ShiftAssignmentUpdateArgs} args - Arguments to update one ShiftAssignment.
     * @example
     * // Update one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftAssignmentUpdateArgs>(args: SelectSubset<T, ShiftAssignmentUpdateArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftAssignments.
     * @param {ShiftAssignmentDeleteManyArgs} args - Arguments to filter ShiftAssignments to delete.
     * @example
     * // Delete a few ShiftAssignments
     * const { count } = await prisma.shiftAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftAssignmentDeleteManyArgs>(args?: SelectSubset<T, ShiftAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftAssignmentUpdateManyArgs>(args: SelectSubset<T, ShiftAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftAssignments and returns the data updated in the database.
     * @param {ShiftAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ShiftAssignments.
     * @example
     * // Update many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShiftAssignments and only return the `id`
     * const shiftAssignmentWithIdOnly = await prisma.shiftAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShiftAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShiftAssignment.
     * @param {ShiftAssignmentUpsertArgs} args - Arguments to update or create a ShiftAssignment.
     * @example
     * // Update or create a ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.upsert({
     *   create: {
     *     // ... data to create a ShiftAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ShiftAssignmentUpsertArgs>(args: SelectSubset<T, ShiftAssignmentUpsertArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentCountArgs} args - Arguments to filter ShiftAssignments to count.
     * @example
     * // Count the number of ShiftAssignments
     * const count = await prisma.shiftAssignment.count({
     *   where: {
     *     // ... the filter for the ShiftAssignments we want to count
     *   }
     * })
    **/
    count<T extends ShiftAssignmentCountArgs>(
      args?: Subset<T, ShiftAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftAssignmentAggregateArgs>(args: Subset<T, ShiftAssignmentAggregateArgs>): Prisma.PrismaPromise<GetShiftAssignmentAggregateType<T>>

    /**
     * Group by ShiftAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ShiftAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftAssignment model
   */
  readonly fields: ShiftAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requesterShift<T extends ShiftAssignment$requesterShiftArgs<ExtArgs> = {}>(args?: Subset<T, ShiftAssignment$requesterShiftArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    targetShift<T extends ShiftAssignment$targetShiftArgs<ExtArgs> = {}>(args?: Subset<T, ShiftAssignment$targetShiftArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShiftAssignment model
   */
  interface ShiftAssignmentFieldRefs {
    readonly id: FieldRef<"ShiftAssignment", 'String'>
    readonly userId: FieldRef<"ShiftAssignment", 'String'>
    readonly date: FieldRef<"ShiftAssignment", 'DateTime'>
    readonly start: FieldRef<"ShiftAssignment", 'String'>
    readonly end: FieldRef<"ShiftAssignment", 'String'>
    readonly positionId: FieldRef<"ShiftAssignment", 'String'>
    readonly createdAt: FieldRef<"ShiftAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShiftAssignment findUnique
   */
  export type ShiftAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment findUniqueOrThrow
   */
  export type ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment findFirst
   */
  export type ShiftAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftAssignments.
     */
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * ShiftAssignment findFirstOrThrow
   */
  export type ShiftAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftAssignments.
     */
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * ShiftAssignment findMany
   */
  export type ShiftAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignments to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftAssignments.
     */
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * ShiftAssignment create
   */
  export type ShiftAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftAssignment.
     */
    data: XOR<ShiftAssignmentCreateInput, ShiftAssignmentUncheckedCreateInput>
  }

  /**
   * ShiftAssignment createMany
   */
  export type ShiftAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftAssignments.
     */
    data: ShiftAssignmentCreateManyInput | ShiftAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftAssignment createManyAndReturn
   */
  export type ShiftAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ShiftAssignments.
     */
    data: ShiftAssignmentCreateManyInput | ShiftAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftAssignment update
   */
  export type ShiftAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftAssignment.
     */
    data: XOR<ShiftAssignmentUpdateInput, ShiftAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ShiftAssignment to update.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment updateMany
   */
  export type ShiftAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftAssignments.
     */
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ShiftAssignments to update
     */
    where?: ShiftAssignmentWhereInput
    /**
     * Limit how many ShiftAssignments to update.
     */
    limit?: number
  }

  /**
   * ShiftAssignment updateManyAndReturn
   */
  export type ShiftAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ShiftAssignments.
     */
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ShiftAssignments to update
     */
    where?: ShiftAssignmentWhereInput
    /**
     * Limit how many ShiftAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftAssignment upsert
   */
  export type ShiftAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftAssignment to update in case it exists.
     */
    where: ShiftAssignmentWhereUniqueInput
    /**
     * In case the ShiftAssignment found by the `where` argument doesn't exist, create a new ShiftAssignment with this data.
     */
    create: XOR<ShiftAssignmentCreateInput, ShiftAssignmentUncheckedCreateInput>
    /**
     * In case the ShiftAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftAssignmentUpdateInput, ShiftAssignmentUncheckedUpdateInput>
  }

  /**
   * ShiftAssignment delete
   */
  export type ShiftAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ShiftAssignment to delete.
     */
    where: ShiftAssignmentWhereUniqueInput
  }

  /**
   * ShiftAssignment deleteMany
   */
  export type ShiftAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftAssignments to delete
     */
    where?: ShiftAssignmentWhereInput
    /**
     * Limit how many ShiftAssignments to delete.
     */
    limit?: number
  }

  /**
   * ShiftAssignment.requesterShift
   */
  export type ShiftAssignment$requesterShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    cursor?: ShiftSwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * ShiftAssignment.targetShift
   */
  export type ShiftAssignment$targetShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    cursor?: ShiftSwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * ShiftAssignment without action
   */
  export type ShiftAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model ShiftSwapRequest
   */

  export type AggregateShiftSwapRequest = {
    _count: ShiftSwapRequestCountAggregateOutputType | null
    _min: ShiftSwapRequestMinAggregateOutputType | null
    _max: ShiftSwapRequestMaxAggregateOutputType | null
  }

  export type ShiftSwapRequestMinAggregateOutputType = {
    id: string | null
    requesterId: string | null
    targetId: string | null
    requesterShiftId: string | null
    targetShiftId: string | null
    status: $Enums.SwapStatus | null
    createdAt: Date | null
  }

  export type ShiftSwapRequestMaxAggregateOutputType = {
    id: string | null
    requesterId: string | null
    targetId: string | null
    requesterShiftId: string | null
    targetShiftId: string | null
    status: $Enums.SwapStatus | null
    createdAt: Date | null
  }

  export type ShiftSwapRequestCountAggregateOutputType = {
    id: number
    requesterId: number
    targetId: number
    requesterShiftId: number
    targetShiftId: number
    status: number
    createdAt: number
    _all: number
  }


  export type ShiftSwapRequestMinAggregateInputType = {
    id?: true
    requesterId?: true
    targetId?: true
    requesterShiftId?: true
    targetShiftId?: true
    status?: true
    createdAt?: true
  }

  export type ShiftSwapRequestMaxAggregateInputType = {
    id?: true
    requesterId?: true
    targetId?: true
    requesterShiftId?: true
    targetShiftId?: true
    status?: true
    createdAt?: true
  }

  export type ShiftSwapRequestCountAggregateInputType = {
    id?: true
    requesterId?: true
    targetId?: true
    requesterShiftId?: true
    targetShiftId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ShiftSwapRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftSwapRequest to aggregate.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftSwapRequests
    **/
    _count?: true | ShiftSwapRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftSwapRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftSwapRequestMaxAggregateInputType
  }

  export type GetShiftSwapRequestAggregateType<T extends ShiftSwapRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftSwapRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftSwapRequest[P]>
      : GetScalarType<T[P], AggregateShiftSwapRequest[P]>
  }




  export type ShiftSwapRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithAggregationInput | ShiftSwapRequestOrderByWithAggregationInput[]
    by: ShiftSwapRequestScalarFieldEnum[] | ShiftSwapRequestScalarFieldEnum
    having?: ShiftSwapRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftSwapRequestCountAggregateInputType | true
    _min?: ShiftSwapRequestMinAggregateInputType
    _max?: ShiftSwapRequestMaxAggregateInputType
  }

  export type ShiftSwapRequestGroupByOutputType = {
    id: string
    requesterId: string
    targetId: string
    requesterShiftId: string
    targetShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date
    _count: ShiftSwapRequestCountAggregateOutputType | null
    _min: ShiftSwapRequestMinAggregateOutputType | null
    _max: ShiftSwapRequestMaxAggregateOutputType | null
  }

  type GetShiftSwapRequestGroupByPayload<T extends ShiftSwapRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftSwapRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftSwapRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftSwapRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftSwapRequestGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSwapRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    targetId?: boolean
    requesterShiftId?: boolean
    targetShiftId?: boolean
    status?: boolean
    createdAt?: boolean
    requesterUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    requesterShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
    targetShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftSwapRequest"]>

  export type ShiftSwapRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    targetId?: boolean
    requesterShiftId?: boolean
    targetShiftId?: boolean
    status?: boolean
    createdAt?: boolean
    requesterUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    requesterShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
    targetShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftSwapRequest"]>

  export type ShiftSwapRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    targetId?: boolean
    requesterShiftId?: boolean
    targetShiftId?: boolean
    status?: boolean
    createdAt?: boolean
    requesterUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    requesterShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
    targetShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftSwapRequest"]>

  export type ShiftSwapRequestSelectScalar = {
    id?: boolean
    requesterId?: boolean
    targetId?: boolean
    requesterShiftId?: boolean
    targetShiftId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ShiftSwapRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterId" | "targetId" | "requesterShiftId" | "targetShiftId" | "status" | "createdAt", ExtArgs["result"]["shiftSwapRequest"]>
  export type ShiftSwapRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requesterUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    requesterShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
    targetShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
  }
  export type ShiftSwapRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requesterUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    requesterShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
    targetShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
  }
  export type ShiftSwapRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requesterUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
    requesterShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
    targetShift?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
  }

  export type $ShiftSwapRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftSwapRequest"
    objects: {
      requesterUser: Prisma.$UserPayload<ExtArgs>
      targetUser: Prisma.$UserPayload<ExtArgs>
      requesterShift: Prisma.$ShiftAssignmentPayload<ExtArgs>
      targetShift: Prisma.$ShiftAssignmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requesterId: string
      targetId: string
      requesterShiftId: string
      targetShiftId: string
      status: $Enums.SwapStatus
      createdAt: Date
    }, ExtArgs["result"]["shiftSwapRequest"]>
    composites: {}
  }

  type ShiftSwapRequestGetPayload<S extends boolean | null | undefined | ShiftSwapRequestDefaultArgs> = $Result.GetResult<Prisma.$ShiftSwapRequestPayload, S>

  type ShiftSwapRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftSwapRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftSwapRequestCountAggregateInputType | true
    }

  export interface ShiftSwapRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftSwapRequest'], meta: { name: 'ShiftSwapRequest' } }
    /**
     * Find zero or one ShiftSwapRequest that matches the filter.
     * @param {ShiftSwapRequestFindUniqueArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftSwapRequestFindUniqueArgs>(args: SelectSubset<T, ShiftSwapRequestFindUniqueArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftSwapRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftSwapRequestFindUniqueOrThrowArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftSwapRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftSwapRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftSwapRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestFindFirstArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftSwapRequestFindFirstArgs>(args?: SelectSubset<T, ShiftSwapRequestFindFirstArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftSwapRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestFindFirstOrThrowArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftSwapRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftSwapRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftSwapRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftSwapRequests
     * const shiftSwapRequests = await prisma.shiftSwapRequest.findMany()
     * 
     * // Get first 10 ShiftSwapRequests
     * const shiftSwapRequests = await prisma.shiftSwapRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftSwapRequestWithIdOnly = await prisma.shiftSwapRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftSwapRequestFindManyArgs>(args?: SelectSubset<T, ShiftSwapRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftSwapRequest.
     * @param {ShiftSwapRequestCreateArgs} args - Arguments to create a ShiftSwapRequest.
     * @example
     * // Create one ShiftSwapRequest
     * const ShiftSwapRequest = await prisma.shiftSwapRequest.create({
     *   data: {
     *     // ... data to create a ShiftSwapRequest
     *   }
     * })
     * 
     */
    create<T extends ShiftSwapRequestCreateArgs>(args: SelectSubset<T, ShiftSwapRequestCreateArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftSwapRequests.
     * @param {ShiftSwapRequestCreateManyArgs} args - Arguments to create many ShiftSwapRequests.
     * @example
     * // Create many ShiftSwapRequests
     * const shiftSwapRequest = await prisma.shiftSwapRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftSwapRequestCreateManyArgs>(args?: SelectSubset<T, ShiftSwapRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftSwapRequests and returns the data saved in the database.
     * @param {ShiftSwapRequestCreateManyAndReturnArgs} args - Arguments to create many ShiftSwapRequests.
     * @example
     * // Create many ShiftSwapRequests
     * const shiftSwapRequest = await prisma.shiftSwapRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftSwapRequests and only return the `id`
     * const shiftSwapRequestWithIdOnly = await prisma.shiftSwapRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftSwapRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftSwapRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShiftSwapRequest.
     * @param {ShiftSwapRequestDeleteArgs} args - Arguments to delete one ShiftSwapRequest.
     * @example
     * // Delete one ShiftSwapRequest
     * const ShiftSwapRequest = await prisma.shiftSwapRequest.delete({
     *   where: {
     *     // ... filter to delete one ShiftSwapRequest
     *   }
     * })
     * 
     */
    delete<T extends ShiftSwapRequestDeleteArgs>(args: SelectSubset<T, ShiftSwapRequestDeleteArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftSwapRequest.
     * @param {ShiftSwapRequestUpdateArgs} args - Arguments to update one ShiftSwapRequest.
     * @example
     * // Update one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftSwapRequestUpdateArgs>(args: SelectSubset<T, ShiftSwapRequestUpdateArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftSwapRequests.
     * @param {ShiftSwapRequestDeleteManyArgs} args - Arguments to filter ShiftSwapRequests to delete.
     * @example
     * // Delete a few ShiftSwapRequests
     * const { count } = await prisma.shiftSwapRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftSwapRequestDeleteManyArgs>(args?: SelectSubset<T, ShiftSwapRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftSwapRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftSwapRequests
     * const shiftSwapRequest = await prisma.shiftSwapRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftSwapRequestUpdateManyArgs>(args: SelectSubset<T, ShiftSwapRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftSwapRequests and returns the data updated in the database.
     * @param {ShiftSwapRequestUpdateManyAndReturnArgs} args - Arguments to update many ShiftSwapRequests.
     * @example
     * // Update many ShiftSwapRequests
     * const shiftSwapRequest = await prisma.shiftSwapRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShiftSwapRequests and only return the `id`
     * const shiftSwapRequestWithIdOnly = await prisma.shiftSwapRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShiftSwapRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftSwapRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShiftSwapRequest.
     * @param {ShiftSwapRequestUpsertArgs} args - Arguments to update or create a ShiftSwapRequest.
     * @example
     * // Update or create a ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.upsert({
     *   create: {
     *     // ... data to create a ShiftSwapRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftSwapRequest we want to update
     *   }
     * })
     */
    upsert<T extends ShiftSwapRequestUpsertArgs>(args: SelectSubset<T, ShiftSwapRequestUpsertArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftSwapRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestCountArgs} args - Arguments to filter ShiftSwapRequests to count.
     * @example
     * // Count the number of ShiftSwapRequests
     * const count = await prisma.shiftSwapRequest.count({
     *   where: {
     *     // ... the filter for the ShiftSwapRequests we want to count
     *   }
     * })
    **/
    count<T extends ShiftSwapRequestCountArgs>(
      args?: Subset<T, ShiftSwapRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftSwapRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftSwapRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftSwapRequestAggregateArgs>(args: Subset<T, ShiftSwapRequestAggregateArgs>): Prisma.PrismaPromise<GetShiftSwapRequestAggregateType<T>>

    /**
     * Group by ShiftSwapRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftSwapRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftSwapRequestGroupByArgs['orderBy'] }
        : { orderBy?: ShiftSwapRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftSwapRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftSwapRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftSwapRequest model
   */
  readonly fields: ShiftSwapRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftSwapRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftSwapRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requesterUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requesterShift<T extends ShiftAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftAssignmentDefaultArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetShift<T extends ShiftAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftAssignmentDefaultArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShiftSwapRequest model
   */
  interface ShiftSwapRequestFieldRefs {
    readonly id: FieldRef<"ShiftSwapRequest", 'String'>
    readonly requesterId: FieldRef<"ShiftSwapRequest", 'String'>
    readonly targetId: FieldRef<"ShiftSwapRequest", 'String'>
    readonly requesterShiftId: FieldRef<"ShiftSwapRequest", 'String'>
    readonly targetShiftId: FieldRef<"ShiftSwapRequest", 'String'>
    readonly status: FieldRef<"ShiftSwapRequest", 'SwapStatus'>
    readonly createdAt: FieldRef<"ShiftSwapRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShiftSwapRequest findUnique
   */
  export type ShiftSwapRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }

  /**
   * ShiftSwapRequest findUniqueOrThrow
   */
  export type ShiftSwapRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }

  /**
   * ShiftSwapRequest findFirst
   */
  export type ShiftSwapRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftSwapRequests.
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftSwapRequests.
     */
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * ShiftSwapRequest findFirstOrThrow
   */
  export type ShiftSwapRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftSwapRequests.
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftSwapRequests.
     */
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * ShiftSwapRequest findMany
   */
  export type ShiftSwapRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequests to fetch.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftSwapRequests.
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftSwapRequests.
     */
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * ShiftSwapRequest create
   */
  export type ShiftSwapRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftSwapRequest.
     */
    data: XOR<ShiftSwapRequestCreateInput, ShiftSwapRequestUncheckedCreateInput>
  }

  /**
   * ShiftSwapRequest createMany
   */
  export type ShiftSwapRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftSwapRequests.
     */
    data: ShiftSwapRequestCreateManyInput | ShiftSwapRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftSwapRequest createManyAndReturn
   */
  export type ShiftSwapRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ShiftSwapRequests.
     */
    data: ShiftSwapRequestCreateManyInput | ShiftSwapRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftSwapRequest update
   */
  export type ShiftSwapRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftSwapRequest.
     */
    data: XOR<ShiftSwapRequestUpdateInput, ShiftSwapRequestUncheckedUpdateInput>
    /**
     * Choose, which ShiftSwapRequest to update.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }

  /**
   * ShiftSwapRequest updateMany
   */
  export type ShiftSwapRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftSwapRequests.
     */
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyInput>
    /**
     * Filter which ShiftSwapRequests to update
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * Limit how many ShiftSwapRequests to update.
     */
    limit?: number
  }

  /**
   * ShiftSwapRequest updateManyAndReturn
   */
  export type ShiftSwapRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * The data used to update ShiftSwapRequests.
     */
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyInput>
    /**
     * Filter which ShiftSwapRequests to update
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * Limit how many ShiftSwapRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftSwapRequest upsert
   */
  export type ShiftSwapRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftSwapRequest to update in case it exists.
     */
    where: ShiftSwapRequestWhereUniqueInput
    /**
     * In case the ShiftSwapRequest found by the `where` argument doesn't exist, create a new ShiftSwapRequest with this data.
     */
    create: XOR<ShiftSwapRequestCreateInput, ShiftSwapRequestUncheckedCreateInput>
    /**
     * In case the ShiftSwapRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftSwapRequestUpdateInput, ShiftSwapRequestUncheckedUpdateInput>
  }

  /**
   * ShiftSwapRequest delete
   */
  export type ShiftSwapRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter which ShiftSwapRequest to delete.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }

  /**
   * ShiftSwapRequest deleteMany
   */
  export type ShiftSwapRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftSwapRequests to delete
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * Limit how many ShiftSwapRequests to delete.
     */
    limit?: number
  }

  /**
   * ShiftSwapRequest without action
   */
  export type ShiftSwapRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    quantity: number | null
    lowThreshold: number | null
  }

  export type InventoryItemSumAggregateOutputType = {
    quantity: number | null
    lowThreshold: number | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    unit: string | null
    locationId: string | null
    lowThreshold: number | null
    updatedAt: Date | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    unit: string | null
    locationId: string | null
    lowThreshold: number | null
    updatedAt: Date | null
  }

  export type InventoryItemCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    unit: number
    locationId: number
    lowThreshold: number
    updatedAt: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    quantity?: true
    lowThreshold?: true
  }

  export type InventoryItemSumAggregateInputType = {
    quantity?: true
    lowThreshold?: true
  }

  export type InventoryItemMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    locationId?: true
    lowThreshold?: true
    updatedAt?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    locationId?: true
    lowThreshold?: true
    updatedAt?: true
  }

  export type InventoryItemCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    locationId?: true
    lowThreshold?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    id: string
    name: string
    quantity: number
    unit: string
    locationId: string
    lowThreshold: number
    updatedAt: Date
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    locationId?: boolean
    lowThreshold?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    inventoryFlags?: boolean | InventoryItem$inventoryFlagsArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    locationId?: boolean
    lowThreshold?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    locationId?: boolean
    lowThreshold?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    locationId?: boolean
    lowThreshold?: boolean
    updatedAt?: boolean
  }

  export type InventoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "quantity" | "unit" | "locationId" | "lowThreshold" | "updatedAt", ExtArgs["result"]["inventoryItem"]>
  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    inventoryFlags?: boolean | InventoryItem$inventoryFlagsArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      inventoryFlags: Prisma.$InventoryFlagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      quantity: number
      unit: string
      locationId: string
      lowThreshold: number
      updatedAt: Date
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryItems and returns the data saved in the database.
     * @param {InventoryItemCreateManyAndReturnArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems and returns the data updated in the database.
     * @param {InventoryItemUpdateManyAndReturnArgs} args - Arguments to update many InventoryItems.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventoryFlags<T extends InventoryItem$inventoryFlagsArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$inventoryFlagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryItem model
   */
  interface InventoryItemFieldRefs {
    readonly id: FieldRef<"InventoryItem", 'String'>
    readonly name: FieldRef<"InventoryItem", 'String'>
    readonly quantity: FieldRef<"InventoryItem", 'Int'>
    readonly unit: FieldRef<"InventoryItem", 'String'>
    readonly locationId: FieldRef<"InventoryItem", 'String'>
    readonly lowThreshold: FieldRef<"InventoryItem", 'Int'>
    readonly updatedAt: FieldRef<"InventoryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem createManyAndReturn
   */
  export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItem updateManyAndReturn
   */
  export type InventoryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to delete.
     */
    limit?: number
  }

  /**
   * InventoryItem.inventoryFlags
   */
  export type InventoryItem$inventoryFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    where?: InventoryFlagWhereInput
    orderBy?: InventoryFlagOrderByWithRelationInput | InventoryFlagOrderByWithRelationInput[]
    cursor?: InventoryFlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryFlagScalarFieldEnum | InventoryFlagScalarFieldEnum[]
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model InventoryFlag
   */

  export type AggregateInventoryFlag = {
    _count: InventoryFlagCountAggregateOutputType | null
    _min: InventoryFlagMinAggregateOutputType | null
    _max: InventoryFlagMaxAggregateOutputType | null
  }

  export type InventoryFlagMinAggregateOutputType = {
    id: string | null
    inventoryItemId: string | null
    userId: string | null
    note: string | null
    flagStatus: $Enums.FlagStatus | null
    createdAt: Date | null
  }

  export type InventoryFlagMaxAggregateOutputType = {
    id: string | null
    inventoryItemId: string | null
    userId: string | null
    note: string | null
    flagStatus: $Enums.FlagStatus | null
    createdAt: Date | null
  }

  export type InventoryFlagCountAggregateOutputType = {
    id: number
    inventoryItemId: number
    userId: number
    note: number
    flagStatus: number
    createdAt: number
    _all: number
  }


  export type InventoryFlagMinAggregateInputType = {
    id?: true
    inventoryItemId?: true
    userId?: true
    note?: true
    flagStatus?: true
    createdAt?: true
  }

  export type InventoryFlagMaxAggregateInputType = {
    id?: true
    inventoryItemId?: true
    userId?: true
    note?: true
    flagStatus?: true
    createdAt?: true
  }

  export type InventoryFlagCountAggregateInputType = {
    id?: true
    inventoryItemId?: true
    userId?: true
    note?: true
    flagStatus?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryFlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryFlag to aggregate.
     */
    where?: InventoryFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryFlags to fetch.
     */
    orderBy?: InventoryFlagOrderByWithRelationInput | InventoryFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryFlags
    **/
    _count?: true | InventoryFlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryFlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryFlagMaxAggregateInputType
  }

  export type GetInventoryFlagAggregateType<T extends InventoryFlagAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryFlag[P]>
      : GetScalarType<T[P], AggregateInventoryFlag[P]>
  }




  export type InventoryFlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryFlagWhereInput
    orderBy?: InventoryFlagOrderByWithAggregationInput | InventoryFlagOrderByWithAggregationInput[]
    by: InventoryFlagScalarFieldEnum[] | InventoryFlagScalarFieldEnum
    having?: InventoryFlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryFlagCountAggregateInputType | true
    _min?: InventoryFlagMinAggregateInputType
    _max?: InventoryFlagMaxAggregateInputType
  }

  export type InventoryFlagGroupByOutputType = {
    id: string
    inventoryItemId: string
    userId: string
    note: string
    flagStatus: $Enums.FlagStatus
    createdAt: Date
    _count: InventoryFlagCountAggregateOutputType | null
    _min: InventoryFlagMinAggregateOutputType | null
    _max: InventoryFlagMaxAggregateOutputType | null
  }

  type GetInventoryFlagGroupByPayload<T extends InventoryFlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryFlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryFlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryFlagGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryFlagGroupByOutputType[P]>
        }
      >
    >


  export type InventoryFlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryItemId?: boolean
    userId?: boolean
    note?: boolean
    flagStatus?: boolean
    createdAt?: boolean
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
    flaggedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryFlag"]>

  export type InventoryFlagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryItemId?: boolean
    userId?: boolean
    note?: boolean
    flagStatus?: boolean
    createdAt?: boolean
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
    flaggedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryFlag"]>

  export type InventoryFlagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryItemId?: boolean
    userId?: boolean
    note?: boolean
    flagStatus?: boolean
    createdAt?: boolean
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
    flaggedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryFlag"]>

  export type InventoryFlagSelectScalar = {
    id?: boolean
    inventoryItemId?: boolean
    userId?: boolean
    note?: boolean
    flagStatus?: boolean
    createdAt?: boolean
  }

  export type InventoryFlagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inventoryItemId" | "userId" | "note" | "flagStatus" | "createdAt", ExtArgs["result"]["inventoryFlag"]>
  export type InventoryFlagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
    flaggedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InventoryFlagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
    flaggedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InventoryFlagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
    flaggedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InventoryFlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryFlag"
    objects: {
      inventoryItem: Prisma.$InventoryItemPayload<ExtArgs>
      flaggedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inventoryItemId: string
      userId: string
      note: string
      flagStatus: $Enums.FlagStatus
      createdAt: Date
    }, ExtArgs["result"]["inventoryFlag"]>
    composites: {}
  }

  type InventoryFlagGetPayload<S extends boolean | null | undefined | InventoryFlagDefaultArgs> = $Result.GetResult<Prisma.$InventoryFlagPayload, S>

  type InventoryFlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryFlagCountAggregateInputType | true
    }

  export interface InventoryFlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryFlag'], meta: { name: 'InventoryFlag' } }
    /**
     * Find zero or one InventoryFlag that matches the filter.
     * @param {InventoryFlagFindUniqueArgs} args - Arguments to find a InventoryFlag
     * @example
     * // Get one InventoryFlag
     * const inventoryFlag = await prisma.inventoryFlag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFlagFindUniqueArgs>(args: SelectSubset<T, InventoryFlagFindUniqueArgs<ExtArgs>>): Prisma__InventoryFlagClient<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryFlag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFlagFindUniqueOrThrowArgs} args - Arguments to find a InventoryFlag
     * @example
     * // Get one InventoryFlag
     * const inventoryFlag = await prisma.inventoryFlag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFlagFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryFlagClient<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryFlag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFlagFindFirstArgs} args - Arguments to find a InventoryFlag
     * @example
     * // Get one InventoryFlag
     * const inventoryFlag = await prisma.inventoryFlag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFlagFindFirstArgs>(args?: SelectSubset<T, InventoryFlagFindFirstArgs<ExtArgs>>): Prisma__InventoryFlagClient<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryFlag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFlagFindFirstOrThrowArgs} args - Arguments to find a InventoryFlag
     * @example
     * // Get one InventoryFlag
     * const inventoryFlag = await prisma.inventoryFlag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFlagFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryFlagClient<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryFlags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryFlags
     * const inventoryFlags = await prisma.inventoryFlag.findMany()
     * 
     * // Get first 10 InventoryFlags
     * const inventoryFlags = await prisma.inventoryFlag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryFlagWithIdOnly = await prisma.inventoryFlag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFlagFindManyArgs>(args?: SelectSubset<T, InventoryFlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryFlag.
     * @param {InventoryFlagCreateArgs} args - Arguments to create a InventoryFlag.
     * @example
     * // Create one InventoryFlag
     * const InventoryFlag = await prisma.inventoryFlag.create({
     *   data: {
     *     // ... data to create a InventoryFlag
     *   }
     * })
     * 
     */
    create<T extends InventoryFlagCreateArgs>(args: SelectSubset<T, InventoryFlagCreateArgs<ExtArgs>>): Prisma__InventoryFlagClient<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryFlags.
     * @param {InventoryFlagCreateManyArgs} args - Arguments to create many InventoryFlags.
     * @example
     * // Create many InventoryFlags
     * const inventoryFlag = await prisma.inventoryFlag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryFlagCreateManyArgs>(args?: SelectSubset<T, InventoryFlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryFlags and returns the data saved in the database.
     * @param {InventoryFlagCreateManyAndReturnArgs} args - Arguments to create many InventoryFlags.
     * @example
     * // Create many InventoryFlags
     * const inventoryFlag = await prisma.inventoryFlag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryFlags and only return the `id`
     * const inventoryFlagWithIdOnly = await prisma.inventoryFlag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryFlagCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryFlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryFlag.
     * @param {InventoryFlagDeleteArgs} args - Arguments to delete one InventoryFlag.
     * @example
     * // Delete one InventoryFlag
     * const InventoryFlag = await prisma.inventoryFlag.delete({
     *   where: {
     *     // ... filter to delete one InventoryFlag
     *   }
     * })
     * 
     */
    delete<T extends InventoryFlagDeleteArgs>(args: SelectSubset<T, InventoryFlagDeleteArgs<ExtArgs>>): Prisma__InventoryFlagClient<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryFlag.
     * @param {InventoryFlagUpdateArgs} args - Arguments to update one InventoryFlag.
     * @example
     * // Update one InventoryFlag
     * const inventoryFlag = await prisma.inventoryFlag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryFlagUpdateArgs>(args: SelectSubset<T, InventoryFlagUpdateArgs<ExtArgs>>): Prisma__InventoryFlagClient<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryFlags.
     * @param {InventoryFlagDeleteManyArgs} args - Arguments to filter InventoryFlags to delete.
     * @example
     * // Delete a few InventoryFlags
     * const { count } = await prisma.inventoryFlag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryFlagDeleteManyArgs>(args?: SelectSubset<T, InventoryFlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryFlags
     * const inventoryFlag = await prisma.inventoryFlag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryFlagUpdateManyArgs>(args: SelectSubset<T, InventoryFlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryFlags and returns the data updated in the database.
     * @param {InventoryFlagUpdateManyAndReturnArgs} args - Arguments to update many InventoryFlags.
     * @example
     * // Update many InventoryFlags
     * const inventoryFlag = await prisma.inventoryFlag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryFlags and only return the `id`
     * const inventoryFlagWithIdOnly = await prisma.inventoryFlag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryFlagUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryFlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryFlag.
     * @param {InventoryFlagUpsertArgs} args - Arguments to update or create a InventoryFlag.
     * @example
     * // Update or create a InventoryFlag
     * const inventoryFlag = await prisma.inventoryFlag.upsert({
     *   create: {
     *     // ... data to create a InventoryFlag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryFlag we want to update
     *   }
     * })
     */
    upsert<T extends InventoryFlagUpsertArgs>(args: SelectSubset<T, InventoryFlagUpsertArgs<ExtArgs>>): Prisma__InventoryFlagClient<$Result.GetResult<Prisma.$InventoryFlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFlagCountArgs} args - Arguments to filter InventoryFlags to count.
     * @example
     * // Count the number of InventoryFlags
     * const count = await prisma.inventoryFlag.count({
     *   where: {
     *     // ... the filter for the InventoryFlags we want to count
     *   }
     * })
    **/
    count<T extends InventoryFlagCountArgs>(
      args?: Subset<T, InventoryFlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryFlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryFlagAggregateArgs>(args: Subset<T, InventoryFlagAggregateArgs>): Prisma.PrismaPromise<GetInventoryFlagAggregateType<T>>

    /**
     * Group by InventoryFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFlagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryFlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryFlagGroupByArgs['orderBy'] }
        : { orderBy?: InventoryFlagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryFlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryFlag model
   */
  readonly fields: InventoryFlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryFlag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryFlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventoryItem<T extends InventoryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItemDefaultArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flaggedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryFlag model
   */
  interface InventoryFlagFieldRefs {
    readonly id: FieldRef<"InventoryFlag", 'String'>
    readonly inventoryItemId: FieldRef<"InventoryFlag", 'String'>
    readonly userId: FieldRef<"InventoryFlag", 'String'>
    readonly note: FieldRef<"InventoryFlag", 'String'>
    readonly flagStatus: FieldRef<"InventoryFlag", 'FlagStatus'>
    readonly createdAt: FieldRef<"InventoryFlag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryFlag findUnique
   */
  export type InventoryFlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    /**
     * Filter, which InventoryFlag to fetch.
     */
    where: InventoryFlagWhereUniqueInput
  }

  /**
   * InventoryFlag findUniqueOrThrow
   */
  export type InventoryFlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    /**
     * Filter, which InventoryFlag to fetch.
     */
    where: InventoryFlagWhereUniqueInput
  }

  /**
   * InventoryFlag findFirst
   */
  export type InventoryFlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    /**
     * Filter, which InventoryFlag to fetch.
     */
    where?: InventoryFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryFlags to fetch.
     */
    orderBy?: InventoryFlagOrderByWithRelationInput | InventoryFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryFlags.
     */
    cursor?: InventoryFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryFlags.
     */
    distinct?: InventoryFlagScalarFieldEnum | InventoryFlagScalarFieldEnum[]
  }

  /**
   * InventoryFlag findFirstOrThrow
   */
  export type InventoryFlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    /**
     * Filter, which InventoryFlag to fetch.
     */
    where?: InventoryFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryFlags to fetch.
     */
    orderBy?: InventoryFlagOrderByWithRelationInput | InventoryFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryFlags.
     */
    cursor?: InventoryFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryFlags.
     */
    distinct?: InventoryFlagScalarFieldEnum | InventoryFlagScalarFieldEnum[]
  }

  /**
   * InventoryFlag findMany
   */
  export type InventoryFlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    /**
     * Filter, which InventoryFlags to fetch.
     */
    where?: InventoryFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryFlags to fetch.
     */
    orderBy?: InventoryFlagOrderByWithRelationInput | InventoryFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryFlags.
     */
    cursor?: InventoryFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryFlags.
     */
    distinct?: InventoryFlagScalarFieldEnum | InventoryFlagScalarFieldEnum[]
  }

  /**
   * InventoryFlag create
   */
  export type InventoryFlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryFlag.
     */
    data: XOR<InventoryFlagCreateInput, InventoryFlagUncheckedCreateInput>
  }

  /**
   * InventoryFlag createMany
   */
  export type InventoryFlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryFlags.
     */
    data: InventoryFlagCreateManyInput | InventoryFlagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryFlag createManyAndReturn
   */
  export type InventoryFlagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryFlags.
     */
    data: InventoryFlagCreateManyInput | InventoryFlagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryFlag update
   */
  export type InventoryFlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryFlag.
     */
    data: XOR<InventoryFlagUpdateInput, InventoryFlagUncheckedUpdateInput>
    /**
     * Choose, which InventoryFlag to update.
     */
    where: InventoryFlagWhereUniqueInput
  }

  /**
   * InventoryFlag updateMany
   */
  export type InventoryFlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryFlags.
     */
    data: XOR<InventoryFlagUpdateManyMutationInput, InventoryFlagUncheckedUpdateManyInput>
    /**
     * Filter which InventoryFlags to update
     */
    where?: InventoryFlagWhereInput
    /**
     * Limit how many InventoryFlags to update.
     */
    limit?: number
  }

  /**
   * InventoryFlag updateManyAndReturn
   */
  export type InventoryFlagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * The data used to update InventoryFlags.
     */
    data: XOR<InventoryFlagUpdateManyMutationInput, InventoryFlagUncheckedUpdateManyInput>
    /**
     * Filter which InventoryFlags to update
     */
    where?: InventoryFlagWhereInput
    /**
     * Limit how many InventoryFlags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryFlag upsert
   */
  export type InventoryFlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryFlag to update in case it exists.
     */
    where: InventoryFlagWhereUniqueInput
    /**
     * In case the InventoryFlag found by the `where` argument doesn't exist, create a new InventoryFlag with this data.
     */
    create: XOR<InventoryFlagCreateInput, InventoryFlagUncheckedCreateInput>
    /**
     * In case the InventoryFlag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryFlagUpdateInput, InventoryFlagUncheckedUpdateInput>
  }

  /**
   * InventoryFlag delete
   */
  export type InventoryFlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
    /**
     * Filter which InventoryFlag to delete.
     */
    where: InventoryFlagWhereUniqueInput
  }

  /**
   * InventoryFlag deleteMany
   */
  export type InventoryFlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryFlags to delete
     */
    where?: InventoryFlagWhereInput
    /**
     * Limit how many InventoryFlags to delete.
     */
    limit?: number
  }

  /**
   * InventoryFlag without action
   */
  export type InventoryFlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryFlag
     */
    select?: InventoryFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryFlag
     */
    omit?: InventoryFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryFlagInclude<ExtArgs> | null
  }


  /**
   * Model IssueReport
   */

  export type AggregateIssueReport = {
    _count: IssueReportCountAggregateOutputType | null
    _min: IssueReportMinAggregateOutputType | null
    _max: IssueReportMaxAggregateOutputType | null
  }

  export type IssueReportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    locationId: string | null
    resolvedAt: Date | null
    note: string | null
    reportStatus: $Enums.ReportStatus | null
    createdAt: Date | null
  }

  export type IssueReportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    locationId: string | null
    resolvedAt: Date | null
    note: string | null
    reportStatus: $Enums.ReportStatus | null
    createdAt: Date | null
  }

  export type IssueReportCountAggregateOutputType = {
    id: number
    userId: number
    locationId: number
    resolvedAt: number
    note: number
    reportStatus: number
    createdAt: number
    _all: number
  }


  export type IssueReportMinAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    resolvedAt?: true
    note?: true
    reportStatus?: true
    createdAt?: true
  }

  export type IssueReportMaxAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    resolvedAt?: true
    note?: true
    reportStatus?: true
    createdAt?: true
  }

  export type IssueReportCountAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    resolvedAt?: true
    note?: true
    reportStatus?: true
    createdAt?: true
    _all?: true
  }

  export type IssueReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueReport to aggregate.
     */
    where?: IssueReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReports to fetch.
     */
    orderBy?: IssueReportOrderByWithRelationInput | IssueReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IssueReports
    **/
    _count?: true | IssueReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueReportMaxAggregateInputType
  }

  export type GetIssueReportAggregateType<T extends IssueReportAggregateArgs> = {
        [P in keyof T & keyof AggregateIssueReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssueReport[P]>
      : GetScalarType<T[P], AggregateIssueReport[P]>
  }




  export type IssueReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueReportWhereInput
    orderBy?: IssueReportOrderByWithAggregationInput | IssueReportOrderByWithAggregationInput[]
    by: IssueReportScalarFieldEnum[] | IssueReportScalarFieldEnum
    having?: IssueReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueReportCountAggregateInputType | true
    _min?: IssueReportMinAggregateInputType
    _max?: IssueReportMaxAggregateInputType
  }

  export type IssueReportGroupByOutputType = {
    id: string
    userId: string
    locationId: string
    resolvedAt: Date | null
    note: string
    reportStatus: $Enums.ReportStatus
    createdAt: Date
    _count: IssueReportCountAggregateOutputType | null
    _min: IssueReportMinAggregateOutputType | null
    _max: IssueReportMaxAggregateOutputType | null
  }

  type GetIssueReportGroupByPayload<T extends IssueReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueReportGroupByOutputType[P]>
            : GetScalarType<T[P], IssueReportGroupByOutputType[P]>
        }
      >
    >


  export type IssueReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    resolvedAt?: boolean
    note?: boolean
    reportStatus?: boolean
    createdAt?: boolean
    reportBy?: boolean | UserDefaultArgs<ExtArgs>
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issueReport"]>

  export type IssueReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    resolvedAt?: boolean
    note?: boolean
    reportStatus?: boolean
    createdAt?: boolean
    reportBy?: boolean | UserDefaultArgs<ExtArgs>
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issueReport"]>

  export type IssueReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    resolvedAt?: boolean
    note?: boolean
    reportStatus?: boolean
    createdAt?: boolean
    reportBy?: boolean | UserDefaultArgs<ExtArgs>
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issueReport"]>

  export type IssueReportSelectScalar = {
    id?: boolean
    userId?: boolean
    locationId?: boolean
    resolvedAt?: boolean
    note?: boolean
    reportStatus?: boolean
    createdAt?: boolean
  }

  export type IssueReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "locationId" | "resolvedAt" | "note" | "reportStatus" | "createdAt", ExtArgs["result"]["issueReport"]>
  export type IssueReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportBy?: boolean | UserDefaultArgs<ExtArgs>
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type IssueReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportBy?: boolean | UserDefaultArgs<ExtArgs>
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type IssueReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportBy?: boolean | UserDefaultArgs<ExtArgs>
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $IssueReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IssueReport"
    objects: {
      reportBy: Prisma.$UserPayload<ExtArgs>
      atLocation: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      locationId: string
      resolvedAt: Date | null
      note: string
      reportStatus: $Enums.ReportStatus
      createdAt: Date
    }, ExtArgs["result"]["issueReport"]>
    composites: {}
  }

  type IssueReportGetPayload<S extends boolean | null | undefined | IssueReportDefaultArgs> = $Result.GetResult<Prisma.$IssueReportPayload, S>

  type IssueReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssueReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssueReportCountAggregateInputType | true
    }

  export interface IssueReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IssueReport'], meta: { name: 'IssueReport' } }
    /**
     * Find zero or one IssueReport that matches the filter.
     * @param {IssueReportFindUniqueArgs} args - Arguments to find a IssueReport
     * @example
     * // Get one IssueReport
     * const issueReport = await prisma.issueReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueReportFindUniqueArgs>(args: SelectSubset<T, IssueReportFindUniqueArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IssueReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueReportFindUniqueOrThrowArgs} args - Arguments to find a IssueReport
     * @example
     * // Get one IssueReport
     * const issueReport = await prisma.issueReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueReportFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IssueReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportFindFirstArgs} args - Arguments to find a IssueReport
     * @example
     * // Get one IssueReport
     * const issueReport = await prisma.issueReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueReportFindFirstArgs>(args?: SelectSubset<T, IssueReportFindFirstArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IssueReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportFindFirstOrThrowArgs} args - Arguments to find a IssueReport
     * @example
     * // Get one IssueReport
     * const issueReport = await prisma.issueReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueReportFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IssueReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IssueReports
     * const issueReports = await prisma.issueReport.findMany()
     * 
     * // Get first 10 IssueReports
     * const issueReports = await prisma.issueReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueReportWithIdOnly = await prisma.issueReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssueReportFindManyArgs>(args?: SelectSubset<T, IssueReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IssueReport.
     * @param {IssueReportCreateArgs} args - Arguments to create a IssueReport.
     * @example
     * // Create one IssueReport
     * const IssueReport = await prisma.issueReport.create({
     *   data: {
     *     // ... data to create a IssueReport
     *   }
     * })
     * 
     */
    create<T extends IssueReportCreateArgs>(args: SelectSubset<T, IssueReportCreateArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IssueReports.
     * @param {IssueReportCreateManyArgs} args - Arguments to create many IssueReports.
     * @example
     * // Create many IssueReports
     * const issueReport = await prisma.issueReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueReportCreateManyArgs>(args?: SelectSubset<T, IssueReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IssueReports and returns the data saved in the database.
     * @param {IssueReportCreateManyAndReturnArgs} args - Arguments to create many IssueReports.
     * @example
     * // Create many IssueReports
     * const issueReport = await prisma.issueReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IssueReports and only return the `id`
     * const issueReportWithIdOnly = await prisma.issueReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssueReportCreateManyAndReturnArgs>(args?: SelectSubset<T, IssueReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IssueReport.
     * @param {IssueReportDeleteArgs} args - Arguments to delete one IssueReport.
     * @example
     * // Delete one IssueReport
     * const IssueReport = await prisma.issueReport.delete({
     *   where: {
     *     // ... filter to delete one IssueReport
     *   }
     * })
     * 
     */
    delete<T extends IssueReportDeleteArgs>(args: SelectSubset<T, IssueReportDeleteArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IssueReport.
     * @param {IssueReportUpdateArgs} args - Arguments to update one IssueReport.
     * @example
     * // Update one IssueReport
     * const issueReport = await prisma.issueReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueReportUpdateArgs>(args: SelectSubset<T, IssueReportUpdateArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IssueReports.
     * @param {IssueReportDeleteManyArgs} args - Arguments to filter IssueReports to delete.
     * @example
     * // Delete a few IssueReports
     * const { count } = await prisma.issueReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueReportDeleteManyArgs>(args?: SelectSubset<T, IssueReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssueReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IssueReports
     * const issueReport = await prisma.issueReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueReportUpdateManyArgs>(args: SelectSubset<T, IssueReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssueReports and returns the data updated in the database.
     * @param {IssueReportUpdateManyAndReturnArgs} args - Arguments to update many IssueReports.
     * @example
     * // Update many IssueReports
     * const issueReport = await prisma.issueReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IssueReports and only return the `id`
     * const issueReportWithIdOnly = await prisma.issueReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IssueReportUpdateManyAndReturnArgs>(args: SelectSubset<T, IssueReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IssueReport.
     * @param {IssueReportUpsertArgs} args - Arguments to update or create a IssueReport.
     * @example
     * // Update or create a IssueReport
     * const issueReport = await prisma.issueReport.upsert({
     *   create: {
     *     // ... data to create a IssueReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IssueReport we want to update
     *   }
     * })
     */
    upsert<T extends IssueReportUpsertArgs>(args: SelectSubset<T, IssueReportUpsertArgs<ExtArgs>>): Prisma__IssueReportClient<$Result.GetResult<Prisma.$IssueReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IssueReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportCountArgs} args - Arguments to filter IssueReports to count.
     * @example
     * // Count the number of IssueReports
     * const count = await prisma.issueReport.count({
     *   where: {
     *     // ... the filter for the IssueReports we want to count
     *   }
     * })
    **/
    count<T extends IssueReportCountArgs>(
      args?: Subset<T, IssueReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IssueReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssueReportAggregateArgs>(args: Subset<T, IssueReportAggregateArgs>): Prisma.PrismaPromise<GetIssueReportAggregateType<T>>

    /**
     * Group by IssueReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssueReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueReportGroupByArgs['orderBy'] }
        : { orderBy?: IssueReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssueReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IssueReport model
   */
  readonly fields: IssueReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IssueReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reportBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    atLocation<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IssueReport model
   */
  interface IssueReportFieldRefs {
    readonly id: FieldRef<"IssueReport", 'String'>
    readonly userId: FieldRef<"IssueReport", 'String'>
    readonly locationId: FieldRef<"IssueReport", 'String'>
    readonly resolvedAt: FieldRef<"IssueReport", 'DateTime'>
    readonly note: FieldRef<"IssueReport", 'String'>
    readonly reportStatus: FieldRef<"IssueReport", 'ReportStatus'>
    readonly createdAt: FieldRef<"IssueReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IssueReport findUnique
   */
  export type IssueReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    /**
     * Filter, which IssueReport to fetch.
     */
    where: IssueReportWhereUniqueInput
  }

  /**
   * IssueReport findUniqueOrThrow
   */
  export type IssueReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    /**
     * Filter, which IssueReport to fetch.
     */
    where: IssueReportWhereUniqueInput
  }

  /**
   * IssueReport findFirst
   */
  export type IssueReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    /**
     * Filter, which IssueReport to fetch.
     */
    where?: IssueReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReports to fetch.
     */
    orderBy?: IssueReportOrderByWithRelationInput | IssueReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueReports.
     */
    cursor?: IssueReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueReports.
     */
    distinct?: IssueReportScalarFieldEnum | IssueReportScalarFieldEnum[]
  }

  /**
   * IssueReport findFirstOrThrow
   */
  export type IssueReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    /**
     * Filter, which IssueReport to fetch.
     */
    where?: IssueReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReports to fetch.
     */
    orderBy?: IssueReportOrderByWithRelationInput | IssueReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueReports.
     */
    cursor?: IssueReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueReports.
     */
    distinct?: IssueReportScalarFieldEnum | IssueReportScalarFieldEnum[]
  }

  /**
   * IssueReport findMany
   */
  export type IssueReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    /**
     * Filter, which IssueReports to fetch.
     */
    where?: IssueReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReports to fetch.
     */
    orderBy?: IssueReportOrderByWithRelationInput | IssueReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IssueReports.
     */
    cursor?: IssueReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueReports.
     */
    distinct?: IssueReportScalarFieldEnum | IssueReportScalarFieldEnum[]
  }

  /**
   * IssueReport create
   */
  export type IssueReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    /**
     * The data needed to create a IssueReport.
     */
    data: XOR<IssueReportCreateInput, IssueReportUncheckedCreateInput>
  }

  /**
   * IssueReport createMany
   */
  export type IssueReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IssueReports.
     */
    data: IssueReportCreateManyInput | IssueReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IssueReport createManyAndReturn
   */
  export type IssueReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * The data used to create many IssueReports.
     */
    data: IssueReportCreateManyInput | IssueReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IssueReport update
   */
  export type IssueReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    /**
     * The data needed to update a IssueReport.
     */
    data: XOR<IssueReportUpdateInput, IssueReportUncheckedUpdateInput>
    /**
     * Choose, which IssueReport to update.
     */
    where: IssueReportWhereUniqueInput
  }

  /**
   * IssueReport updateMany
   */
  export type IssueReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IssueReports.
     */
    data: XOR<IssueReportUpdateManyMutationInput, IssueReportUncheckedUpdateManyInput>
    /**
     * Filter which IssueReports to update
     */
    where?: IssueReportWhereInput
    /**
     * Limit how many IssueReports to update.
     */
    limit?: number
  }

  /**
   * IssueReport updateManyAndReturn
   */
  export type IssueReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * The data used to update IssueReports.
     */
    data: XOR<IssueReportUpdateManyMutationInput, IssueReportUncheckedUpdateManyInput>
    /**
     * Filter which IssueReports to update
     */
    where?: IssueReportWhereInput
    /**
     * Limit how many IssueReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IssueReport upsert
   */
  export type IssueReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    /**
     * The filter to search for the IssueReport to update in case it exists.
     */
    where: IssueReportWhereUniqueInput
    /**
     * In case the IssueReport found by the `where` argument doesn't exist, create a new IssueReport with this data.
     */
    create: XOR<IssueReportCreateInput, IssueReportUncheckedCreateInput>
    /**
     * In case the IssueReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueReportUpdateInput, IssueReportUncheckedUpdateInput>
  }

  /**
   * IssueReport delete
   */
  export type IssueReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
    /**
     * Filter which IssueReport to delete.
     */
    where: IssueReportWhereUniqueInput
  }

  /**
   * IssueReport deleteMany
   */
  export type IssueReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueReports to delete
     */
    where?: IssueReportWhereInput
    /**
     * Limit how many IssueReports to delete.
     */
    limit?: number
  }

  /**
   * IssueReport without action
   */
  export type IssueReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReport
     */
    select?: IssueReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueReport
     */
    omit?: IssueReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueReportInclude<ExtArgs> | null
  }


  /**
   * Model Ressource
   */

  export type AggregateRessource = {
    _count: RessourceCountAggregateOutputType | null
    _min: RessourceMinAggregateOutputType | null
    _max: RessourceMaxAggregateOutputType | null
  }

  export type RessourceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    locationId: string | null
    title: string | null
    content: string | null
    category: $Enums.RessourceType | null
    createdAt: Date | null
  }

  export type RessourceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    locationId: string | null
    title: string | null
    content: string | null
    category: $Enums.RessourceType | null
    createdAt: Date | null
  }

  export type RessourceCountAggregateOutputType = {
    id: number
    userId: number
    locationId: number
    title: number
    content: number
    category: number
    createdAt: number
    _all: number
  }


  export type RessourceMinAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    title?: true
    content?: true
    category?: true
    createdAt?: true
  }

  export type RessourceMaxAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    title?: true
    content?: true
    category?: true
    createdAt?: true
  }

  export type RessourceCountAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    title?: true
    content?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type RessourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ressource to aggregate.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ressources
    **/
    _count?: true | RessourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RessourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RessourceMaxAggregateInputType
  }

  export type GetRessourceAggregateType<T extends RessourceAggregateArgs> = {
        [P in keyof T & keyof AggregateRessource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRessource[P]>
      : GetScalarType<T[P], AggregateRessource[P]>
  }




  export type RessourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RessourceWhereInput
    orderBy?: RessourceOrderByWithAggregationInput | RessourceOrderByWithAggregationInput[]
    by: RessourceScalarFieldEnum[] | RessourceScalarFieldEnum
    having?: RessourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RessourceCountAggregateInputType | true
    _min?: RessourceMinAggregateInputType
    _max?: RessourceMaxAggregateInputType
  }

  export type RessourceGroupByOutputType = {
    id: string
    userId: string
    locationId: string
    title: string
    content: string
    category: $Enums.RessourceType
    createdAt: Date
    _count: RessourceCountAggregateOutputType | null
    _min: RessourceMinAggregateOutputType | null
    _max: RessourceMaxAggregateOutputType | null
  }

  type GetRessourceGroupByPayload<T extends RessourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RessourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RessourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RessourceGroupByOutputType[P]>
            : GetScalarType<T[P], RessourceGroupByOutputType[P]>
        }
      >
    >


  export type RessourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ressource"]>

  export type RessourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ressource"]>

  export type RessourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    locationId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ressource"]>

  export type RessourceSelectScalar = {
    id?: boolean
    userId?: boolean
    locationId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type RessourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "locationId" | "title" | "content" | "category" | "createdAt", ExtArgs["result"]["ressource"]>
  export type RessourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type RessourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type RessourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $RessourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ressource"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      locationId: string
      title: string
      content: string
      category: $Enums.RessourceType
      createdAt: Date
    }, ExtArgs["result"]["ressource"]>
    composites: {}
  }

  type RessourceGetPayload<S extends boolean | null | undefined | RessourceDefaultArgs> = $Result.GetResult<Prisma.$RessourcePayload, S>

  type RessourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RessourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RessourceCountAggregateInputType | true
    }

  export interface RessourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ressource'], meta: { name: 'Ressource' } }
    /**
     * Find zero or one Ressource that matches the filter.
     * @param {RessourceFindUniqueArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RessourceFindUniqueArgs>(args: SelectSubset<T, RessourceFindUniqueArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ressource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RessourceFindUniqueOrThrowArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RessourceFindUniqueOrThrowArgs>(args: SelectSubset<T, RessourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ressource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceFindFirstArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RessourceFindFirstArgs>(args?: SelectSubset<T, RessourceFindFirstArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ressource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceFindFirstOrThrowArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RessourceFindFirstOrThrowArgs>(args?: SelectSubset<T, RessourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ressources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ressources
     * const ressources = await prisma.ressource.findMany()
     * 
     * // Get first 10 Ressources
     * const ressources = await prisma.ressource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ressourceWithIdOnly = await prisma.ressource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RessourceFindManyArgs>(args?: SelectSubset<T, RessourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ressource.
     * @param {RessourceCreateArgs} args - Arguments to create a Ressource.
     * @example
     * // Create one Ressource
     * const Ressource = await prisma.ressource.create({
     *   data: {
     *     // ... data to create a Ressource
     *   }
     * })
     * 
     */
    create<T extends RessourceCreateArgs>(args: SelectSubset<T, RessourceCreateArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ressources.
     * @param {RessourceCreateManyArgs} args - Arguments to create many Ressources.
     * @example
     * // Create many Ressources
     * const ressource = await prisma.ressource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RessourceCreateManyArgs>(args?: SelectSubset<T, RessourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ressources and returns the data saved in the database.
     * @param {RessourceCreateManyAndReturnArgs} args - Arguments to create many Ressources.
     * @example
     * // Create many Ressources
     * const ressource = await prisma.ressource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ressources and only return the `id`
     * const ressourceWithIdOnly = await prisma.ressource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RessourceCreateManyAndReturnArgs>(args?: SelectSubset<T, RessourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ressource.
     * @param {RessourceDeleteArgs} args - Arguments to delete one Ressource.
     * @example
     * // Delete one Ressource
     * const Ressource = await prisma.ressource.delete({
     *   where: {
     *     // ... filter to delete one Ressource
     *   }
     * })
     * 
     */
    delete<T extends RessourceDeleteArgs>(args: SelectSubset<T, RessourceDeleteArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ressource.
     * @param {RessourceUpdateArgs} args - Arguments to update one Ressource.
     * @example
     * // Update one Ressource
     * const ressource = await prisma.ressource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RessourceUpdateArgs>(args: SelectSubset<T, RessourceUpdateArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ressources.
     * @param {RessourceDeleteManyArgs} args - Arguments to filter Ressources to delete.
     * @example
     * // Delete a few Ressources
     * const { count } = await prisma.ressource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RessourceDeleteManyArgs>(args?: SelectSubset<T, RessourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ressources
     * const ressource = await prisma.ressource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RessourceUpdateManyArgs>(args: SelectSubset<T, RessourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressources and returns the data updated in the database.
     * @param {RessourceUpdateManyAndReturnArgs} args - Arguments to update many Ressources.
     * @example
     * // Update many Ressources
     * const ressource = await prisma.ressource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ressources and only return the `id`
     * const ressourceWithIdOnly = await prisma.ressource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RessourceUpdateManyAndReturnArgs>(args: SelectSubset<T, RessourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ressource.
     * @param {RessourceUpsertArgs} args - Arguments to update or create a Ressource.
     * @example
     * // Update or create a Ressource
     * const ressource = await prisma.ressource.upsert({
     *   create: {
     *     // ... data to create a Ressource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ressource we want to update
     *   }
     * })
     */
    upsert<T extends RessourceUpsertArgs>(args: SelectSubset<T, RessourceUpsertArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ressources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceCountArgs} args - Arguments to filter Ressources to count.
     * @example
     * // Count the number of Ressources
     * const count = await prisma.ressource.count({
     *   where: {
     *     // ... the filter for the Ressources we want to count
     *   }
     * })
    **/
    count<T extends RessourceCountArgs>(
      args?: Subset<T, RessourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RessourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ressource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RessourceAggregateArgs>(args: Subset<T, RessourceAggregateArgs>): Prisma.PrismaPromise<GetRessourceAggregateType<T>>

    /**
     * Group by Ressource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RessourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RessourceGroupByArgs['orderBy'] }
        : { orderBy?: RessourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RessourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRessourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ressource model
   */
  readonly fields: RessourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ressource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RessourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ressource model
   */
  interface RessourceFieldRefs {
    readonly id: FieldRef<"Ressource", 'String'>
    readonly userId: FieldRef<"Ressource", 'String'>
    readonly locationId: FieldRef<"Ressource", 'String'>
    readonly title: FieldRef<"Ressource", 'String'>
    readonly content: FieldRef<"Ressource", 'String'>
    readonly category: FieldRef<"Ressource", 'RessourceType'>
    readonly createdAt: FieldRef<"Ressource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ressource findUnique
   */
  export type RessourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource findUniqueOrThrow
   */
  export type RessourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource findFirst
   */
  export type RessourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ressources.
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ressources.
     */
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Ressource findFirstOrThrow
   */
  export type RessourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ressources.
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ressources.
     */
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Ressource findMany
   */
  export type RessourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter, which Ressources to fetch.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ressources.
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ressources.
     */
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Ressource create
   */
  export type RessourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Ressource.
     */
    data: XOR<RessourceCreateInput, RessourceUncheckedCreateInput>
  }

  /**
   * Ressource createMany
   */
  export type RessourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ressources.
     */
    data: RessourceCreateManyInput | RessourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ressource createManyAndReturn
   */
  export type RessourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * The data used to create many Ressources.
     */
    data: RessourceCreateManyInput | RessourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ressource update
   */
  export type RessourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Ressource.
     */
    data: XOR<RessourceUpdateInput, RessourceUncheckedUpdateInput>
    /**
     * Choose, which Ressource to update.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource updateMany
   */
  export type RessourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ressources.
     */
    data: XOR<RessourceUpdateManyMutationInput, RessourceUncheckedUpdateManyInput>
    /**
     * Filter which Ressources to update
     */
    where?: RessourceWhereInput
    /**
     * Limit how many Ressources to update.
     */
    limit?: number
  }

  /**
   * Ressource updateManyAndReturn
   */
  export type RessourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * The data used to update Ressources.
     */
    data: XOR<RessourceUpdateManyMutationInput, RessourceUncheckedUpdateManyInput>
    /**
     * Filter which Ressources to update
     */
    where?: RessourceWhereInput
    /**
     * Limit how many Ressources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ressource upsert
   */
  export type RessourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Ressource to update in case it exists.
     */
    where: RessourceWhereUniqueInput
    /**
     * In case the Ressource found by the `where` argument doesn't exist, create a new Ressource with this data.
     */
    create: XOR<RessourceCreateInput, RessourceUncheckedCreateInput>
    /**
     * In case the Ressource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RessourceUpdateInput, RessourceUncheckedUpdateInput>
  }

  /**
   * Ressource delete
   */
  export type RessourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
    /**
     * Filter which Ressource to delete.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource deleteMany
   */
  export type RessourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ressources to delete
     */
    where?: RessourceWhereInput
    /**
     * Limit how many Ressources to delete.
     */
    limit?: number
  }

  /**
   * Ressource without action
   */
  export type RessourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessourceInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionMinAggregateOutputType = {
    id: string | null
    name: string | null
    locationId: string | null
  }

  export type PositionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    locationId: string | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    name: number
    locationId: number
    _all: number
  }


  export type PositionMinAggregateInputType = {
    id?: true
    name?: true
    locationId?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    name?: true
    locationId?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    name?: true
    locationId?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    id: string
    name: string
    locationId: string
    _count: PositionCountAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    locationId?: boolean
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
    shiftAssignments?: boolean | Position$shiftAssignmentsArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    locationId?: boolean
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    locationId?: boolean
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    id?: boolean
    name?: boolean
    locationId?: boolean
  }

  export type PositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "locationId", ExtArgs["result"]["position"]>
  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
    shiftAssignments?: boolean | Position$shiftAssignmentsArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type PositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atLocation?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      atLocation: Prisma.$LocationPayload<ExtArgs>
      shiftAssignments: Prisma.$ShiftAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      locationId: string
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {PositionUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atLocation<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shiftAssignments<T extends Position$shiftAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Position$shiftAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Position model
   */
  interface PositionFieldRefs {
    readonly id: FieldRef<"Position", 'String'>
    readonly name: FieldRef<"Position", 'String'>
    readonly locationId: FieldRef<"Position", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position updateManyAndReturn
   */
  export type PositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to delete.
     */
    limit?: number
  }

  /**
   * Position.shiftAssignments
   */
  export type Position$shiftAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftAssignment
     */
    omit?: ShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    cursor?: ShiftAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    refreshToken: 'refreshToken',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    revoked: 'revoked'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const UserLocationScalarFieldEnum: {
    userId: 'userId',
    locationId: 'locationId',
    status: 'status'
  };

  export type UserLocationScalarFieldEnum = (typeof UserLocationScalarFieldEnum)[keyof typeof UserLocationScalarFieldEnum]


  export const ShiftAssignmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    start: 'start',
    end: 'end',
    positionId: 'positionId',
    createdAt: 'createdAt'
  };

  export type ShiftAssignmentScalarFieldEnum = (typeof ShiftAssignmentScalarFieldEnum)[keyof typeof ShiftAssignmentScalarFieldEnum]


  export const ShiftSwapRequestScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    targetId: 'targetId',
    requesterShiftId: 'requesterShiftId',
    targetShiftId: 'targetShiftId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ShiftSwapRequestScalarFieldEnum = (typeof ShiftSwapRequestScalarFieldEnum)[keyof typeof ShiftSwapRequestScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    unit: 'unit',
    locationId: 'locationId',
    lowThreshold: 'lowThreshold',
    updatedAt: 'updatedAt'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const InventoryFlagScalarFieldEnum: {
    id: 'id',
    inventoryItemId: 'inventoryItemId',
    userId: 'userId',
    note: 'note',
    flagStatus: 'flagStatus',
    createdAt: 'createdAt'
  };

  export type InventoryFlagScalarFieldEnum = (typeof InventoryFlagScalarFieldEnum)[keyof typeof InventoryFlagScalarFieldEnum]


  export const IssueReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    locationId: 'locationId',
    resolvedAt: 'resolvedAt',
    note: 'note',
    reportStatus: 'reportStatus',
    createdAt: 'createdAt'
  };

  export type IssueReportScalarFieldEnum = (typeof IssueReportScalarFieldEnum)[keyof typeof IssueReportScalarFieldEnum]


  export const RessourceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    locationId: 'locationId',
    title: 'title',
    content: 'content',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type RessourceScalarFieldEnum = (typeof RessourceScalarFieldEnum)[keyof typeof RessourceScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    locationId: 'locationId'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'SwapStatus'
   */
  export type EnumSwapStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwapStatus'>
    


  /**
   * Reference to a field of type 'SwapStatus[]'
   */
  export type ListEnumSwapStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwapStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'FlagStatus'
   */
  export type EnumFlagStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlagStatus'>
    


  /**
   * Reference to a field of type 'FlagStatus[]'
   */
  export type ListEnumFlagStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlagStatus[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


  /**
   * Reference to a field of type 'RessourceType'
   */
  export type EnumRessourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RessourceType'>
    


  /**
   * Reference to a field of type 'RessourceType[]'
   */
  export type ListEnumRessourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RessourceType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    phone?: StringFilter<"Location"> | string
    users?: UserLocationListRelationFilter
    inventoryItems?: InventoryItemListRelationFilter
    issueReports?: IssueReportListRelationFilter
    ressources?: RessourceListRelationFilter
    position?: PositionListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    users?: UserLocationOrderByRelationAggregateInput
    inventoryItems?: InventoryItemOrderByRelationAggregateInput
    issueReports?: IssueReportOrderByRelationAggregateInput
    ressources?: RessourceOrderByRelationAggregateInput
    position?: PositionOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    phone?: StringFilter<"Location"> | string
    users?: UserLocationListRelationFilter
    inventoryItems?: InventoryItemListRelationFilter
    issueReports?: IssueReportListRelationFilter
    ressources?: RessourceListRelationFilter
    position?: PositionListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    address?: StringWithAggregatesFilter<"Location"> | string
    phone?: StringWithAggregatesFilter<"Location"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    shiftAssignments?: ShiftAssignmentListRelationFilter
    locations?: UserLocationListRelationFilter
    swapRequestsSent?: ShiftSwapRequestListRelationFilter
    swapRequestsReceived?: ShiftSwapRequestListRelationFilter
    inventoryFlags?: InventoryFlagListRelationFilter
    issueReports?: IssueReportListRelationFilter
    ressources?: RessourceListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    shiftAssignments?: ShiftAssignmentOrderByRelationAggregateInput
    locations?: UserLocationOrderByRelationAggregateInput
    swapRequestsSent?: ShiftSwapRequestOrderByRelationAggregateInput
    swapRequestsReceived?: ShiftSwapRequestOrderByRelationAggregateInput
    inventoryFlags?: InventoryFlagOrderByRelationAggregateInput
    issueReports?: IssueReportOrderByRelationAggregateInput
    ressources?: RessourceOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    shiftAssignments?: ShiftAssignmentListRelationFilter
    locations?: UserLocationListRelationFilter
    swapRequestsSent?: ShiftSwapRequestListRelationFilter
    swapRequestsReceived?: ShiftSwapRequestListRelationFilter
    inventoryFlags?: InventoryFlagListRelationFilter
    issueReports?: IssueReportListRelationFilter
    ressources?: RessourceListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    refreshToken?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    refreshToken?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "refreshToken">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    refreshToken?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
  }

  export type UserLocationWhereInput = {
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    userId?: StringFilter<"UserLocation"> | string
    locationId?: StringFilter<"UserLocation"> | string
    status?: EnumStatusFilter<"UserLocation"> | $Enums.Status
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type UserLocationOrderByWithRelationInput = {
    userId?: SortOrder
    locationId?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type UserLocationWhereUniqueInput = Prisma.AtLeast<{
    userId_locationId?: UserLocationUserIdLocationIdCompoundUniqueInput
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    userId?: StringFilter<"UserLocation"> | string
    locationId?: StringFilter<"UserLocation"> | string
    status?: EnumStatusFilter<"UserLocation"> | $Enums.Status
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "userId_locationId">

  export type UserLocationOrderByWithAggregationInput = {
    userId?: SortOrder
    locationId?: SortOrder
    status?: SortOrder
    _count?: UserLocationCountOrderByAggregateInput
    _max?: UserLocationMaxOrderByAggregateInput
    _min?: UserLocationMinOrderByAggregateInput
  }

  export type UserLocationScalarWhereWithAggregatesInput = {
    AND?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    OR?: UserLocationScalarWhereWithAggregatesInput[]
    NOT?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserLocation"> | string
    locationId?: StringWithAggregatesFilter<"UserLocation"> | string
    status?: EnumStatusWithAggregatesFilter<"UserLocation"> | $Enums.Status
  }

  export type ShiftAssignmentWhereInput = {
    AND?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    OR?: ShiftAssignmentWhereInput[]
    NOT?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    id?: StringFilter<"ShiftAssignment"> | string
    userId?: StringFilter<"ShiftAssignment"> | string
    date?: DateTimeFilter<"ShiftAssignment"> | Date | string
    start?: StringFilter<"ShiftAssignment"> | string
    end?: StringFilter<"ShiftAssignment"> | string
    positionId?: StringFilter<"ShiftAssignment"> | string
    createdAt?: DateTimeFilter<"ShiftAssignment"> | Date | string
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    requesterShift?: ShiftSwapRequestListRelationFilter
    targetShift?: ShiftSwapRequestListRelationFilter
  }

  export type ShiftAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    start?: SortOrder
    end?: SortOrder
    positionId?: SortOrder
    createdAt?: SortOrder
    employee?: UserOrderByWithRelationInput
    position?: PositionOrderByWithRelationInput
    requesterShift?: ShiftSwapRequestOrderByRelationAggregateInput
    targetShift?: ShiftSwapRequestOrderByRelationAggregateInput
  }

  export type ShiftAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    OR?: ShiftAssignmentWhereInput[]
    NOT?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    userId?: StringFilter<"ShiftAssignment"> | string
    date?: DateTimeFilter<"ShiftAssignment"> | Date | string
    start?: StringFilter<"ShiftAssignment"> | string
    end?: StringFilter<"ShiftAssignment"> | string
    positionId?: StringFilter<"ShiftAssignment"> | string
    createdAt?: DateTimeFilter<"ShiftAssignment"> | Date | string
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    requesterShift?: ShiftSwapRequestListRelationFilter
    targetShift?: ShiftSwapRequestListRelationFilter
  }, "id">

  export type ShiftAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    start?: SortOrder
    end?: SortOrder
    positionId?: SortOrder
    createdAt?: SortOrder
    _count?: ShiftAssignmentCountOrderByAggregateInput
    _max?: ShiftAssignmentMaxOrderByAggregateInput
    _min?: ShiftAssignmentMinOrderByAggregateInput
  }

  export type ShiftAssignmentScalarWhereWithAggregatesInput = {
    AND?: ShiftAssignmentScalarWhereWithAggregatesInput | ShiftAssignmentScalarWhereWithAggregatesInput[]
    OR?: ShiftAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ShiftAssignmentScalarWhereWithAggregatesInput | ShiftAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    userId?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    date?: DateTimeWithAggregatesFilter<"ShiftAssignment"> | Date | string
    start?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    end?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    positionId?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShiftAssignment"> | Date | string
  }

  export type ShiftSwapRequestWhereInput = {
    AND?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    OR?: ShiftSwapRequestWhereInput[]
    NOT?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    id?: StringFilter<"ShiftSwapRequest"> | string
    requesterId?: StringFilter<"ShiftSwapRequest"> | string
    targetId?: StringFilter<"ShiftSwapRequest"> | string
    requesterShiftId?: StringFilter<"ShiftSwapRequest"> | string
    targetShiftId?: StringFilter<"ShiftSwapRequest"> | string
    status?: EnumSwapStatusFilter<"ShiftSwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeFilter<"ShiftSwapRequest"> | Date | string
    requesterUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    requesterShift?: XOR<ShiftAssignmentScalarRelationFilter, ShiftAssignmentWhereInput>
    targetShift?: XOR<ShiftAssignmentScalarRelationFilter, ShiftAssignmentWhereInput>
  }

  export type ShiftSwapRequestOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    requesterShiftId?: SortOrder
    targetShiftId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    requesterUser?: UserOrderByWithRelationInput
    targetUser?: UserOrderByWithRelationInput
    requesterShift?: ShiftAssignmentOrderByWithRelationInput
    targetShift?: ShiftAssignmentOrderByWithRelationInput
  }

  export type ShiftSwapRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    OR?: ShiftSwapRequestWhereInput[]
    NOT?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    requesterId?: StringFilter<"ShiftSwapRequest"> | string
    targetId?: StringFilter<"ShiftSwapRequest"> | string
    requesterShiftId?: StringFilter<"ShiftSwapRequest"> | string
    targetShiftId?: StringFilter<"ShiftSwapRequest"> | string
    status?: EnumSwapStatusFilter<"ShiftSwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeFilter<"ShiftSwapRequest"> | Date | string
    requesterUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    requesterShift?: XOR<ShiftAssignmentScalarRelationFilter, ShiftAssignmentWhereInput>
    targetShift?: XOR<ShiftAssignmentScalarRelationFilter, ShiftAssignmentWhereInput>
  }, "id">

  export type ShiftSwapRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    requesterShiftId?: SortOrder
    targetShiftId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ShiftSwapRequestCountOrderByAggregateInput
    _max?: ShiftSwapRequestMaxOrderByAggregateInput
    _min?: ShiftSwapRequestMinOrderByAggregateInput
  }

  export type ShiftSwapRequestScalarWhereWithAggregatesInput = {
    AND?: ShiftSwapRequestScalarWhereWithAggregatesInput | ShiftSwapRequestScalarWhereWithAggregatesInput[]
    OR?: ShiftSwapRequestScalarWhereWithAggregatesInput[]
    NOT?: ShiftSwapRequestScalarWhereWithAggregatesInput | ShiftSwapRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    requesterId?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    targetId?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    requesterShiftId?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    targetShiftId?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    status?: EnumSwapStatusWithAggregatesFilter<"ShiftSwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeWithAggregatesFilter<"ShiftSwapRequest"> | Date | string
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    name?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    unit?: StringFilter<"InventoryItem"> | string
    locationId?: StringFilter<"InventoryItem"> | string
    lowThreshold?: IntFilter<"InventoryItem"> | number
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    inventoryFlags?: InventoryFlagListRelationFilter
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    locationId?: SortOrder
    lowThreshold?: SortOrder
    updatedAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    inventoryFlags?: InventoryFlagOrderByRelationAggregateInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    name?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    unit?: StringFilter<"InventoryItem"> | string
    locationId?: StringFilter<"InventoryItem"> | string
    lowThreshold?: IntFilter<"InventoryItem"> | number
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    inventoryFlags?: InventoryFlagListRelationFilter
  }, "id">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    locationId?: SortOrder
    lowThreshold?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryItem"> | string
    name?: StringWithAggregatesFilter<"InventoryItem"> | string
    quantity?: IntWithAggregatesFilter<"InventoryItem"> | number
    unit?: StringWithAggregatesFilter<"InventoryItem"> | string
    locationId?: StringWithAggregatesFilter<"InventoryItem"> | string
    lowThreshold?: IntWithAggregatesFilter<"InventoryItem"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
  }

  export type InventoryFlagWhereInput = {
    AND?: InventoryFlagWhereInput | InventoryFlagWhereInput[]
    OR?: InventoryFlagWhereInput[]
    NOT?: InventoryFlagWhereInput | InventoryFlagWhereInput[]
    id?: StringFilter<"InventoryFlag"> | string
    inventoryItemId?: StringFilter<"InventoryFlag"> | string
    userId?: StringFilter<"InventoryFlag"> | string
    note?: StringFilter<"InventoryFlag"> | string
    flagStatus?: EnumFlagStatusFilter<"InventoryFlag"> | $Enums.FlagStatus
    createdAt?: DateTimeFilter<"InventoryFlag"> | Date | string
    inventoryItem?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
    flaggedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InventoryFlagOrderByWithRelationInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    flagStatus?: SortOrder
    createdAt?: SortOrder
    inventoryItem?: InventoryItemOrderByWithRelationInput
    flaggedBy?: UserOrderByWithRelationInput
  }

  export type InventoryFlagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryFlagWhereInput | InventoryFlagWhereInput[]
    OR?: InventoryFlagWhereInput[]
    NOT?: InventoryFlagWhereInput | InventoryFlagWhereInput[]
    inventoryItemId?: StringFilter<"InventoryFlag"> | string
    userId?: StringFilter<"InventoryFlag"> | string
    note?: StringFilter<"InventoryFlag"> | string
    flagStatus?: EnumFlagStatusFilter<"InventoryFlag"> | $Enums.FlagStatus
    createdAt?: DateTimeFilter<"InventoryFlag"> | Date | string
    inventoryItem?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
    flaggedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InventoryFlagOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    flagStatus?: SortOrder
    createdAt?: SortOrder
    _count?: InventoryFlagCountOrderByAggregateInput
    _max?: InventoryFlagMaxOrderByAggregateInput
    _min?: InventoryFlagMinOrderByAggregateInput
  }

  export type InventoryFlagScalarWhereWithAggregatesInput = {
    AND?: InventoryFlagScalarWhereWithAggregatesInput | InventoryFlagScalarWhereWithAggregatesInput[]
    OR?: InventoryFlagScalarWhereWithAggregatesInput[]
    NOT?: InventoryFlagScalarWhereWithAggregatesInput | InventoryFlagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryFlag"> | string
    inventoryItemId?: StringWithAggregatesFilter<"InventoryFlag"> | string
    userId?: StringWithAggregatesFilter<"InventoryFlag"> | string
    note?: StringWithAggregatesFilter<"InventoryFlag"> | string
    flagStatus?: EnumFlagStatusWithAggregatesFilter<"InventoryFlag"> | $Enums.FlagStatus
    createdAt?: DateTimeWithAggregatesFilter<"InventoryFlag"> | Date | string
  }

  export type IssueReportWhereInput = {
    AND?: IssueReportWhereInput | IssueReportWhereInput[]
    OR?: IssueReportWhereInput[]
    NOT?: IssueReportWhereInput | IssueReportWhereInput[]
    id?: StringFilter<"IssueReport"> | string
    userId?: StringFilter<"IssueReport"> | string
    locationId?: StringFilter<"IssueReport"> | string
    resolvedAt?: DateTimeNullableFilter<"IssueReport"> | Date | string | null
    note?: StringFilter<"IssueReport"> | string
    reportStatus?: EnumReportStatusFilter<"IssueReport"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"IssueReport"> | Date | string
    reportBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    atLocation?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type IssueReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    note?: SortOrder
    reportStatus?: SortOrder
    createdAt?: SortOrder
    reportBy?: UserOrderByWithRelationInput
    atLocation?: LocationOrderByWithRelationInput
  }

  export type IssueReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IssueReportWhereInput | IssueReportWhereInput[]
    OR?: IssueReportWhereInput[]
    NOT?: IssueReportWhereInput | IssueReportWhereInput[]
    userId?: StringFilter<"IssueReport"> | string
    locationId?: StringFilter<"IssueReport"> | string
    resolvedAt?: DateTimeNullableFilter<"IssueReport"> | Date | string | null
    note?: StringFilter<"IssueReport"> | string
    reportStatus?: EnumReportStatusFilter<"IssueReport"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"IssueReport"> | Date | string
    reportBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    atLocation?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "id">

  export type IssueReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    note?: SortOrder
    reportStatus?: SortOrder
    createdAt?: SortOrder
    _count?: IssueReportCountOrderByAggregateInput
    _max?: IssueReportMaxOrderByAggregateInput
    _min?: IssueReportMinOrderByAggregateInput
  }

  export type IssueReportScalarWhereWithAggregatesInput = {
    AND?: IssueReportScalarWhereWithAggregatesInput | IssueReportScalarWhereWithAggregatesInput[]
    OR?: IssueReportScalarWhereWithAggregatesInput[]
    NOT?: IssueReportScalarWhereWithAggregatesInput | IssueReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IssueReport"> | string
    userId?: StringWithAggregatesFilter<"IssueReport"> | string
    locationId?: StringWithAggregatesFilter<"IssueReport"> | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"IssueReport"> | Date | string | null
    note?: StringWithAggregatesFilter<"IssueReport"> | string
    reportStatus?: EnumReportStatusWithAggregatesFilter<"IssueReport"> | $Enums.ReportStatus
    createdAt?: DateTimeWithAggregatesFilter<"IssueReport"> | Date | string
  }

  export type RessourceWhereInput = {
    AND?: RessourceWhereInput | RessourceWhereInput[]
    OR?: RessourceWhereInput[]
    NOT?: RessourceWhereInput | RessourceWhereInput[]
    id?: StringFilter<"Ressource"> | string
    userId?: StringFilter<"Ressource"> | string
    locationId?: StringFilter<"Ressource"> | string
    title?: StringFilter<"Ressource"> | string
    content?: StringFilter<"Ressource"> | string
    category?: EnumRessourceTypeFilter<"Ressource"> | $Enums.RessourceType
    createdAt?: DateTimeFilter<"Ressource"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type RessourceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type RessourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RessourceWhereInput | RessourceWhereInput[]
    OR?: RessourceWhereInput[]
    NOT?: RessourceWhereInput | RessourceWhereInput[]
    userId?: StringFilter<"Ressource"> | string
    locationId?: StringFilter<"Ressource"> | string
    title?: StringFilter<"Ressource"> | string
    content?: StringFilter<"Ressource"> | string
    category?: EnumRessourceTypeFilter<"Ressource"> | $Enums.RessourceType
    createdAt?: DateTimeFilter<"Ressource"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "id">

  export type RessourceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    _count?: RessourceCountOrderByAggregateInput
    _max?: RessourceMaxOrderByAggregateInput
    _min?: RessourceMinOrderByAggregateInput
  }

  export type RessourceScalarWhereWithAggregatesInput = {
    AND?: RessourceScalarWhereWithAggregatesInput | RessourceScalarWhereWithAggregatesInput[]
    OR?: RessourceScalarWhereWithAggregatesInput[]
    NOT?: RessourceScalarWhereWithAggregatesInput | RessourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ressource"> | string
    userId?: StringWithAggregatesFilter<"Ressource"> | string
    locationId?: StringWithAggregatesFilter<"Ressource"> | string
    title?: StringWithAggregatesFilter<"Ressource"> | string
    content?: StringWithAggregatesFilter<"Ressource"> | string
    category?: EnumRessourceTypeWithAggregatesFilter<"Ressource"> | $Enums.RessourceType
    createdAt?: DateTimeWithAggregatesFilter<"Ressource"> | Date | string
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    id?: StringFilter<"Position"> | string
    name?: StringFilter<"Position"> | string
    locationId?: StringFilter<"Position"> | string
    atLocation?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    shiftAssignments?: ShiftAssignmentListRelationFilter
  }

  export type PositionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    atLocation?: LocationOrderByWithRelationInput
    shiftAssignments?: ShiftAssignmentOrderByRelationAggregateInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    name?: StringFilter<"Position"> | string
    locationId?: StringFilter<"Position"> | string
    atLocation?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    shiftAssignments?: ShiftAssignmentListRelationFilter
  }, "id">

  export type PositionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Position"> | string
    name?: StringWithAggregatesFilter<"Position"> | string
    locationId?: StringWithAggregatesFilter<"Position"> | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    address: string
    phone: string
    users?: UserLocationCreateNestedManyWithoutLocationInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutLocationInput
    issueReports?: IssueReportCreateNestedManyWithoutAtLocationInput
    ressources?: RessourceCreateNestedManyWithoutLocationInput
    position?: PositionCreateNestedManyWithoutAtLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phone: string
    users?: UserLocationUncheckedCreateNestedManyWithoutLocationInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutLocationInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutAtLocationInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutLocationInput
    position?: PositionUncheckedCreateNestedManyWithoutAtLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    users?: UserLocationUpdateManyWithoutLocationNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutLocationNestedInput
    issueReports?: IssueReportUpdateManyWithoutAtLocationNestedInput
    ressources?: RessourceUpdateManyWithoutLocationNestedInput
    position?: PositionUpdateManyWithoutAtLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    users?: UserLocationUncheckedUpdateManyWithoutLocationNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutLocationNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutAtLocationNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutLocationNestedInput
    position?: PositionUncheckedUpdateManyWithoutAtLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    name: string
    address: string
    phone: string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportCreateNestedManyWithoutReportByInput
    ressources?: RessourceCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagUncheckedCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutReportByInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUncheckedUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    refreshToken: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    refreshToken: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserLocationCreateInput = {
    status: $Enums.Status
    user: UserCreateNestedOneWithoutLocationsInput
    location: LocationCreateNestedOneWithoutUsersInput
  }

  export type UserLocationUncheckedCreateInput = {
    userId: string
    locationId: string
    status: $Enums.Status
  }

  export type UserLocationUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutLocationsNestedInput
    location?: LocationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserLocationUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UserLocationCreateManyInput = {
    userId: string
    locationId: string
    status: $Enums.Status
  }

  export type UserLocationUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UserLocationUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ShiftAssignmentCreateInput = {
    id?: string
    date: Date | string
    start: string
    end: string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutShiftAssignmentsInput
    position: PositionCreateNestedOneWithoutShiftAssignmentsInput
    requesterShift?: ShiftSwapRequestCreateNestedManyWithoutRequesterShiftInput
    targetShift?: ShiftSwapRequestCreateNestedManyWithoutTargetShiftInput
  }

  export type ShiftAssignmentUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    start: string
    end: string
    positionId: string
    createdAt?: Date | string
    requesterShift?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterShiftInput
    targetShift?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetShiftInput
  }

  export type ShiftAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutShiftAssignmentsNestedInput
    position?: PositionUpdateOneRequiredWithoutShiftAssignmentsNestedInput
    requesterShift?: ShiftSwapRequestUpdateManyWithoutRequesterShiftNestedInput
    targetShift?: ShiftSwapRequestUpdateManyWithoutTargetShiftNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterShift?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterShiftNestedInput
    targetShift?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetShiftNestedInput
  }

  export type ShiftAssignmentCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    start: string
    end: string
    positionId: string
    createdAt?: Date | string
  }

  export type ShiftAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestCreateInput = {
    id?: string
    status: $Enums.SwapStatus
    createdAt: Date | string
    requesterUser: UserCreateNestedOneWithoutSwapRequestsSentInput
    targetUser: UserCreateNestedOneWithoutSwapRequestsReceivedInput
    requesterShift: ShiftAssignmentCreateNestedOneWithoutRequesterShiftInput
    targetShift: ShiftAssignmentCreateNestedOneWithoutTargetShiftInput
  }

  export type ShiftSwapRequestUncheckedCreateInput = {
    id?: string
    requesterId: string
    targetId: string
    requesterShiftId: string
    targetShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date | string
  }

  export type ShiftSwapRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterUser?: UserUpdateOneRequiredWithoutSwapRequestsSentNestedInput
    targetUser?: UserUpdateOneRequiredWithoutSwapRequestsReceivedNestedInput
    requesterShift?: ShiftAssignmentUpdateOneRequiredWithoutRequesterShiftNestedInput
    targetShift?: ShiftAssignmentUpdateOneRequiredWithoutTargetShiftNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    requesterShiftId?: StringFieldUpdateOperationsInput | string
    targetShiftId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestCreateManyInput = {
    id?: string
    requesterId: string
    targetId: string
    requesterShiftId: string
    targetShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date | string
  }

  export type ShiftSwapRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    requesterShiftId?: StringFieldUpdateOperationsInput | string
    targetShiftId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemCreateInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    lowThreshold: number
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutInventoryItemsInput
    inventoryFlags?: InventoryFlagCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    locationId: string
    lowThreshold: number
    updatedAt?: Date | string
    inventoryFlags?: InventoryFlagUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    lowThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutInventoryItemsNestedInput
    inventoryFlags?: InventoryFlagUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    lowThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryFlags?: InventoryFlagUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemCreateManyInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    locationId: string
    lowThreshold: number
    updatedAt?: Date | string
  }

  export type InventoryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    lowThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    lowThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryFlagCreateInput = {
    id?: string
    note: string
    flagStatus: $Enums.FlagStatus
    createdAt: Date | string
    inventoryItem: InventoryItemCreateNestedOneWithoutInventoryFlagsInput
    flaggedBy: UserCreateNestedOneWithoutInventoryFlagsInput
  }

  export type InventoryFlagUncheckedCreateInput = {
    id?: string
    inventoryItemId: string
    userId: string
    note: string
    flagStatus: $Enums.FlagStatus
    createdAt: Date | string
  }

  export type InventoryFlagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    flagStatus?: EnumFlagStatusFieldUpdateOperationsInput | $Enums.FlagStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutInventoryFlagsNestedInput
    flaggedBy?: UserUpdateOneRequiredWithoutInventoryFlagsNestedInput
  }

  export type InventoryFlagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    flagStatus?: EnumFlagStatusFieldUpdateOperationsInput | $Enums.FlagStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryFlagCreateManyInput = {
    id?: string
    inventoryItemId: string
    userId: string
    note: string
    flagStatus: $Enums.FlagStatus
    createdAt: Date | string
  }

  export type InventoryFlagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    flagStatus?: EnumFlagStatusFieldUpdateOperationsInput | $Enums.FlagStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryFlagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    flagStatus?: EnumFlagStatusFieldUpdateOperationsInput | $Enums.FlagStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueReportCreateInput = {
    id?: string
    resolvedAt?: Date | string | null
    note: string
    reportStatus: $Enums.ReportStatus
    createdAt?: Date | string
    reportBy: UserCreateNestedOneWithoutIssueReportsInput
    atLocation: LocationCreateNestedOneWithoutIssueReportsInput
  }

  export type IssueReportUncheckedCreateInput = {
    id?: string
    userId: string
    locationId: string
    resolvedAt?: Date | string | null
    note: string
    reportStatus: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type IssueReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    reportStatus?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportBy?: UserUpdateOneRequiredWithoutIssueReportsNestedInput
    atLocation?: LocationUpdateOneRequiredWithoutIssueReportsNestedInput
  }

  export type IssueReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    reportStatus?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueReportCreateManyInput = {
    id?: string
    userId: string
    locationId: string
    resolvedAt?: Date | string | null
    note: string
    reportStatus: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type IssueReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    reportStatus?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    reportStatus?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceCreateInput = {
    id?: string
    title: string
    content: string
    category: $Enums.RessourceType
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutRessourcesInput
    location: LocationCreateNestedOneWithoutRessourcesInput
  }

  export type RessourceUncheckedCreateInput = {
    id?: string
    userId: string
    locationId: string
    title: string
    content: string
    category: $Enums.RessourceType
    createdAt?: Date | string
  }

  export type RessourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumRessourceTypeFieldUpdateOperationsInput | $Enums.RessourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutRessourcesNestedInput
    location?: LocationUpdateOneRequiredWithoutRessourcesNestedInput
  }

  export type RessourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumRessourceTypeFieldUpdateOperationsInput | $Enums.RessourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceCreateManyInput = {
    id?: string
    userId: string
    locationId: string
    title: string
    content: string
    category: $Enums.RessourceType
    createdAt?: Date | string
  }

  export type RessourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumRessourceTypeFieldUpdateOperationsInput | $Enums.RessourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumRessourceTypeFieldUpdateOperationsInput | $Enums.RessourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionCreateInput = {
    id?: string
    name: string
    atLocation: LocationCreateNestedOneWithoutPositionInput
    shiftAssignments?: ShiftAssignmentCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateInput = {
    id?: string
    name: string
    locationId: string
    shiftAssignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    atLocation?: LocationUpdateOneRequiredWithoutPositionNestedInput
    shiftAssignments?: ShiftAssignmentUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    shiftAssignments?: ShiftAssignmentUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    id?: string
    name: string
    locationId: string
  }

  export type PositionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PositionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserLocationListRelationFilter = {
    every?: UserLocationWhereInput
    some?: UserLocationWhereInput
    none?: UserLocationWhereInput
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type IssueReportListRelationFilter = {
    every?: IssueReportWhereInput
    some?: IssueReportWhereInput
    none?: IssueReportWhereInput
  }

  export type RessourceListRelationFilter = {
    every?: RessourceWhereInput
    some?: RessourceWhereInput
    none?: RessourceWhereInput
  }

  export type PositionListRelationFilter = {
    every?: PositionWhereInput
    some?: PositionWhereInput
    none?: PositionWhereInput
  }

  export type UserLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssueReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RessourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShiftAssignmentListRelationFilter = {
    every?: ShiftAssignmentWhereInput
    some?: ShiftAssignmentWhereInput
    none?: ShiftAssignmentWhereInput
  }

  export type ShiftSwapRequestListRelationFilter = {
    every?: ShiftSwapRequestWhereInput
    some?: ShiftSwapRequestWhereInput
    none?: ShiftSwapRequestWhereInput
  }

  export type InventoryFlagListRelationFilter = {
    every?: InventoryFlagWhereInput
    some?: InventoryFlagWhereInput
    none?: InventoryFlagWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type ShiftAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftSwapRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryFlagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type UserLocationUserIdLocationIdCompoundUniqueInput = {
    userId: string
    locationId: string
  }

  export type UserLocationCountOrderByAggregateInput = {
    userId?: SortOrder
    locationId?: SortOrder
    status?: SortOrder
  }

  export type UserLocationMaxOrderByAggregateInput = {
    userId?: SortOrder
    locationId?: SortOrder
    status?: SortOrder
  }

  export type UserLocationMinOrderByAggregateInput = {
    userId?: SortOrder
    locationId?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type PositionScalarRelationFilter = {
    is?: PositionWhereInput
    isNot?: PositionWhereInput
  }

  export type ShiftAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    start?: SortOrder
    end?: SortOrder
    positionId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    start?: SortOrder
    end?: SortOrder
    positionId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    start?: SortOrder
    end?: SortOrder
    positionId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSwapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSwapStatusFilter<$PrismaModel> | $Enums.SwapStatus
  }

  export type ShiftAssignmentScalarRelationFilter = {
    is?: ShiftAssignmentWhereInput
    isNot?: ShiftAssignmentWhereInput
  }

  export type ShiftSwapRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    requesterShiftId?: SortOrder
    targetShiftId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftSwapRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    requesterShiftId?: SortOrder
    targetShiftId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftSwapRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    requesterShiftId?: SortOrder
    targetShiftId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSwapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel> | $Enums.SwapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwapStatusFilter<$PrismaModel>
    _max?: NestedEnumSwapStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    locationId?: SortOrder
    lowThreshold?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    lowThreshold?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    locationId?: SortOrder
    lowThreshold?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    locationId?: SortOrder
    lowThreshold?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    lowThreshold?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumFlagStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlagStatus | EnumFlagStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlagStatus[] | ListEnumFlagStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlagStatus[] | ListEnumFlagStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlagStatusFilter<$PrismaModel> | $Enums.FlagStatus
  }

  export type InventoryItemScalarRelationFilter = {
    is?: InventoryItemWhereInput
    isNot?: InventoryItemWhereInput
  }

  export type InventoryFlagCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    flagStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryFlagMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    flagStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryFlagMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    flagStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFlagStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlagStatus | EnumFlagStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlagStatus[] | ListEnumFlagStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlagStatus[] | ListEnumFlagStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlagStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlagStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlagStatusFilter<$PrismaModel>
    _max?: NestedEnumFlagStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IssueReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    resolvedAt?: SortOrder
    note?: SortOrder
    reportStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type IssueReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    resolvedAt?: SortOrder
    note?: SortOrder
    reportStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type IssueReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    resolvedAt?: SortOrder
    note?: SortOrder
    reportStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type EnumRessourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RessourceType | EnumRessourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RessourceType[] | ListEnumRessourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RessourceType[] | ListEnumRessourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRessourceTypeFilter<$PrismaModel> | $Enums.RessourceType
  }

  export type RessourceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type RessourceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type RessourceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRessourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RessourceType | EnumRessourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RessourceType[] | ListEnumRessourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RessourceType[] | ListEnumRessourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRessourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.RessourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRessourceTypeFilter<$PrismaModel>
    _max?: NestedEnumRessourceTypeFilter<$PrismaModel>
  }

  export type PositionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
  }

  export type UserLocationCreateNestedManyWithoutLocationInput = {
    create?: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput> | UserLocationCreateWithoutLocationInput[] | UserLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutLocationInput | UserLocationCreateOrConnectWithoutLocationInput[]
    createMany?: UserLocationCreateManyLocationInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type InventoryItemCreateNestedManyWithoutLocationInput = {
    create?: XOR<InventoryItemCreateWithoutLocationInput, InventoryItemUncheckedCreateWithoutLocationInput> | InventoryItemCreateWithoutLocationInput[] | InventoryItemUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutLocationInput | InventoryItemCreateOrConnectWithoutLocationInput[]
    createMany?: InventoryItemCreateManyLocationInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type IssueReportCreateNestedManyWithoutAtLocationInput = {
    create?: XOR<IssueReportCreateWithoutAtLocationInput, IssueReportUncheckedCreateWithoutAtLocationInput> | IssueReportCreateWithoutAtLocationInput[] | IssueReportUncheckedCreateWithoutAtLocationInput[]
    connectOrCreate?: IssueReportCreateOrConnectWithoutAtLocationInput | IssueReportCreateOrConnectWithoutAtLocationInput[]
    createMany?: IssueReportCreateManyAtLocationInputEnvelope
    connect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
  }

  export type RessourceCreateNestedManyWithoutLocationInput = {
    create?: XOR<RessourceCreateWithoutLocationInput, RessourceUncheckedCreateWithoutLocationInput> | RessourceCreateWithoutLocationInput[] | RessourceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutLocationInput | RessourceCreateOrConnectWithoutLocationInput[]
    createMany?: RessourceCreateManyLocationInputEnvelope
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
  }

  export type PositionCreateNestedManyWithoutAtLocationInput = {
    create?: XOR<PositionCreateWithoutAtLocationInput, PositionUncheckedCreateWithoutAtLocationInput> | PositionCreateWithoutAtLocationInput[] | PositionUncheckedCreateWithoutAtLocationInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutAtLocationInput | PositionCreateOrConnectWithoutAtLocationInput[]
    createMany?: PositionCreateManyAtLocationInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type UserLocationUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput> | UserLocationCreateWithoutLocationInput[] | UserLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutLocationInput | UserLocationCreateOrConnectWithoutLocationInput[]
    createMany?: UserLocationCreateManyLocationInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<InventoryItemCreateWithoutLocationInput, InventoryItemUncheckedCreateWithoutLocationInput> | InventoryItemCreateWithoutLocationInput[] | InventoryItemUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutLocationInput | InventoryItemCreateOrConnectWithoutLocationInput[]
    createMany?: InventoryItemCreateManyLocationInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type IssueReportUncheckedCreateNestedManyWithoutAtLocationInput = {
    create?: XOR<IssueReportCreateWithoutAtLocationInput, IssueReportUncheckedCreateWithoutAtLocationInput> | IssueReportCreateWithoutAtLocationInput[] | IssueReportUncheckedCreateWithoutAtLocationInput[]
    connectOrCreate?: IssueReportCreateOrConnectWithoutAtLocationInput | IssueReportCreateOrConnectWithoutAtLocationInput[]
    createMany?: IssueReportCreateManyAtLocationInputEnvelope
    connect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
  }

  export type RessourceUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<RessourceCreateWithoutLocationInput, RessourceUncheckedCreateWithoutLocationInput> | RessourceCreateWithoutLocationInput[] | RessourceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutLocationInput | RessourceCreateOrConnectWithoutLocationInput[]
    createMany?: RessourceCreateManyLocationInputEnvelope
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
  }

  export type PositionUncheckedCreateNestedManyWithoutAtLocationInput = {
    create?: XOR<PositionCreateWithoutAtLocationInput, PositionUncheckedCreateWithoutAtLocationInput> | PositionCreateWithoutAtLocationInput[] | PositionUncheckedCreateWithoutAtLocationInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutAtLocationInput | PositionCreateOrConnectWithoutAtLocationInput[]
    createMany?: PositionCreateManyAtLocationInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserLocationUpdateManyWithoutLocationNestedInput = {
    create?: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput> | UserLocationCreateWithoutLocationInput[] | UserLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutLocationInput | UserLocationCreateOrConnectWithoutLocationInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutLocationInput | UserLocationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: UserLocationCreateManyLocationInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutLocationInput | UserLocationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutLocationInput | UserLocationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type InventoryItemUpdateManyWithoutLocationNestedInput = {
    create?: XOR<InventoryItemCreateWithoutLocationInput, InventoryItemUncheckedCreateWithoutLocationInput> | InventoryItemCreateWithoutLocationInput[] | InventoryItemUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutLocationInput | InventoryItemCreateOrConnectWithoutLocationInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutLocationInput | InventoryItemUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: InventoryItemCreateManyLocationInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutLocationInput | InventoryItemUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutLocationInput | InventoryItemUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type IssueReportUpdateManyWithoutAtLocationNestedInput = {
    create?: XOR<IssueReportCreateWithoutAtLocationInput, IssueReportUncheckedCreateWithoutAtLocationInput> | IssueReportCreateWithoutAtLocationInput[] | IssueReportUncheckedCreateWithoutAtLocationInput[]
    connectOrCreate?: IssueReportCreateOrConnectWithoutAtLocationInput | IssueReportCreateOrConnectWithoutAtLocationInput[]
    upsert?: IssueReportUpsertWithWhereUniqueWithoutAtLocationInput | IssueReportUpsertWithWhereUniqueWithoutAtLocationInput[]
    createMany?: IssueReportCreateManyAtLocationInputEnvelope
    set?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    disconnect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    delete?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    connect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    update?: IssueReportUpdateWithWhereUniqueWithoutAtLocationInput | IssueReportUpdateWithWhereUniqueWithoutAtLocationInput[]
    updateMany?: IssueReportUpdateManyWithWhereWithoutAtLocationInput | IssueReportUpdateManyWithWhereWithoutAtLocationInput[]
    deleteMany?: IssueReportScalarWhereInput | IssueReportScalarWhereInput[]
  }

  export type RessourceUpdateManyWithoutLocationNestedInput = {
    create?: XOR<RessourceCreateWithoutLocationInput, RessourceUncheckedCreateWithoutLocationInput> | RessourceCreateWithoutLocationInput[] | RessourceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutLocationInput | RessourceCreateOrConnectWithoutLocationInput[]
    upsert?: RessourceUpsertWithWhereUniqueWithoutLocationInput | RessourceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: RessourceCreateManyLocationInputEnvelope
    set?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    disconnect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    delete?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    update?: RessourceUpdateWithWhereUniqueWithoutLocationInput | RessourceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: RessourceUpdateManyWithWhereWithoutLocationInput | RessourceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
  }

  export type PositionUpdateManyWithoutAtLocationNestedInput = {
    create?: XOR<PositionCreateWithoutAtLocationInput, PositionUncheckedCreateWithoutAtLocationInput> | PositionCreateWithoutAtLocationInput[] | PositionUncheckedCreateWithoutAtLocationInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutAtLocationInput | PositionCreateOrConnectWithoutAtLocationInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutAtLocationInput | PositionUpsertWithWhereUniqueWithoutAtLocationInput[]
    createMany?: PositionCreateManyAtLocationInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutAtLocationInput | PositionUpdateWithWhereUniqueWithoutAtLocationInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutAtLocationInput | PositionUpdateManyWithWhereWithoutAtLocationInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type UserLocationUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput> | UserLocationCreateWithoutLocationInput[] | UserLocationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutLocationInput | UserLocationCreateOrConnectWithoutLocationInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutLocationInput | UserLocationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: UserLocationCreateManyLocationInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutLocationInput | UserLocationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutLocationInput | UserLocationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<InventoryItemCreateWithoutLocationInput, InventoryItemUncheckedCreateWithoutLocationInput> | InventoryItemCreateWithoutLocationInput[] | InventoryItemUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutLocationInput | InventoryItemCreateOrConnectWithoutLocationInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutLocationInput | InventoryItemUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: InventoryItemCreateManyLocationInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutLocationInput | InventoryItemUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutLocationInput | InventoryItemUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type IssueReportUncheckedUpdateManyWithoutAtLocationNestedInput = {
    create?: XOR<IssueReportCreateWithoutAtLocationInput, IssueReportUncheckedCreateWithoutAtLocationInput> | IssueReportCreateWithoutAtLocationInput[] | IssueReportUncheckedCreateWithoutAtLocationInput[]
    connectOrCreate?: IssueReportCreateOrConnectWithoutAtLocationInput | IssueReportCreateOrConnectWithoutAtLocationInput[]
    upsert?: IssueReportUpsertWithWhereUniqueWithoutAtLocationInput | IssueReportUpsertWithWhereUniqueWithoutAtLocationInput[]
    createMany?: IssueReportCreateManyAtLocationInputEnvelope
    set?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    disconnect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    delete?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    connect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    update?: IssueReportUpdateWithWhereUniqueWithoutAtLocationInput | IssueReportUpdateWithWhereUniqueWithoutAtLocationInput[]
    updateMany?: IssueReportUpdateManyWithWhereWithoutAtLocationInput | IssueReportUpdateManyWithWhereWithoutAtLocationInput[]
    deleteMany?: IssueReportScalarWhereInput | IssueReportScalarWhereInput[]
  }

  export type RessourceUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<RessourceCreateWithoutLocationInput, RessourceUncheckedCreateWithoutLocationInput> | RessourceCreateWithoutLocationInput[] | RessourceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutLocationInput | RessourceCreateOrConnectWithoutLocationInput[]
    upsert?: RessourceUpsertWithWhereUniqueWithoutLocationInput | RessourceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: RessourceCreateManyLocationInputEnvelope
    set?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    disconnect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    delete?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    update?: RessourceUpdateWithWhereUniqueWithoutLocationInput | RessourceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: RessourceUpdateManyWithWhereWithoutLocationInput | RessourceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
  }

  export type PositionUncheckedUpdateManyWithoutAtLocationNestedInput = {
    create?: XOR<PositionCreateWithoutAtLocationInput, PositionUncheckedCreateWithoutAtLocationInput> | PositionCreateWithoutAtLocationInput[] | PositionUncheckedCreateWithoutAtLocationInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutAtLocationInput | PositionCreateOrConnectWithoutAtLocationInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutAtLocationInput | PositionUpsertWithWhereUniqueWithoutAtLocationInput[]
    createMany?: PositionCreateManyAtLocationInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutAtLocationInput | PositionUpdateWithWhereUniqueWithoutAtLocationInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutAtLocationInput | PositionUpdateManyWithWhereWithoutAtLocationInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type ShiftAssignmentCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ShiftAssignmentCreateWithoutEmployeeInput, ShiftAssignmentUncheckedCreateWithoutEmployeeInput> | ShiftAssignmentCreateWithoutEmployeeInput[] | ShiftAssignmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutEmployeeInput | ShiftAssignmentCreateOrConnectWithoutEmployeeInput[]
    createMany?: ShiftAssignmentCreateManyEmployeeInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type UserLocationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type ShiftSwapRequestCreateNestedManyWithoutRequesterUserInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutRequesterUserInput, ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput> | ShiftSwapRequestCreateWithoutRequesterUserInput[] | ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutRequesterUserInput | ShiftSwapRequestCreateOrConnectWithoutRequesterUserInput[]
    createMany?: ShiftSwapRequestCreateManyRequesterUserInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftSwapRequestCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutTargetUserInput, ShiftSwapRequestUncheckedCreateWithoutTargetUserInput> | ShiftSwapRequestCreateWithoutTargetUserInput[] | ShiftSwapRequestUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutTargetUserInput | ShiftSwapRequestCreateOrConnectWithoutTargetUserInput[]
    createMany?: ShiftSwapRequestCreateManyTargetUserInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type InventoryFlagCreateNestedManyWithoutFlaggedByInput = {
    create?: XOR<InventoryFlagCreateWithoutFlaggedByInput, InventoryFlagUncheckedCreateWithoutFlaggedByInput> | InventoryFlagCreateWithoutFlaggedByInput[] | InventoryFlagUncheckedCreateWithoutFlaggedByInput[]
    connectOrCreate?: InventoryFlagCreateOrConnectWithoutFlaggedByInput | InventoryFlagCreateOrConnectWithoutFlaggedByInput[]
    createMany?: InventoryFlagCreateManyFlaggedByInputEnvelope
    connect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
  }

  export type IssueReportCreateNestedManyWithoutReportByInput = {
    create?: XOR<IssueReportCreateWithoutReportByInput, IssueReportUncheckedCreateWithoutReportByInput> | IssueReportCreateWithoutReportByInput[] | IssueReportUncheckedCreateWithoutReportByInput[]
    connectOrCreate?: IssueReportCreateOrConnectWithoutReportByInput | IssueReportCreateOrConnectWithoutReportByInput[]
    createMany?: IssueReportCreateManyReportByInputEnvelope
    connect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
  }

  export type RessourceCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RessourceCreateWithoutCreatedByInput, RessourceUncheckedCreateWithoutCreatedByInput> | RessourceCreateWithoutCreatedByInput[] | RessourceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutCreatedByInput | RessourceCreateOrConnectWithoutCreatedByInput[]
    createMany?: RessourceCreateManyCreatedByInputEnvelope
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ShiftAssignmentCreateWithoutEmployeeInput, ShiftAssignmentUncheckedCreateWithoutEmployeeInput> | ShiftAssignmentCreateWithoutEmployeeInput[] | ShiftAssignmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutEmployeeInput | ShiftAssignmentCreateOrConnectWithoutEmployeeInput[]
    createMany?: ShiftAssignmentCreateManyEmployeeInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type UserLocationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterUserInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutRequesterUserInput, ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput> | ShiftSwapRequestCreateWithoutRequesterUserInput[] | ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutRequesterUserInput | ShiftSwapRequestCreateOrConnectWithoutRequesterUserInput[]
    createMany?: ShiftSwapRequestCreateManyRequesterUserInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutTargetUserInput, ShiftSwapRequestUncheckedCreateWithoutTargetUserInput> | ShiftSwapRequestCreateWithoutTargetUserInput[] | ShiftSwapRequestUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutTargetUserInput | ShiftSwapRequestCreateOrConnectWithoutTargetUserInput[]
    createMany?: ShiftSwapRequestCreateManyTargetUserInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type InventoryFlagUncheckedCreateNestedManyWithoutFlaggedByInput = {
    create?: XOR<InventoryFlagCreateWithoutFlaggedByInput, InventoryFlagUncheckedCreateWithoutFlaggedByInput> | InventoryFlagCreateWithoutFlaggedByInput[] | InventoryFlagUncheckedCreateWithoutFlaggedByInput[]
    connectOrCreate?: InventoryFlagCreateOrConnectWithoutFlaggedByInput | InventoryFlagCreateOrConnectWithoutFlaggedByInput[]
    createMany?: InventoryFlagCreateManyFlaggedByInputEnvelope
    connect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
  }

  export type IssueReportUncheckedCreateNestedManyWithoutReportByInput = {
    create?: XOR<IssueReportCreateWithoutReportByInput, IssueReportUncheckedCreateWithoutReportByInput> | IssueReportCreateWithoutReportByInput[] | IssueReportUncheckedCreateWithoutReportByInput[]
    connectOrCreate?: IssueReportCreateOrConnectWithoutReportByInput | IssueReportCreateOrConnectWithoutReportByInput[]
    createMany?: IssueReportCreateManyReportByInputEnvelope
    connect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
  }

  export type RessourceUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RessourceCreateWithoutCreatedByInput, RessourceUncheckedCreateWithoutCreatedByInput> | RessourceCreateWithoutCreatedByInput[] | RessourceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutCreatedByInput | RessourceCreateOrConnectWithoutCreatedByInput[]
    createMany?: RessourceCreateManyCreatedByInputEnvelope
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShiftAssignmentUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutEmployeeInput, ShiftAssignmentUncheckedCreateWithoutEmployeeInput> | ShiftAssignmentCreateWithoutEmployeeInput[] | ShiftAssignmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutEmployeeInput | ShiftAssignmentCreateOrConnectWithoutEmployeeInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutEmployeeInput | ShiftAssignmentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ShiftAssignmentCreateManyEmployeeInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutEmployeeInput | ShiftAssignmentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutEmployeeInput | ShiftAssignmentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type UserLocationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutUserInput | UserLocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutUserInput | UserLocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutUserInput | UserLocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type ShiftSwapRequestUpdateManyWithoutRequesterUserNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutRequesterUserInput, ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput> | ShiftSwapRequestCreateWithoutRequesterUserInput[] | ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutRequesterUserInput | ShiftSwapRequestCreateOrConnectWithoutRequesterUserInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutRequesterUserInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutRequesterUserInput[]
    createMany?: ShiftSwapRequestCreateManyRequesterUserInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutRequesterUserInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutRequesterUserInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutRequesterUserInput | ShiftSwapRequestUpdateManyWithWhereWithoutRequesterUserInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftSwapRequestUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutTargetUserInput, ShiftSwapRequestUncheckedCreateWithoutTargetUserInput> | ShiftSwapRequestCreateWithoutTargetUserInput[] | ShiftSwapRequestUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutTargetUserInput | ShiftSwapRequestCreateOrConnectWithoutTargetUserInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutTargetUserInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: ShiftSwapRequestCreateManyTargetUserInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutTargetUserInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutTargetUserInput | ShiftSwapRequestUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type InventoryFlagUpdateManyWithoutFlaggedByNestedInput = {
    create?: XOR<InventoryFlagCreateWithoutFlaggedByInput, InventoryFlagUncheckedCreateWithoutFlaggedByInput> | InventoryFlagCreateWithoutFlaggedByInput[] | InventoryFlagUncheckedCreateWithoutFlaggedByInput[]
    connectOrCreate?: InventoryFlagCreateOrConnectWithoutFlaggedByInput | InventoryFlagCreateOrConnectWithoutFlaggedByInput[]
    upsert?: InventoryFlagUpsertWithWhereUniqueWithoutFlaggedByInput | InventoryFlagUpsertWithWhereUniqueWithoutFlaggedByInput[]
    createMany?: InventoryFlagCreateManyFlaggedByInputEnvelope
    set?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    disconnect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    delete?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    connect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    update?: InventoryFlagUpdateWithWhereUniqueWithoutFlaggedByInput | InventoryFlagUpdateWithWhereUniqueWithoutFlaggedByInput[]
    updateMany?: InventoryFlagUpdateManyWithWhereWithoutFlaggedByInput | InventoryFlagUpdateManyWithWhereWithoutFlaggedByInput[]
    deleteMany?: InventoryFlagScalarWhereInput | InventoryFlagScalarWhereInput[]
  }

  export type IssueReportUpdateManyWithoutReportByNestedInput = {
    create?: XOR<IssueReportCreateWithoutReportByInput, IssueReportUncheckedCreateWithoutReportByInput> | IssueReportCreateWithoutReportByInput[] | IssueReportUncheckedCreateWithoutReportByInput[]
    connectOrCreate?: IssueReportCreateOrConnectWithoutReportByInput | IssueReportCreateOrConnectWithoutReportByInput[]
    upsert?: IssueReportUpsertWithWhereUniqueWithoutReportByInput | IssueReportUpsertWithWhereUniqueWithoutReportByInput[]
    createMany?: IssueReportCreateManyReportByInputEnvelope
    set?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    disconnect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    delete?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    connect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    update?: IssueReportUpdateWithWhereUniqueWithoutReportByInput | IssueReportUpdateWithWhereUniqueWithoutReportByInput[]
    updateMany?: IssueReportUpdateManyWithWhereWithoutReportByInput | IssueReportUpdateManyWithWhereWithoutReportByInput[]
    deleteMany?: IssueReportScalarWhereInput | IssueReportScalarWhereInput[]
  }

  export type RessourceUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RessourceCreateWithoutCreatedByInput, RessourceUncheckedCreateWithoutCreatedByInput> | RessourceCreateWithoutCreatedByInput[] | RessourceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutCreatedByInput | RessourceCreateOrConnectWithoutCreatedByInput[]
    upsert?: RessourceUpsertWithWhereUniqueWithoutCreatedByInput | RessourceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RessourceCreateManyCreatedByInputEnvelope
    set?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    disconnect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    delete?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    update?: RessourceUpdateWithWhereUniqueWithoutCreatedByInput | RessourceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RessourceUpdateManyWithWhereWithoutCreatedByInput | RessourceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutEmployeeInput, ShiftAssignmentUncheckedCreateWithoutEmployeeInput> | ShiftAssignmentCreateWithoutEmployeeInput[] | ShiftAssignmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutEmployeeInput | ShiftAssignmentCreateOrConnectWithoutEmployeeInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutEmployeeInput | ShiftAssignmentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ShiftAssignmentCreateManyEmployeeInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutEmployeeInput | ShiftAssignmentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutEmployeeInput | ShiftAssignmentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type UserLocationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutUserInput | UserLocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutUserInput | UserLocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutUserInput | UserLocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutRequesterUserInput, ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput> | ShiftSwapRequestCreateWithoutRequesterUserInput[] | ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutRequesterUserInput | ShiftSwapRequestCreateOrConnectWithoutRequesterUserInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutRequesterUserInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutRequesterUserInput[]
    createMany?: ShiftSwapRequestCreateManyRequesterUserInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutRequesterUserInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutRequesterUserInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutRequesterUserInput | ShiftSwapRequestUpdateManyWithWhereWithoutRequesterUserInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutTargetUserInput, ShiftSwapRequestUncheckedCreateWithoutTargetUserInput> | ShiftSwapRequestCreateWithoutTargetUserInput[] | ShiftSwapRequestUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutTargetUserInput | ShiftSwapRequestCreateOrConnectWithoutTargetUserInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutTargetUserInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: ShiftSwapRequestCreateManyTargetUserInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutTargetUserInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutTargetUserInput | ShiftSwapRequestUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type InventoryFlagUncheckedUpdateManyWithoutFlaggedByNestedInput = {
    create?: XOR<InventoryFlagCreateWithoutFlaggedByInput, InventoryFlagUncheckedCreateWithoutFlaggedByInput> | InventoryFlagCreateWithoutFlaggedByInput[] | InventoryFlagUncheckedCreateWithoutFlaggedByInput[]
    connectOrCreate?: InventoryFlagCreateOrConnectWithoutFlaggedByInput | InventoryFlagCreateOrConnectWithoutFlaggedByInput[]
    upsert?: InventoryFlagUpsertWithWhereUniqueWithoutFlaggedByInput | InventoryFlagUpsertWithWhereUniqueWithoutFlaggedByInput[]
    createMany?: InventoryFlagCreateManyFlaggedByInputEnvelope
    set?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    disconnect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    delete?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    connect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    update?: InventoryFlagUpdateWithWhereUniqueWithoutFlaggedByInput | InventoryFlagUpdateWithWhereUniqueWithoutFlaggedByInput[]
    updateMany?: InventoryFlagUpdateManyWithWhereWithoutFlaggedByInput | InventoryFlagUpdateManyWithWhereWithoutFlaggedByInput[]
    deleteMany?: InventoryFlagScalarWhereInput | InventoryFlagScalarWhereInput[]
  }

  export type IssueReportUncheckedUpdateManyWithoutReportByNestedInput = {
    create?: XOR<IssueReportCreateWithoutReportByInput, IssueReportUncheckedCreateWithoutReportByInput> | IssueReportCreateWithoutReportByInput[] | IssueReportUncheckedCreateWithoutReportByInput[]
    connectOrCreate?: IssueReportCreateOrConnectWithoutReportByInput | IssueReportCreateOrConnectWithoutReportByInput[]
    upsert?: IssueReportUpsertWithWhereUniqueWithoutReportByInput | IssueReportUpsertWithWhereUniqueWithoutReportByInput[]
    createMany?: IssueReportCreateManyReportByInputEnvelope
    set?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    disconnect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    delete?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    connect?: IssueReportWhereUniqueInput | IssueReportWhereUniqueInput[]
    update?: IssueReportUpdateWithWhereUniqueWithoutReportByInput | IssueReportUpdateWithWhereUniqueWithoutReportByInput[]
    updateMany?: IssueReportUpdateManyWithWhereWithoutReportByInput | IssueReportUpdateManyWithWhereWithoutReportByInput[]
    deleteMany?: IssueReportScalarWhereInput | IssueReportScalarWhereInput[]
  }

  export type RessourceUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RessourceCreateWithoutCreatedByInput, RessourceUncheckedCreateWithoutCreatedByInput> | RessourceCreateWithoutCreatedByInput[] | RessourceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RessourceCreateOrConnectWithoutCreatedByInput | RessourceCreateOrConnectWithoutCreatedByInput[]
    upsert?: RessourceUpsertWithWhereUniqueWithoutCreatedByInput | RessourceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RessourceCreateManyCreatedByInputEnvelope
    set?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    disconnect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    delete?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    connect?: RessourceWhereUniqueInput | RessourceWhereUniqueInput[]
    update?: RessourceUpdateWithWhereUniqueWithoutCreatedByInput | RessourceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RessourceUpdateManyWithWhereWithoutCreatedByInput | RessourceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutLocationsInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutUsersInput = {
    create?: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUsersInput
    connect?: LocationWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    upsert?: UserUpsertWithoutLocationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationsInput, UserUpdateWithoutLocationsInput>, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type LocationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUsersInput
    upsert?: LocationUpsertWithoutUsersInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutUsersInput, LocationUpdateWithoutUsersInput>, LocationUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutShiftAssignmentsInput = {
    create?: XOR<UserCreateWithoutShiftAssignmentsInput, UserUncheckedCreateWithoutShiftAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutShiftAssignmentsInput = {
    create?: XOR<PositionCreateWithoutShiftAssignmentsInput, PositionUncheckedCreateWithoutShiftAssignmentsInput>
    connectOrCreate?: PositionCreateOrConnectWithoutShiftAssignmentsInput
    connect?: PositionWhereUniqueInput
  }

  export type ShiftSwapRequestCreateNestedManyWithoutRequesterShiftInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutRequesterShiftInput, ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput> | ShiftSwapRequestCreateWithoutRequesterShiftInput[] | ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutRequesterShiftInput | ShiftSwapRequestCreateOrConnectWithoutRequesterShiftInput[]
    createMany?: ShiftSwapRequestCreateManyRequesterShiftInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftSwapRequestCreateNestedManyWithoutTargetShiftInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutTargetShiftInput, ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput> | ShiftSwapRequestCreateWithoutTargetShiftInput[] | ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutTargetShiftInput | ShiftSwapRequestCreateOrConnectWithoutTargetShiftInput[]
    createMany?: ShiftSwapRequestCreateManyTargetShiftInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterShiftInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutRequesterShiftInput, ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput> | ShiftSwapRequestCreateWithoutRequesterShiftInput[] | ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutRequesterShiftInput | ShiftSwapRequestCreateOrConnectWithoutRequesterShiftInput[]
    createMany?: ShiftSwapRequestCreateManyRequesterShiftInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetShiftInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutTargetShiftInput, ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput> | ShiftSwapRequestCreateWithoutTargetShiftInput[] | ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutTargetShiftInput | ShiftSwapRequestCreateOrConnectWithoutTargetShiftInput[]
    createMany?: ShiftSwapRequestCreateManyTargetShiftInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutShiftAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutShiftAssignmentsInput, UserUncheckedCreateWithoutShiftAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftAssignmentsInput
    upsert?: UserUpsertWithoutShiftAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShiftAssignmentsInput, UserUpdateWithoutShiftAssignmentsInput>, UserUncheckedUpdateWithoutShiftAssignmentsInput>
  }

  export type PositionUpdateOneRequiredWithoutShiftAssignmentsNestedInput = {
    create?: XOR<PositionCreateWithoutShiftAssignmentsInput, PositionUncheckedCreateWithoutShiftAssignmentsInput>
    connectOrCreate?: PositionCreateOrConnectWithoutShiftAssignmentsInput
    upsert?: PositionUpsertWithoutShiftAssignmentsInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutShiftAssignmentsInput, PositionUpdateWithoutShiftAssignmentsInput>, PositionUncheckedUpdateWithoutShiftAssignmentsInput>
  }

  export type ShiftSwapRequestUpdateManyWithoutRequesterShiftNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutRequesterShiftInput, ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput> | ShiftSwapRequestCreateWithoutRequesterShiftInput[] | ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutRequesterShiftInput | ShiftSwapRequestCreateOrConnectWithoutRequesterShiftInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutRequesterShiftInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutRequesterShiftInput[]
    createMany?: ShiftSwapRequestCreateManyRequesterShiftInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutRequesterShiftInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutRequesterShiftInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutRequesterShiftInput | ShiftSwapRequestUpdateManyWithWhereWithoutRequesterShiftInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftSwapRequestUpdateManyWithoutTargetShiftNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutTargetShiftInput, ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput> | ShiftSwapRequestCreateWithoutTargetShiftInput[] | ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutTargetShiftInput | ShiftSwapRequestCreateOrConnectWithoutTargetShiftInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutTargetShiftInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutTargetShiftInput[]
    createMany?: ShiftSwapRequestCreateManyTargetShiftInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutTargetShiftInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutTargetShiftInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutTargetShiftInput | ShiftSwapRequestUpdateManyWithWhereWithoutTargetShiftInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutRequesterShiftNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutRequesterShiftInput, ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput> | ShiftSwapRequestCreateWithoutRequesterShiftInput[] | ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutRequesterShiftInput | ShiftSwapRequestCreateOrConnectWithoutRequesterShiftInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutRequesterShiftInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutRequesterShiftInput[]
    createMany?: ShiftSwapRequestCreateManyRequesterShiftInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutRequesterShiftInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutRequesterShiftInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutRequesterShiftInput | ShiftSwapRequestUpdateManyWithWhereWithoutRequesterShiftInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutTargetShiftNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutTargetShiftInput, ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput> | ShiftSwapRequestCreateWithoutTargetShiftInput[] | ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutTargetShiftInput | ShiftSwapRequestCreateOrConnectWithoutTargetShiftInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutTargetShiftInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutTargetShiftInput[]
    createMany?: ShiftSwapRequestCreateManyTargetShiftInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutTargetShiftInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutTargetShiftInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutTargetShiftInput | ShiftSwapRequestUpdateManyWithWhereWithoutTargetShiftInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSwapRequestsSentInput = {
    create?: XOR<UserCreateWithoutSwapRequestsSentInput, UserUncheckedCreateWithoutSwapRequestsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwapRequestsSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSwapRequestsReceivedInput = {
    create?: XOR<UserCreateWithoutSwapRequestsReceivedInput, UserUncheckedCreateWithoutSwapRequestsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwapRequestsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type ShiftAssignmentCreateNestedOneWithoutRequesterShiftInput = {
    create?: XOR<ShiftAssignmentCreateWithoutRequesterShiftInput, ShiftAssignmentUncheckedCreateWithoutRequesterShiftInput>
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutRequesterShiftInput
    connect?: ShiftAssignmentWhereUniqueInput
  }

  export type ShiftAssignmentCreateNestedOneWithoutTargetShiftInput = {
    create?: XOR<ShiftAssignmentCreateWithoutTargetShiftInput, ShiftAssignmentUncheckedCreateWithoutTargetShiftInput>
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutTargetShiftInput
    connect?: ShiftAssignmentWhereUniqueInput
  }

  export type EnumSwapStatusFieldUpdateOperationsInput = {
    set?: $Enums.SwapStatus
  }

  export type UserUpdateOneRequiredWithoutSwapRequestsSentNestedInput = {
    create?: XOR<UserCreateWithoutSwapRequestsSentInput, UserUncheckedCreateWithoutSwapRequestsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwapRequestsSentInput
    upsert?: UserUpsertWithoutSwapRequestsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwapRequestsSentInput, UserUpdateWithoutSwapRequestsSentInput>, UserUncheckedUpdateWithoutSwapRequestsSentInput>
  }

  export type UserUpdateOneRequiredWithoutSwapRequestsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutSwapRequestsReceivedInput, UserUncheckedCreateWithoutSwapRequestsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwapRequestsReceivedInput
    upsert?: UserUpsertWithoutSwapRequestsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwapRequestsReceivedInput, UserUpdateWithoutSwapRequestsReceivedInput>, UserUncheckedUpdateWithoutSwapRequestsReceivedInput>
  }

  export type ShiftAssignmentUpdateOneRequiredWithoutRequesterShiftNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutRequesterShiftInput, ShiftAssignmentUncheckedCreateWithoutRequesterShiftInput>
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutRequesterShiftInput
    upsert?: ShiftAssignmentUpsertWithoutRequesterShiftInput
    connect?: ShiftAssignmentWhereUniqueInput
    update?: XOR<XOR<ShiftAssignmentUpdateToOneWithWhereWithoutRequesterShiftInput, ShiftAssignmentUpdateWithoutRequesterShiftInput>, ShiftAssignmentUncheckedUpdateWithoutRequesterShiftInput>
  }

  export type ShiftAssignmentUpdateOneRequiredWithoutTargetShiftNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutTargetShiftInput, ShiftAssignmentUncheckedCreateWithoutTargetShiftInput>
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutTargetShiftInput
    upsert?: ShiftAssignmentUpsertWithoutTargetShiftInput
    connect?: ShiftAssignmentWhereUniqueInput
    update?: XOR<XOR<ShiftAssignmentUpdateToOneWithWhereWithoutTargetShiftInput, ShiftAssignmentUpdateWithoutTargetShiftInput>, ShiftAssignmentUncheckedUpdateWithoutTargetShiftInput>
  }

  export type LocationCreateNestedOneWithoutInventoryItemsInput = {
    create?: XOR<LocationCreateWithoutInventoryItemsInput, LocationUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutInventoryItemsInput
    connect?: LocationWhereUniqueInput
  }

  export type InventoryFlagCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryFlagCreateWithoutInventoryItemInput, InventoryFlagUncheckedCreateWithoutInventoryItemInput> | InventoryFlagCreateWithoutInventoryItemInput[] | InventoryFlagUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryFlagCreateOrConnectWithoutInventoryItemInput | InventoryFlagCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryFlagCreateManyInventoryItemInputEnvelope
    connect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
  }

  export type InventoryFlagUncheckedCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryFlagCreateWithoutInventoryItemInput, InventoryFlagUncheckedCreateWithoutInventoryItemInput> | InventoryFlagCreateWithoutInventoryItemInput[] | InventoryFlagUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryFlagCreateOrConnectWithoutInventoryItemInput | InventoryFlagCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryFlagCreateManyInventoryItemInputEnvelope
    connect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationUpdateOneRequiredWithoutInventoryItemsNestedInput = {
    create?: XOR<LocationCreateWithoutInventoryItemsInput, LocationUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutInventoryItemsInput
    upsert?: LocationUpsertWithoutInventoryItemsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutInventoryItemsInput, LocationUpdateWithoutInventoryItemsInput>, LocationUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type InventoryFlagUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryFlagCreateWithoutInventoryItemInput, InventoryFlagUncheckedCreateWithoutInventoryItemInput> | InventoryFlagCreateWithoutInventoryItemInput[] | InventoryFlagUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryFlagCreateOrConnectWithoutInventoryItemInput | InventoryFlagCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryFlagUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryFlagUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryFlagCreateManyInventoryItemInputEnvelope
    set?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    disconnect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    delete?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    connect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    update?: InventoryFlagUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryFlagUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryFlagUpdateManyWithWhereWithoutInventoryItemInput | InventoryFlagUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryFlagScalarWhereInput | InventoryFlagScalarWhereInput[]
  }

  export type InventoryFlagUncheckedUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryFlagCreateWithoutInventoryItemInput, InventoryFlagUncheckedCreateWithoutInventoryItemInput> | InventoryFlagCreateWithoutInventoryItemInput[] | InventoryFlagUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryFlagCreateOrConnectWithoutInventoryItemInput | InventoryFlagCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryFlagUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryFlagUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryFlagCreateManyInventoryItemInputEnvelope
    set?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    disconnect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    delete?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    connect?: InventoryFlagWhereUniqueInput | InventoryFlagWhereUniqueInput[]
    update?: InventoryFlagUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryFlagUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryFlagUpdateManyWithWhereWithoutInventoryItemInput | InventoryFlagUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryFlagScalarWhereInput | InventoryFlagScalarWhereInput[]
  }

  export type InventoryItemCreateNestedOneWithoutInventoryFlagsInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryFlagsInput, InventoryItemUncheckedCreateWithoutInventoryFlagsInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryFlagsInput
    connect?: InventoryItemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInventoryFlagsInput = {
    create?: XOR<UserCreateWithoutInventoryFlagsInput, UserUncheckedCreateWithoutInventoryFlagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryFlagsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFlagStatusFieldUpdateOperationsInput = {
    set?: $Enums.FlagStatus
  }

  export type InventoryItemUpdateOneRequiredWithoutInventoryFlagsNestedInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryFlagsInput, InventoryItemUncheckedCreateWithoutInventoryFlagsInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryFlagsInput
    upsert?: InventoryItemUpsertWithoutInventoryFlagsInput
    connect?: InventoryItemWhereUniqueInput
    update?: XOR<XOR<InventoryItemUpdateToOneWithWhereWithoutInventoryFlagsInput, InventoryItemUpdateWithoutInventoryFlagsInput>, InventoryItemUncheckedUpdateWithoutInventoryFlagsInput>
  }

  export type UserUpdateOneRequiredWithoutInventoryFlagsNestedInput = {
    create?: XOR<UserCreateWithoutInventoryFlagsInput, UserUncheckedCreateWithoutInventoryFlagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryFlagsInput
    upsert?: UserUpsertWithoutInventoryFlagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryFlagsInput, UserUpdateWithoutInventoryFlagsInput>, UserUncheckedUpdateWithoutInventoryFlagsInput>
  }

  export type UserCreateNestedOneWithoutIssueReportsInput = {
    create?: XOR<UserCreateWithoutIssueReportsInput, UserUncheckedCreateWithoutIssueReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssueReportsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutIssueReportsInput = {
    create?: XOR<LocationCreateWithoutIssueReportsInput, LocationUncheckedCreateWithoutIssueReportsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutIssueReportsInput
    connect?: LocationWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type UserUpdateOneRequiredWithoutIssueReportsNestedInput = {
    create?: XOR<UserCreateWithoutIssueReportsInput, UserUncheckedCreateWithoutIssueReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssueReportsInput
    upsert?: UserUpsertWithoutIssueReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIssueReportsInput, UserUpdateWithoutIssueReportsInput>, UserUncheckedUpdateWithoutIssueReportsInput>
  }

  export type LocationUpdateOneRequiredWithoutIssueReportsNestedInput = {
    create?: XOR<LocationCreateWithoutIssueReportsInput, LocationUncheckedCreateWithoutIssueReportsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutIssueReportsInput
    upsert?: LocationUpsertWithoutIssueReportsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutIssueReportsInput, LocationUpdateWithoutIssueReportsInput>, LocationUncheckedUpdateWithoutIssueReportsInput>
  }

  export type UserCreateNestedOneWithoutRessourcesInput = {
    create?: XOR<UserCreateWithoutRessourcesInput, UserUncheckedCreateWithoutRessourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRessourcesInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutRessourcesInput = {
    create?: XOR<LocationCreateWithoutRessourcesInput, LocationUncheckedCreateWithoutRessourcesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutRessourcesInput
    connect?: LocationWhereUniqueInput
  }

  export type EnumRessourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.RessourceType
  }

  export type UserUpdateOneRequiredWithoutRessourcesNestedInput = {
    create?: XOR<UserCreateWithoutRessourcesInput, UserUncheckedCreateWithoutRessourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRessourcesInput
    upsert?: UserUpsertWithoutRessourcesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRessourcesInput, UserUpdateWithoutRessourcesInput>, UserUncheckedUpdateWithoutRessourcesInput>
  }

  export type LocationUpdateOneRequiredWithoutRessourcesNestedInput = {
    create?: XOR<LocationCreateWithoutRessourcesInput, LocationUncheckedCreateWithoutRessourcesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutRessourcesInput
    upsert?: LocationUpsertWithoutRessourcesInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutRessourcesInput, LocationUpdateWithoutRessourcesInput>, LocationUncheckedUpdateWithoutRessourcesInput>
  }

  export type LocationCreateNestedOneWithoutPositionInput = {
    create?: XOR<LocationCreateWithoutPositionInput, LocationUncheckedCreateWithoutPositionInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPositionInput
    connect?: LocationWhereUniqueInput
  }

  export type ShiftAssignmentCreateNestedManyWithoutPositionInput = {
    create?: XOR<ShiftAssignmentCreateWithoutPositionInput, ShiftAssignmentUncheckedCreateWithoutPositionInput> | ShiftAssignmentCreateWithoutPositionInput[] | ShiftAssignmentUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutPositionInput | ShiftAssignmentCreateOrConnectWithoutPositionInput[]
    createMany?: ShiftAssignmentCreateManyPositionInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type ShiftAssignmentUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<ShiftAssignmentCreateWithoutPositionInput, ShiftAssignmentUncheckedCreateWithoutPositionInput> | ShiftAssignmentCreateWithoutPositionInput[] | ShiftAssignmentUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutPositionInput | ShiftAssignmentCreateOrConnectWithoutPositionInput[]
    createMany?: ShiftAssignmentCreateManyPositionInputEnvelope
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type LocationUpdateOneRequiredWithoutPositionNestedInput = {
    create?: XOR<LocationCreateWithoutPositionInput, LocationUncheckedCreateWithoutPositionInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPositionInput
    upsert?: LocationUpsertWithoutPositionInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutPositionInput, LocationUpdateWithoutPositionInput>, LocationUncheckedUpdateWithoutPositionInput>
  }

  export type ShiftAssignmentUpdateManyWithoutPositionNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutPositionInput, ShiftAssignmentUncheckedCreateWithoutPositionInput> | ShiftAssignmentCreateWithoutPositionInput[] | ShiftAssignmentUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutPositionInput | ShiftAssignmentCreateOrConnectWithoutPositionInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutPositionInput | ShiftAssignmentUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: ShiftAssignmentCreateManyPositionInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutPositionInput | ShiftAssignmentUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutPositionInput | ShiftAssignmentUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutPositionInput, ShiftAssignmentUncheckedCreateWithoutPositionInput> | ShiftAssignmentCreateWithoutPositionInput[] | ShiftAssignmentUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutPositionInput | ShiftAssignmentCreateOrConnectWithoutPositionInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutPositionInput | ShiftAssignmentUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: ShiftAssignmentCreateManyPositionInputEnvelope
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutPositionInput | ShiftAssignmentUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutPositionInput | ShiftAssignmentUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumSwapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSwapStatusFilter<$PrismaModel> | $Enums.SwapStatus
  }

  export type NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwapStatus[] | ListEnumSwapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel> | $Enums.SwapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwapStatusFilter<$PrismaModel>
    _max?: NestedEnumSwapStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumFlagStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlagStatus | EnumFlagStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlagStatus[] | ListEnumFlagStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlagStatus[] | ListEnumFlagStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlagStatusFilter<$PrismaModel> | $Enums.FlagStatus
  }

  export type NestedEnumFlagStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlagStatus | EnumFlagStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlagStatus[] | ListEnumFlagStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlagStatus[] | ListEnumFlagStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlagStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlagStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlagStatusFilter<$PrismaModel>
    _max?: NestedEnumFlagStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type NestedEnumRessourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RessourceType | EnumRessourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RessourceType[] | ListEnumRessourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RessourceType[] | ListEnumRessourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRessourceTypeFilter<$PrismaModel> | $Enums.RessourceType
  }

  export type NestedEnumRessourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RessourceType | EnumRessourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RessourceType[] | ListEnumRessourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RessourceType[] | ListEnumRessourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRessourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.RessourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRessourceTypeFilter<$PrismaModel>
    _max?: NestedEnumRessourceTypeFilter<$PrismaModel>
  }

  export type UserLocationCreateWithoutLocationInput = {
    status: $Enums.Status
    user: UserCreateNestedOneWithoutLocationsInput
  }

  export type UserLocationUncheckedCreateWithoutLocationInput = {
    userId: string
    status: $Enums.Status
  }

  export type UserLocationCreateOrConnectWithoutLocationInput = {
    where: UserLocationWhereUniqueInput
    create: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput>
  }

  export type UserLocationCreateManyLocationInputEnvelope = {
    data: UserLocationCreateManyLocationInput | UserLocationCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type InventoryItemCreateWithoutLocationInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    lowThreshold: number
    updatedAt?: Date | string
    inventoryFlags?: InventoryFlagCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateWithoutLocationInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    lowThreshold: number
    updatedAt?: Date | string
    inventoryFlags?: InventoryFlagUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemCreateOrConnectWithoutLocationInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutLocationInput, InventoryItemUncheckedCreateWithoutLocationInput>
  }

  export type InventoryItemCreateManyLocationInputEnvelope = {
    data: InventoryItemCreateManyLocationInput | InventoryItemCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type IssueReportCreateWithoutAtLocationInput = {
    id?: string
    resolvedAt?: Date | string | null
    note: string
    reportStatus: $Enums.ReportStatus
    createdAt?: Date | string
    reportBy: UserCreateNestedOneWithoutIssueReportsInput
  }

  export type IssueReportUncheckedCreateWithoutAtLocationInput = {
    id?: string
    userId: string
    resolvedAt?: Date | string | null
    note: string
    reportStatus: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type IssueReportCreateOrConnectWithoutAtLocationInput = {
    where: IssueReportWhereUniqueInput
    create: XOR<IssueReportCreateWithoutAtLocationInput, IssueReportUncheckedCreateWithoutAtLocationInput>
  }

  export type IssueReportCreateManyAtLocationInputEnvelope = {
    data: IssueReportCreateManyAtLocationInput | IssueReportCreateManyAtLocationInput[]
    skipDuplicates?: boolean
  }

  export type RessourceCreateWithoutLocationInput = {
    id?: string
    title: string
    content: string
    category: $Enums.RessourceType
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutRessourcesInput
  }

  export type RessourceUncheckedCreateWithoutLocationInput = {
    id?: string
    userId: string
    title: string
    content: string
    category: $Enums.RessourceType
    createdAt?: Date | string
  }

  export type RessourceCreateOrConnectWithoutLocationInput = {
    where: RessourceWhereUniqueInput
    create: XOR<RessourceCreateWithoutLocationInput, RessourceUncheckedCreateWithoutLocationInput>
  }

  export type RessourceCreateManyLocationInputEnvelope = {
    data: RessourceCreateManyLocationInput | RessourceCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type PositionCreateWithoutAtLocationInput = {
    id?: string
    name: string
    shiftAssignments?: ShiftAssignmentCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateWithoutAtLocationInput = {
    id?: string
    name: string
    shiftAssignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutAtLocationInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutAtLocationInput, PositionUncheckedCreateWithoutAtLocationInput>
  }

  export type PositionCreateManyAtLocationInputEnvelope = {
    data: PositionCreateManyAtLocationInput | PositionCreateManyAtLocationInput[]
    skipDuplicates?: boolean
  }

  export type UserLocationUpsertWithWhereUniqueWithoutLocationInput = {
    where: UserLocationWhereUniqueInput
    update: XOR<UserLocationUpdateWithoutLocationInput, UserLocationUncheckedUpdateWithoutLocationInput>
    create: XOR<UserLocationCreateWithoutLocationInput, UserLocationUncheckedCreateWithoutLocationInput>
  }

  export type UserLocationUpdateWithWhereUniqueWithoutLocationInput = {
    where: UserLocationWhereUniqueInput
    data: XOR<UserLocationUpdateWithoutLocationInput, UserLocationUncheckedUpdateWithoutLocationInput>
  }

  export type UserLocationUpdateManyWithWhereWithoutLocationInput = {
    where: UserLocationScalarWhereInput
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyWithoutLocationInput>
  }

  export type UserLocationScalarWhereInput = {
    AND?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
    OR?: UserLocationScalarWhereInput[]
    NOT?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
    userId?: StringFilter<"UserLocation"> | string
    locationId?: StringFilter<"UserLocation"> | string
    status?: EnumStatusFilter<"UserLocation"> | $Enums.Status
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutLocationInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutLocationInput, InventoryItemUncheckedUpdateWithoutLocationInput>
    create: XOR<InventoryItemCreateWithoutLocationInput, InventoryItemUncheckedCreateWithoutLocationInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutLocationInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutLocationInput, InventoryItemUncheckedUpdateWithoutLocationInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutLocationInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutLocationInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    name?: StringFilter<"InventoryItem"> | string
    quantity?: IntFilter<"InventoryItem"> | number
    unit?: StringFilter<"InventoryItem"> | string
    locationId?: StringFilter<"InventoryItem"> | string
    lowThreshold?: IntFilter<"InventoryItem"> | number
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
  }

  export type IssueReportUpsertWithWhereUniqueWithoutAtLocationInput = {
    where: IssueReportWhereUniqueInput
    update: XOR<IssueReportUpdateWithoutAtLocationInput, IssueReportUncheckedUpdateWithoutAtLocationInput>
    create: XOR<IssueReportCreateWithoutAtLocationInput, IssueReportUncheckedCreateWithoutAtLocationInput>
  }

  export type IssueReportUpdateWithWhereUniqueWithoutAtLocationInput = {
    where: IssueReportWhereUniqueInput
    data: XOR<IssueReportUpdateWithoutAtLocationInput, IssueReportUncheckedUpdateWithoutAtLocationInput>
  }

  export type IssueReportUpdateManyWithWhereWithoutAtLocationInput = {
    where: IssueReportScalarWhereInput
    data: XOR<IssueReportUpdateManyMutationInput, IssueReportUncheckedUpdateManyWithoutAtLocationInput>
  }

  export type IssueReportScalarWhereInput = {
    AND?: IssueReportScalarWhereInput | IssueReportScalarWhereInput[]
    OR?: IssueReportScalarWhereInput[]
    NOT?: IssueReportScalarWhereInput | IssueReportScalarWhereInput[]
    id?: StringFilter<"IssueReport"> | string
    userId?: StringFilter<"IssueReport"> | string
    locationId?: StringFilter<"IssueReport"> | string
    resolvedAt?: DateTimeNullableFilter<"IssueReport"> | Date | string | null
    note?: StringFilter<"IssueReport"> | string
    reportStatus?: EnumReportStatusFilter<"IssueReport"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"IssueReport"> | Date | string
  }

  export type RessourceUpsertWithWhereUniqueWithoutLocationInput = {
    where: RessourceWhereUniqueInput
    update: XOR<RessourceUpdateWithoutLocationInput, RessourceUncheckedUpdateWithoutLocationInput>
    create: XOR<RessourceCreateWithoutLocationInput, RessourceUncheckedCreateWithoutLocationInput>
  }

  export type RessourceUpdateWithWhereUniqueWithoutLocationInput = {
    where: RessourceWhereUniqueInput
    data: XOR<RessourceUpdateWithoutLocationInput, RessourceUncheckedUpdateWithoutLocationInput>
  }

  export type RessourceUpdateManyWithWhereWithoutLocationInput = {
    where: RessourceScalarWhereInput
    data: XOR<RessourceUpdateManyMutationInput, RessourceUncheckedUpdateManyWithoutLocationInput>
  }

  export type RessourceScalarWhereInput = {
    AND?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
    OR?: RessourceScalarWhereInput[]
    NOT?: RessourceScalarWhereInput | RessourceScalarWhereInput[]
    id?: StringFilter<"Ressource"> | string
    userId?: StringFilter<"Ressource"> | string
    locationId?: StringFilter<"Ressource"> | string
    title?: StringFilter<"Ressource"> | string
    content?: StringFilter<"Ressource"> | string
    category?: EnumRessourceTypeFilter<"Ressource"> | $Enums.RessourceType
    createdAt?: DateTimeFilter<"Ressource"> | Date | string
  }

  export type PositionUpsertWithWhereUniqueWithoutAtLocationInput = {
    where: PositionWhereUniqueInput
    update: XOR<PositionUpdateWithoutAtLocationInput, PositionUncheckedUpdateWithoutAtLocationInput>
    create: XOR<PositionCreateWithoutAtLocationInput, PositionUncheckedCreateWithoutAtLocationInput>
  }

  export type PositionUpdateWithWhereUniqueWithoutAtLocationInput = {
    where: PositionWhereUniqueInput
    data: XOR<PositionUpdateWithoutAtLocationInput, PositionUncheckedUpdateWithoutAtLocationInput>
  }

  export type PositionUpdateManyWithWhereWithoutAtLocationInput = {
    where: PositionScalarWhereInput
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyWithoutAtLocationInput>
  }

  export type PositionScalarWhereInput = {
    AND?: PositionScalarWhereInput | PositionScalarWhereInput[]
    OR?: PositionScalarWhereInput[]
    NOT?: PositionScalarWhereInput | PositionScalarWhereInput[]
    id?: StringFilter<"Position"> | string
    name?: StringFilter<"Position"> | string
    locationId?: StringFilter<"Position"> | string
  }

  export type ShiftAssignmentCreateWithoutEmployeeInput = {
    id?: string
    date: Date | string
    start: string
    end: string
    createdAt?: Date | string
    position: PositionCreateNestedOneWithoutShiftAssignmentsInput
    requesterShift?: ShiftSwapRequestCreateNestedManyWithoutRequesterShiftInput
    targetShift?: ShiftSwapRequestCreateNestedManyWithoutTargetShiftInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutEmployeeInput = {
    id?: string
    date: Date | string
    start: string
    end: string
    positionId: string
    createdAt?: Date | string
    requesterShift?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterShiftInput
    targetShift?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetShiftInput
  }

  export type ShiftAssignmentCreateOrConnectWithoutEmployeeInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutEmployeeInput, ShiftAssignmentUncheckedCreateWithoutEmployeeInput>
  }

  export type ShiftAssignmentCreateManyEmployeeInputEnvelope = {
    data: ShiftAssignmentCreateManyEmployeeInput | ShiftAssignmentCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type UserLocationCreateWithoutUserInput = {
    status: $Enums.Status
    location: LocationCreateNestedOneWithoutUsersInput
  }

  export type UserLocationUncheckedCreateWithoutUserInput = {
    locationId: string
    status: $Enums.Status
  }

  export type UserLocationCreateOrConnectWithoutUserInput = {
    where: UserLocationWhereUniqueInput
    create: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
  }

  export type UserLocationCreateManyUserInputEnvelope = {
    data: UserLocationCreateManyUserInput | UserLocationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShiftSwapRequestCreateWithoutRequesterUserInput = {
    id?: string
    status: $Enums.SwapStatus
    createdAt: Date | string
    targetUser: UserCreateNestedOneWithoutSwapRequestsReceivedInput
    requesterShift: ShiftAssignmentCreateNestedOneWithoutRequesterShiftInput
    targetShift: ShiftAssignmentCreateNestedOneWithoutTargetShiftInput
  }

  export type ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput = {
    id?: string
    targetId: string
    requesterShiftId: string
    targetShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date | string
  }

  export type ShiftSwapRequestCreateOrConnectWithoutRequesterUserInput = {
    where: ShiftSwapRequestWhereUniqueInput
    create: XOR<ShiftSwapRequestCreateWithoutRequesterUserInput, ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput>
  }

  export type ShiftSwapRequestCreateManyRequesterUserInputEnvelope = {
    data: ShiftSwapRequestCreateManyRequesterUserInput | ShiftSwapRequestCreateManyRequesterUserInput[]
    skipDuplicates?: boolean
  }

  export type ShiftSwapRequestCreateWithoutTargetUserInput = {
    id?: string
    status: $Enums.SwapStatus
    createdAt: Date | string
    requesterUser: UserCreateNestedOneWithoutSwapRequestsSentInput
    requesterShift: ShiftAssignmentCreateNestedOneWithoutRequesterShiftInput
    targetShift: ShiftAssignmentCreateNestedOneWithoutTargetShiftInput
  }

  export type ShiftSwapRequestUncheckedCreateWithoutTargetUserInput = {
    id?: string
    requesterId: string
    requesterShiftId: string
    targetShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date | string
  }

  export type ShiftSwapRequestCreateOrConnectWithoutTargetUserInput = {
    where: ShiftSwapRequestWhereUniqueInput
    create: XOR<ShiftSwapRequestCreateWithoutTargetUserInput, ShiftSwapRequestUncheckedCreateWithoutTargetUserInput>
  }

  export type ShiftSwapRequestCreateManyTargetUserInputEnvelope = {
    data: ShiftSwapRequestCreateManyTargetUserInput | ShiftSwapRequestCreateManyTargetUserInput[]
    skipDuplicates?: boolean
  }

  export type InventoryFlagCreateWithoutFlaggedByInput = {
    id?: string
    note: string
    flagStatus: $Enums.FlagStatus
    createdAt: Date | string
    inventoryItem: InventoryItemCreateNestedOneWithoutInventoryFlagsInput
  }

  export type InventoryFlagUncheckedCreateWithoutFlaggedByInput = {
    id?: string
    inventoryItemId: string
    note: string
    flagStatus: $Enums.FlagStatus
    createdAt: Date | string
  }

  export type InventoryFlagCreateOrConnectWithoutFlaggedByInput = {
    where: InventoryFlagWhereUniqueInput
    create: XOR<InventoryFlagCreateWithoutFlaggedByInput, InventoryFlagUncheckedCreateWithoutFlaggedByInput>
  }

  export type InventoryFlagCreateManyFlaggedByInputEnvelope = {
    data: InventoryFlagCreateManyFlaggedByInput | InventoryFlagCreateManyFlaggedByInput[]
    skipDuplicates?: boolean
  }

  export type IssueReportCreateWithoutReportByInput = {
    id?: string
    resolvedAt?: Date | string | null
    note: string
    reportStatus: $Enums.ReportStatus
    createdAt?: Date | string
    atLocation: LocationCreateNestedOneWithoutIssueReportsInput
  }

  export type IssueReportUncheckedCreateWithoutReportByInput = {
    id?: string
    locationId: string
    resolvedAt?: Date | string | null
    note: string
    reportStatus: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type IssueReportCreateOrConnectWithoutReportByInput = {
    where: IssueReportWhereUniqueInput
    create: XOR<IssueReportCreateWithoutReportByInput, IssueReportUncheckedCreateWithoutReportByInput>
  }

  export type IssueReportCreateManyReportByInputEnvelope = {
    data: IssueReportCreateManyReportByInput | IssueReportCreateManyReportByInput[]
    skipDuplicates?: boolean
  }

  export type RessourceCreateWithoutCreatedByInput = {
    id?: string
    title: string
    content: string
    category: $Enums.RessourceType
    createdAt?: Date | string
    location: LocationCreateNestedOneWithoutRessourcesInput
  }

  export type RessourceUncheckedCreateWithoutCreatedByInput = {
    id?: string
    locationId: string
    title: string
    content: string
    category: $Enums.RessourceType
    createdAt?: Date | string
  }

  export type RessourceCreateOrConnectWithoutCreatedByInput = {
    where: RessourceWhereUniqueInput
    create: XOR<RessourceCreateWithoutCreatedByInput, RessourceUncheckedCreateWithoutCreatedByInput>
  }

  export type RessourceCreateManyCreatedByInputEnvelope = {
    data: RessourceCreateManyCreatedByInput | RessourceCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShiftAssignmentUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ShiftAssignmentWhereUniqueInput
    update: XOR<ShiftAssignmentUpdateWithoutEmployeeInput, ShiftAssignmentUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ShiftAssignmentCreateWithoutEmployeeInput, ShiftAssignmentUncheckedCreateWithoutEmployeeInput>
  }

  export type ShiftAssignmentUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ShiftAssignmentWhereUniqueInput
    data: XOR<ShiftAssignmentUpdateWithoutEmployeeInput, ShiftAssignmentUncheckedUpdateWithoutEmployeeInput>
  }

  export type ShiftAssignmentUpdateManyWithWhereWithoutEmployeeInput = {
    where: ShiftAssignmentScalarWhereInput
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ShiftAssignmentScalarWhereInput = {
    AND?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
    OR?: ShiftAssignmentScalarWhereInput[]
    NOT?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
    id?: StringFilter<"ShiftAssignment"> | string
    userId?: StringFilter<"ShiftAssignment"> | string
    date?: DateTimeFilter<"ShiftAssignment"> | Date | string
    start?: StringFilter<"ShiftAssignment"> | string
    end?: StringFilter<"ShiftAssignment"> | string
    positionId?: StringFilter<"ShiftAssignment"> | string
    createdAt?: DateTimeFilter<"ShiftAssignment"> | Date | string
  }

  export type UserLocationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLocationWhereUniqueInput
    update: XOR<UserLocationUpdateWithoutUserInput, UserLocationUncheckedUpdateWithoutUserInput>
    create: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
  }

  export type UserLocationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLocationWhereUniqueInput
    data: XOR<UserLocationUpdateWithoutUserInput, UserLocationUncheckedUpdateWithoutUserInput>
  }

  export type UserLocationUpdateManyWithWhereWithoutUserInput = {
    where: UserLocationScalarWhereInput
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyWithoutUserInput>
  }

  export type ShiftSwapRequestUpsertWithWhereUniqueWithoutRequesterUserInput = {
    where: ShiftSwapRequestWhereUniqueInput
    update: XOR<ShiftSwapRequestUpdateWithoutRequesterUserInput, ShiftSwapRequestUncheckedUpdateWithoutRequesterUserInput>
    create: XOR<ShiftSwapRequestCreateWithoutRequesterUserInput, ShiftSwapRequestUncheckedCreateWithoutRequesterUserInput>
  }

  export type ShiftSwapRequestUpdateWithWhereUniqueWithoutRequesterUserInput = {
    where: ShiftSwapRequestWhereUniqueInput
    data: XOR<ShiftSwapRequestUpdateWithoutRequesterUserInput, ShiftSwapRequestUncheckedUpdateWithoutRequesterUserInput>
  }

  export type ShiftSwapRequestUpdateManyWithWhereWithoutRequesterUserInput = {
    where: ShiftSwapRequestScalarWhereInput
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserInput>
  }

  export type ShiftSwapRequestScalarWhereInput = {
    AND?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
    OR?: ShiftSwapRequestScalarWhereInput[]
    NOT?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
    id?: StringFilter<"ShiftSwapRequest"> | string
    requesterId?: StringFilter<"ShiftSwapRequest"> | string
    targetId?: StringFilter<"ShiftSwapRequest"> | string
    requesterShiftId?: StringFilter<"ShiftSwapRequest"> | string
    targetShiftId?: StringFilter<"ShiftSwapRequest"> | string
    status?: EnumSwapStatusFilter<"ShiftSwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeFilter<"ShiftSwapRequest"> | Date | string
  }

  export type ShiftSwapRequestUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: ShiftSwapRequestWhereUniqueInput
    update: XOR<ShiftSwapRequestUpdateWithoutTargetUserInput, ShiftSwapRequestUncheckedUpdateWithoutTargetUserInput>
    create: XOR<ShiftSwapRequestCreateWithoutTargetUserInput, ShiftSwapRequestUncheckedCreateWithoutTargetUserInput>
  }

  export type ShiftSwapRequestUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: ShiftSwapRequestWhereUniqueInput
    data: XOR<ShiftSwapRequestUpdateWithoutTargetUserInput, ShiftSwapRequestUncheckedUpdateWithoutTargetUserInput>
  }

  export type ShiftSwapRequestUpdateManyWithWhereWithoutTargetUserInput = {
    where: ShiftSwapRequestScalarWhereInput
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type InventoryFlagUpsertWithWhereUniqueWithoutFlaggedByInput = {
    where: InventoryFlagWhereUniqueInput
    update: XOR<InventoryFlagUpdateWithoutFlaggedByInput, InventoryFlagUncheckedUpdateWithoutFlaggedByInput>
    create: XOR<InventoryFlagCreateWithoutFlaggedByInput, InventoryFlagUncheckedCreateWithoutFlaggedByInput>
  }

  export type InventoryFlagUpdateWithWhereUniqueWithoutFlaggedByInput = {
    where: InventoryFlagWhereUniqueInput
    data: XOR<InventoryFlagUpdateWithoutFlaggedByInput, InventoryFlagUncheckedUpdateWithoutFlaggedByInput>
  }

  export type InventoryFlagUpdateManyWithWhereWithoutFlaggedByInput = {
    where: InventoryFlagScalarWhereInput
    data: XOR<InventoryFlagUpdateManyMutationInput, InventoryFlagUncheckedUpdateManyWithoutFlaggedByInput>
  }

  export type InventoryFlagScalarWhereInput = {
    AND?: InventoryFlagScalarWhereInput | InventoryFlagScalarWhereInput[]
    OR?: InventoryFlagScalarWhereInput[]
    NOT?: InventoryFlagScalarWhereInput | InventoryFlagScalarWhereInput[]
    id?: StringFilter<"InventoryFlag"> | string
    inventoryItemId?: StringFilter<"InventoryFlag"> | string
    userId?: StringFilter<"InventoryFlag"> | string
    note?: StringFilter<"InventoryFlag"> | string
    flagStatus?: EnumFlagStatusFilter<"InventoryFlag"> | $Enums.FlagStatus
    createdAt?: DateTimeFilter<"InventoryFlag"> | Date | string
  }

  export type IssueReportUpsertWithWhereUniqueWithoutReportByInput = {
    where: IssueReportWhereUniqueInput
    update: XOR<IssueReportUpdateWithoutReportByInput, IssueReportUncheckedUpdateWithoutReportByInput>
    create: XOR<IssueReportCreateWithoutReportByInput, IssueReportUncheckedCreateWithoutReportByInput>
  }

  export type IssueReportUpdateWithWhereUniqueWithoutReportByInput = {
    where: IssueReportWhereUniqueInput
    data: XOR<IssueReportUpdateWithoutReportByInput, IssueReportUncheckedUpdateWithoutReportByInput>
  }

  export type IssueReportUpdateManyWithWhereWithoutReportByInput = {
    where: IssueReportScalarWhereInput
    data: XOR<IssueReportUpdateManyMutationInput, IssueReportUncheckedUpdateManyWithoutReportByInput>
  }

  export type RessourceUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: RessourceWhereUniqueInput
    update: XOR<RessourceUpdateWithoutCreatedByInput, RessourceUncheckedUpdateWithoutCreatedByInput>
    create: XOR<RessourceCreateWithoutCreatedByInput, RessourceUncheckedCreateWithoutCreatedByInput>
  }

  export type RessourceUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: RessourceWhereUniqueInput
    data: XOR<RessourceUpdateWithoutCreatedByInput, RessourceUncheckedUpdateWithoutCreatedByInput>
  }

  export type RessourceUpdateManyWithWhereWithoutCreatedByInput = {
    where: RessourceScalarWhereInput
    data: XOR<RessourceUpdateManyMutationInput, RessourceUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    refreshToken?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportCreateNestedManyWithoutReportByInput
    ressources?: RessourceCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagUncheckedCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutReportByInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUncheckedUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutLocationsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentCreateNestedManyWithoutEmployeeInput
    swapRequestsSent?: ShiftSwapRequestCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportCreateNestedManyWithoutReportByInput
    ressources?: RessourceCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocationsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    swapRequestsSent?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagUncheckedCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutReportByInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
  }

  export type LocationCreateWithoutUsersInput = {
    id?: string
    name: string
    address: string
    phone: string
    inventoryItems?: InventoryItemCreateNestedManyWithoutLocationInput
    issueReports?: IssueReportCreateNestedManyWithoutAtLocationInput
    ressources?: RessourceCreateNestedManyWithoutLocationInput
    position?: PositionCreateNestedManyWithoutAtLocationInput
  }

  export type LocationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    address: string
    phone: string
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutLocationInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutAtLocationInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutLocationInput
    position?: PositionUncheckedCreateNestedManyWithoutAtLocationInput
  }

  export type LocationCreateOrConnectWithoutUsersInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutLocationsInput = {
    update: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type UserUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUpdateManyWithoutEmployeeNestedInput
    swapRequestsSent?: ShiftSwapRequestUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    swapRequestsSent?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUncheckedUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LocationUpsertWithoutUsersInput = {
    update: XOR<LocationUpdateWithoutUsersInput, LocationUncheckedUpdateWithoutUsersInput>
    create: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutUsersInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutUsersInput, LocationUncheckedUpdateWithoutUsersInput>
  }

  export type LocationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    inventoryItems?: InventoryItemUpdateManyWithoutLocationNestedInput
    issueReports?: IssueReportUpdateManyWithoutAtLocationNestedInput
    ressources?: RessourceUpdateManyWithoutLocationNestedInput
    position?: PositionUpdateManyWithoutAtLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutLocationNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutAtLocationNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutLocationNestedInput
    position?: PositionUncheckedUpdateManyWithoutAtLocationNestedInput
  }

  export type UserCreateWithoutShiftAssignmentsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    locations?: UserLocationCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportCreateNestedManyWithoutReportByInput
    ressources?: RessourceCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShiftAssignmentsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagUncheckedCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutReportByInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShiftAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShiftAssignmentsInput, UserUncheckedCreateWithoutShiftAssignmentsInput>
  }

  export type PositionCreateWithoutShiftAssignmentsInput = {
    id?: string
    name: string
    atLocation: LocationCreateNestedOneWithoutPositionInput
  }

  export type PositionUncheckedCreateWithoutShiftAssignmentsInput = {
    id?: string
    name: string
    locationId: string
  }

  export type PositionCreateOrConnectWithoutShiftAssignmentsInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutShiftAssignmentsInput, PositionUncheckedCreateWithoutShiftAssignmentsInput>
  }

  export type ShiftSwapRequestCreateWithoutRequesterShiftInput = {
    id?: string
    status: $Enums.SwapStatus
    createdAt: Date | string
    requesterUser: UserCreateNestedOneWithoutSwapRequestsSentInput
    targetUser: UserCreateNestedOneWithoutSwapRequestsReceivedInput
    targetShift: ShiftAssignmentCreateNestedOneWithoutTargetShiftInput
  }

  export type ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput = {
    id?: string
    requesterId: string
    targetId: string
    targetShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date | string
  }

  export type ShiftSwapRequestCreateOrConnectWithoutRequesterShiftInput = {
    where: ShiftSwapRequestWhereUniqueInput
    create: XOR<ShiftSwapRequestCreateWithoutRequesterShiftInput, ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput>
  }

  export type ShiftSwapRequestCreateManyRequesterShiftInputEnvelope = {
    data: ShiftSwapRequestCreateManyRequesterShiftInput | ShiftSwapRequestCreateManyRequesterShiftInput[]
    skipDuplicates?: boolean
  }

  export type ShiftSwapRequestCreateWithoutTargetShiftInput = {
    id?: string
    status: $Enums.SwapStatus
    createdAt: Date | string
    requesterUser: UserCreateNestedOneWithoutSwapRequestsSentInput
    targetUser: UserCreateNestedOneWithoutSwapRequestsReceivedInput
    requesterShift: ShiftAssignmentCreateNestedOneWithoutRequesterShiftInput
  }

  export type ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput = {
    id?: string
    requesterId: string
    targetId: string
    requesterShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date | string
  }

  export type ShiftSwapRequestCreateOrConnectWithoutTargetShiftInput = {
    where: ShiftSwapRequestWhereUniqueInput
    create: XOR<ShiftSwapRequestCreateWithoutTargetShiftInput, ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput>
  }

  export type ShiftSwapRequestCreateManyTargetShiftInputEnvelope = {
    data: ShiftSwapRequestCreateManyTargetShiftInput | ShiftSwapRequestCreateManyTargetShiftInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutShiftAssignmentsInput = {
    update: XOR<UserUpdateWithoutShiftAssignmentsInput, UserUncheckedUpdateWithoutShiftAssignmentsInput>
    create: XOR<UserCreateWithoutShiftAssignmentsInput, UserUncheckedCreateWithoutShiftAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShiftAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShiftAssignmentsInput, UserUncheckedUpdateWithoutShiftAssignmentsInput>
  }

  export type UserUpdateWithoutShiftAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: UserLocationUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShiftAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUncheckedUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PositionUpsertWithoutShiftAssignmentsInput = {
    update: XOR<PositionUpdateWithoutShiftAssignmentsInput, PositionUncheckedUpdateWithoutShiftAssignmentsInput>
    create: XOR<PositionCreateWithoutShiftAssignmentsInput, PositionUncheckedCreateWithoutShiftAssignmentsInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutShiftAssignmentsInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutShiftAssignmentsInput, PositionUncheckedUpdateWithoutShiftAssignmentsInput>
  }

  export type PositionUpdateWithoutShiftAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    atLocation?: LocationUpdateOneRequiredWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateWithoutShiftAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftSwapRequestUpsertWithWhereUniqueWithoutRequesterShiftInput = {
    where: ShiftSwapRequestWhereUniqueInput
    update: XOR<ShiftSwapRequestUpdateWithoutRequesterShiftInput, ShiftSwapRequestUncheckedUpdateWithoutRequesterShiftInput>
    create: XOR<ShiftSwapRequestCreateWithoutRequesterShiftInput, ShiftSwapRequestUncheckedCreateWithoutRequesterShiftInput>
  }

  export type ShiftSwapRequestUpdateWithWhereUniqueWithoutRequesterShiftInput = {
    where: ShiftSwapRequestWhereUniqueInput
    data: XOR<ShiftSwapRequestUpdateWithoutRequesterShiftInput, ShiftSwapRequestUncheckedUpdateWithoutRequesterShiftInput>
  }

  export type ShiftSwapRequestUpdateManyWithWhereWithoutRequesterShiftInput = {
    where: ShiftSwapRequestScalarWhereInput
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyWithoutRequesterShiftInput>
  }

  export type ShiftSwapRequestUpsertWithWhereUniqueWithoutTargetShiftInput = {
    where: ShiftSwapRequestWhereUniqueInput
    update: XOR<ShiftSwapRequestUpdateWithoutTargetShiftInput, ShiftSwapRequestUncheckedUpdateWithoutTargetShiftInput>
    create: XOR<ShiftSwapRequestCreateWithoutTargetShiftInput, ShiftSwapRequestUncheckedCreateWithoutTargetShiftInput>
  }

  export type ShiftSwapRequestUpdateWithWhereUniqueWithoutTargetShiftInput = {
    where: ShiftSwapRequestWhereUniqueInput
    data: XOR<ShiftSwapRequestUpdateWithoutTargetShiftInput, ShiftSwapRequestUncheckedUpdateWithoutTargetShiftInput>
  }

  export type ShiftSwapRequestUpdateManyWithWhereWithoutTargetShiftInput = {
    where: ShiftSwapRequestScalarWhereInput
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyWithoutTargetShiftInput>
  }

  export type UserCreateWithoutSwapRequestsSentInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
    swapRequestsReceived?: ShiftSwapRequestCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportCreateNestedManyWithoutReportByInput
    ressources?: RessourceCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSwapRequestsSentInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagUncheckedCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutReportByInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSwapRequestsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwapRequestsSentInput, UserUncheckedCreateWithoutSwapRequestsSentInput>
  }

  export type UserCreateWithoutSwapRequestsReceivedInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestCreateNestedManyWithoutRequesterUserInput
    inventoryFlags?: InventoryFlagCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportCreateNestedManyWithoutReportByInput
    ressources?: RessourceCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSwapRequestsReceivedInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterUserInput
    inventoryFlags?: InventoryFlagUncheckedCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutReportByInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSwapRequestsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwapRequestsReceivedInput, UserUncheckedCreateWithoutSwapRequestsReceivedInput>
  }

  export type ShiftAssignmentCreateWithoutRequesterShiftInput = {
    id?: string
    date: Date | string
    start: string
    end: string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutShiftAssignmentsInput
    position: PositionCreateNestedOneWithoutShiftAssignmentsInput
    targetShift?: ShiftSwapRequestCreateNestedManyWithoutTargetShiftInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutRequesterShiftInput = {
    id?: string
    userId: string
    date: Date | string
    start: string
    end: string
    positionId: string
    createdAt?: Date | string
    targetShift?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetShiftInput
  }

  export type ShiftAssignmentCreateOrConnectWithoutRequesterShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutRequesterShiftInput, ShiftAssignmentUncheckedCreateWithoutRequesterShiftInput>
  }

  export type ShiftAssignmentCreateWithoutTargetShiftInput = {
    id?: string
    date: Date | string
    start: string
    end: string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutShiftAssignmentsInput
    position: PositionCreateNestedOneWithoutShiftAssignmentsInput
    requesterShift?: ShiftSwapRequestCreateNestedManyWithoutRequesterShiftInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutTargetShiftInput = {
    id?: string
    userId: string
    date: Date | string
    start: string
    end: string
    positionId: string
    createdAt?: Date | string
    requesterShift?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterShiftInput
  }

  export type ShiftAssignmentCreateOrConnectWithoutTargetShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutTargetShiftInput, ShiftAssignmentUncheckedCreateWithoutTargetShiftInput>
  }

  export type UserUpsertWithoutSwapRequestsSentInput = {
    update: XOR<UserUpdateWithoutSwapRequestsSentInput, UserUncheckedUpdateWithoutSwapRequestsSentInput>
    create: XOR<UserCreateWithoutSwapRequestsSentInput, UserUncheckedCreateWithoutSwapRequestsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSwapRequestsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSwapRequestsSentInput, UserUncheckedUpdateWithoutSwapRequestsSentInput>
  }

  export type UserUpdateWithoutSwapRequestsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSwapRequestsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUncheckedUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSwapRequestsReceivedInput = {
    update: XOR<UserUpdateWithoutSwapRequestsReceivedInput, UserUncheckedUpdateWithoutSwapRequestsReceivedInput>
    create: XOR<UserCreateWithoutSwapRequestsReceivedInput, UserUncheckedCreateWithoutSwapRequestsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSwapRequestsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSwapRequestsReceivedInput, UserUncheckedUpdateWithoutSwapRequestsReceivedInput>
  }

  export type UserUpdateWithoutSwapRequestsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUpdateManyWithoutRequesterUserNestedInput
    inventoryFlags?: InventoryFlagUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSwapRequestsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserNestedInput
    inventoryFlags?: InventoryFlagUncheckedUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShiftAssignmentUpsertWithoutRequesterShiftInput = {
    update: XOR<ShiftAssignmentUpdateWithoutRequesterShiftInput, ShiftAssignmentUncheckedUpdateWithoutRequesterShiftInput>
    create: XOR<ShiftAssignmentCreateWithoutRequesterShiftInput, ShiftAssignmentUncheckedCreateWithoutRequesterShiftInput>
    where?: ShiftAssignmentWhereInput
  }

  export type ShiftAssignmentUpdateToOneWithWhereWithoutRequesterShiftInput = {
    where?: ShiftAssignmentWhereInput
    data: XOR<ShiftAssignmentUpdateWithoutRequesterShiftInput, ShiftAssignmentUncheckedUpdateWithoutRequesterShiftInput>
  }

  export type ShiftAssignmentUpdateWithoutRequesterShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutShiftAssignmentsNestedInput
    position?: PositionUpdateOneRequiredWithoutShiftAssignmentsNestedInput
    targetShift?: ShiftSwapRequestUpdateManyWithoutTargetShiftNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutRequesterShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetShift?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetShiftNestedInput
  }

  export type ShiftAssignmentUpsertWithoutTargetShiftInput = {
    update: XOR<ShiftAssignmentUpdateWithoutTargetShiftInput, ShiftAssignmentUncheckedUpdateWithoutTargetShiftInput>
    create: XOR<ShiftAssignmentCreateWithoutTargetShiftInput, ShiftAssignmentUncheckedCreateWithoutTargetShiftInput>
    where?: ShiftAssignmentWhereInput
  }

  export type ShiftAssignmentUpdateToOneWithWhereWithoutTargetShiftInput = {
    where?: ShiftAssignmentWhereInput
    data: XOR<ShiftAssignmentUpdateWithoutTargetShiftInput, ShiftAssignmentUncheckedUpdateWithoutTargetShiftInput>
  }

  export type ShiftAssignmentUpdateWithoutTargetShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutShiftAssignmentsNestedInput
    position?: PositionUpdateOneRequiredWithoutShiftAssignmentsNestedInput
    requesterShift?: ShiftSwapRequestUpdateManyWithoutRequesterShiftNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutTargetShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterShift?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterShiftNestedInput
  }

  export type LocationCreateWithoutInventoryItemsInput = {
    id?: string
    name: string
    address: string
    phone: string
    users?: UserLocationCreateNestedManyWithoutLocationInput
    issueReports?: IssueReportCreateNestedManyWithoutAtLocationInput
    ressources?: RessourceCreateNestedManyWithoutLocationInput
    position?: PositionCreateNestedManyWithoutAtLocationInput
  }

  export type LocationUncheckedCreateWithoutInventoryItemsInput = {
    id?: string
    name: string
    address: string
    phone: string
    users?: UserLocationUncheckedCreateNestedManyWithoutLocationInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutAtLocationInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutLocationInput
    position?: PositionUncheckedCreateNestedManyWithoutAtLocationInput
  }

  export type LocationCreateOrConnectWithoutInventoryItemsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutInventoryItemsInput, LocationUncheckedCreateWithoutInventoryItemsInput>
  }

  export type InventoryFlagCreateWithoutInventoryItemInput = {
    id?: string
    note: string
    flagStatus: $Enums.FlagStatus
    createdAt: Date | string
    flaggedBy: UserCreateNestedOneWithoutInventoryFlagsInput
  }

  export type InventoryFlagUncheckedCreateWithoutInventoryItemInput = {
    id?: string
    userId: string
    note: string
    flagStatus: $Enums.FlagStatus
    createdAt: Date | string
  }

  export type InventoryFlagCreateOrConnectWithoutInventoryItemInput = {
    where: InventoryFlagWhereUniqueInput
    create: XOR<InventoryFlagCreateWithoutInventoryItemInput, InventoryFlagUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryFlagCreateManyInventoryItemInputEnvelope = {
    data: InventoryFlagCreateManyInventoryItemInput | InventoryFlagCreateManyInventoryItemInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutInventoryItemsInput = {
    update: XOR<LocationUpdateWithoutInventoryItemsInput, LocationUncheckedUpdateWithoutInventoryItemsInput>
    create: XOR<LocationCreateWithoutInventoryItemsInput, LocationUncheckedCreateWithoutInventoryItemsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutInventoryItemsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutInventoryItemsInput, LocationUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type LocationUpdateWithoutInventoryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    users?: UserLocationUpdateManyWithoutLocationNestedInput
    issueReports?: IssueReportUpdateManyWithoutAtLocationNestedInput
    ressources?: RessourceUpdateManyWithoutLocationNestedInput
    position?: PositionUpdateManyWithoutAtLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutInventoryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    users?: UserLocationUncheckedUpdateManyWithoutLocationNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutAtLocationNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutLocationNestedInput
    position?: PositionUncheckedUpdateManyWithoutAtLocationNestedInput
  }

  export type InventoryFlagUpsertWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryFlagWhereUniqueInput
    update: XOR<InventoryFlagUpdateWithoutInventoryItemInput, InventoryFlagUncheckedUpdateWithoutInventoryItemInput>
    create: XOR<InventoryFlagCreateWithoutInventoryItemInput, InventoryFlagUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryFlagUpdateWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryFlagWhereUniqueInput
    data: XOR<InventoryFlagUpdateWithoutInventoryItemInput, InventoryFlagUncheckedUpdateWithoutInventoryItemInput>
  }

  export type InventoryFlagUpdateManyWithWhereWithoutInventoryItemInput = {
    where: InventoryFlagScalarWhereInput
    data: XOR<InventoryFlagUpdateManyMutationInput, InventoryFlagUncheckedUpdateManyWithoutInventoryItemInput>
  }

  export type InventoryItemCreateWithoutInventoryFlagsInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    lowThreshold: number
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryItemUncheckedCreateWithoutInventoryFlagsInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    locationId: string
    lowThreshold: number
    updatedAt?: Date | string
  }

  export type InventoryItemCreateOrConnectWithoutInventoryFlagsInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutInventoryFlagsInput, InventoryItemUncheckedCreateWithoutInventoryFlagsInput>
  }

  export type UserCreateWithoutInventoryFlagsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestCreateNestedManyWithoutTargetUserInput
    issueReports?: IssueReportCreateNestedManyWithoutReportByInput
    ressources?: RessourceCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInventoryFlagsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutReportByInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInventoryFlagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryFlagsInput, UserUncheckedCreateWithoutInventoryFlagsInput>
  }

  export type InventoryItemUpsertWithoutInventoryFlagsInput = {
    update: XOR<InventoryItemUpdateWithoutInventoryFlagsInput, InventoryItemUncheckedUpdateWithoutInventoryFlagsInput>
    create: XOR<InventoryItemCreateWithoutInventoryFlagsInput, InventoryItemUncheckedCreateWithoutInventoryFlagsInput>
    where?: InventoryItemWhereInput
  }

  export type InventoryItemUpdateToOneWithWhereWithoutInventoryFlagsInput = {
    where?: InventoryItemWhereInput
    data: XOR<InventoryItemUpdateWithoutInventoryFlagsInput, InventoryItemUncheckedUpdateWithoutInventoryFlagsInput>
  }

  export type InventoryItemUpdateWithoutInventoryFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    lowThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutInventoryItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutInventoryFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    lowThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutInventoryFlagsInput = {
    update: XOR<UserUpdateWithoutInventoryFlagsInput, UserUncheckedUpdateWithoutInventoryFlagsInput>
    create: XOR<UserCreateWithoutInventoryFlagsInput, UserUncheckedCreateWithoutInventoryFlagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryFlagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryFlagsInput, UserUncheckedUpdateWithoutInventoryFlagsInput>
  }

  export type UserUpdateWithoutInventoryFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUpdateManyWithoutTargetUserNestedInput
    issueReports?: IssueReportUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutReportByNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIssueReportsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagCreateNestedManyWithoutFlaggedByInput
    ressources?: RessourceCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIssueReportsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagUncheckedCreateNestedManyWithoutFlaggedByInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutCreatedByInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIssueReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIssueReportsInput, UserUncheckedCreateWithoutIssueReportsInput>
  }

  export type LocationCreateWithoutIssueReportsInput = {
    id?: string
    name: string
    address: string
    phone: string
    users?: UserLocationCreateNestedManyWithoutLocationInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutLocationInput
    ressources?: RessourceCreateNestedManyWithoutLocationInput
    position?: PositionCreateNestedManyWithoutAtLocationInput
  }

  export type LocationUncheckedCreateWithoutIssueReportsInput = {
    id?: string
    name: string
    address: string
    phone: string
    users?: UserLocationUncheckedCreateNestedManyWithoutLocationInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutLocationInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutLocationInput
    position?: PositionUncheckedCreateNestedManyWithoutAtLocationInput
  }

  export type LocationCreateOrConnectWithoutIssueReportsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutIssueReportsInput, LocationUncheckedCreateWithoutIssueReportsInput>
  }

  export type UserUpsertWithoutIssueReportsInput = {
    update: XOR<UserUpdateWithoutIssueReportsInput, UserUncheckedUpdateWithoutIssueReportsInput>
    create: XOR<UserCreateWithoutIssueReportsInput, UserUncheckedCreateWithoutIssueReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIssueReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIssueReportsInput, UserUncheckedUpdateWithoutIssueReportsInput>
  }

  export type UserUpdateWithoutIssueReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUpdateManyWithoutFlaggedByNestedInput
    ressources?: RessourceUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIssueReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUncheckedUpdateManyWithoutFlaggedByNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LocationUpsertWithoutIssueReportsInput = {
    update: XOR<LocationUpdateWithoutIssueReportsInput, LocationUncheckedUpdateWithoutIssueReportsInput>
    create: XOR<LocationCreateWithoutIssueReportsInput, LocationUncheckedCreateWithoutIssueReportsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutIssueReportsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutIssueReportsInput, LocationUncheckedUpdateWithoutIssueReportsInput>
  }

  export type LocationUpdateWithoutIssueReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    users?: UserLocationUpdateManyWithoutLocationNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutLocationNestedInput
    ressources?: RessourceUpdateManyWithoutLocationNestedInput
    position?: PositionUpdateManyWithoutAtLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutIssueReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    users?: UserLocationUncheckedUpdateManyWithoutLocationNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutLocationNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutLocationNestedInput
    position?: PositionUncheckedUpdateManyWithoutAtLocationNestedInput
  }

  export type UserCreateWithoutRessourcesInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportCreateNestedManyWithoutReportByInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRessourcesInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    shiftAssignments?: ShiftAssignmentUncheckedCreateNestedManyWithoutEmployeeInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
    swapRequestsSent?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterUserInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetUserInput
    inventoryFlags?: InventoryFlagUncheckedCreateNestedManyWithoutFlaggedByInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutReportByInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRessourcesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRessourcesInput, UserUncheckedCreateWithoutRessourcesInput>
  }

  export type LocationCreateWithoutRessourcesInput = {
    id?: string
    name: string
    address: string
    phone: string
    users?: UserLocationCreateNestedManyWithoutLocationInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutLocationInput
    issueReports?: IssueReportCreateNestedManyWithoutAtLocationInput
    position?: PositionCreateNestedManyWithoutAtLocationInput
  }

  export type LocationUncheckedCreateWithoutRessourcesInput = {
    id?: string
    name: string
    address: string
    phone: string
    users?: UserLocationUncheckedCreateNestedManyWithoutLocationInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutLocationInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutAtLocationInput
    position?: PositionUncheckedCreateNestedManyWithoutAtLocationInput
  }

  export type LocationCreateOrConnectWithoutRessourcesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutRessourcesInput, LocationUncheckedCreateWithoutRessourcesInput>
  }

  export type UserUpsertWithoutRessourcesInput = {
    update: XOR<UserUpdateWithoutRessourcesInput, UserUncheckedUpdateWithoutRessourcesInput>
    create: XOR<UserCreateWithoutRessourcesInput, UserUncheckedCreateWithoutRessourcesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRessourcesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRessourcesInput, UserUncheckedUpdateWithoutRessourcesInput>
  }

  export type UserUpdateWithoutRessourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUpdateManyWithoutReportByNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRessourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftAssignments?: ShiftAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
    swapRequestsSent?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserNestedInput
    swapRequestsReceived?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserNestedInput
    inventoryFlags?: InventoryFlagUncheckedUpdateManyWithoutFlaggedByNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutReportByNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LocationUpsertWithoutRessourcesInput = {
    update: XOR<LocationUpdateWithoutRessourcesInput, LocationUncheckedUpdateWithoutRessourcesInput>
    create: XOR<LocationCreateWithoutRessourcesInput, LocationUncheckedCreateWithoutRessourcesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutRessourcesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutRessourcesInput, LocationUncheckedUpdateWithoutRessourcesInput>
  }

  export type LocationUpdateWithoutRessourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    users?: UserLocationUpdateManyWithoutLocationNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutLocationNestedInput
    issueReports?: IssueReportUpdateManyWithoutAtLocationNestedInput
    position?: PositionUpdateManyWithoutAtLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutRessourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    users?: UserLocationUncheckedUpdateManyWithoutLocationNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutLocationNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutAtLocationNestedInput
    position?: PositionUncheckedUpdateManyWithoutAtLocationNestedInput
  }

  export type LocationCreateWithoutPositionInput = {
    id?: string
    name: string
    address: string
    phone: string
    users?: UserLocationCreateNestedManyWithoutLocationInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutLocationInput
    issueReports?: IssueReportCreateNestedManyWithoutAtLocationInput
    ressources?: RessourceCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutPositionInput = {
    id?: string
    name: string
    address: string
    phone: string
    users?: UserLocationUncheckedCreateNestedManyWithoutLocationInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutLocationInput
    issueReports?: IssueReportUncheckedCreateNestedManyWithoutAtLocationInput
    ressources?: RessourceUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutPositionInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPositionInput, LocationUncheckedCreateWithoutPositionInput>
  }

  export type ShiftAssignmentCreateWithoutPositionInput = {
    id?: string
    date: Date | string
    start: string
    end: string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutShiftAssignmentsInput
    requesterShift?: ShiftSwapRequestCreateNestedManyWithoutRequesterShiftInput
    targetShift?: ShiftSwapRequestCreateNestedManyWithoutTargetShiftInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutPositionInput = {
    id?: string
    userId: string
    date: Date | string
    start: string
    end: string
    createdAt?: Date | string
    requesterShift?: ShiftSwapRequestUncheckedCreateNestedManyWithoutRequesterShiftInput
    targetShift?: ShiftSwapRequestUncheckedCreateNestedManyWithoutTargetShiftInput
  }

  export type ShiftAssignmentCreateOrConnectWithoutPositionInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutPositionInput, ShiftAssignmentUncheckedCreateWithoutPositionInput>
  }

  export type ShiftAssignmentCreateManyPositionInputEnvelope = {
    data: ShiftAssignmentCreateManyPositionInput | ShiftAssignmentCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutPositionInput = {
    update: XOR<LocationUpdateWithoutPositionInput, LocationUncheckedUpdateWithoutPositionInput>
    create: XOR<LocationCreateWithoutPositionInput, LocationUncheckedCreateWithoutPositionInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutPositionInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutPositionInput, LocationUncheckedUpdateWithoutPositionInput>
  }

  export type LocationUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    users?: UserLocationUpdateManyWithoutLocationNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutLocationNestedInput
    issueReports?: IssueReportUpdateManyWithoutAtLocationNestedInput
    ressources?: RessourceUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    users?: UserLocationUncheckedUpdateManyWithoutLocationNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutLocationNestedInput
    issueReports?: IssueReportUncheckedUpdateManyWithoutAtLocationNestedInput
    ressources?: RessourceUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type ShiftAssignmentUpsertWithWhereUniqueWithoutPositionInput = {
    where: ShiftAssignmentWhereUniqueInput
    update: XOR<ShiftAssignmentUpdateWithoutPositionInput, ShiftAssignmentUncheckedUpdateWithoutPositionInput>
    create: XOR<ShiftAssignmentCreateWithoutPositionInput, ShiftAssignmentUncheckedCreateWithoutPositionInput>
  }

  export type ShiftAssignmentUpdateWithWhereUniqueWithoutPositionInput = {
    where: ShiftAssignmentWhereUniqueInput
    data: XOR<ShiftAssignmentUpdateWithoutPositionInput, ShiftAssignmentUncheckedUpdateWithoutPositionInput>
  }

  export type ShiftAssignmentUpdateManyWithWhereWithoutPositionInput = {
    where: ShiftAssignmentScalarWhereInput
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyWithoutPositionInput>
  }

  export type UserLocationCreateManyLocationInput = {
    userId: string
    status: $Enums.Status
  }

  export type InventoryItemCreateManyLocationInput = {
    id?: string
    name: string
    quantity: number
    unit: string
    lowThreshold: number
    updatedAt?: Date | string
  }

  export type IssueReportCreateManyAtLocationInput = {
    id?: string
    userId: string
    resolvedAt?: Date | string | null
    note: string
    reportStatus: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type RessourceCreateManyLocationInput = {
    id?: string
    userId: string
    title: string
    content: string
    category: $Enums.RessourceType
    createdAt?: Date | string
  }

  export type PositionCreateManyAtLocationInput = {
    id?: string
    name: string
  }

  export type UserLocationUpdateWithoutLocationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type UserLocationUncheckedUpdateWithoutLocationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UserLocationUncheckedUpdateManyWithoutLocationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type InventoryItemUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    lowThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryFlags?: InventoryFlagUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    lowThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryFlags?: InventoryFlagUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    lowThreshold?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueReportUpdateWithoutAtLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    reportStatus?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportBy?: UserUpdateOneRequiredWithoutIssueReportsNestedInput
  }

  export type IssueReportUncheckedUpdateWithoutAtLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    reportStatus?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueReportUncheckedUpdateManyWithoutAtLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    reportStatus?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumRessourceTypeFieldUpdateOperationsInput | $Enums.RessourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutRessourcesNestedInput
  }

  export type RessourceUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumRessourceTypeFieldUpdateOperationsInput | $Enums.RessourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumRessourceTypeFieldUpdateOperationsInput | $Enums.RessourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUpdateWithoutAtLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shiftAssignments?: ShiftAssignmentUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateWithoutAtLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shiftAssignments?: ShiftAssignmentUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateManyWithoutAtLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftAssignmentCreateManyEmployeeInput = {
    id?: string
    date: Date | string
    start: string
    end: string
    positionId: string
    createdAt?: Date | string
  }

  export type UserLocationCreateManyUserInput = {
    locationId: string
    status: $Enums.Status
  }

  export type ShiftSwapRequestCreateManyRequesterUserInput = {
    id?: string
    targetId: string
    requesterShiftId: string
    targetShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date | string
  }

  export type ShiftSwapRequestCreateManyTargetUserInput = {
    id?: string
    requesterId: string
    requesterShiftId: string
    targetShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date | string
  }

  export type InventoryFlagCreateManyFlaggedByInput = {
    id?: string
    inventoryItemId: string
    note: string
    flagStatus: $Enums.FlagStatus
    createdAt: Date | string
  }

  export type IssueReportCreateManyReportByInput = {
    id?: string
    locationId: string
    resolvedAt?: Date | string | null
    note: string
    reportStatus: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type RessourceCreateManyCreatedByInput = {
    id?: string
    locationId: string
    title: string
    content: string
    category: $Enums.RessourceType
    createdAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type ShiftAssignmentUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: PositionUpdateOneRequiredWithoutShiftAssignmentsNestedInput
    requesterShift?: ShiftSwapRequestUpdateManyWithoutRequesterShiftNestedInput
    targetShift?: ShiftSwapRequestUpdateManyWithoutTargetShiftNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterShift?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterShiftNestedInput
    targetShift?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetShiftNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUpdateWithoutUserInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    location?: LocationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserLocationUncheckedUpdateWithoutUserInput = {
    locationId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UserLocationUncheckedUpdateManyWithoutUserInput = {
    locationId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ShiftSwapRequestUpdateWithoutRequesterUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetUser?: UserUpdateOneRequiredWithoutSwapRequestsReceivedNestedInput
    requesterShift?: ShiftAssignmentUpdateOneRequiredWithoutRequesterShiftNestedInput
    targetShift?: ShiftAssignmentUpdateOneRequiredWithoutTargetShiftNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateWithoutRequesterUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    requesterShiftId?: StringFieldUpdateOperationsInput | string
    targetShiftId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutRequesterUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    requesterShiftId?: StringFieldUpdateOperationsInput | string
    targetShiftId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterUser?: UserUpdateOneRequiredWithoutSwapRequestsSentNestedInput
    requesterShift?: ShiftAssignmentUpdateOneRequiredWithoutRequesterShiftNestedInput
    targetShift?: ShiftAssignmentUpdateOneRequiredWithoutTargetShiftNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    requesterShiftId?: StringFieldUpdateOperationsInput | string
    targetShiftId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    requesterShiftId?: StringFieldUpdateOperationsInput | string
    targetShiftId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryFlagUpdateWithoutFlaggedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    flagStatus?: EnumFlagStatusFieldUpdateOperationsInput | $Enums.FlagStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutInventoryFlagsNestedInput
  }

  export type InventoryFlagUncheckedUpdateWithoutFlaggedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    flagStatus?: EnumFlagStatusFieldUpdateOperationsInput | $Enums.FlagStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryFlagUncheckedUpdateManyWithoutFlaggedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    flagStatus?: EnumFlagStatusFieldUpdateOperationsInput | $Enums.FlagStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueReportUpdateWithoutReportByInput = {
    id?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    reportStatus?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atLocation?: LocationUpdateOneRequiredWithoutIssueReportsNestedInput
  }

  export type IssueReportUncheckedUpdateWithoutReportByInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    reportStatus?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueReportUncheckedUpdateManyWithoutReportByInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: StringFieldUpdateOperationsInput | string
    reportStatus?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumRessourceTypeFieldUpdateOperationsInput | $Enums.RessourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutRessourcesNestedInput
  }

  export type RessourceUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumRessourceTypeFieldUpdateOperationsInput | $Enums.RessourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumRessourceTypeFieldUpdateOperationsInput | $Enums.RessourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftSwapRequestCreateManyRequesterShiftInput = {
    id?: string
    requesterId: string
    targetId: string
    targetShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date | string
  }

  export type ShiftSwapRequestCreateManyTargetShiftInput = {
    id?: string
    requesterId: string
    targetId: string
    requesterShiftId: string
    status: $Enums.SwapStatus
    createdAt: Date | string
  }

  export type ShiftSwapRequestUpdateWithoutRequesterShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterUser?: UserUpdateOneRequiredWithoutSwapRequestsSentNestedInput
    targetUser?: UserUpdateOneRequiredWithoutSwapRequestsReceivedNestedInput
    targetShift?: ShiftAssignmentUpdateOneRequiredWithoutTargetShiftNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateWithoutRequesterShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    targetShiftId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutRequesterShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    targetShiftId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUpdateWithoutTargetShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterUser?: UserUpdateOneRequiredWithoutSwapRequestsSentNestedInput
    targetUser?: UserUpdateOneRequiredWithoutSwapRequestsReceivedNestedInput
    requesterShift?: ShiftAssignmentUpdateOneRequiredWithoutRequesterShiftNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateWithoutTargetShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    requesterShiftId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutTargetShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    requesterShiftId?: StringFieldUpdateOperationsInput | string
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryFlagCreateManyInventoryItemInput = {
    id?: string
    userId: string
    note: string
    flagStatus: $Enums.FlagStatus
    createdAt: Date | string
  }

  export type InventoryFlagUpdateWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    flagStatus?: EnumFlagStatusFieldUpdateOperationsInput | $Enums.FlagStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flaggedBy?: UserUpdateOneRequiredWithoutInventoryFlagsNestedInput
  }

  export type InventoryFlagUncheckedUpdateWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    flagStatus?: EnumFlagStatusFieldUpdateOperationsInput | $Enums.FlagStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryFlagUncheckedUpdateManyWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    flagStatus?: EnumFlagStatusFieldUpdateOperationsInput | $Enums.FlagStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftAssignmentCreateManyPositionInput = {
    id?: string
    userId: string
    date: Date | string
    start: string
    end: string
    createdAt?: Date | string
  }

  export type ShiftAssignmentUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutShiftAssignmentsNestedInput
    requesterShift?: ShiftSwapRequestUpdateManyWithoutRequesterShiftNestedInput
    targetShift?: ShiftSwapRequestUpdateManyWithoutTargetShiftNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requesterShift?: ShiftSwapRequestUncheckedUpdateManyWithoutRequesterShiftNestedInput
    targetShift?: ShiftSwapRequestUncheckedUpdateManyWithoutTargetShiftNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}