
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

export type FaithCaseModel = runtime.Types.Result.DefaultSelection<Prisma.$FaithCasePayload>

export type AggregateFaithCase = {
  _count: FaithCaseCountAggregateOutputType | null
  _avg: FaithCaseAvgAggregateOutputType | null
  _sum: FaithCaseSumAggregateOutputType | null
  _min: FaithCaseMinAggregateOutputType | null
  _max: FaithCaseMaxAggregateOutputType | null
}

export type FaithCaseAvgAggregateOutputType = {
  id: number | null
  seenCount: number | null
}

export type FaithCaseSumAggregateOutputType = {
  id: number | null
  seenCount: number | null
}

export type FaithCaseMinAggregateOutputType = {
  id: number | null
  evalId: string | null
  bucket: string | null
  query: string | null
  strategy: string | null
  answer: string | null
  reason: string | null
  citations: string | null
  judgeModel: string | null
  status: string | null
  seenCount: number | null
  firstSeenAt: Date | null
  lastSeenAt: Date | null
  resolution: string | null
  resolvedAt: Date | null
}

export type FaithCaseMaxAggregateOutputType = {
  id: number | null
  evalId: string | null
  bucket: string | null
  query: string | null
  strategy: string | null
  answer: string | null
  reason: string | null
  citations: string | null
  judgeModel: string | null
  status: string | null
  seenCount: number | null
  firstSeenAt: Date | null
  lastSeenAt: Date | null
  resolution: string | null
  resolvedAt: Date | null
}

export type FaithCaseCountAggregateOutputType = {
  id: number
  evalId: number
  bucket: number
  query: number
  strategy: number
  answer: number
  reason: number
  citations: number
  judgeModel: number
  status: number
  seenCount: number
  firstSeenAt: number
  lastSeenAt: number
  resolution: number
  resolvedAt: number
  _all: number
}


export type FaithCaseAvgAggregateInputType = {
  id?: true
  seenCount?: true
}

export type FaithCaseSumAggregateInputType = {
  id?: true
  seenCount?: true
}

export type FaithCaseMinAggregateInputType = {
  id?: true
  evalId?: true
  bucket?: true
  query?: true
  strategy?: true
  answer?: true
  reason?: true
  citations?: true
  judgeModel?: true
  status?: true
  seenCount?: true
  firstSeenAt?: true
  lastSeenAt?: true
  resolution?: true
  resolvedAt?: true
}

export type FaithCaseMaxAggregateInputType = {
  id?: true
  evalId?: true
  bucket?: true
  query?: true
  strategy?: true
  answer?: true
  reason?: true
  citations?: true
  judgeModel?: true
  status?: true
  seenCount?: true
  firstSeenAt?: true
  lastSeenAt?: true
  resolution?: true
  resolvedAt?: true
}

export type FaithCaseCountAggregateInputType = {
  id?: true
  evalId?: true
  bucket?: true
  query?: true
  strategy?: true
  answer?: true
  reason?: true
  citations?: true
  judgeModel?: true
  status?: true
  seenCount?: true
  firstSeenAt?: true
  lastSeenAt?: true
  resolution?: true
  resolvedAt?: true
  _all?: true
}

export type FaithCaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.FaithCaseWhereInput
  orderBy?: Prisma.FaithCaseOrderByWithRelationInput | Prisma.FaithCaseOrderByWithRelationInput[]
  cursor?: Prisma.FaithCaseWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | FaithCaseCountAggregateInputType
  _avg?: FaithCaseAvgAggregateInputType
  _sum?: FaithCaseSumAggregateInputType
  _min?: FaithCaseMinAggregateInputType
  _max?: FaithCaseMaxAggregateInputType
}

export type GetFaithCaseAggregateType<T extends FaithCaseAggregateArgs> = {
      [P in keyof T & keyof AggregateFaithCase]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateFaithCase[P]>
    : Prisma.GetScalarType<T[P], AggregateFaithCase[P]>
}




export type FaithCaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.FaithCaseWhereInput
  orderBy?: Prisma.FaithCaseOrderByWithAggregationInput | Prisma.FaithCaseOrderByWithAggregationInput[]
  by: Prisma.FaithCaseScalarFieldEnum[] | Prisma.FaithCaseScalarFieldEnum
  having?: Prisma.FaithCaseScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: FaithCaseCountAggregateInputType | true
  _avg?: FaithCaseAvgAggregateInputType
  _sum?: FaithCaseSumAggregateInputType
  _min?: FaithCaseMinAggregateInputType
  _max?: FaithCaseMaxAggregateInputType
}

export type FaithCaseGroupByOutputType = {
  id: number
  evalId: string
  bucket: string
  query: string
  strategy: string
  answer: string
  reason: string
  citations: string | null
  judgeModel: string | null
  status: string
  seenCount: number
  firstSeenAt: Date
  lastSeenAt: Date
  resolution: string | null
  resolvedAt: Date | null
  _count: FaithCaseCountAggregateOutputType | null
  _avg: FaithCaseAvgAggregateOutputType | null
  _sum: FaithCaseSumAggregateOutputType | null
  _min: FaithCaseMinAggregateOutputType | null
  _max: FaithCaseMaxAggregateOutputType | null
}

export type GetFaithCaseGroupByPayload<T extends FaithCaseGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<FaithCaseGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof FaithCaseGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], FaithCaseGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], FaithCaseGroupByOutputType[P]>
      }
    >
  >



export type FaithCaseWhereInput = {
  AND?: Prisma.FaithCaseWhereInput | Prisma.FaithCaseWhereInput[]
  OR?: Prisma.FaithCaseWhereInput[]
  NOT?: Prisma.FaithCaseWhereInput | Prisma.FaithCaseWhereInput[]
  id?: Prisma.IntFilter<"FaithCase"> | number
  evalId?: Prisma.StringFilter<"FaithCase"> | string
  bucket?: Prisma.StringFilter<"FaithCase"> | string
  query?: Prisma.StringFilter<"FaithCase"> | string
  strategy?: Prisma.StringFilter<"FaithCase"> | string
  answer?: Prisma.StringFilter<"FaithCase"> | string
  reason?: Prisma.StringFilter<"FaithCase"> | string
  citations?: Prisma.StringNullableFilter<"FaithCase"> | string | null
  judgeModel?: Prisma.StringNullableFilter<"FaithCase"> | string | null
  status?: Prisma.StringFilter<"FaithCase"> | string
  seenCount?: Prisma.IntFilter<"FaithCase"> | number
  firstSeenAt?: Prisma.DateTimeFilter<"FaithCase"> | Date | string
  lastSeenAt?: Prisma.DateTimeFilter<"FaithCase"> | Date | string
  resolution?: Prisma.StringNullableFilter<"FaithCase"> | string | null
  resolvedAt?: Prisma.DateTimeNullableFilter<"FaithCase"> | Date | string | null
}

export type FaithCaseOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  evalId?: Prisma.SortOrder
  bucket?: Prisma.SortOrder
  query?: Prisma.SortOrder
  strategy?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  reason?: Prisma.SortOrder
  citations?: Prisma.SortOrderInput | Prisma.SortOrder
  judgeModel?: Prisma.SortOrderInput | Prisma.SortOrder
  status?: Prisma.SortOrder
  seenCount?: Prisma.SortOrder
  firstSeenAt?: Prisma.SortOrder
  lastSeenAt?: Prisma.SortOrder
  resolution?: Prisma.SortOrderInput | Prisma.SortOrder
  resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder
}

export type FaithCaseWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  evalId?: string
  AND?: Prisma.FaithCaseWhereInput | Prisma.FaithCaseWhereInput[]
  OR?: Prisma.FaithCaseWhereInput[]
  NOT?: Prisma.FaithCaseWhereInput | Prisma.FaithCaseWhereInput[]
  bucket?: Prisma.StringFilter<"FaithCase"> | string
  query?: Prisma.StringFilter<"FaithCase"> | string
  strategy?: Prisma.StringFilter<"FaithCase"> | string
  answer?: Prisma.StringFilter<"FaithCase"> | string
  reason?: Prisma.StringFilter<"FaithCase"> | string
  citations?: Prisma.StringNullableFilter<"FaithCase"> | string | null
  judgeModel?: Prisma.StringNullableFilter<"FaithCase"> | string | null
  status?: Prisma.StringFilter<"FaithCase"> | string
  seenCount?: Prisma.IntFilter<"FaithCase"> | number
  firstSeenAt?: Prisma.DateTimeFilter<"FaithCase"> | Date | string
  lastSeenAt?: Prisma.DateTimeFilter<"FaithCase"> | Date | string
  resolution?: Prisma.StringNullableFilter<"FaithCase"> | string | null
  resolvedAt?: Prisma.DateTimeNullableFilter<"FaithCase"> | Date | string | null
}, "id" | "evalId">

export type FaithCaseOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  evalId?: Prisma.SortOrder
  bucket?: Prisma.SortOrder
  query?: Prisma.SortOrder
  strategy?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  reason?: Prisma.SortOrder
  citations?: Prisma.SortOrderInput | Prisma.SortOrder
  judgeModel?: Prisma.SortOrderInput | Prisma.SortOrder
  status?: Prisma.SortOrder
  seenCount?: Prisma.SortOrder
  firstSeenAt?: Prisma.SortOrder
  lastSeenAt?: Prisma.SortOrder
  resolution?: Prisma.SortOrderInput | Prisma.SortOrder
  resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder
  _count?: Prisma.FaithCaseCountOrderByAggregateInput
  _avg?: Prisma.FaithCaseAvgOrderByAggregateInput
  _max?: Prisma.FaithCaseMaxOrderByAggregateInput
  _min?: Prisma.FaithCaseMinOrderByAggregateInput
  _sum?: Prisma.FaithCaseSumOrderByAggregateInput
}

export type FaithCaseScalarWhereWithAggregatesInput = {
  AND?: Prisma.FaithCaseScalarWhereWithAggregatesInput | Prisma.FaithCaseScalarWhereWithAggregatesInput[]
  OR?: Prisma.FaithCaseScalarWhereWithAggregatesInput[]
  NOT?: Prisma.FaithCaseScalarWhereWithAggregatesInput | Prisma.FaithCaseScalarWhereWithAggregatesInput[]
  id?: Prisma.IntWithAggregatesFilter<"FaithCase"> | number
  evalId?: Prisma.StringWithAggregatesFilter<"FaithCase"> | string
  bucket?: Prisma.StringWithAggregatesFilter<"FaithCase"> | string
  query?: Prisma.StringWithAggregatesFilter<"FaithCase"> | string
  strategy?: Prisma.StringWithAggregatesFilter<"FaithCase"> | string
  answer?: Prisma.StringWithAggregatesFilter<"FaithCase"> | string
  reason?: Prisma.StringWithAggregatesFilter<"FaithCase"> | string
  citations?: Prisma.StringNullableWithAggregatesFilter<"FaithCase"> | string | null
  judgeModel?: Prisma.StringNullableWithAggregatesFilter<"FaithCase"> | string | null
  status?: Prisma.StringWithAggregatesFilter<"FaithCase"> | string
  seenCount?: Prisma.IntWithAggregatesFilter<"FaithCase"> | number
  firstSeenAt?: Prisma.DateTimeWithAggregatesFilter<"FaithCase"> | Date | string
  lastSeenAt?: Prisma.DateTimeWithAggregatesFilter<"FaithCase"> | Date | string
  resolution?: Prisma.StringNullableWithAggregatesFilter<"FaithCase"> | string | null
  resolvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"FaithCase"> | Date | string | null
}

export type FaithCaseCreateInput = {
  evalId: string
  bucket: string
  query: string
  strategy?: string
  answer: string
  reason: string
  citations?: string | null
  judgeModel?: string | null
  status?: string
  seenCount?: number
  firstSeenAt?: Date | string
  lastSeenAt?: Date | string
  resolution?: string | null
  resolvedAt?: Date | string | null
}

export type FaithCaseUncheckedCreateInput = {
  id?: number
  evalId: string
  bucket: string
  query: string
  strategy?: string
  answer: string
  reason: string
  citations?: string | null
  judgeModel?: string | null
  status?: string
  seenCount?: number
  firstSeenAt?: Date | string
  lastSeenAt?: Date | string
  resolution?: string | null
  resolvedAt?: Date | string | null
}

export type FaithCaseUpdateInput = {
  evalId?: Prisma.StringFieldUpdateOperationsInput | string
  bucket?: Prisma.StringFieldUpdateOperationsInput | string
  query?: Prisma.StringFieldUpdateOperationsInput | string
  strategy?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.StringFieldUpdateOperationsInput | string
  citations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  judgeModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  seenCount?: Prisma.IntFieldUpdateOperationsInput | number
  firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type FaithCaseUncheckedUpdateInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  evalId?: Prisma.StringFieldUpdateOperationsInput | string
  bucket?: Prisma.StringFieldUpdateOperationsInput | string
  query?: Prisma.StringFieldUpdateOperationsInput | string
  strategy?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.StringFieldUpdateOperationsInput | string
  citations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  judgeModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  seenCount?: Prisma.IntFieldUpdateOperationsInput | number
  firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type FaithCaseCreateManyInput = {
  id?: number
  evalId: string
  bucket: string
  query: string
  strategy?: string
  answer: string
  reason: string
  citations?: string | null
  judgeModel?: string | null
  status?: string
  seenCount?: number
  firstSeenAt?: Date | string
  lastSeenAt?: Date | string
  resolution?: string | null
  resolvedAt?: Date | string | null
}

export type FaithCaseUpdateManyMutationInput = {
  evalId?: Prisma.StringFieldUpdateOperationsInput | string
  bucket?: Prisma.StringFieldUpdateOperationsInput | string
  query?: Prisma.StringFieldUpdateOperationsInput | string
  strategy?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.StringFieldUpdateOperationsInput | string
  citations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  judgeModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  seenCount?: Prisma.IntFieldUpdateOperationsInput | number
  firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type FaithCaseUncheckedUpdateManyInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  evalId?: Prisma.StringFieldUpdateOperationsInput | string
  bucket?: Prisma.StringFieldUpdateOperationsInput | string
  query?: Prisma.StringFieldUpdateOperationsInput | string
  strategy?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.StringFieldUpdateOperationsInput | string
  citations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  judgeModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  seenCount?: Prisma.IntFieldUpdateOperationsInput | number
  firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
}

export type FaithCaseCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  evalId?: Prisma.SortOrder
  bucket?: Prisma.SortOrder
  query?: Prisma.SortOrder
  strategy?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  reason?: Prisma.SortOrder
  citations?: Prisma.SortOrder
  judgeModel?: Prisma.SortOrder
  status?: Prisma.SortOrder
  seenCount?: Prisma.SortOrder
  firstSeenAt?: Prisma.SortOrder
  lastSeenAt?: Prisma.SortOrder
  resolution?: Prisma.SortOrder
  resolvedAt?: Prisma.SortOrder
}

export type FaithCaseAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
  seenCount?: Prisma.SortOrder
}

export type FaithCaseMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  evalId?: Prisma.SortOrder
  bucket?: Prisma.SortOrder
  query?: Prisma.SortOrder
  strategy?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  reason?: Prisma.SortOrder
  citations?: Prisma.SortOrder
  judgeModel?: Prisma.SortOrder
  status?: Prisma.SortOrder
  seenCount?: Prisma.SortOrder
  firstSeenAt?: Prisma.SortOrder
  lastSeenAt?: Prisma.SortOrder
  resolution?: Prisma.SortOrder
  resolvedAt?: Prisma.SortOrder
}

export type FaithCaseMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  evalId?: Prisma.SortOrder
  bucket?: Prisma.SortOrder
  query?: Prisma.SortOrder
  strategy?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  reason?: Prisma.SortOrder
  citations?: Prisma.SortOrder
  judgeModel?: Prisma.SortOrder
  status?: Prisma.SortOrder
  seenCount?: Prisma.SortOrder
  firstSeenAt?: Prisma.SortOrder
  lastSeenAt?: Prisma.SortOrder
  resolution?: Prisma.SortOrder
  resolvedAt?: Prisma.SortOrder
}

export type FaithCaseSumOrderByAggregateInput = {
  id?: Prisma.SortOrder
  seenCount?: Prisma.SortOrder
}

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Date | string | null
}



export type FaithCaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  evalId?: boolean
  bucket?: boolean
  query?: boolean
  strategy?: boolean
  answer?: boolean
  reason?: boolean
  citations?: boolean
  judgeModel?: boolean
  status?: boolean
  seenCount?: boolean
  firstSeenAt?: boolean
  lastSeenAt?: boolean
  resolution?: boolean
  resolvedAt?: boolean
}, ExtArgs["result"]["faithCase"]>

export type FaithCaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  evalId?: boolean
  bucket?: boolean
  query?: boolean
  strategy?: boolean
  answer?: boolean
  reason?: boolean
  citations?: boolean
  judgeModel?: boolean
  status?: boolean
  seenCount?: boolean
  firstSeenAt?: boolean
  lastSeenAt?: boolean
  resolution?: boolean
  resolvedAt?: boolean
}, ExtArgs["result"]["faithCase"]>

export type FaithCaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  evalId?: boolean
  bucket?: boolean
  query?: boolean
  strategy?: boolean
  answer?: boolean
  reason?: boolean
  citations?: boolean
  judgeModel?: boolean
  status?: boolean
  seenCount?: boolean
  firstSeenAt?: boolean
  lastSeenAt?: boolean
  resolution?: boolean
  resolvedAt?: boolean
}, ExtArgs["result"]["faithCase"]>

export type FaithCaseSelectScalar = {
  id?: boolean
  evalId?: boolean
  bucket?: boolean
  query?: boolean
  strategy?: boolean
  answer?: boolean
  reason?: boolean
  citations?: boolean
  judgeModel?: boolean
  status?: boolean
  seenCount?: boolean
  firstSeenAt?: boolean
  lastSeenAt?: boolean
  resolution?: boolean
  resolvedAt?: boolean
}

export type FaithCaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "evalId" | "bucket" | "query" | "strategy" | "answer" | "reason" | "citations" | "judgeModel" | "status" | "seenCount" | "firstSeenAt" | "lastSeenAt" | "resolution" | "resolvedAt", ExtArgs["result"]["faithCase"]>

export type $FaithCasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "FaithCase"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: number
    evalId: string
    bucket: string
    query: string
    strategy: string
    answer: string
    reason: string
    citations: string | null
    judgeModel: string | null
    status: string
    seenCount: number
    firstSeenAt: Date
    lastSeenAt: Date
    resolution: string | null
    resolvedAt: Date | null
  }, ExtArgs["result"]["faithCase"]>
  composites: {}
}

export type FaithCaseGetPayload<S extends boolean | null | undefined | FaithCaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FaithCasePayload, S>

export type FaithCaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<FaithCaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FaithCaseCountAggregateInputType | true
  }

export interface FaithCaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FaithCase'], meta: { name: 'FaithCase' } }
  findUnique<T extends FaithCaseFindUniqueArgs>(args: Prisma.SelectSubset<T, FaithCaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FaithCaseClient<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findUniqueOrThrow<T extends FaithCaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FaithCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FaithCaseClient<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findFirst<T extends FaithCaseFindFirstArgs>(args?: Prisma.SelectSubset<T, FaithCaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__FaithCaseClient<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findFirstOrThrow<T extends FaithCaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FaithCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FaithCaseClient<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findMany<T extends FaithCaseFindManyArgs>(args?: Prisma.SelectSubset<T, FaithCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  create<T extends FaithCaseCreateArgs>(args: Prisma.SelectSubset<T, FaithCaseCreateArgs<ExtArgs>>): Prisma.Prisma__FaithCaseClient<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  createMany<T extends FaithCaseCreateManyArgs>(args?: Prisma.SelectSubset<T, FaithCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  createManyAndReturn<T extends FaithCaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FaithCaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  delete<T extends FaithCaseDeleteArgs>(args: Prisma.SelectSubset<T, FaithCaseDeleteArgs<ExtArgs>>): Prisma.Prisma__FaithCaseClient<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  update<T extends FaithCaseUpdateArgs>(args: Prisma.SelectSubset<T, FaithCaseUpdateArgs<ExtArgs>>): Prisma.Prisma__FaithCaseClient<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  deleteMany<T extends FaithCaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, FaithCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateMany<T extends FaithCaseUpdateManyArgs>(args: Prisma.SelectSubset<T, FaithCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateManyAndReturn<T extends FaithCaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FaithCaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  upsert<T extends FaithCaseUpsertArgs>(args: Prisma.SelectSubset<T, FaithCaseUpsertArgs<ExtArgs>>): Prisma.Prisma__FaithCaseClient<runtime.Types.Result.GetResult<Prisma.$FaithCasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  count<T extends FaithCaseCountArgs>(
    args?: Prisma.Subset<T, FaithCaseCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], FaithCaseCountAggregateOutputType>
      : number
  >

  aggregate<T extends FaithCaseAggregateArgs>(args: Prisma.Subset<T, FaithCaseAggregateArgs>): Prisma.PrismaPromise<GetFaithCaseAggregateType<T>>

  groupBy<
    T extends FaithCaseGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: FaithCaseGroupByArgs['orderBy'] }
      : { orderBy?: FaithCaseGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, FaithCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaithCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: FaithCaseFieldRefs;
}

export interface Prisma__FaithCaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface FaithCaseFieldRefs {
  readonly id: Prisma.FieldRef<"FaithCase", 'Int'>
  readonly evalId: Prisma.FieldRef<"FaithCase", 'String'>
  readonly bucket: Prisma.FieldRef<"FaithCase", 'String'>
  readonly query: Prisma.FieldRef<"FaithCase", 'String'>
  readonly strategy: Prisma.FieldRef<"FaithCase", 'String'>
  readonly answer: Prisma.FieldRef<"FaithCase", 'String'>
  readonly reason: Prisma.FieldRef<"FaithCase", 'String'>
  readonly citations: Prisma.FieldRef<"FaithCase", 'String'>
  readonly judgeModel: Prisma.FieldRef<"FaithCase", 'String'>
  readonly status: Prisma.FieldRef<"FaithCase", 'String'>
  readonly seenCount: Prisma.FieldRef<"FaithCase", 'Int'>
  readonly firstSeenAt: Prisma.FieldRef<"FaithCase", 'DateTime'>
  readonly lastSeenAt: Prisma.FieldRef<"FaithCase", 'DateTime'>
  readonly resolution: Prisma.FieldRef<"FaithCase", 'String'>
  readonly resolvedAt: Prisma.FieldRef<"FaithCase", 'DateTime'>
}
    

export type FaithCaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelect<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  where: Prisma.FaithCaseWhereUniqueInput
}

export type FaithCaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelect<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  where: Prisma.FaithCaseWhereUniqueInput
}

export type FaithCaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelect<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  where?: Prisma.FaithCaseWhereInput
  orderBy?: Prisma.FaithCaseOrderByWithRelationInput | Prisma.FaithCaseOrderByWithRelationInput[]
  cursor?: Prisma.FaithCaseWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.FaithCaseScalarFieldEnum | Prisma.FaithCaseScalarFieldEnum[]
}

export type FaithCaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelect<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  where?: Prisma.FaithCaseWhereInput
  orderBy?: Prisma.FaithCaseOrderByWithRelationInput | Prisma.FaithCaseOrderByWithRelationInput[]
  cursor?: Prisma.FaithCaseWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.FaithCaseScalarFieldEnum | Prisma.FaithCaseScalarFieldEnum[]
}

export type FaithCaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelect<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  where?: Prisma.FaithCaseWhereInput
  orderBy?: Prisma.FaithCaseOrderByWithRelationInput | Prisma.FaithCaseOrderByWithRelationInput[]
  cursor?: Prisma.FaithCaseWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.FaithCaseScalarFieldEnum | Prisma.FaithCaseScalarFieldEnum[]
}

export type FaithCaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelect<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.FaithCaseCreateInput, Prisma.FaithCaseUncheckedCreateInput>
}

export type FaithCaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.FaithCaseCreateManyInput | Prisma.FaithCaseCreateManyInput[]
  skipDuplicates?: boolean
}

export type FaithCaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  data: Prisma.FaithCaseCreateManyInput | Prisma.FaithCaseCreateManyInput[]
  skipDuplicates?: boolean
}

export type FaithCaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelect<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.FaithCaseUpdateInput, Prisma.FaithCaseUncheckedUpdateInput>
  where: Prisma.FaithCaseWhereUniqueInput
}

export type FaithCaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.FaithCaseUpdateManyMutationInput, Prisma.FaithCaseUncheckedUpdateManyInput>
  where?: Prisma.FaithCaseWhereInput
  limit?: number
}

export type FaithCaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.FaithCaseUpdateManyMutationInput, Prisma.FaithCaseUncheckedUpdateManyInput>
  where?: Prisma.FaithCaseWhereInput
  limit?: number
}

export type FaithCaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelect<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  where: Prisma.FaithCaseWhereUniqueInput
  create: Prisma.XOR<Prisma.FaithCaseCreateInput, Prisma.FaithCaseUncheckedCreateInput>
  update: Prisma.XOR<Prisma.FaithCaseUpdateInput, Prisma.FaithCaseUncheckedUpdateInput>
}

export type FaithCaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelect<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
  where: Prisma.FaithCaseWhereUniqueInput
}

export type FaithCaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.FaithCaseWhereInput
  limit?: number
}

export type FaithCaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaithCaseSelect<ExtArgs> | null
  omit?: Prisma.FaithCaseOmit<ExtArgs> | null
}
