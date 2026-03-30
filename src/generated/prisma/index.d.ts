
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
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model ProgressLog
 * 
 */
export type ProgressLog = $Result.DefaultSelection<Prisma.$ProgressLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  TECHNICIAN: 'TECHNICIAN',
  SUPERVISOR: 'SUPERVISOR',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const JobStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING_PARTS: 'WAITING_PARTS',
  COMPLETED: 'COMPLETED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

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
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressLog`: Exposes CRUD operations for the **ProgressLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressLogs
    * const progressLogs = await prisma.progressLog.findMany()
    * ```
    */
  get progressLog(): Prisma.ProgressLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    Job: 'Job',
    ProgressLog: 'ProgressLog'
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
      modelProps: "user" | "job" | "progressLog"
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
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      ProgressLog: {
        payload: Prisma.$ProgressLogPayload<ExtArgs>
        fields: Prisma.ProgressLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          findFirst: {
            args: Prisma.ProgressLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          findMany: {
            args: Prisma.ProgressLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>[]
          }
          create: {
            args: Prisma.ProgressLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          createMany: {
            args: Prisma.ProgressLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>[]
          }
          delete: {
            args: Prisma.ProgressLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          update: {
            args: Prisma.ProgressLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          deleteMany: {
            args: Prisma.ProgressLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>[]
          }
          upsert: {
            args: Prisma.ProgressLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogPayload>
          }
          aggregate: {
            args: Prisma.ProgressLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressLog>
          }
          groupBy: {
            args: Prisma.ProgressLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressLogCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressLogCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    job?: JobOmit
    progressLog?: ProgressLogOmit
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
    logs: number
    assignedJobs: number
    supervisedJobs: number
    createdJobs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UserCountOutputTypeCountLogsArgs
    assignedJobs?: boolean | UserCountOutputTypeCountAssignedJobsArgs
    supervisedJobs?: boolean | UserCountOutputTypeCountSupervisedJobsArgs
    createdJobs?: boolean | UserCountOutputTypeCountCreatedJobsArgs
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
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupervisedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    logs: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | JobCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogWhereInput
  }


  /**
   * Models
   */

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
    clerkId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    firstName: number
    lastName: number
    email: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    email?: true
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
    clerkId: string
    firstName: string
    lastName: string
    email: string
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
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    logs?: boolean | User$logsArgs<ExtArgs>
    assignedJobs?: boolean | User$assignedJobsArgs<ExtArgs>
    supervisedJobs?: boolean | User$supervisedJobsArgs<ExtArgs>
    createdJobs?: boolean | User$createdJobsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "firstName" | "lastName" | "email" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | User$logsArgs<ExtArgs>
    assignedJobs?: boolean | User$assignedJobsArgs<ExtArgs>
    supervisedJobs?: boolean | User$supervisedJobsArgs<ExtArgs>
    createdJobs?: boolean | User$createdJobsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      logs: Prisma.$ProgressLogPayload<ExtArgs>[]
      assignedJobs: Prisma.$JobPayload<ExtArgs>[]
      supervisedJobs: Prisma.$JobPayload<ExtArgs>[]
      createdJobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      firstName: string
      lastName: string
      email: string
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
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedJobs<T extends User$assignedJobsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supervisedJobs<T extends User$supervisedJobsArgs<ExtArgs> = {}>(args?: Subset<T, User$supervisedJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdJobs<T extends User$createdJobsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly clerkId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
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
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    where?: ProgressLogWhereInput
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    cursor?: ProgressLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * User.assignedJobs
   */
  export type User$assignedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * User.supervisedJobs
   */
  export type User$supervisedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * User.createdJobs
   */
  export type User$createdJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
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
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    contract: Decimal | null
  }

  export type JobSumAggregateOutputType = {
    contract: Decimal | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    tenderNo: string | null
    firm: string | null
    contract: Decimal | null
    description: string | null
    status: $Enums.JobStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    technicianId: string | null
    supervisorId: string | null
    creatorId: string | null
    notes: string | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    tenderNo: string | null
    firm: string | null
    contract: Decimal | null
    description: string | null
    status: $Enums.JobStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    technicianId: string | null
    supervisorId: string | null
    creatorId: string | null
    notes: string | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    tenderNo: number
    firm: number
    contract: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    technicianId: number
    supervisorId: number
    creatorId: number
    notes: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    contract?: true
  }

  export type JobSumAggregateInputType = {
    contract?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    tenderNo?: true
    firm?: true
    contract?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    technicianId?: true
    supervisorId?: true
    creatorId?: true
    notes?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    tenderNo?: true
    firm?: true
    contract?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    technicianId?: true
    supervisorId?: true
    creatorId?: true
    notes?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    tenderNo?: true
    firm?: true
    contract?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    technicianId?: true
    supervisorId?: true
    creatorId?: true
    notes?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    tenderNo: string
    firm: string
    contract: Decimal
    description: string
    status: $Enums.JobStatus
    createdAt: Date
    updatedAt: Date
    technicianId: string | null
    supervisorId: string | null
    creatorId: string | null
    notes: string | null
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenderNo?: boolean
    firm?: boolean
    contract?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technicianId?: boolean
    supervisorId?: boolean
    creatorId?: boolean
    notes?: boolean
    technician?: boolean | Job$technicianArgs<ExtArgs>
    supervisor?: boolean | Job$supervisorArgs<ExtArgs>
    creator?: boolean | Job$creatorArgs<ExtArgs>
    logs?: boolean | Job$logsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenderNo?: boolean
    firm?: boolean
    contract?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technicianId?: boolean
    supervisorId?: boolean
    creatorId?: boolean
    notes?: boolean
    technician?: boolean | Job$technicianArgs<ExtArgs>
    supervisor?: boolean | Job$supervisorArgs<ExtArgs>
    creator?: boolean | Job$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenderNo?: boolean
    firm?: boolean
    contract?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technicianId?: boolean
    supervisorId?: boolean
    creatorId?: boolean
    notes?: boolean
    technician?: boolean | Job$technicianArgs<ExtArgs>
    supervisor?: boolean | Job$supervisorArgs<ExtArgs>
    creator?: boolean | Job$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    tenderNo?: boolean
    firm?: boolean
    contract?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technicianId?: boolean
    supervisorId?: boolean
    creatorId?: boolean
    notes?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenderNo" | "firm" | "contract" | "description" | "status" | "createdAt" | "updatedAt" | "technicianId" | "supervisorId" | "creatorId" | "notes", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | Job$technicianArgs<ExtArgs>
    supervisor?: boolean | Job$supervisorArgs<ExtArgs>
    creator?: boolean | Job$creatorArgs<ExtArgs>
    logs?: boolean | Job$logsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | Job$technicianArgs<ExtArgs>
    supervisor?: boolean | Job$supervisorArgs<ExtArgs>
    creator?: boolean | Job$creatorArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | Job$technicianArgs<ExtArgs>
    supervisor?: boolean | Job$supervisorArgs<ExtArgs>
    creator?: boolean | Job$creatorArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      technician: Prisma.$UserPayload<ExtArgs> | null
      supervisor: Prisma.$UserPayload<ExtArgs> | null
      creator: Prisma.$UserPayload<ExtArgs> | null
      logs: Prisma.$ProgressLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenderNo: string
      firm: string
      contract: Prisma.Decimal
      description: string
      status: $Enums.JobStatus
      createdAt: Date
      updatedAt: Date
      technicianId: string | null
      supervisorId: string | null
      creatorId: string | null
      notes: string | null
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technician<T extends Job$technicianArgs<ExtArgs> = {}>(args?: Subset<T, Job$technicianArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends Job$supervisorArgs<ExtArgs> = {}>(args?: Subset<T, Job$supervisorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creator<T extends Job$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Job$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    logs<T extends Job$logsArgs<ExtArgs> = {}>(args?: Subset<T, Job$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly tenderNo: FieldRef<"Job", 'String'>
    readonly firm: FieldRef<"Job", 'String'>
    readonly contract: FieldRef<"Job", 'Decimal'>
    readonly description: FieldRef<"Job", 'String'>
    readonly status: FieldRef<"Job", 'JobStatus'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
    readonly technicianId: FieldRef<"Job", 'String'>
    readonly supervisorId: FieldRef<"Job", 'String'>
    readonly creatorId: FieldRef<"Job", 'String'>
    readonly notes: FieldRef<"Job", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.technician
   */
  export type Job$technicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Job.supervisor
   */
  export type Job$supervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Job.creator
   */
  export type Job$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Job.logs
   */
  export type Job$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    where?: ProgressLogWhereInput
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    cursor?: ProgressLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model ProgressLog
   */

  export type AggregateProgressLog = {
    _count: ProgressLogCountAggregateOutputType | null
    _min: ProgressLogMinAggregateOutputType | null
    _max: ProgressLogMaxAggregateOutputType | null
  }

  export type ProgressLogMinAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
    jobId: string | null
    userId: string | null
  }

  export type ProgressLogMaxAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
    jobId: string | null
    userId: string | null
  }

  export type ProgressLogCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    jobId: number
    userId: number
    _all: number
  }


  export type ProgressLogMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    jobId?: true
    userId?: true
  }

  export type ProgressLogMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    jobId?: true
    userId?: true
  }

  export type ProgressLogCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    jobId?: true
    userId?: true
    _all?: true
  }

  export type ProgressLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressLog to aggregate.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressLogs
    **/
    _count?: true | ProgressLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressLogMaxAggregateInputType
  }

  export type GetProgressLogAggregateType<T extends ProgressLogAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressLog[P]>
      : GetScalarType<T[P], AggregateProgressLog[P]>
  }




  export type ProgressLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogWhereInput
    orderBy?: ProgressLogOrderByWithAggregationInput | ProgressLogOrderByWithAggregationInput[]
    by: ProgressLogScalarFieldEnum[] | ProgressLogScalarFieldEnum
    having?: ProgressLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressLogCountAggregateInputType | true
    _min?: ProgressLogMinAggregateInputType
    _max?: ProgressLogMaxAggregateInputType
  }

  export type ProgressLogGroupByOutputType = {
    id: string
    message: string
    createdAt: Date
    jobId: string
    userId: string
    _count: ProgressLogCountAggregateOutputType | null
    _min: ProgressLogMinAggregateOutputType | null
    _max: ProgressLogMaxAggregateOutputType | null
  }

  type GetProgressLogGroupByPayload<T extends ProgressLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressLogGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressLogGroupByOutputType[P]>
        }
      >
    >


  export type ProgressLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    jobId?: boolean
    userId?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressLog"]>

  export type ProgressLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    jobId?: boolean
    userId?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressLog"]>

  export type ProgressLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    jobId?: boolean
    userId?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressLog"]>

  export type ProgressLogSelectScalar = {
    id?: boolean
    message?: boolean
    createdAt?: boolean
    jobId?: boolean
    userId?: boolean
  }

  export type ProgressLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "createdAt" | "jobId" | "userId", ExtArgs["result"]["progressLog"]>
  export type ProgressLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProgressLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressLog"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      createdAt: Date
      jobId: string
      userId: string
    }, ExtArgs["result"]["progressLog"]>
    composites: {}
  }

  type ProgressLogGetPayload<S extends boolean | null | undefined | ProgressLogDefaultArgs> = $Result.GetResult<Prisma.$ProgressLogPayload, S>

  type ProgressLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressLogCountAggregateInputType | true
    }

  export interface ProgressLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressLog'], meta: { name: 'ProgressLog' } }
    /**
     * Find zero or one ProgressLog that matches the filter.
     * @param {ProgressLogFindUniqueArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressLogFindUniqueArgs>(args: SelectSubset<T, ProgressLogFindUniqueArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressLogFindUniqueOrThrowArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogFindFirstArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressLogFindFirstArgs>(args?: SelectSubset<T, ProgressLogFindFirstArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogFindFirstOrThrowArgs} args - Arguments to find a ProgressLog
     * @example
     * // Get one ProgressLog
     * const progressLog = await prisma.progressLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressLogs
     * const progressLogs = await prisma.progressLog.findMany()
     * 
     * // Get first 10 ProgressLogs
     * const progressLogs = await prisma.progressLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressLogWithIdOnly = await prisma.progressLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressLogFindManyArgs>(args?: SelectSubset<T, ProgressLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressLog.
     * @param {ProgressLogCreateArgs} args - Arguments to create a ProgressLog.
     * @example
     * // Create one ProgressLog
     * const ProgressLog = await prisma.progressLog.create({
     *   data: {
     *     // ... data to create a ProgressLog
     *   }
     * })
     * 
     */
    create<T extends ProgressLogCreateArgs>(args: SelectSubset<T, ProgressLogCreateArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressLogs.
     * @param {ProgressLogCreateManyArgs} args - Arguments to create many ProgressLogs.
     * @example
     * // Create many ProgressLogs
     * const progressLog = await prisma.progressLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressLogCreateManyArgs>(args?: SelectSubset<T, ProgressLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressLogs and returns the data saved in the database.
     * @param {ProgressLogCreateManyAndReturnArgs} args - Arguments to create many ProgressLogs.
     * @example
     * // Create many ProgressLogs
     * const progressLog = await prisma.progressLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressLogs and only return the `id`
     * const progressLogWithIdOnly = await prisma.progressLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressLog.
     * @param {ProgressLogDeleteArgs} args - Arguments to delete one ProgressLog.
     * @example
     * // Delete one ProgressLog
     * const ProgressLog = await prisma.progressLog.delete({
     *   where: {
     *     // ... filter to delete one ProgressLog
     *   }
     * })
     * 
     */
    delete<T extends ProgressLogDeleteArgs>(args: SelectSubset<T, ProgressLogDeleteArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressLog.
     * @param {ProgressLogUpdateArgs} args - Arguments to update one ProgressLog.
     * @example
     * // Update one ProgressLog
     * const progressLog = await prisma.progressLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressLogUpdateArgs>(args: SelectSubset<T, ProgressLogUpdateArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressLogs.
     * @param {ProgressLogDeleteManyArgs} args - Arguments to filter ProgressLogs to delete.
     * @example
     * // Delete a few ProgressLogs
     * const { count } = await prisma.progressLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressLogDeleteManyArgs>(args?: SelectSubset<T, ProgressLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressLogs
     * const progressLog = await prisma.progressLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressLogUpdateManyArgs>(args: SelectSubset<T, ProgressLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressLogs and returns the data updated in the database.
     * @param {ProgressLogUpdateManyAndReturnArgs} args - Arguments to update many ProgressLogs.
     * @example
     * // Update many ProgressLogs
     * const progressLog = await prisma.progressLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressLogs and only return the `id`
     * const progressLogWithIdOnly = await prisma.progressLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgressLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressLog.
     * @param {ProgressLogUpsertArgs} args - Arguments to update or create a ProgressLog.
     * @example
     * // Update or create a ProgressLog
     * const progressLog = await prisma.progressLog.upsert({
     *   create: {
     *     // ... data to create a ProgressLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressLog we want to update
     *   }
     * })
     */
    upsert<T extends ProgressLogUpsertArgs>(args: SelectSubset<T, ProgressLogUpsertArgs<ExtArgs>>): Prisma__ProgressLogClient<$Result.GetResult<Prisma.$ProgressLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogCountArgs} args - Arguments to filter ProgressLogs to count.
     * @example
     * // Count the number of ProgressLogs
     * const count = await prisma.progressLog.count({
     *   where: {
     *     // ... the filter for the ProgressLogs we want to count
     *   }
     * })
    **/
    count<T extends ProgressLogCountArgs>(
      args?: Subset<T, ProgressLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressLogAggregateArgs>(args: Subset<T, ProgressLogAggregateArgs>): Prisma.PrismaPromise<GetProgressLogAggregateType<T>>

    /**
     * Group by ProgressLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogGroupByArgs} args - Group by arguments.
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
      T extends ProgressLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressLogGroupByArgs['orderBy'] }
        : { orderBy?: ProgressLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressLog model
   */
  readonly fields: ProgressLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProgressLog model
   */
  interface ProgressLogFieldRefs {
    readonly id: FieldRef<"ProgressLog", 'String'>
    readonly message: FieldRef<"ProgressLog", 'String'>
    readonly createdAt: FieldRef<"ProgressLog", 'DateTime'>
    readonly jobId: FieldRef<"ProgressLog", 'String'>
    readonly userId: FieldRef<"ProgressLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProgressLog findUnique
   */
  export type ProgressLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog findUniqueOrThrow
   */
  export type ProgressLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog findFirst
   */
  export type ProgressLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressLogs.
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressLogs.
     */
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * ProgressLog findFirstOrThrow
   */
  export type ProgressLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLog to fetch.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressLogs.
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressLogs.
     */
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * ProgressLog findMany
   */
  export type ProgressLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLogs to fetch.
     */
    where?: ProgressLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogOrderByWithRelationInput | ProgressLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressLogs.
     */
    cursor?: ProgressLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    distinct?: ProgressLogScalarFieldEnum | ProgressLogScalarFieldEnum[]
  }

  /**
   * ProgressLog create
   */
  export type ProgressLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressLog.
     */
    data: XOR<ProgressLogCreateInput, ProgressLogUncheckedCreateInput>
  }

  /**
   * ProgressLog createMany
   */
  export type ProgressLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressLogs.
     */
    data: ProgressLogCreateManyInput | ProgressLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressLog createManyAndReturn
   */
  export type ProgressLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressLogs.
     */
    data: ProgressLogCreateManyInput | ProgressLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressLog update
   */
  export type ProgressLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressLog.
     */
    data: XOR<ProgressLogUpdateInput, ProgressLogUncheckedUpdateInput>
    /**
     * Choose, which ProgressLog to update.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog updateMany
   */
  export type ProgressLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressLogs.
     */
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyInput>
    /**
     * Filter which ProgressLogs to update
     */
    where?: ProgressLogWhereInput
    /**
     * Limit how many ProgressLogs to update.
     */
    limit?: number
  }

  /**
   * ProgressLog updateManyAndReturn
   */
  export type ProgressLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * The data used to update ProgressLogs.
     */
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyInput>
    /**
     * Filter which ProgressLogs to update
     */
    where?: ProgressLogWhereInput
    /**
     * Limit how many ProgressLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressLog upsert
   */
  export type ProgressLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressLog to update in case it exists.
     */
    where: ProgressLogWhereUniqueInput
    /**
     * In case the ProgressLog found by the `where` argument doesn't exist, create a new ProgressLog with this data.
     */
    create: XOR<ProgressLogCreateInput, ProgressLogUncheckedCreateInput>
    /**
     * In case the ProgressLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressLogUpdateInput, ProgressLogUncheckedUpdateInput>
  }

  /**
   * ProgressLog delete
   */
  export type ProgressLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
    /**
     * Filter which ProgressLog to delete.
     */
    where: ProgressLogWhereUniqueInput
  }

  /**
   * ProgressLog deleteMany
   */
  export type ProgressLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressLogs to delete
     */
    where?: ProgressLogWhereInput
    /**
     * Limit how many ProgressLogs to delete.
     */
    limit?: number
  }

  /**
   * ProgressLog without action
   */
  export type ProgressLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLog
     */
    select?: ProgressLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLog
     */
    omit?: ProgressLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogInclude<ExtArgs> | null
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
    clerkId: 'clerkId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    tenderNo: 'tenderNo',
    firm: 'firm',
    contract: 'contract',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    technicianId: 'technicianId',
    supervisorId: 'supervisorId',
    creatorId: 'creatorId',
    notes: 'notes'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const ProgressLogScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt',
    jobId: 'jobId',
    userId: 'userId'
  };

  export type ProgressLogScalarFieldEnum = (typeof ProgressLogScalarFieldEnum)[keyof typeof ProgressLogScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    logs?: ProgressLogListRelationFilter
    assignedJobs?: JobListRelationFilter
    supervisedJobs?: JobListRelationFilter
    createdJobs?: JobListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    logs?: ProgressLogOrderByRelationAggregateInput
    assignedJobs?: JobOrderByRelationAggregateInput
    supervisedJobs?: JobOrderByRelationAggregateInput
    createdJobs?: JobOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    logs?: ProgressLogListRelationFilter
    assignedJobs?: JobListRelationFilter
    supervisedJobs?: JobListRelationFilter
    createdJobs?: JobListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
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
    clerkId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    tenderNo?: StringFilter<"Job"> | string
    firm?: StringFilter<"Job"> | string
    contract?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Job"> | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    technicianId?: StringNullableFilter<"Job"> | string | null
    supervisorId?: StringNullableFilter<"Job"> | string | null
    creatorId?: StringNullableFilter<"Job"> | string | null
    notes?: StringNullableFilter<"Job"> | string | null
    technician?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    supervisor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    logs?: ProgressLogListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    tenderNo?: SortOrder
    firm?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    supervisorId?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    technician?: UserOrderByWithRelationInput
    supervisor?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    logs?: ProgressLogOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenderNo?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    firm?: StringFilter<"Job"> | string
    contract?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Job"> | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    technicianId?: StringNullableFilter<"Job"> | string | null
    supervisorId?: StringNullableFilter<"Job"> | string | null
    creatorId?: StringNullableFilter<"Job"> | string | null
    notes?: StringNullableFilter<"Job"> | string | null
    technician?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    supervisor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    logs?: ProgressLogListRelationFilter
  }, "id" | "tenderNo">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    tenderNo?: SortOrder
    firm?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    supervisorId?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    tenderNo?: StringWithAggregatesFilter<"Job"> | string
    firm?: StringWithAggregatesFilter<"Job"> | string
    contract?: DecimalWithAggregatesFilter<"Job"> | Decimal | DecimalJsLike | number | string
    description?: StringWithAggregatesFilter<"Job"> | string
    status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    technicianId?: StringNullableWithAggregatesFilter<"Job"> | string | null
    supervisorId?: StringNullableWithAggregatesFilter<"Job"> | string | null
    creatorId?: StringNullableWithAggregatesFilter<"Job"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Job"> | string | null
  }

  export type ProgressLogWhereInput = {
    AND?: ProgressLogWhereInput | ProgressLogWhereInput[]
    OR?: ProgressLogWhereInput[]
    NOT?: ProgressLogWhereInput | ProgressLogWhereInput[]
    id?: StringFilter<"ProgressLog"> | string
    message?: StringFilter<"ProgressLog"> | string
    createdAt?: DateTimeFilter<"ProgressLog"> | Date | string
    jobId?: StringFilter<"ProgressLog"> | string
    userId?: StringFilter<"ProgressLog"> | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProgressLogOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
    job?: JobOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProgressLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgressLogWhereInput | ProgressLogWhereInput[]
    OR?: ProgressLogWhereInput[]
    NOT?: ProgressLogWhereInput | ProgressLogWhereInput[]
    message?: StringFilter<"ProgressLog"> | string
    createdAt?: DateTimeFilter<"ProgressLog"> | Date | string
    jobId?: StringFilter<"ProgressLog"> | string
    userId?: StringFilter<"ProgressLog"> | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProgressLogOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
    _count?: ProgressLogCountOrderByAggregateInput
    _max?: ProgressLogMaxOrderByAggregateInput
    _min?: ProgressLogMinOrderByAggregateInput
  }

  export type ProgressLogScalarWhereWithAggregatesInput = {
    AND?: ProgressLogScalarWhereWithAggregatesInput | ProgressLogScalarWhereWithAggregatesInput[]
    OR?: ProgressLogScalarWhereWithAggregatesInput[]
    NOT?: ProgressLogScalarWhereWithAggregatesInput | ProgressLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressLog"> | string
    message?: StringWithAggregatesFilter<"ProgressLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProgressLog"> | Date | string
    jobId?: StringWithAggregatesFilter<"ProgressLog"> | string
    userId?: StringWithAggregatesFilter<"ProgressLog"> | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    logs?: ProgressLogCreateNestedManyWithoutUserInput
    assignedJobs?: JobCreateNestedManyWithoutTechnicianInput
    supervisedJobs?: JobCreateNestedManyWithoutSupervisorInput
    createdJobs?: JobCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    logs?: ProgressLogUncheckedCreateNestedManyWithoutUserInput
    assignedJobs?: JobUncheckedCreateNestedManyWithoutTechnicianInput
    supervisedJobs?: JobUncheckedCreateNestedManyWithoutSupervisorInput
    createdJobs?: JobUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ProgressLogUpdateManyWithoutUserNestedInput
    assignedJobs?: JobUpdateManyWithoutTechnicianNestedInput
    supervisedJobs?: JobUpdateManyWithoutSupervisorNestedInput
    createdJobs?: JobUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ProgressLogUncheckedUpdateManyWithoutUserNestedInput
    assignedJobs?: JobUncheckedUpdateManyWithoutTechnicianNestedInput
    supervisedJobs?: JobUncheckedUpdateManyWithoutSupervisorNestedInput
    createdJobs?: JobUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    technician?: UserCreateNestedOneWithoutAssignedJobsInput
    supervisor?: UserCreateNestedOneWithoutSupervisedJobsInput
    creator?: UserCreateNestedOneWithoutCreatedJobsInput
    logs?: ProgressLogCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    technicianId?: string | null
    supervisorId?: string | null
    creatorId?: string | null
    notes?: string | null
    logs?: ProgressLogUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technician?: UserUpdateOneWithoutAssignedJobsNestedInput
    supervisor?: UserUpdateOneWithoutSupervisedJobsNestedInput
    creator?: UserUpdateOneWithoutCreatedJobsNestedInput
    logs?: ProgressLogUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: ProgressLogUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    technicianId?: string | null
    supervisorId?: string | null
    creatorId?: string | null
    notes?: string | null
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutLogsInput
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type ProgressLogUncheckedCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    jobId: string
    userId: string
  }

  export type ProgressLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutLogsNestedInput
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type ProgressLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressLogCreateManyInput = {
    id?: string
    message: string
    createdAt?: Date | string
    jobId: string
    userId: string
  }

  export type ProgressLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type ProgressLogListRelationFilter = {
    every?: ProgressLogWhereInput
    some?: ProgressLogWhereInput
    none?: ProgressLogWhereInput
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type ProgressLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    tenderNo?: SortOrder
    firm?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technicianId?: SortOrder
    supervisorId?: SortOrder
    creatorId?: SortOrder
    notes?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    contract?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    tenderNo?: SortOrder
    firm?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technicianId?: SortOrder
    supervisorId?: SortOrder
    creatorId?: SortOrder
    notes?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    tenderNo?: SortOrder
    firm?: SortOrder
    contract?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technicianId?: SortOrder
    supervisorId?: SortOrder
    creatorId?: SortOrder
    notes?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    contract?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProgressLogCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
  }

  export type ProgressLogMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
  }

  export type ProgressLogMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    jobId?: SortOrder
    userId?: SortOrder
  }

  export type ProgressLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput> | ProgressLogCreateWithoutUserInput[] | ProgressLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutUserInput | ProgressLogCreateOrConnectWithoutUserInput[]
    createMany?: ProgressLogCreateManyUserInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type JobCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput> | JobCreateWithoutTechnicianInput[] | JobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: JobCreateOrConnectWithoutTechnicianInput | JobCreateOrConnectWithoutTechnicianInput[]
    createMany?: JobCreateManyTechnicianInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<JobCreateWithoutSupervisorInput, JobUncheckedCreateWithoutSupervisorInput> | JobCreateWithoutSupervisorInput[] | JobUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: JobCreateOrConnectWithoutSupervisorInput | JobCreateOrConnectWithoutSupervisorInput[]
    createMany?: JobCreateManySupervisorInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobCreateNestedManyWithoutCreatorInput = {
    create?: XOR<JobCreateWithoutCreatorInput, JobUncheckedCreateWithoutCreatorInput> | JobCreateWithoutCreatorInput[] | JobUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCreatorInput | JobCreateOrConnectWithoutCreatorInput[]
    createMany?: JobCreateManyCreatorInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type ProgressLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput> | ProgressLogCreateWithoutUserInput[] | ProgressLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutUserInput | ProgressLogCreateOrConnectWithoutUserInput[]
    createMany?: ProgressLogCreateManyUserInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput> | JobCreateWithoutTechnicianInput[] | JobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: JobCreateOrConnectWithoutTechnicianInput | JobCreateOrConnectWithoutTechnicianInput[]
    createMany?: JobCreateManyTechnicianInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<JobCreateWithoutSupervisorInput, JobUncheckedCreateWithoutSupervisorInput> | JobCreateWithoutSupervisorInput[] | JobUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: JobCreateOrConnectWithoutSupervisorInput | JobCreateOrConnectWithoutSupervisorInput[]
    createMany?: JobCreateManySupervisorInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<JobCreateWithoutCreatorInput, JobUncheckedCreateWithoutCreatorInput> | JobCreateWithoutCreatorInput[] | JobUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCreatorInput | JobCreateOrConnectWithoutCreatorInput[]
    createMany?: JobCreateManyCreatorInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProgressLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput> | ProgressLogCreateWithoutUserInput[] | ProgressLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutUserInput | ProgressLogCreateOrConnectWithoutUserInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutUserInput | ProgressLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressLogCreateManyUserInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutUserInput | ProgressLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutUserInput | ProgressLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type JobUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput> | JobCreateWithoutTechnicianInput[] | JobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: JobCreateOrConnectWithoutTechnicianInput | JobCreateOrConnectWithoutTechnicianInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutTechnicianInput | JobUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: JobCreateManyTechnicianInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutTechnicianInput | JobUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: JobUpdateManyWithWhereWithoutTechnicianInput | JobUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<JobCreateWithoutSupervisorInput, JobUncheckedCreateWithoutSupervisorInput> | JobCreateWithoutSupervisorInput[] | JobUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: JobCreateOrConnectWithoutSupervisorInput | JobCreateOrConnectWithoutSupervisorInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutSupervisorInput | JobUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: JobCreateManySupervisorInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutSupervisorInput | JobUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: JobUpdateManyWithWhereWithoutSupervisorInput | JobUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<JobCreateWithoutCreatorInput, JobUncheckedCreateWithoutCreatorInput> | JobCreateWithoutCreatorInput[] | JobUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCreatorInput | JobCreateOrConnectWithoutCreatorInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutCreatorInput | JobUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: JobCreateManyCreatorInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutCreatorInput | JobUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: JobUpdateManyWithWhereWithoutCreatorInput | JobUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type ProgressLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput> | ProgressLogCreateWithoutUserInput[] | ProgressLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutUserInput | ProgressLogCreateOrConnectWithoutUserInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutUserInput | ProgressLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressLogCreateManyUserInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutUserInput | ProgressLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutUserInput | ProgressLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput> | JobCreateWithoutTechnicianInput[] | JobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: JobCreateOrConnectWithoutTechnicianInput | JobCreateOrConnectWithoutTechnicianInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutTechnicianInput | JobUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: JobCreateManyTechnicianInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutTechnicianInput | JobUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: JobUpdateManyWithWhereWithoutTechnicianInput | JobUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<JobCreateWithoutSupervisorInput, JobUncheckedCreateWithoutSupervisorInput> | JobCreateWithoutSupervisorInput[] | JobUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: JobCreateOrConnectWithoutSupervisorInput | JobCreateOrConnectWithoutSupervisorInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutSupervisorInput | JobUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: JobCreateManySupervisorInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutSupervisorInput | JobUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: JobUpdateManyWithWhereWithoutSupervisorInput | JobUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<JobCreateWithoutCreatorInput, JobUncheckedCreateWithoutCreatorInput> | JobCreateWithoutCreatorInput[] | JobUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCreatorInput | JobCreateOrConnectWithoutCreatorInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutCreatorInput | JobUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: JobCreateManyCreatorInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutCreatorInput | JobUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: JobUpdateManyWithWhereWithoutCreatorInput | JobUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAssignedJobsInput = {
    create?: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedJobsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSupervisedJobsInput = {
    create?: XOR<UserCreateWithoutSupervisedJobsInput, UserUncheckedCreateWithoutSupervisedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupervisedJobsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedJobsInput = {
    create?: XOR<UserCreateWithoutCreatedJobsInput, UserUncheckedCreateWithoutCreatedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedJobsInput
    connect?: UserWhereUniqueInput
  }

  export type ProgressLogCreateNestedManyWithoutJobInput = {
    create?: XOR<ProgressLogCreateWithoutJobInput, ProgressLogUncheckedCreateWithoutJobInput> | ProgressLogCreateWithoutJobInput[] | ProgressLogUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutJobInput | ProgressLogCreateOrConnectWithoutJobInput[]
    createMany?: ProgressLogCreateManyJobInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type ProgressLogUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ProgressLogCreateWithoutJobInput, ProgressLogUncheckedCreateWithoutJobInput> | ProgressLogCreateWithoutJobInput[] | ProgressLogUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutJobInput | ProgressLogCreateOrConnectWithoutJobInput[]
    createMany?: ProgressLogCreateManyJobInputEnvelope
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutAssignedJobsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedJobsInput
    upsert?: UserUpsertWithoutAssignedJobsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedJobsInput, UserUpdateWithoutAssignedJobsInput>, UserUncheckedUpdateWithoutAssignedJobsInput>
  }

  export type UserUpdateOneWithoutSupervisedJobsNestedInput = {
    create?: XOR<UserCreateWithoutSupervisedJobsInput, UserUncheckedCreateWithoutSupervisedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupervisedJobsInput
    upsert?: UserUpsertWithoutSupervisedJobsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSupervisedJobsInput, UserUpdateWithoutSupervisedJobsInput>, UserUncheckedUpdateWithoutSupervisedJobsInput>
  }

  export type UserUpdateOneWithoutCreatedJobsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedJobsInput, UserUncheckedCreateWithoutCreatedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedJobsInput
    upsert?: UserUpsertWithoutCreatedJobsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedJobsInput, UserUpdateWithoutCreatedJobsInput>, UserUncheckedUpdateWithoutCreatedJobsInput>
  }

  export type ProgressLogUpdateManyWithoutJobNestedInput = {
    create?: XOR<ProgressLogCreateWithoutJobInput, ProgressLogUncheckedCreateWithoutJobInput> | ProgressLogCreateWithoutJobInput[] | ProgressLogUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutJobInput | ProgressLogCreateOrConnectWithoutJobInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutJobInput | ProgressLogUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ProgressLogCreateManyJobInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutJobInput | ProgressLogUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutJobInput | ProgressLogUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type ProgressLogUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ProgressLogCreateWithoutJobInput, ProgressLogUncheckedCreateWithoutJobInput> | ProgressLogCreateWithoutJobInput[] | ProgressLogUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ProgressLogCreateOrConnectWithoutJobInput | ProgressLogCreateOrConnectWithoutJobInput[]
    upsert?: ProgressLogUpsertWithWhereUniqueWithoutJobInput | ProgressLogUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ProgressLogCreateManyJobInputEnvelope
    set?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    disconnect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    delete?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    connect?: ProgressLogWhereUniqueInput | ProgressLogWhereUniqueInput[]
    update?: ProgressLogUpdateWithWhereUniqueWithoutJobInput | ProgressLogUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ProgressLogUpdateManyWithWhereWithoutJobInput | ProgressLogUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutLogsInput = {
    create?: XOR<JobCreateWithoutLogsInput, JobUncheckedCreateWithoutLogsInput>
    connectOrCreate?: JobCreateOrConnectWithoutLogsInput
    connect?: JobWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<JobCreateWithoutLogsInput, JobUncheckedCreateWithoutLogsInput>
    connectOrCreate?: JobCreateOrConnectWithoutLogsInput
    upsert?: JobUpsertWithoutLogsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutLogsInput, JobUpdateWithoutLogsInput>, JobUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type ProgressLogCreateWithoutUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutLogsInput
  }

  export type ProgressLogUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    jobId: string
  }

  export type ProgressLogCreateOrConnectWithoutUserInput = {
    where: ProgressLogWhereUniqueInput
    create: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput>
  }

  export type ProgressLogCreateManyUserInputEnvelope = {
    data: ProgressLogCreateManyUserInput | ProgressLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JobCreateWithoutTechnicianInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    supervisor?: UserCreateNestedOneWithoutSupervisedJobsInput
    creator?: UserCreateNestedOneWithoutCreatedJobsInput
    logs?: ProgressLogCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutTechnicianInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisorId?: string | null
    creatorId?: string | null
    notes?: string | null
    logs?: ProgressLogUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutTechnicianInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput>
  }

  export type JobCreateManyTechnicianInputEnvelope = {
    data: JobCreateManyTechnicianInput | JobCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type JobCreateWithoutSupervisorInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    technician?: UserCreateNestedOneWithoutAssignedJobsInput
    creator?: UserCreateNestedOneWithoutCreatedJobsInput
    logs?: ProgressLogCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutSupervisorInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    technicianId?: string | null
    creatorId?: string | null
    notes?: string | null
    logs?: ProgressLogUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutSupervisorInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutSupervisorInput, JobUncheckedCreateWithoutSupervisorInput>
  }

  export type JobCreateManySupervisorInputEnvelope = {
    data: JobCreateManySupervisorInput | JobCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type JobCreateWithoutCreatorInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    technician?: UserCreateNestedOneWithoutAssignedJobsInput
    supervisor?: UserCreateNestedOneWithoutSupervisedJobsInput
    logs?: ProgressLogCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutCreatorInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    technicianId?: string | null
    supervisorId?: string | null
    notes?: string | null
    logs?: ProgressLogUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutCreatorInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutCreatorInput, JobUncheckedCreateWithoutCreatorInput>
  }

  export type JobCreateManyCreatorInputEnvelope = {
    data: JobCreateManyCreatorInput | JobCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ProgressLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressLogWhereUniqueInput
    update: XOR<ProgressLogUpdateWithoutUserInput, ProgressLogUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressLogCreateWithoutUserInput, ProgressLogUncheckedCreateWithoutUserInput>
  }

  export type ProgressLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressLogWhereUniqueInput
    data: XOR<ProgressLogUpdateWithoutUserInput, ProgressLogUncheckedUpdateWithoutUserInput>
  }

  export type ProgressLogUpdateManyWithWhereWithoutUserInput = {
    where: ProgressLogScalarWhereInput
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgressLogScalarWhereInput = {
    AND?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
    OR?: ProgressLogScalarWhereInput[]
    NOT?: ProgressLogScalarWhereInput | ProgressLogScalarWhereInput[]
    id?: StringFilter<"ProgressLog"> | string
    message?: StringFilter<"ProgressLog"> | string
    createdAt?: DateTimeFilter<"ProgressLog"> | Date | string
    jobId?: StringFilter<"ProgressLog"> | string
    userId?: StringFilter<"ProgressLog"> | string
  }

  export type JobUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutTechnicianInput, JobUncheckedUpdateWithoutTechnicianInput>
    create: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput>
  }

  export type JobUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutTechnicianInput, JobUncheckedUpdateWithoutTechnicianInput>
  }

  export type JobUpdateManyWithWhereWithoutTechnicianInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: StringFilter<"Job"> | string
    tenderNo?: StringFilter<"Job"> | string
    firm?: StringFilter<"Job"> | string
    contract?: DecimalFilter<"Job"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Job"> | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    technicianId?: StringNullableFilter<"Job"> | string | null
    supervisorId?: StringNullableFilter<"Job"> | string | null
    creatorId?: StringNullableFilter<"Job"> | string | null
    notes?: StringNullableFilter<"Job"> | string | null
  }

  export type JobUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutSupervisorInput, JobUncheckedUpdateWithoutSupervisorInput>
    create: XOR<JobCreateWithoutSupervisorInput, JobUncheckedCreateWithoutSupervisorInput>
  }

  export type JobUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutSupervisorInput, JobUncheckedUpdateWithoutSupervisorInput>
  }

  export type JobUpdateManyWithWhereWithoutSupervisorInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type JobUpsertWithWhereUniqueWithoutCreatorInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutCreatorInput, JobUncheckedUpdateWithoutCreatorInput>
    create: XOR<JobCreateWithoutCreatorInput, JobUncheckedCreateWithoutCreatorInput>
  }

  export type JobUpdateWithWhereUniqueWithoutCreatorInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutCreatorInput, JobUncheckedUpdateWithoutCreatorInput>
  }

  export type JobUpdateManyWithWhereWithoutCreatorInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutCreatorInput>
  }

  export type UserCreateWithoutAssignedJobsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    logs?: ProgressLogCreateNestedManyWithoutUserInput
    supervisedJobs?: JobCreateNestedManyWithoutSupervisorInput
    createdJobs?: JobCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAssignedJobsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    logs?: ProgressLogUncheckedCreateNestedManyWithoutUserInput
    supervisedJobs?: JobUncheckedCreateNestedManyWithoutSupervisorInput
    createdJobs?: JobUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAssignedJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput>
  }

  export type UserCreateWithoutSupervisedJobsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    logs?: ProgressLogCreateNestedManyWithoutUserInput
    assignedJobs?: JobCreateNestedManyWithoutTechnicianInput
    createdJobs?: JobCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutSupervisedJobsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    logs?: ProgressLogUncheckedCreateNestedManyWithoutUserInput
    assignedJobs?: JobUncheckedCreateNestedManyWithoutTechnicianInput
    createdJobs?: JobUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutSupervisedJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSupervisedJobsInput, UserUncheckedCreateWithoutSupervisedJobsInput>
  }

  export type UserCreateWithoutCreatedJobsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    logs?: ProgressLogCreateNestedManyWithoutUserInput
    assignedJobs?: JobCreateNestedManyWithoutTechnicianInput
    supervisedJobs?: JobCreateNestedManyWithoutSupervisorInput
  }

  export type UserUncheckedCreateWithoutCreatedJobsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    logs?: ProgressLogUncheckedCreateNestedManyWithoutUserInput
    assignedJobs?: JobUncheckedCreateNestedManyWithoutTechnicianInput
    supervisedJobs?: JobUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UserCreateOrConnectWithoutCreatedJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedJobsInput, UserUncheckedCreateWithoutCreatedJobsInput>
  }

  export type ProgressLogCreateWithoutJobInput = {
    id?: string
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type ProgressLogUncheckedCreateWithoutJobInput = {
    id?: string
    message: string
    createdAt?: Date | string
    userId: string
  }

  export type ProgressLogCreateOrConnectWithoutJobInput = {
    where: ProgressLogWhereUniqueInput
    create: XOR<ProgressLogCreateWithoutJobInput, ProgressLogUncheckedCreateWithoutJobInput>
  }

  export type ProgressLogCreateManyJobInputEnvelope = {
    data: ProgressLogCreateManyJobInput | ProgressLogCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAssignedJobsInput = {
    update: XOR<UserUpdateWithoutAssignedJobsInput, UserUncheckedUpdateWithoutAssignedJobsInput>
    create: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedJobsInput, UserUncheckedUpdateWithoutAssignedJobsInput>
  }

  export type UserUpdateWithoutAssignedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ProgressLogUpdateManyWithoutUserNestedInput
    supervisedJobs?: JobUpdateManyWithoutSupervisorNestedInput
    createdJobs?: JobUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ProgressLogUncheckedUpdateManyWithoutUserNestedInput
    supervisedJobs?: JobUncheckedUpdateManyWithoutSupervisorNestedInput
    createdJobs?: JobUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutSupervisedJobsInput = {
    update: XOR<UserUpdateWithoutSupervisedJobsInput, UserUncheckedUpdateWithoutSupervisedJobsInput>
    create: XOR<UserCreateWithoutSupervisedJobsInput, UserUncheckedCreateWithoutSupervisedJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSupervisedJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSupervisedJobsInput, UserUncheckedUpdateWithoutSupervisedJobsInput>
  }

  export type UserUpdateWithoutSupervisedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ProgressLogUpdateManyWithoutUserNestedInput
    assignedJobs?: JobUpdateManyWithoutTechnicianNestedInput
    createdJobs?: JobUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutSupervisedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ProgressLogUncheckedUpdateManyWithoutUserNestedInput
    assignedJobs?: JobUncheckedUpdateManyWithoutTechnicianNestedInput
    createdJobs?: JobUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutCreatedJobsInput = {
    update: XOR<UserUpdateWithoutCreatedJobsInput, UserUncheckedUpdateWithoutCreatedJobsInput>
    create: XOR<UserCreateWithoutCreatedJobsInput, UserUncheckedCreateWithoutCreatedJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedJobsInput, UserUncheckedUpdateWithoutCreatedJobsInput>
  }

  export type UserUpdateWithoutCreatedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ProgressLogUpdateManyWithoutUserNestedInput
    assignedJobs?: JobUpdateManyWithoutTechnicianNestedInput
    supervisedJobs?: JobUpdateManyWithoutSupervisorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ProgressLogUncheckedUpdateManyWithoutUserNestedInput
    assignedJobs?: JobUncheckedUpdateManyWithoutTechnicianNestedInput
    supervisedJobs?: JobUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type ProgressLogUpsertWithWhereUniqueWithoutJobInput = {
    where: ProgressLogWhereUniqueInput
    update: XOR<ProgressLogUpdateWithoutJobInput, ProgressLogUncheckedUpdateWithoutJobInput>
    create: XOR<ProgressLogCreateWithoutJobInput, ProgressLogUncheckedCreateWithoutJobInput>
  }

  export type ProgressLogUpdateWithWhereUniqueWithoutJobInput = {
    where: ProgressLogWhereUniqueInput
    data: XOR<ProgressLogUpdateWithoutJobInput, ProgressLogUncheckedUpdateWithoutJobInput>
  }

  export type ProgressLogUpdateManyWithWhereWithoutJobInput = {
    where: ProgressLogScalarWhereInput
    data: XOR<ProgressLogUpdateManyMutationInput, ProgressLogUncheckedUpdateManyWithoutJobInput>
  }

  export type JobCreateWithoutLogsInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    technician?: UserCreateNestedOneWithoutAssignedJobsInput
    supervisor?: UserCreateNestedOneWithoutSupervisedJobsInput
    creator?: UserCreateNestedOneWithoutCreatedJobsInput
  }

  export type JobUncheckedCreateWithoutLogsInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    technicianId?: string | null
    supervisorId?: string | null
    creatorId?: string | null
    notes?: string | null
  }

  export type JobCreateOrConnectWithoutLogsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutLogsInput, JobUncheckedCreateWithoutLogsInput>
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    assignedJobs?: JobCreateNestedManyWithoutTechnicianInput
    supervisedJobs?: JobCreateNestedManyWithoutSupervisorInput
    createdJobs?: JobCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    assignedJobs?: JobUncheckedCreateNestedManyWithoutTechnicianInput
    supervisedJobs?: JobUncheckedCreateNestedManyWithoutSupervisorInput
    createdJobs?: JobUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type JobUpsertWithoutLogsInput = {
    update: XOR<JobUpdateWithoutLogsInput, JobUncheckedUpdateWithoutLogsInput>
    create: XOR<JobCreateWithoutLogsInput, JobUncheckedCreateWithoutLogsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutLogsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutLogsInput, JobUncheckedUpdateWithoutLogsInput>
  }

  export type JobUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technician?: UserUpdateOneWithoutAssignedJobsNestedInput
    supervisor?: UserUpdateOneWithoutSupervisedJobsNestedInput
    creator?: UserUpdateOneWithoutCreatedJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedJobs?: JobUpdateManyWithoutTechnicianNestedInput
    supervisedJobs?: JobUpdateManyWithoutSupervisorNestedInput
    createdJobs?: JobUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedJobs?: JobUncheckedUpdateManyWithoutTechnicianNestedInput
    supervisedJobs?: JobUncheckedUpdateManyWithoutSupervisorNestedInput
    createdJobs?: JobUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ProgressLogCreateManyUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    jobId: string
  }

  export type JobCreateManyTechnicianInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    supervisorId?: string | null
    creatorId?: string | null
    notes?: string | null
  }

  export type JobCreateManySupervisorInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    technicianId?: string | null
    creatorId?: string | null
    notes?: string | null
  }

  export type JobCreateManyCreatorInput = {
    id?: string
    tenderNo: string
    firm: string
    contract: Decimal | DecimalJsLike | number | string
    description: string
    status?: $Enums.JobStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    technicianId?: string | null
    supervisorId?: string | null
    notes?: string | null
  }

  export type ProgressLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutLogsNestedInput
  }

  export type ProgressLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type JobUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    supervisor?: UserUpdateOneWithoutSupervisedJobsNestedInput
    creator?: UserUpdateOneWithoutCreatedJobsNestedInput
    logs?: ProgressLogUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: ProgressLogUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technician?: UserUpdateOneWithoutAssignedJobsNestedInput
    creator?: UserUpdateOneWithoutCreatedJobsNestedInput
    logs?: ProgressLogUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: ProgressLogUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    technician?: UserUpdateOneWithoutAssignedJobsNestedInput
    supervisor?: UserUpdateOneWithoutSupervisedJobsNestedInput
    logs?: ProgressLogUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: ProgressLogUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenderNo?: StringFieldUpdateOperationsInput | string
    firm?: StringFieldUpdateOperationsInput | string
    contract?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogCreateManyJobInput = {
    id?: string
    message: string
    createdAt?: Date | string
    userId: string
  }

  export type ProgressLogUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type ProgressLogUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressLogUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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