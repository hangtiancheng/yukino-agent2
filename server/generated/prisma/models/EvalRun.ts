
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

export type EvalRunModel = runtime.Types.Result.DefaultSelection<Prisma.$EvalRunPayload>

export type AggregateEvalRun = {
  _count: EvalRunCountAggregateOutputType | null
  _avg: EvalRunAvgAggregateOutputType | null
  _sum: EvalRunSumAggregateOutputType | null
  _min: EvalRunMinAggregateOutputType | null
  _max: EvalRunMaxAggregateOutputType | null
}

export type EvalRunAvgAggregateOutputType = {
  id: number | null
  datasetSize: number | null
}

export type EvalRunSumAggregateOutputType = {
  id: number | null
  datasetSize: number | null
}

export type EvalRunMinAggregateOutputType = {
  id: number | null
  triggeredBy: string | null
  datasetSize: number | null
  metrics: string | null
  createdAt: Date | null
}

export type EvalRunMaxAggregateOutputType = {
  id: number | null
  triggeredBy: string | null
  datasetSize: number | null
  metrics: string | null
  createdAt: Date | null
}

export type EvalRunCountAggregateOutputType = {
  id: number
  triggeredBy: number
  datasetSize: number
  metrics: number
  createdAt: number
  _all: number
}


export type EvalRunAvgAggregateInputType = {
  id?: true
  datasetSize?: true
}

export type EvalRunSumAggregateInputType = {
  id?: true
  datasetSize?: true
}

export type EvalRunMinAggregateInputType = {
  id?: true
  triggeredBy?: true
  datasetSize?: true
  metrics?: true
  createdAt?: true
}

export type EvalRunMaxAggregateInputType = {
  id?: true
  triggeredBy?: true
  datasetSize?: true
  metrics?: true
  createdAt?: true
}

export type EvalRunCountAggregateInputType = {
  id?: true
  triggeredBy?: true
  datasetSize?: true
  metrics?: true
  createdAt?: true
  _all?: true
}

export type EvalRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.EvalRunWhereInput
  orderBy?: Prisma.EvalRunOrderByWithRelationInput | Prisma.EvalRunOrderByWithRelationInput[]
  cursor?: Prisma.EvalRunWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | EvalRunCountAggregateInputType
  _avg?: EvalRunAvgAggregateInputType
  _sum?: EvalRunSumAggregateInputType
  _min?: EvalRunMinAggregateInputType
  _max?: EvalRunMaxAggregateInputType
}

export type GetEvalRunAggregateType<T extends EvalRunAggregateArgs> = {
      [P in keyof T & keyof AggregateEvalRun]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateEvalRun[P]>
    : Prisma.GetScalarType<T[P], AggregateEvalRun[P]>
}




export type EvalRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.EvalRunWhereInput
  orderBy?: Prisma.EvalRunOrderByWithAggregationInput | Prisma.EvalRunOrderByWithAggregationInput[]
  by: Prisma.EvalRunScalarFieldEnum[] | Prisma.EvalRunScalarFieldEnum
  having?: Prisma.EvalRunScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: EvalRunCountAggregateInputType | true
  _avg?: EvalRunAvgAggregateInputType
  _sum?: EvalRunSumAggregateInputType
  _min?: EvalRunMinAggregateInputType
  _max?: EvalRunMaxAggregateInputType
}

export type EvalRunGroupByOutputType = {
  id: number
  triggeredBy: string
  datasetSize: number
  metrics: string
  createdAt: Date
  _count: EvalRunCountAggregateOutputType | null
  _avg: EvalRunAvgAggregateOutputType | null
  _sum: EvalRunSumAggregateOutputType | null
  _min: EvalRunMinAggregateOutputType | null
  _max: EvalRunMaxAggregateOutputType | null
}

export type GetEvalRunGroupByPayload<T extends EvalRunGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<EvalRunGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof EvalRunGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], EvalRunGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], EvalRunGroupByOutputType[P]>
      }
    >
  >



export type EvalRunWhereInput = {
  AND?: Prisma.EvalRunWhereInput | Prisma.EvalRunWhereInput[]
  OR?: Prisma.EvalRunWhereInput[]
  NOT?: Prisma.EvalRunWhereInput | Prisma.EvalRunWhereInput[]
  id?: Prisma.IntFilter<"EvalRun"> | number
  triggeredBy?: Prisma.StringFilter<"EvalRun"> | string
  datasetSize?: Prisma.IntFilter<"EvalRun"> | number
  metrics?: Prisma.StringFilter<"EvalRun"> | string
  createdAt?: Prisma.DateTimeFilter<"EvalRun"> | Date | string
}

export type EvalRunOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  triggeredBy?: Prisma.SortOrder
  datasetSize?: Prisma.SortOrder
  metrics?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type EvalRunWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: Prisma.EvalRunWhereInput | Prisma.EvalRunWhereInput[]
  OR?: Prisma.EvalRunWhereInput[]
  NOT?: Prisma.EvalRunWhereInput | Prisma.EvalRunWhereInput[]
  triggeredBy?: Prisma.StringFilter<"EvalRun"> | string
  datasetSize?: Prisma.IntFilter<"EvalRun"> | number
  metrics?: Prisma.StringFilter<"EvalRun"> | string
  createdAt?: Prisma.DateTimeFilter<"EvalRun"> | Date | string
}, "id">

export type EvalRunOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  triggeredBy?: Prisma.SortOrder
  datasetSize?: Prisma.SortOrder
  metrics?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.EvalRunCountOrderByAggregateInput
  _avg?: Prisma.EvalRunAvgOrderByAggregateInput
  _max?: Prisma.EvalRunMaxOrderByAggregateInput
  _min?: Prisma.EvalRunMinOrderByAggregateInput
  _sum?: Prisma.EvalRunSumOrderByAggregateInput
}

export type EvalRunScalarWhereWithAggregatesInput = {
  AND?: Prisma.EvalRunScalarWhereWithAggregatesInput | Prisma.EvalRunScalarWhereWithAggregatesInput[]
  OR?: Prisma.EvalRunScalarWhereWithAggregatesInput[]
  NOT?: Prisma.EvalRunScalarWhereWithAggregatesInput | Prisma.EvalRunScalarWhereWithAggregatesInput[]
  id?: Prisma.IntWithAggregatesFilter<"EvalRun"> | number
  triggeredBy?: Prisma.StringWithAggregatesFilter<"EvalRun"> | string
  datasetSize?: Prisma.IntWithAggregatesFilter<"EvalRun"> | number
  metrics?: Prisma.StringWithAggregatesFilter<"EvalRun"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"EvalRun"> | Date | string
}

export type EvalRunCreateInput = {
  triggeredBy?: string
  datasetSize: number
  metrics: string
  createdAt?: Date | string
}

export type EvalRunUncheckedCreateInput = {
  id?: number
  triggeredBy?: string
  datasetSize: number
  metrics: string
  createdAt?: Date | string
}

export type EvalRunUpdateInput = {
  triggeredBy?: Prisma.StringFieldUpdateOperationsInput | string
  datasetSize?: Prisma.IntFieldUpdateOperationsInput | number
  metrics?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type EvalRunUncheckedUpdateInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  triggeredBy?: Prisma.StringFieldUpdateOperationsInput | string
  datasetSize?: Prisma.IntFieldUpdateOperationsInput | number
  metrics?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type EvalRunCreateManyInput = {
  id?: number
  triggeredBy?: string
  datasetSize: number
  metrics: string
  createdAt?: Date | string
}

export type EvalRunUpdateManyMutationInput = {
  triggeredBy?: Prisma.StringFieldUpdateOperationsInput | string
  datasetSize?: Prisma.IntFieldUpdateOperationsInput | number
  metrics?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type EvalRunUncheckedUpdateManyInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  triggeredBy?: Prisma.StringFieldUpdateOperationsInput | string
  datasetSize?: Prisma.IntFieldUpdateOperationsInput | number
  metrics?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type EvalRunCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  triggeredBy?: Prisma.SortOrder
  datasetSize?: Prisma.SortOrder
  metrics?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type EvalRunAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
  datasetSize?: Prisma.SortOrder
}

export type EvalRunMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  triggeredBy?: Prisma.SortOrder
  datasetSize?: Prisma.SortOrder
  metrics?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type EvalRunMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  triggeredBy?: Prisma.SortOrder
  datasetSize?: Prisma.SortOrder
  metrics?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type EvalRunSumOrderByAggregateInput = {
  id?: Prisma.SortOrder
  datasetSize?: Prisma.SortOrder
}



export type EvalRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  triggeredBy?: boolean
  datasetSize?: boolean
  metrics?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["evalRun"]>

export type EvalRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  triggeredBy?: boolean
  datasetSize?: boolean
  metrics?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["evalRun"]>

export type EvalRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  triggeredBy?: boolean
  datasetSize?: boolean
  metrics?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["evalRun"]>

export type EvalRunSelectScalar = {
  id?: boolean
  triggeredBy?: boolean
  datasetSize?: boolean
  metrics?: boolean
  createdAt?: boolean
}

export type EvalRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "triggeredBy" | "datasetSize" | "metrics" | "createdAt", ExtArgs["result"]["evalRun"]>

export type $EvalRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "EvalRun"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: number
    triggeredBy: string
    datasetSize: number
    metrics: string
    createdAt: Date
  }, ExtArgs["result"]["evalRun"]>
  composites: {}
}

export type EvalRunGetPayload<S extends boolean | null | undefined | EvalRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvalRunPayload, S>

export type EvalRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<EvalRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvalRunCountAggregateInputType | true
  }

export interface EvalRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvalRun'], meta: { name: 'EvalRun' } }
  findUnique<T extends EvalRunFindUniqueArgs>(args: Prisma.SelectSubset<T, EvalRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvalRunClient<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findUniqueOrThrow<T extends EvalRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvalRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvalRunClient<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findFirst<T extends EvalRunFindFirstArgs>(args?: Prisma.SelectSubset<T, EvalRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvalRunClient<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findFirstOrThrow<T extends EvalRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvalRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvalRunClient<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findMany<T extends EvalRunFindManyArgs>(args?: Prisma.SelectSubset<T, EvalRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  create<T extends EvalRunCreateArgs>(args: Prisma.SelectSubset<T, EvalRunCreateArgs<ExtArgs>>): Prisma.Prisma__EvalRunClient<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  createMany<T extends EvalRunCreateManyArgs>(args?: Prisma.SelectSubset<T, EvalRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  createManyAndReturn<T extends EvalRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvalRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  delete<T extends EvalRunDeleteArgs>(args: Prisma.SelectSubset<T, EvalRunDeleteArgs<ExtArgs>>): Prisma.Prisma__EvalRunClient<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  update<T extends EvalRunUpdateArgs>(args: Prisma.SelectSubset<T, EvalRunUpdateArgs<ExtArgs>>): Prisma.Prisma__EvalRunClient<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  deleteMany<T extends EvalRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvalRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateMany<T extends EvalRunUpdateManyArgs>(args: Prisma.SelectSubset<T, EvalRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateManyAndReturn<T extends EvalRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvalRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  upsert<T extends EvalRunUpsertArgs>(args: Prisma.SelectSubset<T, EvalRunUpsertArgs<ExtArgs>>): Prisma.Prisma__EvalRunClient<runtime.Types.Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  count<T extends EvalRunCountArgs>(
    args?: Prisma.Subset<T, EvalRunCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], EvalRunCountAggregateOutputType>
      : number
  >

  aggregate<T extends EvalRunAggregateArgs>(args: Prisma.Subset<T, EvalRunAggregateArgs>): Prisma.PrismaPromise<GetEvalRunAggregateType<T>>

  groupBy<
    T extends EvalRunGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: EvalRunGroupByArgs['orderBy'] }
      : { orderBy?: EvalRunGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
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
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, EvalRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvalRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: EvalRunFieldRefs;
}

export interface Prisma__EvalRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface EvalRunFieldRefs {
  readonly id: Prisma.FieldRef<"EvalRun", 'Int'>
  readonly triggeredBy: Prisma.FieldRef<"EvalRun", 'String'>
  readonly datasetSize: Prisma.FieldRef<"EvalRun", 'Int'>
  readonly metrics: Prisma.FieldRef<"EvalRun", 'String'>
  readonly createdAt: Prisma.FieldRef<"EvalRun", 'DateTime'>
}
    

export type EvalRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelect<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  where: Prisma.EvalRunWhereUniqueInput
}

export type EvalRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelect<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  where: Prisma.EvalRunWhereUniqueInput
}

export type EvalRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelect<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  where?: Prisma.EvalRunWhereInput
  orderBy?: Prisma.EvalRunOrderByWithRelationInput | Prisma.EvalRunOrderByWithRelationInput[]
  cursor?: Prisma.EvalRunWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.EvalRunScalarFieldEnum | Prisma.EvalRunScalarFieldEnum[]
}

export type EvalRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelect<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  where?: Prisma.EvalRunWhereInput
  orderBy?: Prisma.EvalRunOrderByWithRelationInput | Prisma.EvalRunOrderByWithRelationInput[]
  cursor?: Prisma.EvalRunWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.EvalRunScalarFieldEnum | Prisma.EvalRunScalarFieldEnum[]
}

export type EvalRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelect<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  where?: Prisma.EvalRunWhereInput
  orderBy?: Prisma.EvalRunOrderByWithRelationInput | Prisma.EvalRunOrderByWithRelationInput[]
  cursor?: Prisma.EvalRunWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.EvalRunScalarFieldEnum | Prisma.EvalRunScalarFieldEnum[]
}

export type EvalRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelect<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.EvalRunCreateInput, Prisma.EvalRunUncheckedCreateInput>
}

export type EvalRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.EvalRunCreateManyInput | Prisma.EvalRunCreateManyInput[]
  skipDuplicates?: boolean
}

export type EvalRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  data: Prisma.EvalRunCreateManyInput | Prisma.EvalRunCreateManyInput[]
  skipDuplicates?: boolean
}

export type EvalRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelect<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.EvalRunUpdateInput, Prisma.EvalRunUncheckedUpdateInput>
  where: Prisma.EvalRunWhereUniqueInput
}

export type EvalRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.EvalRunUpdateManyMutationInput, Prisma.EvalRunUncheckedUpdateManyInput>
  where?: Prisma.EvalRunWhereInput
  limit?: number
}

export type EvalRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.EvalRunUpdateManyMutationInput, Prisma.EvalRunUncheckedUpdateManyInput>
  where?: Prisma.EvalRunWhereInput
  limit?: number
}

export type EvalRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelect<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  where: Prisma.EvalRunWhereUniqueInput
  create: Prisma.XOR<Prisma.EvalRunCreateInput, Prisma.EvalRunUncheckedCreateInput>
  update: Prisma.XOR<Prisma.EvalRunUpdateInput, Prisma.EvalRunUncheckedUpdateInput>
}

export type EvalRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelect<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
  where: Prisma.EvalRunWhereUniqueInput
}

export type EvalRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.EvalRunWhereInput
  limit?: number
}

export type EvalRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.EvalRunSelect<ExtArgs> | null
  omit?: Prisma.EvalRunOmit<ExtArgs> | null
}
