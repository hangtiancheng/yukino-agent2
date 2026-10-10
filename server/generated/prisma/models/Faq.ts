
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

export type FaqModel = runtime.Types.Result.DefaultSelection<Prisma.$FaqPayload>

export type AggregateFaq = {
  _count: FaqCountAggregateOutputType | null
  _avg: FaqAvgAggregateOutputType | null
  _sum: FaqSumAggregateOutputType | null
  _min: FaqMinAggregateOutputType | null
  _max: FaqMaxAggregateOutputType | null
}

export type FaqAvgAggregateOutputType = {
  id: number | null
}

export type FaqSumAggregateOutputType = {
  id: number | null
}

export type FaqMinAggregateOutputType = {
  id: number | null
  question: string | null
  answer: string | null
  category: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type FaqMaxAggregateOutputType = {
  id: number | null
  question: string | null
  answer: string | null
  category: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type FaqCountAggregateOutputType = {
  id: number
  question: number
  answer: number
  category: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type FaqAvgAggregateInputType = {
  id?: true
}

export type FaqSumAggregateInputType = {
  id?: true
}

export type FaqMinAggregateInputType = {
  id?: true
  question?: true
  answer?: true
  category?: true
  createdAt?: true
  updatedAt?: true
}

export type FaqMaxAggregateInputType = {
  id?: true
  question?: true
  answer?: true
  category?: true
  createdAt?: true
  updatedAt?: true
}

export type FaqCountAggregateInputType = {
  id?: true
  question?: true
  answer?: true
  category?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type FaqAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.FaqWhereInput
  orderBy?: Prisma.FaqOrderByWithRelationInput | Prisma.FaqOrderByWithRelationInput[]
  cursor?: Prisma.FaqWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | FaqCountAggregateInputType
  _avg?: FaqAvgAggregateInputType
  _sum?: FaqSumAggregateInputType
  _min?: FaqMinAggregateInputType
  _max?: FaqMaxAggregateInputType
}

export type GetFaqAggregateType<T extends FaqAggregateArgs> = {
      [P in keyof T & keyof AggregateFaq]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateFaq[P]>
    : Prisma.GetScalarType<T[P], AggregateFaq[P]>
}




export type FaqGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.FaqWhereInput
  orderBy?: Prisma.FaqOrderByWithAggregationInput | Prisma.FaqOrderByWithAggregationInput[]
  by: Prisma.FaqScalarFieldEnum[] | Prisma.FaqScalarFieldEnum
  having?: Prisma.FaqScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: FaqCountAggregateInputType | true
  _avg?: FaqAvgAggregateInputType
  _sum?: FaqSumAggregateInputType
  _min?: FaqMinAggregateInputType
  _max?: FaqMaxAggregateInputType
}

export type FaqGroupByOutputType = {
  id: number
  question: string
  answer: string
  category: string
  createdAt: Date
  updatedAt: Date
  _count: FaqCountAggregateOutputType | null
  _avg: FaqAvgAggregateOutputType | null
  _sum: FaqSumAggregateOutputType | null
  _min: FaqMinAggregateOutputType | null
  _max: FaqMaxAggregateOutputType | null
}

export type GetFaqGroupByPayload<T extends FaqGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<FaqGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof FaqGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], FaqGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], FaqGroupByOutputType[P]>
      }
    >
  >



export type FaqWhereInput = {
  AND?: Prisma.FaqWhereInput | Prisma.FaqWhereInput[]
  OR?: Prisma.FaqWhereInput[]
  NOT?: Prisma.FaqWhereInput | Prisma.FaqWhereInput[]
  id?: Prisma.IntFilter<"Faq"> | number
  question?: Prisma.StringFilter<"Faq"> | string
  answer?: Prisma.StringFilter<"Faq"> | string
  category?: Prisma.StringFilter<"Faq"> | string
  createdAt?: Prisma.DateTimeFilter<"Faq"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Faq"> | Date | string
}

export type FaqOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  question?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  category?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type FaqWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: Prisma.FaqWhereInput | Prisma.FaqWhereInput[]
  OR?: Prisma.FaqWhereInput[]
  NOT?: Prisma.FaqWhereInput | Prisma.FaqWhereInput[]
  question?: Prisma.StringFilter<"Faq"> | string
  answer?: Prisma.StringFilter<"Faq"> | string
  category?: Prisma.StringFilter<"Faq"> | string
  createdAt?: Prisma.DateTimeFilter<"Faq"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"Faq"> | Date | string
}, "id">

export type FaqOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  question?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  category?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.FaqCountOrderByAggregateInput
  _avg?: Prisma.FaqAvgOrderByAggregateInput
  _max?: Prisma.FaqMaxOrderByAggregateInput
  _min?: Prisma.FaqMinOrderByAggregateInput
  _sum?: Prisma.FaqSumOrderByAggregateInput
}

export type FaqScalarWhereWithAggregatesInput = {
  AND?: Prisma.FaqScalarWhereWithAggregatesInput | Prisma.FaqScalarWhereWithAggregatesInput[]
  OR?: Prisma.FaqScalarWhereWithAggregatesInput[]
  NOT?: Prisma.FaqScalarWhereWithAggregatesInput | Prisma.FaqScalarWhereWithAggregatesInput[]
  id?: Prisma.IntWithAggregatesFilter<"Faq"> | number
  question?: Prisma.StringWithAggregatesFilter<"Faq"> | string
  answer?: Prisma.StringWithAggregatesFilter<"Faq"> | string
  category?: Prisma.StringWithAggregatesFilter<"Faq"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Faq"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Faq"> | Date | string
}

export type FaqCreateInput = {
  question: string
  answer: string
  category: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type FaqUncheckedCreateInput = {
  id?: number
  question: string
  answer: string
  category: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type FaqUpdateInput = {
  question?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FaqUncheckedUpdateInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  question?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FaqCreateManyInput = {
  id?: number
  question: string
  answer: string
  category: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type FaqUpdateManyMutationInput = {
  question?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FaqUncheckedUpdateManyInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  question?: Prisma.StringFieldUpdateOperationsInput | string
  answer?: Prisma.StringFieldUpdateOperationsInput | string
  category?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type FaqCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  question?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  category?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type FaqAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
}

export type FaqMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  question?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  category?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type FaqMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  question?: Prisma.SortOrder
  answer?: Prisma.SortOrder
  category?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type FaqSumOrderByAggregateInput = {
  id?: Prisma.SortOrder
}



export type FaqSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  question?: boolean
  answer?: boolean
  category?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["faq"]>

export type FaqSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  question?: boolean
  answer?: boolean
  category?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["faq"]>

export type FaqSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  question?: boolean
  answer?: boolean
  category?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["faq"]>

export type FaqSelectScalar = {
  id?: boolean
  question?: boolean
  answer?: boolean
  category?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type FaqOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "question" | "answer" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["faq"]>

export type $FaqPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Faq"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: number
    question: string
    answer: string
    category: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["faq"]>
  composites: {}
}

export type FaqGetPayload<S extends boolean | null | undefined | FaqDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FaqPayload, S>

export type FaqCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<FaqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FaqCountAggregateInputType | true
  }

export interface FaqDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faq'], meta: { name: 'Faq' } }
  findUnique<T extends FaqFindUniqueArgs>(args: Prisma.SelectSubset<T, FaqFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FaqClient<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findUniqueOrThrow<T extends FaqFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FaqClient<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findFirst<T extends FaqFindFirstArgs>(args?: Prisma.SelectSubset<T, FaqFindFirstArgs<ExtArgs>>): Prisma.Prisma__FaqClient<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findFirstOrThrow<T extends FaqFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FaqFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FaqClient<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findMany<T extends FaqFindManyArgs>(args?: Prisma.SelectSubset<T, FaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  create<T extends FaqCreateArgs>(args: Prisma.SelectSubset<T, FaqCreateArgs<ExtArgs>>): Prisma.Prisma__FaqClient<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  createMany<T extends FaqCreateManyArgs>(args?: Prisma.SelectSubset<T, FaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  createManyAndReturn<T extends FaqCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FaqCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  delete<T extends FaqDeleteArgs>(args: Prisma.SelectSubset<T, FaqDeleteArgs<ExtArgs>>): Prisma.Prisma__FaqClient<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  update<T extends FaqUpdateArgs>(args: Prisma.SelectSubset<T, FaqUpdateArgs<ExtArgs>>): Prisma.Prisma__FaqClient<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  deleteMany<T extends FaqDeleteManyArgs>(args?: Prisma.SelectSubset<T, FaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateMany<T extends FaqUpdateManyArgs>(args: Prisma.SelectSubset<T, FaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateManyAndReturn<T extends FaqUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FaqUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  upsert<T extends FaqUpsertArgs>(args: Prisma.SelectSubset<T, FaqUpsertArgs<ExtArgs>>): Prisma.Prisma__FaqClient<runtime.Types.Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  count<T extends FaqCountArgs>(
    args?: Prisma.Subset<T, FaqCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], FaqCountAggregateOutputType>
      : number
  >

  aggregate<T extends FaqAggregateArgs>(args: Prisma.Subset<T, FaqAggregateArgs>): Prisma.PrismaPromise<GetFaqAggregateType<T>>

  groupBy<
    T extends FaqGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: FaqGroupByArgs['orderBy'] }
      : { orderBy?: FaqGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, FaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: FaqFieldRefs;
}

export interface Prisma__FaqClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface FaqFieldRefs {
  readonly id: Prisma.FieldRef<"Faq", 'Int'>
  readonly question: Prisma.FieldRef<"Faq", 'String'>
  readonly answer: Prisma.FieldRef<"Faq", 'String'>
  readonly category: Prisma.FieldRef<"Faq", 'String'>
  readonly createdAt: Prisma.FieldRef<"Faq", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"Faq", 'DateTime'>
}
    

export type FaqFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelect<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  where: Prisma.FaqWhereUniqueInput
}

export type FaqFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelect<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  where: Prisma.FaqWhereUniqueInput
}

export type FaqFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelect<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  where?: Prisma.FaqWhereInput
  orderBy?: Prisma.FaqOrderByWithRelationInput | Prisma.FaqOrderByWithRelationInput[]
  cursor?: Prisma.FaqWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.FaqScalarFieldEnum | Prisma.FaqScalarFieldEnum[]
}

export type FaqFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelect<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  where?: Prisma.FaqWhereInput
  orderBy?: Prisma.FaqOrderByWithRelationInput | Prisma.FaqOrderByWithRelationInput[]
  cursor?: Prisma.FaqWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.FaqScalarFieldEnum | Prisma.FaqScalarFieldEnum[]
}

export type FaqFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelect<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  where?: Prisma.FaqWhereInput
  orderBy?: Prisma.FaqOrderByWithRelationInput | Prisma.FaqOrderByWithRelationInput[]
  cursor?: Prisma.FaqWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.FaqScalarFieldEnum | Prisma.FaqScalarFieldEnum[]
}

export type FaqCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelect<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.FaqCreateInput, Prisma.FaqUncheckedCreateInput>
}

export type FaqCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.FaqCreateManyInput | Prisma.FaqCreateManyInput[]
  skipDuplicates?: boolean
}

export type FaqCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  data: Prisma.FaqCreateManyInput | Prisma.FaqCreateManyInput[]
  skipDuplicates?: boolean
}

export type FaqUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelect<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.FaqUpdateInput, Prisma.FaqUncheckedUpdateInput>
  where: Prisma.FaqWhereUniqueInput
}

export type FaqUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.FaqUpdateManyMutationInput, Prisma.FaqUncheckedUpdateManyInput>
  where?: Prisma.FaqWhereInput
  limit?: number
}

export type FaqUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.FaqUpdateManyMutationInput, Prisma.FaqUncheckedUpdateManyInput>
  where?: Prisma.FaqWhereInput
  limit?: number
}

export type FaqUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelect<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  where: Prisma.FaqWhereUniqueInput
  create: Prisma.XOR<Prisma.FaqCreateInput, Prisma.FaqUncheckedCreateInput>
  update: Prisma.XOR<Prisma.FaqUpdateInput, Prisma.FaqUncheckedUpdateInput>
}

export type FaqDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelect<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
  where: Prisma.FaqWhereUniqueInput
}

export type FaqDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.FaqWhereInput
  limit?: number
}

export type FaqDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.FaqSelect<ExtArgs> | null
  omit?: Prisma.FaqOmit<ExtArgs> | null
}
