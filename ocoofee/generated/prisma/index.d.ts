
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CafeGrain
 * 
 */
export type CafeGrain = $Result.DefaultSelection<Prisma.$CafeGrainPayload>
/**
 * Model CafeMoulu
 * 
 */
export type CafeMoulu = $Result.DefaultSelection<Prisma.$CafeMouluPayload>
/**
 * Model Commande
 * 
 */
export type Commande = $Result.DefaultSelection<Prisma.$CommandePayload>
/**
 * Model CommandeItem
 * 
 */
export type CommandeItem = $Result.DefaultSelection<Prisma.$CommandeItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.cafeGrain`: Exposes CRUD operations for the **CafeGrain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CafeGrains
    * const cafeGrains = await prisma.cafeGrain.findMany()
    * ```
    */
  get cafeGrain(): Prisma.CafeGrainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cafeMoulu`: Exposes CRUD operations for the **CafeMoulu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CafeMoulus
    * const cafeMoulus = await prisma.cafeMoulu.findMany()
    * ```
    */
  get cafeMoulu(): Prisma.CafeMouluDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commande`: Exposes CRUD operations for the **Commande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commandes
    * const commandes = await prisma.commande.findMany()
    * ```
    */
  get commande(): Prisma.CommandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commandeItem`: Exposes CRUD operations for the **CommandeItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommandeItems
    * const commandeItems = await prisma.commandeItem.findMany()
    * ```
    */
  get commandeItem(): Prisma.CommandeItemDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    CafeGrain: 'CafeGrain',
    CafeMoulu: 'CafeMoulu',
    Commande: 'Commande',
    CommandeItem: 'CommandeItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cafeGrain" | "cafeMoulu" | "commande" | "commandeItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      CafeGrain: {
        payload: Prisma.$CafeGrainPayload<ExtArgs>
        fields: Prisma.CafeGrainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CafeGrainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeGrainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CafeGrainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeGrainPayload>
          }
          findFirst: {
            args: Prisma.CafeGrainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeGrainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CafeGrainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeGrainPayload>
          }
          findMany: {
            args: Prisma.CafeGrainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeGrainPayload>[]
          }
          create: {
            args: Prisma.CafeGrainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeGrainPayload>
          }
          createMany: {
            args: Prisma.CafeGrainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CafeGrainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeGrainPayload>
          }
          update: {
            args: Prisma.CafeGrainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeGrainPayload>
          }
          deleteMany: {
            args: Prisma.CafeGrainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CafeGrainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CafeGrainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeGrainPayload>
          }
          aggregate: {
            args: Prisma.CafeGrainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCafeGrain>
          }
          groupBy: {
            args: Prisma.CafeGrainGroupByArgs<ExtArgs>
            result: $Utils.Optional<CafeGrainGroupByOutputType>[]
          }
          count: {
            args: Prisma.CafeGrainCountArgs<ExtArgs>
            result: $Utils.Optional<CafeGrainCountAggregateOutputType> | number
          }
        }
      }
      CafeMoulu: {
        payload: Prisma.$CafeMouluPayload<ExtArgs>
        fields: Prisma.CafeMouluFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CafeMouluFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeMouluPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CafeMouluFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeMouluPayload>
          }
          findFirst: {
            args: Prisma.CafeMouluFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeMouluPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CafeMouluFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeMouluPayload>
          }
          findMany: {
            args: Prisma.CafeMouluFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeMouluPayload>[]
          }
          create: {
            args: Prisma.CafeMouluCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeMouluPayload>
          }
          createMany: {
            args: Prisma.CafeMouluCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CafeMouluDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeMouluPayload>
          }
          update: {
            args: Prisma.CafeMouluUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeMouluPayload>
          }
          deleteMany: {
            args: Prisma.CafeMouluDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CafeMouluUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CafeMouluUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeMouluPayload>
          }
          aggregate: {
            args: Prisma.CafeMouluAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCafeMoulu>
          }
          groupBy: {
            args: Prisma.CafeMouluGroupByArgs<ExtArgs>
            result: $Utils.Optional<CafeMouluGroupByOutputType>[]
          }
          count: {
            args: Prisma.CafeMouluCountArgs<ExtArgs>
            result: $Utils.Optional<CafeMouluCountAggregateOutputType> | number
          }
        }
      }
      Commande: {
        payload: Prisma.$CommandePayload<ExtArgs>
        fields: Prisma.CommandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findFirst: {
            args: Prisma.CommandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findMany: {
            args: Prisma.CommandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          create: {
            args: Prisma.CommandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          createMany: {
            args: Prisma.CommandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          update: {
            args: Prisma.CommandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          deleteMany: {
            args: Prisma.CommandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          aggregate: {
            args: Prisma.CommandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommande>
          }
          groupBy: {
            args: Prisma.CommandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandeCountArgs<ExtArgs>
            result: $Utils.Optional<CommandeCountAggregateOutputType> | number
          }
        }
      }
      CommandeItem: {
        payload: Prisma.$CommandeItemPayload<ExtArgs>
        fields: Prisma.CommandeItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandeItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandeItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandeItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandeItemPayload>
          }
          findFirst: {
            args: Prisma.CommandeItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandeItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandeItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandeItemPayload>
          }
          findMany: {
            args: Prisma.CommandeItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandeItemPayload>[]
          }
          create: {
            args: Prisma.CommandeItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandeItemPayload>
          }
          createMany: {
            args: Prisma.CommandeItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommandeItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandeItemPayload>
          }
          update: {
            args: Prisma.CommandeItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandeItemPayload>
          }
          deleteMany: {
            args: Prisma.CommandeItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandeItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommandeItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandeItemPayload>
          }
          aggregate: {
            args: Prisma.CommandeItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommandeItem>
          }
          groupBy: {
            args: Prisma.CommandeItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandeItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandeItemCountArgs<ExtArgs>
            result: $Utils.Optional<CommandeItemCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cafeGrain?: CafeGrainOmit
    cafeMoulu?: CafeMouluOmit
    commande?: CommandeOmit
    commandeItem?: CommandeItemOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    commandes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | UserCountOutputTypeCountCommandesArgs
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
  export type UserCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }


  /**
   * Count Type CafeGrainCountOutputType
   */

  export type CafeGrainCountOutputType = {
    items: number
  }

  export type CafeGrainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CafeGrainCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CafeGrainCountOutputType without action
   */
  export type CafeGrainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrainCountOutputType
     */
    select?: CafeGrainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CafeGrainCountOutputType without action
   */
  export type CafeGrainCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeItemWhereInput
  }


  /**
   * Count Type CafeMouluCountOutputType
   */

  export type CafeMouluCountOutputType = {
    items: number
  }

  export type CafeMouluCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CafeMouluCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CafeMouluCountOutputType without action
   */
  export type CafeMouluCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMouluCountOutputType
     */
    select?: CafeMouluCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CafeMouluCountOutputType without action
   */
  export type CafeMouluCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeItemWhereInput
  }


  /**
   * Count Type CommandeCountOutputType
   */

  export type CommandeCountOutputType = {
    items: number
  }

  export type CommandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CommandeCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeCountOutputType
     */
    select?: CommandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    pass: string | null
    role: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    pass: string | null
    role: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    prenom: number
    nom: number
    email: number
    pass: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    pass?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    pass?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    pass?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    prenom: string
    nom: string
    email: string
    pass: string
    role: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    prenom?: boolean
    nom?: boolean
    email?: boolean
    pass?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commandes?: boolean | User$commandesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    pass?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prenom" | "nom" | "email" | "pass" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | User$commandesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      commandes: Prisma.$CommandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prenom: string
      nom: string
      email: string
      pass: string
      role: boolean
      createdAt: Date
      updatedAt: Date
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
    commandes<T extends User$commandesArgs<ExtArgs> = {}>(args?: Subset<T, User$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly pass: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.commandes
   */
  export type User$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
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
   * Model CafeGrain
   */

  export type AggregateCafeGrain = {
    _count: CafeGrainCountAggregateOutputType | null
    _avg: CafeGrainAvgAggregateOutputType | null
    _sum: CafeGrainSumAggregateOutputType | null
    _min: CafeGrainMinAggregateOutputType | null
    _max: CafeGrainMaxAggregateOutputType | null
  }

  export type CafeGrainAvgAggregateOutputType = {
    id: number | null
    prix: number | null
  }

  export type CafeGrainSumAggregateOutputType = {
    id: number | null
    prix: number | null
  }

  export type CafeGrainMinAggregateOutputType = {
    id: number | null
    nom: string | null
    type: string | null
    origine: string | null
    quantite: string | null
    description: string | null
    prix: number | null
    image: string | null
  }

  export type CafeGrainMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    type: string | null
    origine: string | null
    quantite: string | null
    description: string | null
    prix: number | null
    image: string | null
  }

  export type CafeGrainCountAggregateOutputType = {
    id: number
    nom: number
    type: number
    origine: number
    quantite: number
    description: number
    prix: number
    image: number
    _all: number
  }


  export type CafeGrainAvgAggregateInputType = {
    id?: true
    prix?: true
  }

  export type CafeGrainSumAggregateInputType = {
    id?: true
    prix?: true
  }

  export type CafeGrainMinAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    origine?: true
    quantite?: true
    description?: true
    prix?: true
    image?: true
  }

  export type CafeGrainMaxAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    origine?: true
    quantite?: true
    description?: true
    prix?: true
    image?: true
  }

  export type CafeGrainCountAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    origine?: true
    quantite?: true
    description?: true
    prix?: true
    image?: true
    _all?: true
  }

  export type CafeGrainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CafeGrain to aggregate.
     */
    where?: CafeGrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeGrains to fetch.
     */
    orderBy?: CafeGrainOrderByWithRelationInput | CafeGrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CafeGrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeGrains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeGrains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CafeGrains
    **/
    _count?: true | CafeGrainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CafeGrainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CafeGrainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CafeGrainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CafeGrainMaxAggregateInputType
  }

  export type GetCafeGrainAggregateType<T extends CafeGrainAggregateArgs> = {
        [P in keyof T & keyof AggregateCafeGrain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCafeGrain[P]>
      : GetScalarType<T[P], AggregateCafeGrain[P]>
  }




  export type CafeGrainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CafeGrainWhereInput
    orderBy?: CafeGrainOrderByWithAggregationInput | CafeGrainOrderByWithAggregationInput[]
    by: CafeGrainScalarFieldEnum[] | CafeGrainScalarFieldEnum
    having?: CafeGrainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CafeGrainCountAggregateInputType | true
    _avg?: CafeGrainAvgAggregateInputType
    _sum?: CafeGrainSumAggregateInputType
    _min?: CafeGrainMinAggregateInputType
    _max?: CafeGrainMaxAggregateInputType
  }

  export type CafeGrainGroupByOutputType = {
    id: number
    nom: string
    type: string | null
    origine: string | null
    quantite: string | null
    description: string | null
    prix: number | null
    image: string | null
    _count: CafeGrainCountAggregateOutputType | null
    _avg: CafeGrainAvgAggregateOutputType | null
    _sum: CafeGrainSumAggregateOutputType | null
    _min: CafeGrainMinAggregateOutputType | null
    _max: CafeGrainMaxAggregateOutputType | null
  }

  type GetCafeGrainGroupByPayload<T extends CafeGrainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CafeGrainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CafeGrainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CafeGrainGroupByOutputType[P]>
            : GetScalarType<T[P], CafeGrainGroupByOutputType[P]>
        }
      >
    >


  export type CafeGrainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    type?: boolean
    origine?: boolean
    quantite?: boolean
    description?: boolean
    prix?: boolean
    image?: boolean
    items?: boolean | CafeGrain$itemsArgs<ExtArgs>
    _count?: boolean | CafeGrainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cafeGrain"]>



  export type CafeGrainSelectScalar = {
    id?: boolean
    nom?: boolean
    type?: boolean
    origine?: boolean
    quantite?: boolean
    description?: boolean
    prix?: boolean
    image?: boolean
  }

  export type CafeGrainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "type" | "origine" | "quantite" | "description" | "prix" | "image", ExtArgs["result"]["cafeGrain"]>
  export type CafeGrainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CafeGrain$itemsArgs<ExtArgs>
    _count?: boolean | CafeGrainCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CafeGrainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CafeGrain"
    objects: {
      items: Prisma.$CommandeItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      type: string | null
      origine: string | null
      quantite: string | null
      description: string | null
      prix: number | null
      image: string | null
    }, ExtArgs["result"]["cafeGrain"]>
    composites: {}
  }

  type CafeGrainGetPayload<S extends boolean | null | undefined | CafeGrainDefaultArgs> = $Result.GetResult<Prisma.$CafeGrainPayload, S>

  type CafeGrainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CafeGrainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CafeGrainCountAggregateInputType | true
    }

  export interface CafeGrainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CafeGrain'], meta: { name: 'CafeGrain' } }
    /**
     * Find zero or one CafeGrain that matches the filter.
     * @param {CafeGrainFindUniqueArgs} args - Arguments to find a CafeGrain
     * @example
     * // Get one CafeGrain
     * const cafeGrain = await prisma.cafeGrain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CafeGrainFindUniqueArgs>(args: SelectSubset<T, CafeGrainFindUniqueArgs<ExtArgs>>): Prisma__CafeGrainClient<$Result.GetResult<Prisma.$CafeGrainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CafeGrain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CafeGrainFindUniqueOrThrowArgs} args - Arguments to find a CafeGrain
     * @example
     * // Get one CafeGrain
     * const cafeGrain = await prisma.cafeGrain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CafeGrainFindUniqueOrThrowArgs>(args: SelectSubset<T, CafeGrainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CafeGrainClient<$Result.GetResult<Prisma.$CafeGrainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CafeGrain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeGrainFindFirstArgs} args - Arguments to find a CafeGrain
     * @example
     * // Get one CafeGrain
     * const cafeGrain = await prisma.cafeGrain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CafeGrainFindFirstArgs>(args?: SelectSubset<T, CafeGrainFindFirstArgs<ExtArgs>>): Prisma__CafeGrainClient<$Result.GetResult<Prisma.$CafeGrainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CafeGrain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeGrainFindFirstOrThrowArgs} args - Arguments to find a CafeGrain
     * @example
     * // Get one CafeGrain
     * const cafeGrain = await prisma.cafeGrain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CafeGrainFindFirstOrThrowArgs>(args?: SelectSubset<T, CafeGrainFindFirstOrThrowArgs<ExtArgs>>): Prisma__CafeGrainClient<$Result.GetResult<Prisma.$CafeGrainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CafeGrains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeGrainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CafeGrains
     * const cafeGrains = await prisma.cafeGrain.findMany()
     * 
     * // Get first 10 CafeGrains
     * const cafeGrains = await prisma.cafeGrain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cafeGrainWithIdOnly = await prisma.cafeGrain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CafeGrainFindManyArgs>(args?: SelectSubset<T, CafeGrainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CafeGrainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CafeGrain.
     * @param {CafeGrainCreateArgs} args - Arguments to create a CafeGrain.
     * @example
     * // Create one CafeGrain
     * const CafeGrain = await prisma.cafeGrain.create({
     *   data: {
     *     // ... data to create a CafeGrain
     *   }
     * })
     * 
     */
    create<T extends CafeGrainCreateArgs>(args: SelectSubset<T, CafeGrainCreateArgs<ExtArgs>>): Prisma__CafeGrainClient<$Result.GetResult<Prisma.$CafeGrainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CafeGrains.
     * @param {CafeGrainCreateManyArgs} args - Arguments to create many CafeGrains.
     * @example
     * // Create many CafeGrains
     * const cafeGrain = await prisma.cafeGrain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CafeGrainCreateManyArgs>(args?: SelectSubset<T, CafeGrainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CafeGrain.
     * @param {CafeGrainDeleteArgs} args - Arguments to delete one CafeGrain.
     * @example
     * // Delete one CafeGrain
     * const CafeGrain = await prisma.cafeGrain.delete({
     *   where: {
     *     // ... filter to delete one CafeGrain
     *   }
     * })
     * 
     */
    delete<T extends CafeGrainDeleteArgs>(args: SelectSubset<T, CafeGrainDeleteArgs<ExtArgs>>): Prisma__CafeGrainClient<$Result.GetResult<Prisma.$CafeGrainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CafeGrain.
     * @param {CafeGrainUpdateArgs} args - Arguments to update one CafeGrain.
     * @example
     * // Update one CafeGrain
     * const cafeGrain = await prisma.cafeGrain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CafeGrainUpdateArgs>(args: SelectSubset<T, CafeGrainUpdateArgs<ExtArgs>>): Prisma__CafeGrainClient<$Result.GetResult<Prisma.$CafeGrainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CafeGrains.
     * @param {CafeGrainDeleteManyArgs} args - Arguments to filter CafeGrains to delete.
     * @example
     * // Delete a few CafeGrains
     * const { count } = await prisma.cafeGrain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CafeGrainDeleteManyArgs>(args?: SelectSubset<T, CafeGrainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CafeGrains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeGrainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CafeGrains
     * const cafeGrain = await prisma.cafeGrain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CafeGrainUpdateManyArgs>(args: SelectSubset<T, CafeGrainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CafeGrain.
     * @param {CafeGrainUpsertArgs} args - Arguments to update or create a CafeGrain.
     * @example
     * // Update or create a CafeGrain
     * const cafeGrain = await prisma.cafeGrain.upsert({
     *   create: {
     *     // ... data to create a CafeGrain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CafeGrain we want to update
     *   }
     * })
     */
    upsert<T extends CafeGrainUpsertArgs>(args: SelectSubset<T, CafeGrainUpsertArgs<ExtArgs>>): Prisma__CafeGrainClient<$Result.GetResult<Prisma.$CafeGrainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CafeGrains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeGrainCountArgs} args - Arguments to filter CafeGrains to count.
     * @example
     * // Count the number of CafeGrains
     * const count = await prisma.cafeGrain.count({
     *   where: {
     *     // ... the filter for the CafeGrains we want to count
     *   }
     * })
    **/
    count<T extends CafeGrainCountArgs>(
      args?: Subset<T, CafeGrainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CafeGrainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CafeGrain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeGrainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CafeGrainAggregateArgs>(args: Subset<T, CafeGrainAggregateArgs>): Prisma.PrismaPromise<GetCafeGrainAggregateType<T>>

    /**
     * Group by CafeGrain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeGrainGroupByArgs} args - Group by arguments.
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
      T extends CafeGrainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CafeGrainGroupByArgs['orderBy'] }
        : { orderBy?: CafeGrainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CafeGrainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCafeGrainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CafeGrain model
   */
  readonly fields: CafeGrainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CafeGrain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CafeGrainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends CafeGrain$itemsArgs<ExtArgs> = {}>(args?: Subset<T, CafeGrain$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CafeGrain model
   */
  interface CafeGrainFieldRefs {
    readonly id: FieldRef<"CafeGrain", 'Int'>
    readonly nom: FieldRef<"CafeGrain", 'String'>
    readonly type: FieldRef<"CafeGrain", 'String'>
    readonly origine: FieldRef<"CafeGrain", 'String'>
    readonly quantite: FieldRef<"CafeGrain", 'String'>
    readonly description: FieldRef<"CafeGrain", 'String'>
    readonly prix: FieldRef<"CafeGrain", 'Float'>
    readonly image: FieldRef<"CafeGrain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CafeGrain findUnique
   */
  export type CafeGrainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
    /**
     * Filter, which CafeGrain to fetch.
     */
    where: CafeGrainWhereUniqueInput
  }

  /**
   * CafeGrain findUniqueOrThrow
   */
  export type CafeGrainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
    /**
     * Filter, which CafeGrain to fetch.
     */
    where: CafeGrainWhereUniqueInput
  }

  /**
   * CafeGrain findFirst
   */
  export type CafeGrainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
    /**
     * Filter, which CafeGrain to fetch.
     */
    where?: CafeGrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeGrains to fetch.
     */
    orderBy?: CafeGrainOrderByWithRelationInput | CafeGrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeGrains.
     */
    cursor?: CafeGrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeGrains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeGrains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeGrains.
     */
    distinct?: CafeGrainScalarFieldEnum | CafeGrainScalarFieldEnum[]
  }

  /**
   * CafeGrain findFirstOrThrow
   */
  export type CafeGrainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
    /**
     * Filter, which CafeGrain to fetch.
     */
    where?: CafeGrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeGrains to fetch.
     */
    orderBy?: CafeGrainOrderByWithRelationInput | CafeGrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeGrains.
     */
    cursor?: CafeGrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeGrains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeGrains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeGrains.
     */
    distinct?: CafeGrainScalarFieldEnum | CafeGrainScalarFieldEnum[]
  }

  /**
   * CafeGrain findMany
   */
  export type CafeGrainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
    /**
     * Filter, which CafeGrains to fetch.
     */
    where?: CafeGrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeGrains to fetch.
     */
    orderBy?: CafeGrainOrderByWithRelationInput | CafeGrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CafeGrains.
     */
    cursor?: CafeGrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeGrains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeGrains.
     */
    skip?: number
    distinct?: CafeGrainScalarFieldEnum | CafeGrainScalarFieldEnum[]
  }

  /**
   * CafeGrain create
   */
  export type CafeGrainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
    /**
     * The data needed to create a CafeGrain.
     */
    data: XOR<CafeGrainCreateInput, CafeGrainUncheckedCreateInput>
  }

  /**
   * CafeGrain createMany
   */
  export type CafeGrainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CafeGrains.
     */
    data: CafeGrainCreateManyInput | CafeGrainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CafeGrain update
   */
  export type CafeGrainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
    /**
     * The data needed to update a CafeGrain.
     */
    data: XOR<CafeGrainUpdateInput, CafeGrainUncheckedUpdateInput>
    /**
     * Choose, which CafeGrain to update.
     */
    where: CafeGrainWhereUniqueInput
  }

  /**
   * CafeGrain updateMany
   */
  export type CafeGrainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CafeGrains.
     */
    data: XOR<CafeGrainUpdateManyMutationInput, CafeGrainUncheckedUpdateManyInput>
    /**
     * Filter which CafeGrains to update
     */
    where?: CafeGrainWhereInput
    /**
     * Limit how many CafeGrains to update.
     */
    limit?: number
  }

  /**
   * CafeGrain upsert
   */
  export type CafeGrainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
    /**
     * The filter to search for the CafeGrain to update in case it exists.
     */
    where: CafeGrainWhereUniqueInput
    /**
     * In case the CafeGrain found by the `where` argument doesn't exist, create a new CafeGrain with this data.
     */
    create: XOR<CafeGrainCreateInput, CafeGrainUncheckedCreateInput>
    /**
     * In case the CafeGrain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CafeGrainUpdateInput, CafeGrainUncheckedUpdateInput>
  }

  /**
   * CafeGrain delete
   */
  export type CafeGrainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
    /**
     * Filter which CafeGrain to delete.
     */
    where: CafeGrainWhereUniqueInput
  }

  /**
   * CafeGrain deleteMany
   */
  export type CafeGrainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CafeGrains to delete
     */
    where?: CafeGrainWhereInput
    /**
     * Limit how many CafeGrains to delete.
     */
    limit?: number
  }

  /**
   * CafeGrain.items
   */
  export type CafeGrain$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    where?: CommandeItemWhereInput
    orderBy?: CommandeItemOrderByWithRelationInput | CommandeItemOrderByWithRelationInput[]
    cursor?: CommandeItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeItemScalarFieldEnum | CommandeItemScalarFieldEnum[]
  }

  /**
   * CafeGrain without action
   */
  export type CafeGrainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
  }


  /**
   * Model CafeMoulu
   */

  export type AggregateCafeMoulu = {
    _count: CafeMouluCountAggregateOutputType | null
    _avg: CafeMouluAvgAggregateOutputType | null
    _sum: CafeMouluSumAggregateOutputType | null
    _min: CafeMouluMinAggregateOutputType | null
    _max: CafeMouluMaxAggregateOutputType | null
  }

  export type CafeMouluAvgAggregateOutputType = {
    id: number | null
    prix: number | null
  }

  export type CafeMouluSumAggregateOutputType = {
    id: number | null
    prix: number | null
  }

  export type CafeMouluMinAggregateOutputType = {
    id: number | null
    nom: string | null
    type: string | null
    origine: string | null
    quantite: string | null
    description: string | null
    prix: number | null
    image: string | null
  }

  export type CafeMouluMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    type: string | null
    origine: string | null
    quantite: string | null
    description: string | null
    prix: number | null
    image: string | null
  }

  export type CafeMouluCountAggregateOutputType = {
    id: number
    nom: number
    type: number
    origine: number
    quantite: number
    description: number
    prix: number
    image: number
    _all: number
  }


  export type CafeMouluAvgAggregateInputType = {
    id?: true
    prix?: true
  }

  export type CafeMouluSumAggregateInputType = {
    id?: true
    prix?: true
  }

  export type CafeMouluMinAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    origine?: true
    quantite?: true
    description?: true
    prix?: true
    image?: true
  }

  export type CafeMouluMaxAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    origine?: true
    quantite?: true
    description?: true
    prix?: true
    image?: true
  }

  export type CafeMouluCountAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    origine?: true
    quantite?: true
    description?: true
    prix?: true
    image?: true
    _all?: true
  }

  export type CafeMouluAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CafeMoulu to aggregate.
     */
    where?: CafeMouluWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeMoulus to fetch.
     */
    orderBy?: CafeMouluOrderByWithRelationInput | CafeMouluOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CafeMouluWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeMoulus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeMoulus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CafeMoulus
    **/
    _count?: true | CafeMouluCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CafeMouluAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CafeMouluSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CafeMouluMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CafeMouluMaxAggregateInputType
  }

  export type GetCafeMouluAggregateType<T extends CafeMouluAggregateArgs> = {
        [P in keyof T & keyof AggregateCafeMoulu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCafeMoulu[P]>
      : GetScalarType<T[P], AggregateCafeMoulu[P]>
  }




  export type CafeMouluGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CafeMouluWhereInput
    orderBy?: CafeMouluOrderByWithAggregationInput | CafeMouluOrderByWithAggregationInput[]
    by: CafeMouluScalarFieldEnum[] | CafeMouluScalarFieldEnum
    having?: CafeMouluScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CafeMouluCountAggregateInputType | true
    _avg?: CafeMouluAvgAggregateInputType
    _sum?: CafeMouluSumAggregateInputType
    _min?: CafeMouluMinAggregateInputType
    _max?: CafeMouluMaxAggregateInputType
  }

  export type CafeMouluGroupByOutputType = {
    id: number
    nom: string
    type: string | null
    origine: string | null
    quantite: string | null
    description: string | null
    prix: number | null
    image: string | null
    _count: CafeMouluCountAggregateOutputType | null
    _avg: CafeMouluAvgAggregateOutputType | null
    _sum: CafeMouluSumAggregateOutputType | null
    _min: CafeMouluMinAggregateOutputType | null
    _max: CafeMouluMaxAggregateOutputType | null
  }

  type GetCafeMouluGroupByPayload<T extends CafeMouluGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CafeMouluGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CafeMouluGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CafeMouluGroupByOutputType[P]>
            : GetScalarType<T[P], CafeMouluGroupByOutputType[P]>
        }
      >
    >


  export type CafeMouluSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    type?: boolean
    origine?: boolean
    quantite?: boolean
    description?: boolean
    prix?: boolean
    image?: boolean
    items?: boolean | CafeMoulu$itemsArgs<ExtArgs>
    _count?: boolean | CafeMouluCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cafeMoulu"]>



  export type CafeMouluSelectScalar = {
    id?: boolean
    nom?: boolean
    type?: boolean
    origine?: boolean
    quantite?: boolean
    description?: boolean
    prix?: boolean
    image?: boolean
  }

  export type CafeMouluOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "type" | "origine" | "quantite" | "description" | "prix" | "image", ExtArgs["result"]["cafeMoulu"]>
  export type CafeMouluInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CafeMoulu$itemsArgs<ExtArgs>
    _count?: boolean | CafeMouluCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CafeMouluPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CafeMoulu"
    objects: {
      items: Prisma.$CommandeItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      type: string | null
      origine: string | null
      quantite: string | null
      description: string | null
      prix: number | null
      image: string | null
    }, ExtArgs["result"]["cafeMoulu"]>
    composites: {}
  }

  type CafeMouluGetPayload<S extends boolean | null | undefined | CafeMouluDefaultArgs> = $Result.GetResult<Prisma.$CafeMouluPayload, S>

  type CafeMouluCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CafeMouluFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CafeMouluCountAggregateInputType | true
    }

  export interface CafeMouluDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CafeMoulu'], meta: { name: 'CafeMoulu' } }
    /**
     * Find zero or one CafeMoulu that matches the filter.
     * @param {CafeMouluFindUniqueArgs} args - Arguments to find a CafeMoulu
     * @example
     * // Get one CafeMoulu
     * const cafeMoulu = await prisma.cafeMoulu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CafeMouluFindUniqueArgs>(args: SelectSubset<T, CafeMouluFindUniqueArgs<ExtArgs>>): Prisma__CafeMouluClient<$Result.GetResult<Prisma.$CafeMouluPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CafeMoulu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CafeMouluFindUniqueOrThrowArgs} args - Arguments to find a CafeMoulu
     * @example
     * // Get one CafeMoulu
     * const cafeMoulu = await prisma.cafeMoulu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CafeMouluFindUniqueOrThrowArgs>(args: SelectSubset<T, CafeMouluFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CafeMouluClient<$Result.GetResult<Prisma.$CafeMouluPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CafeMoulu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeMouluFindFirstArgs} args - Arguments to find a CafeMoulu
     * @example
     * // Get one CafeMoulu
     * const cafeMoulu = await prisma.cafeMoulu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CafeMouluFindFirstArgs>(args?: SelectSubset<T, CafeMouluFindFirstArgs<ExtArgs>>): Prisma__CafeMouluClient<$Result.GetResult<Prisma.$CafeMouluPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CafeMoulu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeMouluFindFirstOrThrowArgs} args - Arguments to find a CafeMoulu
     * @example
     * // Get one CafeMoulu
     * const cafeMoulu = await prisma.cafeMoulu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CafeMouluFindFirstOrThrowArgs>(args?: SelectSubset<T, CafeMouluFindFirstOrThrowArgs<ExtArgs>>): Prisma__CafeMouluClient<$Result.GetResult<Prisma.$CafeMouluPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CafeMoulus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeMouluFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CafeMoulus
     * const cafeMoulus = await prisma.cafeMoulu.findMany()
     * 
     * // Get first 10 CafeMoulus
     * const cafeMoulus = await prisma.cafeMoulu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cafeMouluWithIdOnly = await prisma.cafeMoulu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CafeMouluFindManyArgs>(args?: SelectSubset<T, CafeMouluFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CafeMouluPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CafeMoulu.
     * @param {CafeMouluCreateArgs} args - Arguments to create a CafeMoulu.
     * @example
     * // Create one CafeMoulu
     * const CafeMoulu = await prisma.cafeMoulu.create({
     *   data: {
     *     // ... data to create a CafeMoulu
     *   }
     * })
     * 
     */
    create<T extends CafeMouluCreateArgs>(args: SelectSubset<T, CafeMouluCreateArgs<ExtArgs>>): Prisma__CafeMouluClient<$Result.GetResult<Prisma.$CafeMouluPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CafeMoulus.
     * @param {CafeMouluCreateManyArgs} args - Arguments to create many CafeMoulus.
     * @example
     * // Create many CafeMoulus
     * const cafeMoulu = await prisma.cafeMoulu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CafeMouluCreateManyArgs>(args?: SelectSubset<T, CafeMouluCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CafeMoulu.
     * @param {CafeMouluDeleteArgs} args - Arguments to delete one CafeMoulu.
     * @example
     * // Delete one CafeMoulu
     * const CafeMoulu = await prisma.cafeMoulu.delete({
     *   where: {
     *     // ... filter to delete one CafeMoulu
     *   }
     * })
     * 
     */
    delete<T extends CafeMouluDeleteArgs>(args: SelectSubset<T, CafeMouluDeleteArgs<ExtArgs>>): Prisma__CafeMouluClient<$Result.GetResult<Prisma.$CafeMouluPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CafeMoulu.
     * @param {CafeMouluUpdateArgs} args - Arguments to update one CafeMoulu.
     * @example
     * // Update one CafeMoulu
     * const cafeMoulu = await prisma.cafeMoulu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CafeMouluUpdateArgs>(args: SelectSubset<T, CafeMouluUpdateArgs<ExtArgs>>): Prisma__CafeMouluClient<$Result.GetResult<Prisma.$CafeMouluPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CafeMoulus.
     * @param {CafeMouluDeleteManyArgs} args - Arguments to filter CafeMoulus to delete.
     * @example
     * // Delete a few CafeMoulus
     * const { count } = await prisma.cafeMoulu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CafeMouluDeleteManyArgs>(args?: SelectSubset<T, CafeMouluDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CafeMoulus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeMouluUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CafeMoulus
     * const cafeMoulu = await prisma.cafeMoulu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CafeMouluUpdateManyArgs>(args: SelectSubset<T, CafeMouluUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CafeMoulu.
     * @param {CafeMouluUpsertArgs} args - Arguments to update or create a CafeMoulu.
     * @example
     * // Update or create a CafeMoulu
     * const cafeMoulu = await prisma.cafeMoulu.upsert({
     *   create: {
     *     // ... data to create a CafeMoulu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CafeMoulu we want to update
     *   }
     * })
     */
    upsert<T extends CafeMouluUpsertArgs>(args: SelectSubset<T, CafeMouluUpsertArgs<ExtArgs>>): Prisma__CafeMouluClient<$Result.GetResult<Prisma.$CafeMouluPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CafeMoulus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeMouluCountArgs} args - Arguments to filter CafeMoulus to count.
     * @example
     * // Count the number of CafeMoulus
     * const count = await prisma.cafeMoulu.count({
     *   where: {
     *     // ... the filter for the CafeMoulus we want to count
     *   }
     * })
    **/
    count<T extends CafeMouluCountArgs>(
      args?: Subset<T, CafeMouluCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CafeMouluCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CafeMoulu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeMouluAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CafeMouluAggregateArgs>(args: Subset<T, CafeMouluAggregateArgs>): Prisma.PrismaPromise<GetCafeMouluAggregateType<T>>

    /**
     * Group by CafeMoulu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeMouluGroupByArgs} args - Group by arguments.
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
      T extends CafeMouluGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CafeMouluGroupByArgs['orderBy'] }
        : { orderBy?: CafeMouluGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CafeMouluGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCafeMouluGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CafeMoulu model
   */
  readonly fields: CafeMouluFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CafeMoulu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CafeMouluClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends CafeMoulu$itemsArgs<ExtArgs> = {}>(args?: Subset<T, CafeMoulu$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CafeMoulu model
   */
  interface CafeMouluFieldRefs {
    readonly id: FieldRef<"CafeMoulu", 'Int'>
    readonly nom: FieldRef<"CafeMoulu", 'String'>
    readonly type: FieldRef<"CafeMoulu", 'String'>
    readonly origine: FieldRef<"CafeMoulu", 'String'>
    readonly quantite: FieldRef<"CafeMoulu", 'String'>
    readonly description: FieldRef<"CafeMoulu", 'String'>
    readonly prix: FieldRef<"CafeMoulu", 'Float'>
    readonly image: FieldRef<"CafeMoulu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CafeMoulu findUnique
   */
  export type CafeMouluFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
    /**
     * Filter, which CafeMoulu to fetch.
     */
    where: CafeMouluWhereUniqueInput
  }

  /**
   * CafeMoulu findUniqueOrThrow
   */
  export type CafeMouluFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
    /**
     * Filter, which CafeMoulu to fetch.
     */
    where: CafeMouluWhereUniqueInput
  }

  /**
   * CafeMoulu findFirst
   */
  export type CafeMouluFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
    /**
     * Filter, which CafeMoulu to fetch.
     */
    where?: CafeMouluWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeMoulus to fetch.
     */
    orderBy?: CafeMouluOrderByWithRelationInput | CafeMouluOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeMoulus.
     */
    cursor?: CafeMouluWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeMoulus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeMoulus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeMoulus.
     */
    distinct?: CafeMouluScalarFieldEnum | CafeMouluScalarFieldEnum[]
  }

  /**
   * CafeMoulu findFirstOrThrow
   */
  export type CafeMouluFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
    /**
     * Filter, which CafeMoulu to fetch.
     */
    where?: CafeMouluWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeMoulus to fetch.
     */
    orderBy?: CafeMouluOrderByWithRelationInput | CafeMouluOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeMoulus.
     */
    cursor?: CafeMouluWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeMoulus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeMoulus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeMoulus.
     */
    distinct?: CafeMouluScalarFieldEnum | CafeMouluScalarFieldEnum[]
  }

  /**
   * CafeMoulu findMany
   */
  export type CafeMouluFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
    /**
     * Filter, which CafeMoulus to fetch.
     */
    where?: CafeMouluWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeMoulus to fetch.
     */
    orderBy?: CafeMouluOrderByWithRelationInput | CafeMouluOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CafeMoulus.
     */
    cursor?: CafeMouluWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeMoulus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeMoulus.
     */
    skip?: number
    distinct?: CafeMouluScalarFieldEnum | CafeMouluScalarFieldEnum[]
  }

  /**
   * CafeMoulu create
   */
  export type CafeMouluCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
    /**
     * The data needed to create a CafeMoulu.
     */
    data: XOR<CafeMouluCreateInput, CafeMouluUncheckedCreateInput>
  }

  /**
   * CafeMoulu createMany
   */
  export type CafeMouluCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CafeMoulus.
     */
    data: CafeMouluCreateManyInput | CafeMouluCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CafeMoulu update
   */
  export type CafeMouluUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
    /**
     * The data needed to update a CafeMoulu.
     */
    data: XOR<CafeMouluUpdateInput, CafeMouluUncheckedUpdateInput>
    /**
     * Choose, which CafeMoulu to update.
     */
    where: CafeMouluWhereUniqueInput
  }

  /**
   * CafeMoulu updateMany
   */
  export type CafeMouluUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CafeMoulus.
     */
    data: XOR<CafeMouluUpdateManyMutationInput, CafeMouluUncheckedUpdateManyInput>
    /**
     * Filter which CafeMoulus to update
     */
    where?: CafeMouluWhereInput
    /**
     * Limit how many CafeMoulus to update.
     */
    limit?: number
  }

  /**
   * CafeMoulu upsert
   */
  export type CafeMouluUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
    /**
     * The filter to search for the CafeMoulu to update in case it exists.
     */
    where: CafeMouluWhereUniqueInput
    /**
     * In case the CafeMoulu found by the `where` argument doesn't exist, create a new CafeMoulu with this data.
     */
    create: XOR<CafeMouluCreateInput, CafeMouluUncheckedCreateInput>
    /**
     * In case the CafeMoulu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CafeMouluUpdateInput, CafeMouluUncheckedUpdateInput>
  }

  /**
   * CafeMoulu delete
   */
  export type CafeMouluDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
    /**
     * Filter which CafeMoulu to delete.
     */
    where: CafeMouluWhereUniqueInput
  }

  /**
   * CafeMoulu deleteMany
   */
  export type CafeMouluDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CafeMoulus to delete
     */
    where?: CafeMouluWhereInput
    /**
     * Limit how many CafeMoulus to delete.
     */
    limit?: number
  }

  /**
   * CafeMoulu.items
   */
  export type CafeMoulu$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    where?: CommandeItemWhereInput
    orderBy?: CommandeItemOrderByWithRelationInput | CommandeItemOrderByWithRelationInput[]
    cursor?: CommandeItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeItemScalarFieldEnum | CommandeItemScalarFieldEnum[]
  }

  /**
   * CafeMoulu without action
   */
  export type CafeMouluDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
  }


  /**
   * Model Commande
   */

  export type AggregateCommande = {
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  export type CommandeAvgAggregateOutputType = {
    id: number | null
    prix: number | null
    userId: number | null
  }

  export type CommandeSumAggregateOutputType = {
    id: number | null
    prix: number | null
    userId: number | null
  }

  export type CommandeMinAggregateOutputType = {
    id: number | null
    date: Date | null
    prix: number | null
    adresse: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommandeMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    prix: number | null
    adresse: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommandeCountAggregateOutputType = {
    id: number
    date: number
    prix: number
    adresse: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommandeAvgAggregateInputType = {
    id?: true
    prix?: true
    userId?: true
  }

  export type CommandeSumAggregateInputType = {
    id?: true
    prix?: true
    userId?: true
  }

  export type CommandeMinAggregateInputType = {
    id?: true
    date?: true
    prix?: true
    adresse?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommandeMaxAggregateInputType = {
    id?: true
    date?: true
    prix?: true
    adresse?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommandeCountAggregateInputType = {
    id?: true
    date?: true
    prix?: true
    adresse?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commande to aggregate.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commandes
    **/
    _count?: true | CommandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandeMaxAggregateInputType
  }

  export type GetCommandeAggregateType<T extends CommandeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommande[P]>
      : GetScalarType<T[P], AggregateCommande[P]>
  }




  export type CommandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithAggregationInput | CommandeOrderByWithAggregationInput[]
    by: CommandeScalarFieldEnum[] | CommandeScalarFieldEnum
    having?: CommandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandeCountAggregateInputType | true
    _avg?: CommandeAvgAggregateInputType
    _sum?: CommandeSumAggregateInputType
    _min?: CommandeMinAggregateInputType
    _max?: CommandeMaxAggregateInputType
  }

  export type CommandeGroupByOutputType = {
    id: number
    date: Date
    prix: number
    adresse: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  type GetCommandeGroupByPayload<T extends CommandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandeGroupByOutputType[P]>
            : GetScalarType<T[P], CommandeGroupByOutputType[P]>
        }
      >
    >


  export type CommandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    prix?: boolean
    adresse?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Commande$itemsArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>



  export type CommandeSelectScalar = {
    id?: boolean
    date?: boolean
    prix?: boolean
    adresse?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "prix" | "adresse" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["commande"]>
  export type CommandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Commande$itemsArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commande"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$CommandeItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      prix: number
      adresse: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["commande"]>
    composites: {}
  }

  type CommandeGetPayload<S extends boolean | null | undefined | CommandeDefaultArgs> = $Result.GetResult<Prisma.$CommandePayload, S>

  type CommandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandeCountAggregateInputType | true
    }

  export interface CommandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commande'], meta: { name: 'Commande' } }
    /**
     * Find zero or one Commande that matches the filter.
     * @param {CommandeFindUniqueArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandeFindUniqueArgs>(args: SelectSubset<T, CommandeFindUniqueArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandeFindUniqueOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandeFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandeFindFirstArgs>(args?: SelectSubset<T, CommandeFindFirstArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandeFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commandes
     * const commandes = await prisma.commande.findMany()
     * 
     * // Get first 10 Commandes
     * const commandes = await prisma.commande.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandeWithIdOnly = await prisma.commande.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommandeFindManyArgs>(args?: SelectSubset<T, CommandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commande.
     * @param {CommandeCreateArgs} args - Arguments to create a Commande.
     * @example
     * // Create one Commande
     * const Commande = await prisma.commande.create({
     *   data: {
     *     // ... data to create a Commande
     *   }
     * })
     * 
     */
    create<T extends CommandeCreateArgs>(args: SelectSubset<T, CommandeCreateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commandes.
     * @param {CommandeCreateManyArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandeCreateManyArgs>(args?: SelectSubset<T, CommandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Commande.
     * @param {CommandeDeleteArgs} args - Arguments to delete one Commande.
     * @example
     * // Delete one Commande
     * const Commande = await prisma.commande.delete({
     *   where: {
     *     // ... filter to delete one Commande
     *   }
     * })
     * 
     */
    delete<T extends CommandeDeleteArgs>(args: SelectSubset<T, CommandeDeleteArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commande.
     * @param {CommandeUpdateArgs} args - Arguments to update one Commande.
     * @example
     * // Update one Commande
     * const commande = await prisma.commande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandeUpdateArgs>(args: SelectSubset<T, CommandeUpdateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commandes.
     * @param {CommandeDeleteManyArgs} args - Arguments to filter Commandes to delete.
     * @example
     * // Delete a few Commandes
     * const { count } = await prisma.commande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandeDeleteManyArgs>(args?: SelectSubset<T, CommandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandeUpdateManyArgs>(args: SelectSubset<T, CommandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commande.
     * @param {CommandeUpsertArgs} args - Arguments to update or create a Commande.
     * @example
     * // Update or create a Commande
     * const commande = await prisma.commande.upsert({
     *   create: {
     *     // ... data to create a Commande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commande we want to update
     *   }
     * })
     */
    upsert<T extends CommandeUpsertArgs>(args: SelectSubset<T, CommandeUpsertArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeCountArgs} args - Arguments to filter Commandes to count.
     * @example
     * // Count the number of Commandes
     * const count = await prisma.commande.count({
     *   where: {
     *     // ... the filter for the Commandes we want to count
     *   }
     * })
    **/
    count<T extends CommandeCountArgs>(
      args?: Subset<T, CommandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandeAggregateArgs>(args: Subset<T, CommandeAggregateArgs>): Prisma.PrismaPromise<GetCommandeAggregateType<T>>

    /**
     * Group by Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeGroupByArgs} args - Group by arguments.
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
      T extends CommandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandeGroupByArgs['orderBy'] }
        : { orderBy?: CommandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commande model
   */
  readonly fields: CommandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Commande$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Commande$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Commande model
   */
  interface CommandeFieldRefs {
    readonly id: FieldRef<"Commande", 'Int'>
    readonly date: FieldRef<"Commande", 'DateTime'>
    readonly prix: FieldRef<"Commande", 'Float'>
    readonly adresse: FieldRef<"Commande", 'String'>
    readonly userId: FieldRef<"Commande", 'Int'>
    readonly createdAt: FieldRef<"Commande", 'DateTime'>
    readonly updatedAt: FieldRef<"Commande", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Commande findUnique
   */
  export type CommandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findUniqueOrThrow
   */
  export type CommandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findFirst
   */
  export type CommandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findFirstOrThrow
   */
  export type CommandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findMany
   */
  export type CommandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commandes to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande create
   */
  export type CommandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Commande.
     */
    data: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
  }

  /**
   * Commande createMany
   */
  export type CommandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commande update
   */
  export type CommandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Commande.
     */
    data: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
    /**
     * Choose, which Commande to update.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande updateMany
   */
  export type CommandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
  }

  /**
   * Commande upsert
   */
  export type CommandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Commande to update in case it exists.
     */
    where: CommandeWhereUniqueInput
    /**
     * In case the Commande found by the `where` argument doesn't exist, create a new Commande with this data.
     */
    create: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
    /**
     * In case the Commande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
  }

  /**
   * Commande delete
   */
  export type CommandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter which Commande to delete.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande deleteMany
   */
  export type CommandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commandes to delete
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to delete.
     */
    limit?: number
  }

  /**
   * Commande.items
   */
  export type Commande$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    where?: CommandeItemWhereInput
    orderBy?: CommandeItemOrderByWithRelationInput | CommandeItemOrderByWithRelationInput[]
    cursor?: CommandeItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeItemScalarFieldEnum | CommandeItemScalarFieldEnum[]
  }

  /**
   * Commande without action
   */
  export type CommandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
  }


  /**
   * Model CommandeItem
   */

  export type AggregateCommandeItem = {
    _count: CommandeItemCountAggregateOutputType | null
    _avg: CommandeItemAvgAggregateOutputType | null
    _sum: CommandeItemSumAggregateOutputType | null
    _min: CommandeItemMinAggregateOutputType | null
    _max: CommandeItemMaxAggregateOutputType | null
  }

  export type CommandeItemAvgAggregateOutputType = {
    id: number | null
    commandeId: number | null
    cafeGrainId: number | null
    cafeMouluId: number | null
    quantite: number | null
    prix: number | null
  }

  export type CommandeItemSumAggregateOutputType = {
    id: number | null
    commandeId: number | null
    cafeGrainId: number | null
    cafeMouluId: number | null
    quantite: number | null
    prix: number | null
  }

  export type CommandeItemMinAggregateOutputType = {
    id: number | null
    commandeId: number | null
    cafeGrainId: number | null
    cafeMouluId: number | null
    quantite: number | null
    prix: number | null
  }

  export type CommandeItemMaxAggregateOutputType = {
    id: number | null
    commandeId: number | null
    cafeGrainId: number | null
    cafeMouluId: number | null
    quantite: number | null
    prix: number | null
  }

  export type CommandeItemCountAggregateOutputType = {
    id: number
    commandeId: number
    cafeGrainId: number
    cafeMouluId: number
    quantite: number
    prix: number
    _all: number
  }


  export type CommandeItemAvgAggregateInputType = {
    id?: true
    commandeId?: true
    cafeGrainId?: true
    cafeMouluId?: true
    quantite?: true
    prix?: true
  }

  export type CommandeItemSumAggregateInputType = {
    id?: true
    commandeId?: true
    cafeGrainId?: true
    cafeMouluId?: true
    quantite?: true
    prix?: true
  }

  export type CommandeItemMinAggregateInputType = {
    id?: true
    commandeId?: true
    cafeGrainId?: true
    cafeMouluId?: true
    quantite?: true
    prix?: true
  }

  export type CommandeItemMaxAggregateInputType = {
    id?: true
    commandeId?: true
    cafeGrainId?: true
    cafeMouluId?: true
    quantite?: true
    prix?: true
  }

  export type CommandeItemCountAggregateInputType = {
    id?: true
    commandeId?: true
    cafeGrainId?: true
    cafeMouluId?: true
    quantite?: true
    prix?: true
    _all?: true
  }

  export type CommandeItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommandeItem to aggregate.
     */
    where?: CommandeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandeItems to fetch.
     */
    orderBy?: CommandeItemOrderByWithRelationInput | CommandeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommandeItems
    **/
    _count?: true | CommandeItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandeItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandeItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandeItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandeItemMaxAggregateInputType
  }

  export type GetCommandeItemAggregateType<T extends CommandeItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCommandeItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommandeItem[P]>
      : GetScalarType<T[P], AggregateCommandeItem[P]>
  }




  export type CommandeItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeItemWhereInput
    orderBy?: CommandeItemOrderByWithAggregationInput | CommandeItemOrderByWithAggregationInput[]
    by: CommandeItemScalarFieldEnum[] | CommandeItemScalarFieldEnum
    having?: CommandeItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandeItemCountAggregateInputType | true
    _avg?: CommandeItemAvgAggregateInputType
    _sum?: CommandeItemSumAggregateInputType
    _min?: CommandeItemMinAggregateInputType
    _max?: CommandeItemMaxAggregateInputType
  }

  export type CommandeItemGroupByOutputType = {
    id: number
    commandeId: number
    cafeGrainId: number | null
    cafeMouluId: number | null
    quantite: number
    prix: number
    _count: CommandeItemCountAggregateOutputType | null
    _avg: CommandeItemAvgAggregateOutputType | null
    _sum: CommandeItemSumAggregateOutputType | null
    _min: CommandeItemMinAggregateOutputType | null
    _max: CommandeItemMaxAggregateOutputType | null
  }

  type GetCommandeItemGroupByPayload<T extends CommandeItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandeItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandeItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandeItemGroupByOutputType[P]>
            : GetScalarType<T[P], CommandeItemGroupByOutputType[P]>
        }
      >
    >


  export type CommandeItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commandeId?: boolean
    cafeGrainId?: boolean
    cafeMouluId?: boolean
    quantite?: boolean
    prix?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    cafeGrain?: boolean | CommandeItem$cafeGrainArgs<ExtArgs>
    cafeMoulu?: boolean | CommandeItem$cafeMouluArgs<ExtArgs>
  }, ExtArgs["result"]["commandeItem"]>



  export type CommandeItemSelectScalar = {
    id?: boolean
    commandeId?: boolean
    cafeGrainId?: boolean
    cafeMouluId?: boolean
    quantite?: boolean
    prix?: boolean
  }

  export type CommandeItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commandeId" | "cafeGrainId" | "cafeMouluId" | "quantite" | "prix", ExtArgs["result"]["commandeItem"]>
  export type CommandeItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    cafeGrain?: boolean | CommandeItem$cafeGrainArgs<ExtArgs>
    cafeMoulu?: boolean | CommandeItem$cafeMouluArgs<ExtArgs>
  }

  export type $CommandeItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommandeItem"
    objects: {
      commande: Prisma.$CommandePayload<ExtArgs>
      cafeGrain: Prisma.$CafeGrainPayload<ExtArgs> | null
      cafeMoulu: Prisma.$CafeMouluPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      commandeId: number
      cafeGrainId: number | null
      cafeMouluId: number | null
      quantite: number
      prix: number
    }, ExtArgs["result"]["commandeItem"]>
    composites: {}
  }

  type CommandeItemGetPayload<S extends boolean | null | undefined | CommandeItemDefaultArgs> = $Result.GetResult<Prisma.$CommandeItemPayload, S>

  type CommandeItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommandeItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandeItemCountAggregateInputType | true
    }

  export interface CommandeItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommandeItem'], meta: { name: 'CommandeItem' } }
    /**
     * Find zero or one CommandeItem that matches the filter.
     * @param {CommandeItemFindUniqueArgs} args - Arguments to find a CommandeItem
     * @example
     * // Get one CommandeItem
     * const commandeItem = await prisma.commandeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandeItemFindUniqueArgs>(args: SelectSubset<T, CommandeItemFindUniqueArgs<ExtArgs>>): Prisma__CommandeItemClient<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommandeItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandeItemFindUniqueOrThrowArgs} args - Arguments to find a CommandeItem
     * @example
     * // Get one CommandeItem
     * const commandeItem = await prisma.commandeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandeItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandeItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandeItemClient<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommandeItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeItemFindFirstArgs} args - Arguments to find a CommandeItem
     * @example
     * // Get one CommandeItem
     * const commandeItem = await prisma.commandeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandeItemFindFirstArgs>(args?: SelectSubset<T, CommandeItemFindFirstArgs<ExtArgs>>): Prisma__CommandeItemClient<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommandeItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeItemFindFirstOrThrowArgs} args - Arguments to find a CommandeItem
     * @example
     * // Get one CommandeItem
     * const commandeItem = await prisma.commandeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandeItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandeItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandeItemClient<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommandeItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommandeItems
     * const commandeItems = await prisma.commandeItem.findMany()
     * 
     * // Get first 10 CommandeItems
     * const commandeItems = await prisma.commandeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandeItemWithIdOnly = await prisma.commandeItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommandeItemFindManyArgs>(args?: SelectSubset<T, CommandeItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommandeItem.
     * @param {CommandeItemCreateArgs} args - Arguments to create a CommandeItem.
     * @example
     * // Create one CommandeItem
     * const CommandeItem = await prisma.commandeItem.create({
     *   data: {
     *     // ... data to create a CommandeItem
     *   }
     * })
     * 
     */
    create<T extends CommandeItemCreateArgs>(args: SelectSubset<T, CommandeItemCreateArgs<ExtArgs>>): Prisma__CommandeItemClient<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommandeItems.
     * @param {CommandeItemCreateManyArgs} args - Arguments to create many CommandeItems.
     * @example
     * // Create many CommandeItems
     * const commandeItem = await prisma.commandeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandeItemCreateManyArgs>(args?: SelectSubset<T, CommandeItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CommandeItem.
     * @param {CommandeItemDeleteArgs} args - Arguments to delete one CommandeItem.
     * @example
     * // Delete one CommandeItem
     * const CommandeItem = await prisma.commandeItem.delete({
     *   where: {
     *     // ... filter to delete one CommandeItem
     *   }
     * })
     * 
     */
    delete<T extends CommandeItemDeleteArgs>(args: SelectSubset<T, CommandeItemDeleteArgs<ExtArgs>>): Prisma__CommandeItemClient<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommandeItem.
     * @param {CommandeItemUpdateArgs} args - Arguments to update one CommandeItem.
     * @example
     * // Update one CommandeItem
     * const commandeItem = await prisma.commandeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandeItemUpdateArgs>(args: SelectSubset<T, CommandeItemUpdateArgs<ExtArgs>>): Prisma__CommandeItemClient<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommandeItems.
     * @param {CommandeItemDeleteManyArgs} args - Arguments to filter CommandeItems to delete.
     * @example
     * // Delete a few CommandeItems
     * const { count } = await prisma.commandeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandeItemDeleteManyArgs>(args?: SelectSubset<T, CommandeItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommandeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommandeItems
     * const commandeItem = await prisma.commandeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandeItemUpdateManyArgs>(args: SelectSubset<T, CommandeItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommandeItem.
     * @param {CommandeItemUpsertArgs} args - Arguments to update or create a CommandeItem.
     * @example
     * // Update or create a CommandeItem
     * const commandeItem = await prisma.commandeItem.upsert({
     *   create: {
     *     // ... data to create a CommandeItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommandeItem we want to update
     *   }
     * })
     */
    upsert<T extends CommandeItemUpsertArgs>(args: SelectSubset<T, CommandeItemUpsertArgs<ExtArgs>>): Prisma__CommandeItemClient<$Result.GetResult<Prisma.$CommandeItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommandeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeItemCountArgs} args - Arguments to filter CommandeItems to count.
     * @example
     * // Count the number of CommandeItems
     * const count = await prisma.commandeItem.count({
     *   where: {
     *     // ... the filter for the CommandeItems we want to count
     *   }
     * })
    **/
    count<T extends CommandeItemCountArgs>(
      args?: Subset<T, CommandeItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandeItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommandeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandeItemAggregateArgs>(args: Subset<T, CommandeItemAggregateArgs>): Prisma.PrismaPromise<GetCommandeItemAggregateType<T>>

    /**
     * Group by CommandeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeItemGroupByArgs} args - Group by arguments.
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
      T extends CommandeItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandeItemGroupByArgs['orderBy'] }
        : { orderBy?: CommandeItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommandeItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommandeItem model
   */
  readonly fields: CommandeItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommandeItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandeItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends CommandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommandeDefaultArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cafeGrain<T extends CommandeItem$cafeGrainArgs<ExtArgs> = {}>(args?: Subset<T, CommandeItem$cafeGrainArgs<ExtArgs>>): Prisma__CafeGrainClient<$Result.GetResult<Prisma.$CafeGrainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cafeMoulu<T extends CommandeItem$cafeMouluArgs<ExtArgs> = {}>(args?: Subset<T, CommandeItem$cafeMouluArgs<ExtArgs>>): Prisma__CafeMouluClient<$Result.GetResult<Prisma.$CafeMouluPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CommandeItem model
   */
  interface CommandeItemFieldRefs {
    readonly id: FieldRef<"CommandeItem", 'Int'>
    readonly commandeId: FieldRef<"CommandeItem", 'Int'>
    readonly cafeGrainId: FieldRef<"CommandeItem", 'Int'>
    readonly cafeMouluId: FieldRef<"CommandeItem", 'Int'>
    readonly quantite: FieldRef<"CommandeItem", 'Int'>
    readonly prix: FieldRef<"CommandeItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CommandeItem findUnique
   */
  export type CommandeItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    /**
     * Filter, which CommandeItem to fetch.
     */
    where: CommandeItemWhereUniqueInput
  }

  /**
   * CommandeItem findUniqueOrThrow
   */
  export type CommandeItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    /**
     * Filter, which CommandeItem to fetch.
     */
    where: CommandeItemWhereUniqueInput
  }

  /**
   * CommandeItem findFirst
   */
  export type CommandeItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    /**
     * Filter, which CommandeItem to fetch.
     */
    where?: CommandeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandeItems to fetch.
     */
    orderBy?: CommandeItemOrderByWithRelationInput | CommandeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommandeItems.
     */
    cursor?: CommandeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommandeItems.
     */
    distinct?: CommandeItemScalarFieldEnum | CommandeItemScalarFieldEnum[]
  }

  /**
   * CommandeItem findFirstOrThrow
   */
  export type CommandeItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    /**
     * Filter, which CommandeItem to fetch.
     */
    where?: CommandeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandeItems to fetch.
     */
    orderBy?: CommandeItemOrderByWithRelationInput | CommandeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommandeItems.
     */
    cursor?: CommandeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommandeItems.
     */
    distinct?: CommandeItemScalarFieldEnum | CommandeItemScalarFieldEnum[]
  }

  /**
   * CommandeItem findMany
   */
  export type CommandeItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    /**
     * Filter, which CommandeItems to fetch.
     */
    where?: CommandeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandeItems to fetch.
     */
    orderBy?: CommandeItemOrderByWithRelationInput | CommandeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommandeItems.
     */
    cursor?: CommandeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandeItems.
     */
    skip?: number
    distinct?: CommandeItemScalarFieldEnum | CommandeItemScalarFieldEnum[]
  }

  /**
   * CommandeItem create
   */
  export type CommandeItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CommandeItem.
     */
    data: XOR<CommandeItemCreateInput, CommandeItemUncheckedCreateInput>
  }

  /**
   * CommandeItem createMany
   */
  export type CommandeItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommandeItems.
     */
    data: CommandeItemCreateManyInput | CommandeItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommandeItem update
   */
  export type CommandeItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CommandeItem.
     */
    data: XOR<CommandeItemUpdateInput, CommandeItemUncheckedUpdateInput>
    /**
     * Choose, which CommandeItem to update.
     */
    where: CommandeItemWhereUniqueInput
  }

  /**
   * CommandeItem updateMany
   */
  export type CommandeItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommandeItems.
     */
    data: XOR<CommandeItemUpdateManyMutationInput, CommandeItemUncheckedUpdateManyInput>
    /**
     * Filter which CommandeItems to update
     */
    where?: CommandeItemWhereInput
    /**
     * Limit how many CommandeItems to update.
     */
    limit?: number
  }

  /**
   * CommandeItem upsert
   */
  export type CommandeItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CommandeItem to update in case it exists.
     */
    where: CommandeItemWhereUniqueInput
    /**
     * In case the CommandeItem found by the `where` argument doesn't exist, create a new CommandeItem with this data.
     */
    create: XOR<CommandeItemCreateInput, CommandeItemUncheckedCreateInput>
    /**
     * In case the CommandeItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandeItemUpdateInput, CommandeItemUncheckedUpdateInput>
  }

  /**
   * CommandeItem delete
   */
  export type CommandeItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
    /**
     * Filter which CommandeItem to delete.
     */
    where: CommandeItemWhereUniqueInput
  }

  /**
   * CommandeItem deleteMany
   */
  export type CommandeItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommandeItems to delete
     */
    where?: CommandeItemWhereInput
    /**
     * Limit how many CommandeItems to delete.
     */
    limit?: number
  }

  /**
   * CommandeItem.cafeGrain
   */
  export type CommandeItem$cafeGrainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeGrain
     */
    select?: CafeGrainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeGrain
     */
    omit?: CafeGrainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeGrainInclude<ExtArgs> | null
    where?: CafeGrainWhereInput
  }

  /**
   * CommandeItem.cafeMoulu
   */
  export type CommandeItem$cafeMouluArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeMoulu
     */
    select?: CafeMouluSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeMoulu
     */
    omit?: CafeMouluOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeMouluInclude<ExtArgs> | null
    where?: CafeMouluWhereInput
  }

  /**
   * CommandeItem without action
   */
  export type CommandeItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeItem
     */
    select?: CommandeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandeItem
     */
    omit?: CommandeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeItemInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    prenom: 'prenom',
    nom: 'nom',
    email: 'email',
    pass: 'pass',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CafeGrainScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    type: 'type',
    origine: 'origine',
    quantite: 'quantite',
    description: 'description',
    prix: 'prix',
    image: 'image'
  };

  export type CafeGrainScalarFieldEnum = (typeof CafeGrainScalarFieldEnum)[keyof typeof CafeGrainScalarFieldEnum]


  export const CafeMouluScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    type: 'type',
    origine: 'origine',
    quantite: 'quantite',
    description: 'description',
    prix: 'prix',
    image: 'image'
  };

  export type CafeMouluScalarFieldEnum = (typeof CafeMouluScalarFieldEnum)[keyof typeof CafeMouluScalarFieldEnum]


  export const CommandeScalarFieldEnum: {
    id: 'id',
    date: 'date',
    prix: 'prix',
    adresse: 'adresse',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommandeScalarFieldEnum = (typeof CommandeScalarFieldEnum)[keyof typeof CommandeScalarFieldEnum]


  export const CommandeItemScalarFieldEnum: {
    id: 'id',
    commandeId: 'commandeId',
    cafeGrainId: 'cafeGrainId',
    cafeMouluId: 'cafeMouluId',
    quantite: 'quantite',
    prix: 'prix'
  };

  export type CommandeItemScalarFieldEnum = (typeof CommandeItemScalarFieldEnum)[keyof typeof CommandeItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    prenom: 'prenom',
    nom: 'nom',
    email: 'email',
    pass: 'pass'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CafeGrainOrderByRelevanceFieldEnum: {
    nom: 'nom',
    type: 'type',
    origine: 'origine',
    quantite: 'quantite',
    description: 'description',
    image: 'image'
  };

  export type CafeGrainOrderByRelevanceFieldEnum = (typeof CafeGrainOrderByRelevanceFieldEnum)[keyof typeof CafeGrainOrderByRelevanceFieldEnum]


  export const CafeMouluOrderByRelevanceFieldEnum: {
    nom: 'nom',
    type: 'type',
    origine: 'origine',
    quantite: 'quantite',
    description: 'description',
    image: 'image'
  };

  export type CafeMouluOrderByRelevanceFieldEnum = (typeof CafeMouluOrderByRelevanceFieldEnum)[keyof typeof CafeMouluOrderByRelevanceFieldEnum]


  export const CommandeOrderByRelevanceFieldEnum: {
    adresse: 'adresse'
  };

  export type CommandeOrderByRelevanceFieldEnum = (typeof CommandeOrderByRelevanceFieldEnum)[keyof typeof CommandeOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    prenom?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    pass?: StringFilter<"User"> | string
    role?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    commandes?: CommandeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    pass?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commandes?: CommandeOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    prenom?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    pass?: StringFilter<"User"> | string
    role?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    commandes?: CommandeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    pass?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    prenom?: StringWithAggregatesFilter<"User"> | string
    nom?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    pass?: StringWithAggregatesFilter<"User"> | string
    role?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CafeGrainWhereInput = {
    AND?: CafeGrainWhereInput | CafeGrainWhereInput[]
    OR?: CafeGrainWhereInput[]
    NOT?: CafeGrainWhereInput | CafeGrainWhereInput[]
    id?: IntFilter<"CafeGrain"> | number
    nom?: StringFilter<"CafeGrain"> | string
    type?: StringNullableFilter<"CafeGrain"> | string | null
    origine?: StringNullableFilter<"CafeGrain"> | string | null
    quantite?: StringNullableFilter<"CafeGrain"> | string | null
    description?: StringNullableFilter<"CafeGrain"> | string | null
    prix?: FloatNullableFilter<"CafeGrain"> | number | null
    image?: StringNullableFilter<"CafeGrain"> | string | null
    items?: CommandeItemListRelationFilter
  }

  export type CafeGrainOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrderInput | SortOrder
    origine?: SortOrderInput | SortOrder
    quantite?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    prix?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    items?: CommandeItemOrderByRelationAggregateInput
    _relevance?: CafeGrainOrderByRelevanceInput
  }

  export type CafeGrainWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CafeGrainWhereInput | CafeGrainWhereInput[]
    OR?: CafeGrainWhereInput[]
    NOT?: CafeGrainWhereInput | CafeGrainWhereInput[]
    nom?: StringFilter<"CafeGrain"> | string
    type?: StringNullableFilter<"CafeGrain"> | string | null
    origine?: StringNullableFilter<"CafeGrain"> | string | null
    quantite?: StringNullableFilter<"CafeGrain"> | string | null
    description?: StringNullableFilter<"CafeGrain"> | string | null
    prix?: FloatNullableFilter<"CafeGrain"> | number | null
    image?: StringNullableFilter<"CafeGrain"> | string | null
    items?: CommandeItemListRelationFilter
  }, "id">

  export type CafeGrainOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrderInput | SortOrder
    origine?: SortOrderInput | SortOrder
    quantite?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    prix?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: CafeGrainCountOrderByAggregateInput
    _avg?: CafeGrainAvgOrderByAggregateInput
    _max?: CafeGrainMaxOrderByAggregateInput
    _min?: CafeGrainMinOrderByAggregateInput
    _sum?: CafeGrainSumOrderByAggregateInput
  }

  export type CafeGrainScalarWhereWithAggregatesInput = {
    AND?: CafeGrainScalarWhereWithAggregatesInput | CafeGrainScalarWhereWithAggregatesInput[]
    OR?: CafeGrainScalarWhereWithAggregatesInput[]
    NOT?: CafeGrainScalarWhereWithAggregatesInput | CafeGrainScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CafeGrain"> | number
    nom?: StringWithAggregatesFilter<"CafeGrain"> | string
    type?: StringNullableWithAggregatesFilter<"CafeGrain"> | string | null
    origine?: StringNullableWithAggregatesFilter<"CafeGrain"> | string | null
    quantite?: StringNullableWithAggregatesFilter<"CafeGrain"> | string | null
    description?: StringNullableWithAggregatesFilter<"CafeGrain"> | string | null
    prix?: FloatNullableWithAggregatesFilter<"CafeGrain"> | number | null
    image?: StringNullableWithAggregatesFilter<"CafeGrain"> | string | null
  }

  export type CafeMouluWhereInput = {
    AND?: CafeMouluWhereInput | CafeMouluWhereInput[]
    OR?: CafeMouluWhereInput[]
    NOT?: CafeMouluWhereInput | CafeMouluWhereInput[]
    id?: IntFilter<"CafeMoulu"> | number
    nom?: StringFilter<"CafeMoulu"> | string
    type?: StringNullableFilter<"CafeMoulu"> | string | null
    origine?: StringNullableFilter<"CafeMoulu"> | string | null
    quantite?: StringNullableFilter<"CafeMoulu"> | string | null
    description?: StringNullableFilter<"CafeMoulu"> | string | null
    prix?: FloatNullableFilter<"CafeMoulu"> | number | null
    image?: StringNullableFilter<"CafeMoulu"> | string | null
    items?: CommandeItemListRelationFilter
  }

  export type CafeMouluOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrderInput | SortOrder
    origine?: SortOrderInput | SortOrder
    quantite?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    prix?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    items?: CommandeItemOrderByRelationAggregateInput
    _relevance?: CafeMouluOrderByRelevanceInput
  }

  export type CafeMouluWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CafeMouluWhereInput | CafeMouluWhereInput[]
    OR?: CafeMouluWhereInput[]
    NOT?: CafeMouluWhereInput | CafeMouluWhereInput[]
    nom?: StringFilter<"CafeMoulu"> | string
    type?: StringNullableFilter<"CafeMoulu"> | string | null
    origine?: StringNullableFilter<"CafeMoulu"> | string | null
    quantite?: StringNullableFilter<"CafeMoulu"> | string | null
    description?: StringNullableFilter<"CafeMoulu"> | string | null
    prix?: FloatNullableFilter<"CafeMoulu"> | number | null
    image?: StringNullableFilter<"CafeMoulu"> | string | null
    items?: CommandeItemListRelationFilter
  }, "id">

  export type CafeMouluOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrderInput | SortOrder
    origine?: SortOrderInput | SortOrder
    quantite?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    prix?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: CafeMouluCountOrderByAggregateInput
    _avg?: CafeMouluAvgOrderByAggregateInput
    _max?: CafeMouluMaxOrderByAggregateInput
    _min?: CafeMouluMinOrderByAggregateInput
    _sum?: CafeMouluSumOrderByAggregateInput
  }

  export type CafeMouluScalarWhereWithAggregatesInput = {
    AND?: CafeMouluScalarWhereWithAggregatesInput | CafeMouluScalarWhereWithAggregatesInput[]
    OR?: CafeMouluScalarWhereWithAggregatesInput[]
    NOT?: CafeMouluScalarWhereWithAggregatesInput | CafeMouluScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CafeMoulu"> | number
    nom?: StringWithAggregatesFilter<"CafeMoulu"> | string
    type?: StringNullableWithAggregatesFilter<"CafeMoulu"> | string | null
    origine?: StringNullableWithAggregatesFilter<"CafeMoulu"> | string | null
    quantite?: StringNullableWithAggregatesFilter<"CafeMoulu"> | string | null
    description?: StringNullableWithAggregatesFilter<"CafeMoulu"> | string | null
    prix?: FloatNullableWithAggregatesFilter<"CafeMoulu"> | number | null
    image?: StringNullableWithAggregatesFilter<"CafeMoulu"> | string | null
  }

  export type CommandeWhereInput = {
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    id?: IntFilter<"Commande"> | number
    date?: DateTimeFilter<"Commande"> | Date | string
    prix?: FloatFilter<"Commande"> | number
    adresse?: StringFilter<"Commande"> | string
    userId?: IntFilter<"Commande"> | number
    createdAt?: DateTimeFilter<"Commande"> | Date | string
    updatedAt?: DateTimeFilter<"Commande"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CommandeItemListRelationFilter
  }

  export type CommandeOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    prix?: SortOrder
    adresse?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: CommandeItemOrderByRelationAggregateInput
    _relevance?: CommandeOrderByRelevanceInput
  }

  export type CommandeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    date?: DateTimeFilter<"Commande"> | Date | string
    prix?: FloatFilter<"Commande"> | number
    adresse?: StringFilter<"Commande"> | string
    userId?: IntFilter<"Commande"> | number
    createdAt?: DateTimeFilter<"Commande"> | Date | string
    updatedAt?: DateTimeFilter<"Commande"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CommandeItemListRelationFilter
  }, "id">

  export type CommandeOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    prix?: SortOrder
    adresse?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommandeCountOrderByAggregateInput
    _avg?: CommandeAvgOrderByAggregateInput
    _max?: CommandeMaxOrderByAggregateInput
    _min?: CommandeMinOrderByAggregateInput
    _sum?: CommandeSumOrderByAggregateInput
  }

  export type CommandeScalarWhereWithAggregatesInput = {
    AND?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    OR?: CommandeScalarWhereWithAggregatesInput[]
    NOT?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Commande"> | number
    date?: DateTimeWithAggregatesFilter<"Commande"> | Date | string
    prix?: FloatWithAggregatesFilter<"Commande"> | number
    adresse?: StringWithAggregatesFilter<"Commande"> | string
    userId?: IntWithAggregatesFilter<"Commande"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Commande"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Commande"> | Date | string
  }

  export type CommandeItemWhereInput = {
    AND?: CommandeItemWhereInput | CommandeItemWhereInput[]
    OR?: CommandeItemWhereInput[]
    NOT?: CommandeItemWhereInput | CommandeItemWhereInput[]
    id?: IntFilter<"CommandeItem"> | number
    commandeId?: IntFilter<"CommandeItem"> | number
    cafeGrainId?: IntNullableFilter<"CommandeItem"> | number | null
    cafeMouluId?: IntNullableFilter<"CommandeItem"> | number | null
    quantite?: IntFilter<"CommandeItem"> | number
    prix?: FloatFilter<"CommandeItem"> | number
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
    cafeGrain?: XOR<CafeGrainNullableScalarRelationFilter, CafeGrainWhereInput> | null
    cafeMoulu?: XOR<CafeMouluNullableScalarRelationFilter, CafeMouluWhereInput> | null
  }

  export type CommandeItemOrderByWithRelationInput = {
    id?: SortOrder
    commandeId?: SortOrder
    cafeGrainId?: SortOrderInput | SortOrder
    cafeMouluId?: SortOrderInput | SortOrder
    quantite?: SortOrder
    prix?: SortOrder
    commande?: CommandeOrderByWithRelationInput
    cafeGrain?: CafeGrainOrderByWithRelationInput
    cafeMoulu?: CafeMouluOrderByWithRelationInput
  }

  export type CommandeItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommandeItemWhereInput | CommandeItemWhereInput[]
    OR?: CommandeItemWhereInput[]
    NOT?: CommandeItemWhereInput | CommandeItemWhereInput[]
    commandeId?: IntFilter<"CommandeItem"> | number
    cafeGrainId?: IntNullableFilter<"CommandeItem"> | number | null
    cafeMouluId?: IntNullableFilter<"CommandeItem"> | number | null
    quantite?: IntFilter<"CommandeItem"> | number
    prix?: FloatFilter<"CommandeItem"> | number
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
    cafeGrain?: XOR<CafeGrainNullableScalarRelationFilter, CafeGrainWhereInput> | null
    cafeMoulu?: XOR<CafeMouluNullableScalarRelationFilter, CafeMouluWhereInput> | null
  }, "id">

  export type CommandeItemOrderByWithAggregationInput = {
    id?: SortOrder
    commandeId?: SortOrder
    cafeGrainId?: SortOrderInput | SortOrder
    cafeMouluId?: SortOrderInput | SortOrder
    quantite?: SortOrder
    prix?: SortOrder
    _count?: CommandeItemCountOrderByAggregateInput
    _avg?: CommandeItemAvgOrderByAggregateInput
    _max?: CommandeItemMaxOrderByAggregateInput
    _min?: CommandeItemMinOrderByAggregateInput
    _sum?: CommandeItemSumOrderByAggregateInput
  }

  export type CommandeItemScalarWhereWithAggregatesInput = {
    AND?: CommandeItemScalarWhereWithAggregatesInput | CommandeItemScalarWhereWithAggregatesInput[]
    OR?: CommandeItemScalarWhereWithAggregatesInput[]
    NOT?: CommandeItemScalarWhereWithAggregatesInput | CommandeItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommandeItem"> | number
    commandeId?: IntWithAggregatesFilter<"CommandeItem"> | number
    cafeGrainId?: IntNullableWithAggregatesFilter<"CommandeItem"> | number | null
    cafeMouluId?: IntNullableWithAggregatesFilter<"CommandeItem"> | number | null
    quantite?: IntWithAggregatesFilter<"CommandeItem"> | number
    prix?: FloatWithAggregatesFilter<"CommandeItem"> | number
  }

  export type UserCreateInput = {
    prenom: string
    nom: string
    email: string
    pass: string
    role?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    commandes?: CommandeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    pass: string
    role?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    commandes?: CommandeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    role?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    role?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    pass: string
    role?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    role?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    role?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CafeGrainCreateInput = {
    nom: string
    type?: string | null
    origine?: string | null
    quantite?: string | null
    description?: string | null
    prix?: number | null
    image?: string | null
    items?: CommandeItemCreateNestedManyWithoutCafeGrainInput
  }

  export type CafeGrainUncheckedCreateInput = {
    id?: number
    nom: string
    type?: string | null
    origine?: string | null
    quantite?: string | null
    description?: string | null
    prix?: number | null
    image?: string | null
    items?: CommandeItemUncheckedCreateNestedManyWithoutCafeGrainInput
  }

  export type CafeGrainUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    items?: CommandeItemUpdateManyWithoutCafeGrainNestedInput
  }

  export type CafeGrainUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    items?: CommandeItemUncheckedUpdateManyWithoutCafeGrainNestedInput
  }

  export type CafeGrainCreateManyInput = {
    id?: number
    nom: string
    type?: string | null
    origine?: string | null
    quantite?: string | null
    description?: string | null
    prix?: number | null
    image?: string | null
  }

  export type CafeGrainUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CafeGrainUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CafeMouluCreateInput = {
    nom: string
    type?: string | null
    origine?: string | null
    quantite?: string | null
    description?: string | null
    prix?: number | null
    image?: string | null
    items?: CommandeItemCreateNestedManyWithoutCafeMouluInput
  }

  export type CafeMouluUncheckedCreateInput = {
    id?: number
    nom: string
    type?: string | null
    origine?: string | null
    quantite?: string | null
    description?: string | null
    prix?: number | null
    image?: string | null
    items?: CommandeItemUncheckedCreateNestedManyWithoutCafeMouluInput
  }

  export type CafeMouluUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    items?: CommandeItemUpdateManyWithoutCafeMouluNestedInput
  }

  export type CafeMouluUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    items?: CommandeItemUncheckedUpdateManyWithoutCafeMouluNestedInput
  }

  export type CafeMouluCreateManyInput = {
    id?: number
    nom: string
    type?: string | null
    origine?: string | null
    quantite?: string | null
    description?: string | null
    prix?: number | null
    image?: string | null
  }

  export type CafeMouluUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CafeMouluUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandeCreateInput = {
    date: Date | string
    prix: number
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommandesInput
    items?: CommandeItemCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateInput = {
    id?: number
    date: Date | string
    prix: number
    adresse: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CommandeItemUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix?: FloatFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommandesNestedInput
    items?: CommandeItemUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix?: FloatFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CommandeItemUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeCreateManyInput = {
    id?: number
    date: Date | string
    prix: number
    adresse: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommandeUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix?: FloatFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix?: FloatFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeItemCreateInput = {
    quantite: number
    prix: number
    commande: CommandeCreateNestedOneWithoutItemsInput
    cafeGrain?: CafeGrainCreateNestedOneWithoutItemsInput
    cafeMoulu?: CafeMouluCreateNestedOneWithoutItemsInput
  }

  export type CommandeItemUncheckedCreateInput = {
    id?: number
    commandeId: number
    cafeGrainId?: number | null
    cafeMouluId?: number | null
    quantite: number
    prix: number
  }

  export type CommandeItemUpdateInput = {
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
    commande?: CommandeUpdateOneRequiredWithoutItemsNestedInput
    cafeGrain?: CafeGrainUpdateOneWithoutItemsNestedInput
    cafeMoulu?: CafeMouluUpdateOneWithoutItemsNestedInput
  }

  export type CommandeItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    commandeId?: IntFieldUpdateOperationsInput | number
    cafeGrainId?: NullableIntFieldUpdateOperationsInput | number | null
    cafeMouluId?: NullableIntFieldUpdateOperationsInput | number | null
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type CommandeItemCreateManyInput = {
    id?: number
    commandeId: number
    cafeGrainId?: number | null
    cafeMouluId?: number | null
    quantite: number
    prix: number
  }

  export type CommandeItemUpdateManyMutationInput = {
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type CommandeItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    commandeId?: IntFieldUpdateOperationsInput | number
    cafeGrainId?: NullableIntFieldUpdateOperationsInput | number | null
    cafeMouluId?: NullableIntFieldUpdateOperationsInput | number | null
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommandeListRelationFilter = {
    every?: CommandeWhereInput
    some?: CommandeWhereInput
    none?: CommandeWhereInput
  }

  export type CommandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    pass?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    pass?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    pass?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CommandeItemListRelationFilter = {
    every?: CommandeItemWhereInput
    some?: CommandeItemWhereInput
    none?: CommandeItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommandeItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CafeGrainOrderByRelevanceInput = {
    fields: CafeGrainOrderByRelevanceFieldEnum | CafeGrainOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CafeGrainCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    origine?: SortOrder
    quantite?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
  }

  export type CafeGrainAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
  }

  export type CafeGrainMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    origine?: SortOrder
    quantite?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
  }

  export type CafeGrainMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    origine?: SortOrder
    quantite?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
  }

  export type CafeGrainSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CafeMouluOrderByRelevanceInput = {
    fields: CafeMouluOrderByRelevanceFieldEnum | CafeMouluOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CafeMouluCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    origine?: SortOrder
    quantite?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
  }

  export type CafeMouluAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
  }

  export type CafeMouluMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    origine?: SortOrder
    quantite?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
  }

  export type CafeMouluMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    origine?: SortOrder
    quantite?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    image?: SortOrder
  }

  export type CafeMouluSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommandeOrderByRelevanceInput = {
    fields: CommandeOrderByRelevanceFieldEnum | CommandeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommandeCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    prix?: SortOrder
    adresse?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommandeAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    userId?: SortOrder
  }

  export type CommandeMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    prix?: SortOrder
    adresse?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommandeMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    prix?: SortOrder
    adresse?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommandeSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CommandeScalarRelationFilter = {
    is?: CommandeWhereInput
    isNot?: CommandeWhereInput
  }

  export type CafeGrainNullableScalarRelationFilter = {
    is?: CafeGrainWhereInput | null
    isNot?: CafeGrainWhereInput | null
  }

  export type CafeMouluNullableScalarRelationFilter = {
    is?: CafeMouluWhereInput | null
    isNot?: CafeMouluWhereInput | null
  }

  export type CommandeItemCountOrderByAggregateInput = {
    id?: SortOrder
    commandeId?: SortOrder
    cafeGrainId?: SortOrder
    cafeMouluId?: SortOrder
    quantite?: SortOrder
    prix?: SortOrder
  }

  export type CommandeItemAvgOrderByAggregateInput = {
    id?: SortOrder
    commandeId?: SortOrder
    cafeGrainId?: SortOrder
    cafeMouluId?: SortOrder
    quantite?: SortOrder
    prix?: SortOrder
  }

  export type CommandeItemMaxOrderByAggregateInput = {
    id?: SortOrder
    commandeId?: SortOrder
    cafeGrainId?: SortOrder
    cafeMouluId?: SortOrder
    quantite?: SortOrder
    prix?: SortOrder
  }

  export type CommandeItemMinOrderByAggregateInput = {
    id?: SortOrder
    commandeId?: SortOrder
    cafeGrainId?: SortOrder
    cafeMouluId?: SortOrder
    quantite?: SortOrder
    prix?: SortOrder
  }

  export type CommandeItemSumOrderByAggregateInput = {
    id?: SortOrder
    commandeId?: SortOrder
    cafeGrainId?: SortOrder
    cafeMouluId?: SortOrder
    quantite?: SortOrder
    prix?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CommandeCreateNestedManyWithoutUserInput = {
    create?: XOR<CommandeCreateWithoutUserInput, CommandeUncheckedCreateWithoutUserInput> | CommandeCreateWithoutUserInput[] | CommandeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutUserInput | CommandeCreateOrConnectWithoutUserInput[]
    createMany?: CommandeCreateManyUserInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommandeCreateWithoutUserInput, CommandeUncheckedCreateWithoutUserInput> | CommandeCreateWithoutUserInput[] | CommandeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutUserInput | CommandeCreateOrConnectWithoutUserInput[]
    createMany?: CommandeCreateManyUserInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommandeUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommandeCreateWithoutUserInput, CommandeUncheckedCreateWithoutUserInput> | CommandeCreateWithoutUserInput[] | CommandeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutUserInput | CommandeCreateOrConnectWithoutUserInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutUserInput | CommandeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommandeCreateManyUserInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutUserInput | CommandeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutUserInput | CommandeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommandeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommandeCreateWithoutUserInput, CommandeUncheckedCreateWithoutUserInput> | CommandeCreateWithoutUserInput[] | CommandeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutUserInput | CommandeCreateOrConnectWithoutUserInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutUserInput | CommandeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommandeCreateManyUserInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutUserInput | CommandeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutUserInput | CommandeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type CommandeItemCreateNestedManyWithoutCafeGrainInput = {
    create?: XOR<CommandeItemCreateWithoutCafeGrainInput, CommandeItemUncheckedCreateWithoutCafeGrainInput> | CommandeItemCreateWithoutCafeGrainInput[] | CommandeItemUncheckedCreateWithoutCafeGrainInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCafeGrainInput | CommandeItemCreateOrConnectWithoutCafeGrainInput[]
    createMany?: CommandeItemCreateManyCafeGrainInputEnvelope
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
  }

  export type CommandeItemUncheckedCreateNestedManyWithoutCafeGrainInput = {
    create?: XOR<CommandeItemCreateWithoutCafeGrainInput, CommandeItemUncheckedCreateWithoutCafeGrainInput> | CommandeItemCreateWithoutCafeGrainInput[] | CommandeItemUncheckedCreateWithoutCafeGrainInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCafeGrainInput | CommandeItemCreateOrConnectWithoutCafeGrainInput[]
    createMany?: CommandeItemCreateManyCafeGrainInputEnvelope
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommandeItemUpdateManyWithoutCafeGrainNestedInput = {
    create?: XOR<CommandeItemCreateWithoutCafeGrainInput, CommandeItemUncheckedCreateWithoutCafeGrainInput> | CommandeItemCreateWithoutCafeGrainInput[] | CommandeItemUncheckedCreateWithoutCafeGrainInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCafeGrainInput | CommandeItemCreateOrConnectWithoutCafeGrainInput[]
    upsert?: CommandeItemUpsertWithWhereUniqueWithoutCafeGrainInput | CommandeItemUpsertWithWhereUniqueWithoutCafeGrainInput[]
    createMany?: CommandeItemCreateManyCafeGrainInputEnvelope
    set?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    disconnect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    delete?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    update?: CommandeItemUpdateWithWhereUniqueWithoutCafeGrainInput | CommandeItemUpdateWithWhereUniqueWithoutCafeGrainInput[]
    updateMany?: CommandeItemUpdateManyWithWhereWithoutCafeGrainInput | CommandeItemUpdateManyWithWhereWithoutCafeGrainInput[]
    deleteMany?: CommandeItemScalarWhereInput | CommandeItemScalarWhereInput[]
  }

  export type CommandeItemUncheckedUpdateManyWithoutCafeGrainNestedInput = {
    create?: XOR<CommandeItemCreateWithoutCafeGrainInput, CommandeItemUncheckedCreateWithoutCafeGrainInput> | CommandeItemCreateWithoutCafeGrainInput[] | CommandeItemUncheckedCreateWithoutCafeGrainInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCafeGrainInput | CommandeItemCreateOrConnectWithoutCafeGrainInput[]
    upsert?: CommandeItemUpsertWithWhereUniqueWithoutCafeGrainInput | CommandeItemUpsertWithWhereUniqueWithoutCafeGrainInput[]
    createMany?: CommandeItemCreateManyCafeGrainInputEnvelope
    set?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    disconnect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    delete?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    update?: CommandeItemUpdateWithWhereUniqueWithoutCafeGrainInput | CommandeItemUpdateWithWhereUniqueWithoutCafeGrainInput[]
    updateMany?: CommandeItemUpdateManyWithWhereWithoutCafeGrainInput | CommandeItemUpdateManyWithWhereWithoutCafeGrainInput[]
    deleteMany?: CommandeItemScalarWhereInput | CommandeItemScalarWhereInput[]
  }

  export type CommandeItemCreateNestedManyWithoutCafeMouluInput = {
    create?: XOR<CommandeItemCreateWithoutCafeMouluInput, CommandeItemUncheckedCreateWithoutCafeMouluInput> | CommandeItemCreateWithoutCafeMouluInput[] | CommandeItemUncheckedCreateWithoutCafeMouluInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCafeMouluInput | CommandeItemCreateOrConnectWithoutCafeMouluInput[]
    createMany?: CommandeItemCreateManyCafeMouluInputEnvelope
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
  }

  export type CommandeItemUncheckedCreateNestedManyWithoutCafeMouluInput = {
    create?: XOR<CommandeItemCreateWithoutCafeMouluInput, CommandeItemUncheckedCreateWithoutCafeMouluInput> | CommandeItemCreateWithoutCafeMouluInput[] | CommandeItemUncheckedCreateWithoutCafeMouluInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCafeMouluInput | CommandeItemCreateOrConnectWithoutCafeMouluInput[]
    createMany?: CommandeItemCreateManyCafeMouluInputEnvelope
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
  }

  export type CommandeItemUpdateManyWithoutCafeMouluNestedInput = {
    create?: XOR<CommandeItemCreateWithoutCafeMouluInput, CommandeItemUncheckedCreateWithoutCafeMouluInput> | CommandeItemCreateWithoutCafeMouluInput[] | CommandeItemUncheckedCreateWithoutCafeMouluInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCafeMouluInput | CommandeItemCreateOrConnectWithoutCafeMouluInput[]
    upsert?: CommandeItemUpsertWithWhereUniqueWithoutCafeMouluInput | CommandeItemUpsertWithWhereUniqueWithoutCafeMouluInput[]
    createMany?: CommandeItemCreateManyCafeMouluInputEnvelope
    set?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    disconnect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    delete?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    update?: CommandeItemUpdateWithWhereUniqueWithoutCafeMouluInput | CommandeItemUpdateWithWhereUniqueWithoutCafeMouluInput[]
    updateMany?: CommandeItemUpdateManyWithWhereWithoutCafeMouluInput | CommandeItemUpdateManyWithWhereWithoutCafeMouluInput[]
    deleteMany?: CommandeItemScalarWhereInput | CommandeItemScalarWhereInput[]
  }

  export type CommandeItemUncheckedUpdateManyWithoutCafeMouluNestedInput = {
    create?: XOR<CommandeItemCreateWithoutCafeMouluInput, CommandeItemUncheckedCreateWithoutCafeMouluInput> | CommandeItemCreateWithoutCafeMouluInput[] | CommandeItemUncheckedCreateWithoutCafeMouluInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCafeMouluInput | CommandeItemCreateOrConnectWithoutCafeMouluInput[]
    upsert?: CommandeItemUpsertWithWhereUniqueWithoutCafeMouluInput | CommandeItemUpsertWithWhereUniqueWithoutCafeMouluInput[]
    createMany?: CommandeItemCreateManyCafeMouluInputEnvelope
    set?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    disconnect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    delete?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    update?: CommandeItemUpdateWithWhereUniqueWithoutCafeMouluInput | CommandeItemUpdateWithWhereUniqueWithoutCafeMouluInput[]
    updateMany?: CommandeItemUpdateManyWithWhereWithoutCafeMouluInput | CommandeItemUpdateManyWithWhereWithoutCafeMouluInput[]
    deleteMany?: CommandeItemScalarWhereInput | CommandeItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommandesInput = {
    create?: XOR<UserCreateWithoutCommandesInput, UserUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommandesInput
    connect?: UserWhereUniqueInput
  }

  export type CommandeItemCreateNestedManyWithoutCommandeInput = {
    create?: XOR<CommandeItemCreateWithoutCommandeInput, CommandeItemUncheckedCreateWithoutCommandeInput> | CommandeItemCreateWithoutCommandeInput[] | CommandeItemUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCommandeInput | CommandeItemCreateOrConnectWithoutCommandeInput[]
    createMany?: CommandeItemCreateManyCommandeInputEnvelope
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
  }

  export type CommandeItemUncheckedCreateNestedManyWithoutCommandeInput = {
    create?: XOR<CommandeItemCreateWithoutCommandeInput, CommandeItemUncheckedCreateWithoutCommandeInput> | CommandeItemCreateWithoutCommandeInput[] | CommandeItemUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCommandeInput | CommandeItemCreateOrConnectWithoutCommandeInput[]
    createMany?: CommandeItemCreateManyCommandeInputEnvelope
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCommandesNestedInput = {
    create?: XOR<UserCreateWithoutCommandesInput, UserUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommandesInput
    upsert?: UserUpsertWithoutCommandesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommandesInput, UserUpdateWithoutCommandesInput>, UserUncheckedUpdateWithoutCommandesInput>
  }

  export type CommandeItemUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<CommandeItemCreateWithoutCommandeInput, CommandeItemUncheckedCreateWithoutCommandeInput> | CommandeItemCreateWithoutCommandeInput[] | CommandeItemUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCommandeInput | CommandeItemCreateOrConnectWithoutCommandeInput[]
    upsert?: CommandeItemUpsertWithWhereUniqueWithoutCommandeInput | CommandeItemUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: CommandeItemCreateManyCommandeInputEnvelope
    set?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    disconnect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    delete?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    update?: CommandeItemUpdateWithWhereUniqueWithoutCommandeInput | CommandeItemUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: CommandeItemUpdateManyWithWhereWithoutCommandeInput | CommandeItemUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: CommandeItemScalarWhereInput | CommandeItemScalarWhereInput[]
  }

  export type CommandeItemUncheckedUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<CommandeItemCreateWithoutCommandeInput, CommandeItemUncheckedCreateWithoutCommandeInput> | CommandeItemCreateWithoutCommandeInput[] | CommandeItemUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: CommandeItemCreateOrConnectWithoutCommandeInput | CommandeItemCreateOrConnectWithoutCommandeInput[]
    upsert?: CommandeItemUpsertWithWhereUniqueWithoutCommandeInput | CommandeItemUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: CommandeItemCreateManyCommandeInputEnvelope
    set?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    disconnect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    delete?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    connect?: CommandeItemWhereUniqueInput | CommandeItemWhereUniqueInput[]
    update?: CommandeItemUpdateWithWhereUniqueWithoutCommandeInput | CommandeItemUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: CommandeItemUpdateManyWithWhereWithoutCommandeInput | CommandeItemUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: CommandeItemScalarWhereInput | CommandeItemScalarWhereInput[]
  }

  export type CommandeCreateNestedOneWithoutItemsInput = {
    create?: XOR<CommandeCreateWithoutItemsInput, CommandeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutItemsInput
    connect?: CommandeWhereUniqueInput
  }

  export type CafeGrainCreateNestedOneWithoutItemsInput = {
    create?: XOR<CafeGrainCreateWithoutItemsInput, CafeGrainUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CafeGrainCreateOrConnectWithoutItemsInput
    connect?: CafeGrainWhereUniqueInput
  }

  export type CafeMouluCreateNestedOneWithoutItemsInput = {
    create?: XOR<CafeMouluCreateWithoutItemsInput, CafeMouluUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CafeMouluCreateOrConnectWithoutItemsInput
    connect?: CafeMouluWhereUniqueInput
  }

  export type CommandeUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CommandeCreateWithoutItemsInput, CommandeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutItemsInput
    upsert?: CommandeUpsertWithoutItemsInput
    connect?: CommandeWhereUniqueInput
    update?: XOR<XOR<CommandeUpdateToOneWithWhereWithoutItemsInput, CommandeUpdateWithoutItemsInput>, CommandeUncheckedUpdateWithoutItemsInput>
  }

  export type CafeGrainUpdateOneWithoutItemsNestedInput = {
    create?: XOR<CafeGrainCreateWithoutItemsInput, CafeGrainUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CafeGrainCreateOrConnectWithoutItemsInput
    upsert?: CafeGrainUpsertWithoutItemsInput
    disconnect?: CafeGrainWhereInput | boolean
    delete?: CafeGrainWhereInput | boolean
    connect?: CafeGrainWhereUniqueInput
    update?: XOR<XOR<CafeGrainUpdateToOneWithWhereWithoutItemsInput, CafeGrainUpdateWithoutItemsInput>, CafeGrainUncheckedUpdateWithoutItemsInput>
  }

  export type CafeMouluUpdateOneWithoutItemsNestedInput = {
    create?: XOR<CafeMouluCreateWithoutItemsInput, CafeMouluUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CafeMouluCreateOrConnectWithoutItemsInput
    upsert?: CafeMouluUpsertWithoutItemsInput
    disconnect?: CafeMouluWhereInput | boolean
    delete?: CafeMouluWhereInput | boolean
    connect?: CafeMouluWhereUniqueInput
    update?: XOR<XOR<CafeMouluUpdateToOneWithWhereWithoutItemsInput, CafeMouluUpdateWithoutItemsInput>, CafeMouluUncheckedUpdateWithoutItemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CommandeCreateWithoutUserInput = {
    date: Date | string
    prix: number
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CommandeItemCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    prix: number
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CommandeItemUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutUserInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutUserInput, CommandeUncheckedCreateWithoutUserInput>
  }

  export type CommandeCreateManyUserInputEnvelope = {
    data: CommandeCreateManyUserInput | CommandeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommandeUpsertWithWhereUniqueWithoutUserInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutUserInput, CommandeUncheckedUpdateWithoutUserInput>
    create: XOR<CommandeCreateWithoutUserInput, CommandeUncheckedCreateWithoutUserInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutUserInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutUserInput, CommandeUncheckedUpdateWithoutUserInput>
  }

  export type CommandeUpdateManyWithWhereWithoutUserInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutUserInput>
  }

  export type CommandeScalarWhereInput = {
    AND?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    OR?: CommandeScalarWhereInput[]
    NOT?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    id?: IntFilter<"Commande"> | number
    date?: DateTimeFilter<"Commande"> | Date | string
    prix?: FloatFilter<"Commande"> | number
    adresse?: StringFilter<"Commande"> | string
    userId?: IntFilter<"Commande"> | number
    createdAt?: DateTimeFilter<"Commande"> | Date | string
    updatedAt?: DateTimeFilter<"Commande"> | Date | string
  }

  export type CommandeItemCreateWithoutCafeGrainInput = {
    quantite: number
    prix: number
    commande: CommandeCreateNestedOneWithoutItemsInput
    cafeMoulu?: CafeMouluCreateNestedOneWithoutItemsInput
  }

  export type CommandeItemUncheckedCreateWithoutCafeGrainInput = {
    id?: number
    commandeId: number
    cafeMouluId?: number | null
    quantite: number
    prix: number
  }

  export type CommandeItemCreateOrConnectWithoutCafeGrainInput = {
    where: CommandeItemWhereUniqueInput
    create: XOR<CommandeItemCreateWithoutCafeGrainInput, CommandeItemUncheckedCreateWithoutCafeGrainInput>
  }

  export type CommandeItemCreateManyCafeGrainInputEnvelope = {
    data: CommandeItemCreateManyCafeGrainInput | CommandeItemCreateManyCafeGrainInput[]
    skipDuplicates?: boolean
  }

  export type CommandeItemUpsertWithWhereUniqueWithoutCafeGrainInput = {
    where: CommandeItemWhereUniqueInput
    update: XOR<CommandeItemUpdateWithoutCafeGrainInput, CommandeItemUncheckedUpdateWithoutCafeGrainInput>
    create: XOR<CommandeItemCreateWithoutCafeGrainInput, CommandeItemUncheckedCreateWithoutCafeGrainInput>
  }

  export type CommandeItemUpdateWithWhereUniqueWithoutCafeGrainInput = {
    where: CommandeItemWhereUniqueInput
    data: XOR<CommandeItemUpdateWithoutCafeGrainInput, CommandeItemUncheckedUpdateWithoutCafeGrainInput>
  }

  export type CommandeItemUpdateManyWithWhereWithoutCafeGrainInput = {
    where: CommandeItemScalarWhereInput
    data: XOR<CommandeItemUpdateManyMutationInput, CommandeItemUncheckedUpdateManyWithoutCafeGrainInput>
  }

  export type CommandeItemScalarWhereInput = {
    AND?: CommandeItemScalarWhereInput | CommandeItemScalarWhereInput[]
    OR?: CommandeItemScalarWhereInput[]
    NOT?: CommandeItemScalarWhereInput | CommandeItemScalarWhereInput[]
    id?: IntFilter<"CommandeItem"> | number
    commandeId?: IntFilter<"CommandeItem"> | number
    cafeGrainId?: IntNullableFilter<"CommandeItem"> | number | null
    cafeMouluId?: IntNullableFilter<"CommandeItem"> | number | null
    quantite?: IntFilter<"CommandeItem"> | number
    prix?: FloatFilter<"CommandeItem"> | number
  }

  export type CommandeItemCreateWithoutCafeMouluInput = {
    quantite: number
    prix: number
    commande: CommandeCreateNestedOneWithoutItemsInput
    cafeGrain?: CafeGrainCreateNestedOneWithoutItemsInput
  }

  export type CommandeItemUncheckedCreateWithoutCafeMouluInput = {
    id?: number
    commandeId: number
    cafeGrainId?: number | null
    quantite: number
    prix: number
  }

  export type CommandeItemCreateOrConnectWithoutCafeMouluInput = {
    where: CommandeItemWhereUniqueInput
    create: XOR<CommandeItemCreateWithoutCafeMouluInput, CommandeItemUncheckedCreateWithoutCafeMouluInput>
  }

  export type CommandeItemCreateManyCafeMouluInputEnvelope = {
    data: CommandeItemCreateManyCafeMouluInput | CommandeItemCreateManyCafeMouluInput[]
    skipDuplicates?: boolean
  }

  export type CommandeItemUpsertWithWhereUniqueWithoutCafeMouluInput = {
    where: CommandeItemWhereUniqueInput
    update: XOR<CommandeItemUpdateWithoutCafeMouluInput, CommandeItemUncheckedUpdateWithoutCafeMouluInput>
    create: XOR<CommandeItemCreateWithoutCafeMouluInput, CommandeItemUncheckedCreateWithoutCafeMouluInput>
  }

  export type CommandeItemUpdateWithWhereUniqueWithoutCafeMouluInput = {
    where: CommandeItemWhereUniqueInput
    data: XOR<CommandeItemUpdateWithoutCafeMouluInput, CommandeItemUncheckedUpdateWithoutCafeMouluInput>
  }

  export type CommandeItemUpdateManyWithWhereWithoutCafeMouluInput = {
    where: CommandeItemScalarWhereInput
    data: XOR<CommandeItemUpdateManyMutationInput, CommandeItemUncheckedUpdateManyWithoutCafeMouluInput>
  }

  export type UserCreateWithoutCommandesInput = {
    prenom: string
    nom: string
    email: string
    pass: string
    role?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCommandesInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    pass: string
    role?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCommandesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommandesInput, UserUncheckedCreateWithoutCommandesInput>
  }

  export type CommandeItemCreateWithoutCommandeInput = {
    quantite: number
    prix: number
    cafeGrain?: CafeGrainCreateNestedOneWithoutItemsInput
    cafeMoulu?: CafeMouluCreateNestedOneWithoutItemsInput
  }

  export type CommandeItemUncheckedCreateWithoutCommandeInput = {
    id?: number
    cafeGrainId?: number | null
    cafeMouluId?: number | null
    quantite: number
    prix: number
  }

  export type CommandeItemCreateOrConnectWithoutCommandeInput = {
    where: CommandeItemWhereUniqueInput
    create: XOR<CommandeItemCreateWithoutCommandeInput, CommandeItemUncheckedCreateWithoutCommandeInput>
  }

  export type CommandeItemCreateManyCommandeInputEnvelope = {
    data: CommandeItemCreateManyCommandeInput | CommandeItemCreateManyCommandeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommandesInput = {
    update: XOR<UserUpdateWithoutCommandesInput, UserUncheckedUpdateWithoutCommandesInput>
    create: XOR<UserCreateWithoutCommandesInput, UserUncheckedCreateWithoutCommandesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommandesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommandesInput, UserUncheckedUpdateWithoutCommandesInput>
  }

  export type UserUpdateWithoutCommandesInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    role?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCommandesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    role?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeItemUpsertWithWhereUniqueWithoutCommandeInput = {
    where: CommandeItemWhereUniqueInput
    update: XOR<CommandeItemUpdateWithoutCommandeInput, CommandeItemUncheckedUpdateWithoutCommandeInput>
    create: XOR<CommandeItemCreateWithoutCommandeInput, CommandeItemUncheckedCreateWithoutCommandeInput>
  }

  export type CommandeItemUpdateWithWhereUniqueWithoutCommandeInput = {
    where: CommandeItemWhereUniqueInput
    data: XOR<CommandeItemUpdateWithoutCommandeInput, CommandeItemUncheckedUpdateWithoutCommandeInput>
  }

  export type CommandeItemUpdateManyWithWhereWithoutCommandeInput = {
    where: CommandeItemScalarWhereInput
    data: XOR<CommandeItemUpdateManyMutationInput, CommandeItemUncheckedUpdateManyWithoutCommandeInput>
  }

  export type CommandeCreateWithoutItemsInput = {
    date: Date | string
    prix: number
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommandesInput
  }

  export type CommandeUncheckedCreateWithoutItemsInput = {
    id?: number
    date: Date | string
    prix: number
    adresse: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommandeCreateOrConnectWithoutItemsInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutItemsInput, CommandeUncheckedCreateWithoutItemsInput>
  }

  export type CafeGrainCreateWithoutItemsInput = {
    nom: string
    type?: string | null
    origine?: string | null
    quantite?: string | null
    description?: string | null
    prix?: number | null
    image?: string | null
  }

  export type CafeGrainUncheckedCreateWithoutItemsInput = {
    id?: number
    nom: string
    type?: string | null
    origine?: string | null
    quantite?: string | null
    description?: string | null
    prix?: number | null
    image?: string | null
  }

  export type CafeGrainCreateOrConnectWithoutItemsInput = {
    where: CafeGrainWhereUniqueInput
    create: XOR<CafeGrainCreateWithoutItemsInput, CafeGrainUncheckedCreateWithoutItemsInput>
  }

  export type CafeMouluCreateWithoutItemsInput = {
    nom: string
    type?: string | null
    origine?: string | null
    quantite?: string | null
    description?: string | null
    prix?: number | null
    image?: string | null
  }

  export type CafeMouluUncheckedCreateWithoutItemsInput = {
    id?: number
    nom: string
    type?: string | null
    origine?: string | null
    quantite?: string | null
    description?: string | null
    prix?: number | null
    image?: string | null
  }

  export type CafeMouluCreateOrConnectWithoutItemsInput = {
    where: CafeMouluWhereUniqueInput
    create: XOR<CafeMouluCreateWithoutItemsInput, CafeMouluUncheckedCreateWithoutItemsInput>
  }

  export type CommandeUpsertWithoutItemsInput = {
    update: XOR<CommandeUpdateWithoutItemsInput, CommandeUncheckedUpdateWithoutItemsInput>
    create: XOR<CommandeCreateWithoutItemsInput, CommandeUncheckedCreateWithoutItemsInput>
    where?: CommandeWhereInput
  }

  export type CommandeUpdateToOneWithWhereWithoutItemsInput = {
    where?: CommandeWhereInput
    data: XOR<CommandeUpdateWithoutItemsInput, CommandeUncheckedUpdateWithoutItemsInput>
  }

  export type CommandeUpdateWithoutItemsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix?: FloatFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommandesNestedInput
  }

  export type CommandeUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix?: FloatFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CafeGrainUpsertWithoutItemsInput = {
    update: XOR<CafeGrainUpdateWithoutItemsInput, CafeGrainUncheckedUpdateWithoutItemsInput>
    create: XOR<CafeGrainCreateWithoutItemsInput, CafeGrainUncheckedCreateWithoutItemsInput>
    where?: CafeGrainWhereInput
  }

  export type CafeGrainUpdateToOneWithWhereWithoutItemsInput = {
    where?: CafeGrainWhereInput
    data: XOR<CafeGrainUpdateWithoutItemsInput, CafeGrainUncheckedUpdateWithoutItemsInput>
  }

  export type CafeGrainUpdateWithoutItemsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CafeGrainUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CafeMouluUpsertWithoutItemsInput = {
    update: XOR<CafeMouluUpdateWithoutItemsInput, CafeMouluUncheckedUpdateWithoutItemsInput>
    create: XOR<CafeMouluCreateWithoutItemsInput, CafeMouluUncheckedCreateWithoutItemsInput>
    where?: CafeMouluWhereInput
  }

  export type CafeMouluUpdateToOneWithWhereWithoutItemsInput = {
    where?: CafeMouluWhereInput
    data: XOR<CafeMouluUpdateWithoutItemsInput, CafeMouluUncheckedUpdateWithoutItemsInput>
  }

  export type CafeMouluUpdateWithoutItemsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CafeMouluUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    origine?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandeCreateManyUserInput = {
    id?: number
    date: Date | string
    prix: number
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommandeUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix?: FloatFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CommandeItemUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix?: FloatFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CommandeItemUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix?: FloatFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeItemCreateManyCafeGrainInput = {
    id?: number
    commandeId: number
    cafeMouluId?: number | null
    quantite: number
    prix: number
  }

  export type CommandeItemUpdateWithoutCafeGrainInput = {
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
    commande?: CommandeUpdateOneRequiredWithoutItemsNestedInput
    cafeMoulu?: CafeMouluUpdateOneWithoutItemsNestedInput
  }

  export type CommandeItemUncheckedUpdateWithoutCafeGrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    commandeId?: IntFieldUpdateOperationsInput | number
    cafeMouluId?: NullableIntFieldUpdateOperationsInput | number | null
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type CommandeItemUncheckedUpdateManyWithoutCafeGrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    commandeId?: IntFieldUpdateOperationsInput | number
    cafeMouluId?: NullableIntFieldUpdateOperationsInput | number | null
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type CommandeItemCreateManyCafeMouluInput = {
    id?: number
    commandeId: number
    cafeGrainId?: number | null
    quantite: number
    prix: number
  }

  export type CommandeItemUpdateWithoutCafeMouluInput = {
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
    commande?: CommandeUpdateOneRequiredWithoutItemsNestedInput
    cafeGrain?: CafeGrainUpdateOneWithoutItemsNestedInput
  }

  export type CommandeItemUncheckedUpdateWithoutCafeMouluInput = {
    id?: IntFieldUpdateOperationsInput | number
    commandeId?: IntFieldUpdateOperationsInput | number
    cafeGrainId?: NullableIntFieldUpdateOperationsInput | number | null
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type CommandeItemUncheckedUpdateManyWithoutCafeMouluInput = {
    id?: IntFieldUpdateOperationsInput | number
    commandeId?: IntFieldUpdateOperationsInput | number
    cafeGrainId?: NullableIntFieldUpdateOperationsInput | number | null
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type CommandeItemCreateManyCommandeInput = {
    id?: number
    cafeGrainId?: number | null
    cafeMouluId?: number | null
    quantite: number
    prix: number
  }

  export type CommandeItemUpdateWithoutCommandeInput = {
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
    cafeGrain?: CafeGrainUpdateOneWithoutItemsNestedInput
    cafeMoulu?: CafeMouluUpdateOneWithoutItemsNestedInput
  }

  export type CommandeItemUncheckedUpdateWithoutCommandeInput = {
    id?: IntFieldUpdateOperationsInput | number
    cafeGrainId?: NullableIntFieldUpdateOperationsInput | number | null
    cafeMouluId?: NullableIntFieldUpdateOperationsInput | number | null
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type CommandeItemUncheckedUpdateManyWithoutCommandeInput = {
    id?: IntFieldUpdateOperationsInput | number
    cafeGrainId?: NullableIntFieldUpdateOperationsInput | number | null
    cafeMouluId?: NullableIntFieldUpdateOperationsInput | number | null
    quantite?: IntFieldUpdateOperationsInput | number
    prix?: FloatFieldUpdateOperationsInput | number
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