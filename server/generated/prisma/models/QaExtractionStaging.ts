
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

export type QaExtractionStagingModel = runtime.Types.Result.DefaultSelection<Prisma.$QaExtractionStagingPayload>

export type AggregateQaExtractionStaging = {
  _count: QaExtractionStagingCountAggregateOutputType | null
  _avg: QaExtractionStagingAvgAggregateOutputType | null
  _sum: QaExtractionStagingSumAggregateOutputType | null
  _min: QaExtractionStagingMinAggregateOutputType | null
  _max: QaExtractionStagingMaxAggregateOutputType | null
}

export type QaExtractionStagingAvgAggregateOutputType = {
  id: number | null
}

export type QaExtractionStagingSumAggregateOutputType = {
  id: number | null
}

export type QaExtractionStagingMinAggregateOutputType = {
  id: number | null
  batchNo: string | null
  sourceRef: string | null
  question: string | null
  answer: string | null
  status: string | null
  createdAt: Date | null
}

export type QaExtractionStagingMaxAggregateOutputType = {
  id: number | null
  batchNo: string | null
  sourceRef: string | null
  question: string | null
  answer: string | null
  status: string | null
  createdAt: Date | null
}

export type QaExtractionStagingCountAggregateOutputType = {
  id: number
  batchNo: number
  sourceRef: number
  question: number
  answer: number
  status: number
  createdAt: number
  _all: number
}


export type QaExtractionStagingAvgAggregateInputType = {
  id?: true
}

export type QaExtractionStagingSumAggregateInputType = {
  id?: true
}

export type QaExtractionStagingMinAggregateInputType = {
  id?: true
  batchNo?: true
  sourceRef?: true
  question?: true
  answer?: true
  status?: true
  createdAt?: true
}

export type QaExtractionStagingMaxAggregateInputType = {
  id?: true
  batchNo?: true
  sourceRef?: true
  question?: true
  answer?: true
  status?: true
  createdAt?: true
}

export type QaExtractionStagingCountAggregateInputType = {
  id?: true
  batchNo?: true
  sourceRef?: true
  question?: true
  answer?: true
  status?: true
  createdAt?: true
  _all?: true
}

export type QaExtractionStagingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.QaExtractionStagingWhereInput
  orderBy?: Prisma.QaExtractionStagingOrderByWithRelationInput | Prisma.QaExtractionStagingOrderByWithRelationInput[]
  cursor?: Prisma.QaExtractionStagingWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | QaExtractionStagingCountAggregateInputType
  _avg?: QaExtractionStagingAvgAggregateInputType
  _sum?: QaExtractionStagingSumAggregateInputType
  _min?: QaExtractionStagingMinAggregateInputType
  _max?: QaExtractionStagingMaxAggregateInputType
}

export type GetQaExtractionStagingAggregateType<T extends QaExtractionStagingAggregateArgs> = {
      [P in keyof T & keyof AggregateQaExtractionStaging]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateQaExtractionStaging[P]>
    : Prisma.GetScalarType<T[P], AggregateQaExtractionStaging[P]>
}




export type QaExtractionStagingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.QaExtractionStagingWhereInput
  orderBy?: Prisma.QaExtractionStagingOrderByWithAggregationInput | Prisma.QaExtractionStagingOrderByWithAggregationInput[]
  by: Prisma.QaExtractionStagingScalarFieldEnum[] | Prisma.QaExtractionStagingScalarFieldEnum
  having?: Prisma.QaExtractionStagingScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: QaExtractionStagingCountAggregateInputType | true
  _avg?: QaExtractionStagingAvgAggregateInputType
  _sum?: QaExtractionStagingSumAggregateInputType
  _min?: QaExtractionStagingMinAggregateInputType
  _max?: QaExtractionStagingMaxAggregateInputType
}

export type QaExtractionStagingGroupByOutputType = {
  id: number
  batchNo: string
  sourceRef: string | null
  question: string
  answer: string
  status: string
  createdAt: Date
  _count: QaExtractionStagingCountAggregateOutputType | null
  _avg: QaExtractionStagingAvgAggregateOutputType | null
  _sum: QaExtractionStagingSumAggregateOutputType | null
  _min: QaExtractionStagingMinAggregateOutputType | null
  _max: QaExtractionStagingMaxAggregateOutputType | null
}

export type GetQaExtractionStagingGroupByPayload<T extends QaExtractionStagingGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<QaExtractionStagingGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof QaExtractionStagingGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], QaExtractionStagingGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], QaExtractionStagingGroupByOutputType[P]>
      }
    >
  >



export type QaExtractionStagingWhereInput = {
  AND?: Prisma.QaExtractionStagingWhereInput | Prisma.QaExtractionStagingWhereInput[]
  OR?: Prisma.QaExtractionStagingWhereInput[]
  NOT?: Prisma.QaExtractionStagingWhereInput | Prisma.QaExtractionStagingWhereInput[]
  id?: Prisma.IntFilter<"QaExtractionStaging"> | number
  batchNo?: Prisma.StringFilter<"QaExtractionStaging"> | string
  sourceRef?: Prisma.StringNullableFilter<"QaExtractionStaging"> | string | null
  question?: Prisma.StringFilter<"QaExtractionStaging"> | string
  answer?: Prisma.StringFilter<"QaExtractionStaging"> | string
  status?: Prisma.StringFilter<"QaExtractionStaging"> | string
  createdAt?: Prisma.DateTimeFilter<"QaExtractionStaging"> | Date | string
}

export type QaExtractionStagingOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  batchNo?: Prisma.SortOrder
  sourceRef?: Prisma.SortOrderInput | Prisma.SortOrder
  question?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type QaExtractionStagingWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: Prisma.QaExtractionStagingWhereInput | Prisma.QaExtractionStagingWhereInput[]
  OR?: Prisma.QaExtractionStagingWhereInput[]
  NOT?: Prisma.QaExtractionStagingWhereInput | Prisma.QaExtractionStagingWhereInput[]
  batchNo?: Prisma.StringFilter<"QaExtractionStaging"> | string
  sourceRef?: Prisma.StringNullableFilter<"QaExtractionStaging"> | string | null
  question?: Prisma.StringFilter<"QaExtractionStaging"> | string
  answer?: Prisma.StringFilter<"QaExtractionStaging"> | string
  status?: Prisma.StringFilter<"QaExtractionStaging"> | string
  createdAt?: Prisma.DateTimeFilter<"QaExtractionStaging"> | Date | string
}, "id">

export type QaExtractionStagingOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  batchNo?: Prisma.SortOrder
  sourceRef?: Prisma.SortOrderInput | Prisma.SortOrder
  question?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.QaExtractionStagingCountOrderByAggregateInput
  _avg?: Prisma.QaExtractionStagingAvgOrderByAggregateInput
  _max?: Prisma.QaExtractionStagingMaxOrderByAggregateInput
  _min?: Prisma.QaExtractionStagingMinOrderByAggregateInput
  _sum?: Prisma.QaExtractionStagingSumOrderByAggregateInput
}

export type QaExtractionStagingScalarWhereWithAggregatesInput = {
  AND?: Prisma.QaExtractionStagingScalarWhereWithAggregatesInput | Prisma.QaExtractionStagingScalarWhereWithAggregatesInput[]
  OR?: Prisma.QaExtractionStagingScalarWhereWithAggregatesInput[]
  NOT?: Prisma.QaExtractionStagingScalarWhereWithAggregatesInput | Prisma.QaExtractionStagingScalarWhereWithAggregatesInput[]
  id?: Prisma.IntWithAggregatesFilter<"QaExtractionStaging"> | number
  batchNo?: Prisma.StringWithAggregatesFilter<"QaExtractionStaging"> | string
  sourceRef?: Prisma.StringNullableWithAggregatesFilter<"QaExtractionStaging"> | string | null
  question?: Prisma.StringWithAggregatesFilter<"QaExtractionStaging"> | string
  answer?: Prisma.StringWithAggregatesFilter<"QaExtractionStaging"> | string
  status?: Prisma.StringWithAggregatesFilter<"QaExtractionStaging"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"QaExtractionStaging"> | Date | string
}

export type QaExtractionStagingCreateInput = {
  batchNo: string
  sourceRef?: string | null
  question: string
  answer: string
  status?: string
  createdAt?: Date | string
}

export type QaExtractionStagingUncheckedCreateInput = {
  id?: number
  batchNo: string
  sourceRef?: string | null
  question: string
  answer: string
  status?: string
  createdAt?: Date | string
}

export type QaExtractionStagingUpdateInput = {
  batchNo?: Prisma.StringFieldUpdateOperationsInput | string
  sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  question?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type QaExtractionStagingUncheckedUpdateInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  batchNo?: Prisma.StringFieldUpdateOperationsInput | string
  sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  question?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type QaExtractionStagingCreateManyInput = {
  id?: number
  batchNo: string
  sourceRef?: string | null
  question: string
  answer: string
  status?: string
  createdAt?: Date | string
}

export type QaExtractionStagingUpdateManyMutationInput = {
  batchNo?: Prisma.StringFieldUpdateOperationsInput | string
  sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  question?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type QaExtractionStagingUncheckedUpdateManyInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  batchNo?: Prisma.StringFieldUpdateOperationsInput | string
  sourceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  question?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type QaExtractionStagingCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  batchNo?: Prisma.SortOrder
  sourceRef?: Prisma.SortOrder
  question?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type QaExtractionStagingAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
}

export type QaExtractionStagingMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  batchNo?: Prisma.SortOrder
  sourceRef?: Prisma.SortOrder
  question?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type QaExtractionStagingMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  batchNo?: Prisma.SortOrder
  sourceRef?: Prisma.SortOrder
  question?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type QaExtractionStagingSumOrderByAggregateInput = {
  id?: Prisma.SortOrder
}



export type QaExtractionStagingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  batchNo?: boolean
  sourceRef?: boolean
  question?: boolean
  answer?: boolean
  status?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["qaExtractionStaging"]>

export type QaExtractionStagingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  batchNo?: boolean
  sourceRef?: boolean
  question?: boolean
  answer?: boolean
  status?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["qaExtractionStaging"]>

export type QaExtractionStagingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  batchNo?: boolean
  sourceRef?: boolean
  question?: boolean
  answer?: boolean
  status?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["qaExtractionStaging"]>

export type QaExtractionStagingSelectScalar = {
  id?: boolean
  batchNo?: boolean
  sourceRef?: boolean
  question?: boolean
  answer?: boolean
  status?: boolean
  createdAt?: boolean
}

export type QaExtractionStagingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "batchNo" | "sourceRef" | "question" | "answer" | "status" | "createdAt", ExtArgs["result"]["qaExtractionStaging"]>

export type $QaExtractionStagingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "QaExtractionStaging"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: number
    batchNo: string
    sourceRef: string | null
    question: string
    answer: string
    status: string
    createdAt: Date
  }, ExtArgs["result"]["qaExtractionStaging"]>
  composites: {}
}

export type QaExtractionStagingGetPayload<S extends boolean | null | undefined | QaExtractionStagingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload, S>

export type QaExtractionStagingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<QaExtractionStagingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QaExtractionStagingCountAggregateInputType | true
  }

export interface QaExtractionStagingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QaExtractionStaging'], meta: { name: 'QaExtractionStaging' } }
  findUnique<T extends QaExtractionStagingFindUniqueArgs>(args: Prisma.SelectSubset<T, QaExtractionStagingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QaExtractionStagingClient<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findUniqueOrThrow<T extends QaExtractionStagingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QaExtractionStagingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QaExtractionStagingClient<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findFirst<T extends QaExtractionStagingFindFirstArgs>(args?: Prisma.SelectSubset<T, QaExtractionStagingFindFirstArgs<ExtArgs>>): Prisma.Prisma__QaExtractionStagingClient<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findFirstOrThrow<T extends QaExtractionStagingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QaExtractionStagingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QaExtractionStagingClient<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findMany<T extends QaExtractionStagingFindManyArgs>(args?: Prisma.SelectSubset<T, QaExtractionStagingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  create<T extends QaExtractionStagingCreateArgs>(args: Prisma.SelectSubset<T, QaExtractionStagingCreateArgs<ExtArgs>>): Prisma.Prisma__QaExtractionStagingClient<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  createMany<T extends QaExtractionStagingCreateManyArgs>(args?: Prisma.SelectSubset<T, QaExtractionStagingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  createManyAndReturn<T extends QaExtractionStagingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QaExtractionStagingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  delete<T extends QaExtractionStagingDeleteArgs>(args: Prisma.SelectSubset<T, QaExtractionStagingDeleteArgs<ExtArgs>>): Prisma.Prisma__QaExtractionStagingClient<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  update<T extends QaExtractionStagingUpdateArgs>(args: Prisma.SelectSubset<T, QaExtractionStagingUpdateArgs<ExtArgs>>): Prisma.Prisma__QaExtractionStagingClient<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  deleteMany<T extends QaExtractionStagingDeleteManyArgs>(args?: Prisma.SelectSubset<T, QaExtractionStagingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateMany<T extends QaExtractionStagingUpdateManyArgs>(args: Prisma.SelectSubset<T, QaExtractionStagingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateManyAndReturn<T extends QaExtractionStagingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QaExtractionStagingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  upsert<T extends QaExtractionStagingUpsertArgs>(args: Prisma.SelectSubset<T, QaExtractionStagingUpsertArgs<ExtArgs>>): Prisma.Prisma__QaExtractionStagingClient<runtime.Types.Result.GetResult<Prisma.$QaExtractionStagingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  count<T extends QaExtractionStagingCountArgs>(
    args?: Prisma.Subset<T, QaExtractionStagingCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], QaExtractionStagingCountAggregateOutputType>
      : number
  >

  aggregate<T extends QaExtractionStagingAggregateArgs>(args: Prisma.Subset<T, QaExtractionStagingAggregateArgs>): Prisma.PrismaPromise<GetQaExtractionStagingAggregateType<T>>

  groupBy<
    T extends QaExtractionStagingGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: QaExtractionStagingGroupByArgs['orderBy'] }
      : { orderBy?: QaExtractionStagingGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, QaExtractionStagingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQaExtractionStagingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: QaExtractionStagingFieldRefs;
}

export interface Prisma__QaExtractionStagingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface QaExtractionStagingFieldRefs {
  readonly id: Prisma.FieldRef<"QaExtractionStaging", 'Int'>
  readonly batchNo: Prisma.FieldRef<"QaExtractionStaging", 'String'>
  readonly sourceRef: Prisma.FieldRef<"QaExtractionStaging", 'String'>
  readonly question: Prisma.FieldRef<"QaExtractionStaging", 'String'>
  readonly answer: Prisma.FieldRef<"QaExtractionStaging", 'String'>
  readonly status: Prisma.FieldRef<"QaExtractionStaging", 'String'>
  readonly createdAt: Prisma.FieldRef<"QaExtractionStaging", 'DateTime'>
}
    

export type QaExtractionStagingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelect<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  where: Prisma.QaExtractionStagingWhereUniqueInput
}

export type QaExtractionStagingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelect<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  where: Prisma.QaExtractionStagingWhereUniqueInput
}

export type QaExtractionStagingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelect<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  where?: Prisma.QaExtractionStagingWhereInput
  orderBy?: Prisma.QaExtractionStagingOrderByWithRelationInput | Prisma.QaExtractionStagingOrderByWithRelationInput[]
  cursor?: Prisma.QaExtractionStagingWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.QaExtractionStagingScalarFieldEnum | Prisma.QaExtractionStagingScalarFieldEnum[]
}

export type QaExtractionStagingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelect<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  where?: Prisma.QaExtractionStagingWhereInput
  orderBy?: Prisma.QaExtractionStagingOrderByWithRelationInput | Prisma.QaExtractionStagingOrderByWithRelationInput[]
  cursor?: Prisma.QaExtractionStagingWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.QaExtractionStagingScalarFieldEnum | Prisma.QaExtractionStagingScalarFieldEnum[]
}

export type QaExtractionStagingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelect<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  where?: Prisma.QaExtractionStagingWhereInput
  orderBy?: Prisma.QaExtractionStagingOrderByWithRelationInput | Prisma.QaExtractionStagingOrderByWithRelationInput[]
  cursor?: Prisma.QaExtractionStagingWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.QaExtractionStagingScalarFieldEnum | Prisma.QaExtractionStagingScalarFieldEnum[]
}

export type QaExtractionStagingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelect<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.QaExtractionStagingCreateInput, Prisma.QaExtractionStagingUncheckedCreateInput>
}

export type QaExtractionStagingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.QaExtractionStagingCreateManyInput | Prisma.QaExtractionStagingCreateManyInput[]
  skipDuplicates?: boolean
}

export type QaExtractionStagingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  data: Prisma.QaExtractionStagingCreateManyInput | Prisma.QaExtractionStagingCreateManyInput[]
  skipDuplicates?: boolean
}

export type QaExtractionStagingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelect<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.QaExtractionStagingUpdateInput, Prisma.QaExtractionStagingUncheckedUpdateInput>
  where: Prisma.QaExtractionStagingWhereUniqueInput
}

export type QaExtractionStagingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.QaExtractionStagingUpdateManyMutationInput, Prisma.QaExtractionStagingUncheckedUpdateManyInput>
  where?: Prisma.QaExtractionStagingWhereInput
  limit?: number
}

export type QaExtractionStagingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.QaExtractionStagingUpdateManyMutationInput, Prisma.QaExtractionStagingUncheckedUpdateManyInput>
  where?: Prisma.QaExtractionStagingWhereInput
  limit?: number
}

export type QaExtractionStagingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelect<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  where: Prisma.QaExtractionStagingWhereUniqueInput
  create: Prisma.XOR<Prisma.QaExtractionStagingCreateInput, Prisma.QaExtractionStagingUncheckedCreateInput>
  update: Prisma.XOR<Prisma.QaExtractionStagingUpdateInput, Prisma.QaExtractionStagingUncheckedUpdateInput>
}

export type QaExtractionStagingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelect<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
  where: Prisma.QaExtractionStagingWhereUniqueInput
}

export type QaExtractionStagingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.QaExtractionStagingWhereInput
  limit?: number
}

export type QaExtractionStagingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.QaExtractionStagingSelect<ExtArgs> | null
  omit?: Prisma.QaExtractionStagingOmit<ExtArgs> | null
}
