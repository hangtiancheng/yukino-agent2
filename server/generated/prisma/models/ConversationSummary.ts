
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

export type ConversationSummaryModel = runtime.Types.Result.DefaultSelection<Prisma.$ConversationSummaryPayload>

export type AggregateConversationSummary = {
  _count: ConversationSummaryCountAggregateOutputType | null
  _avg: ConversationSummaryAvgAggregateOutputType | null
  _sum: ConversationSummarySumAggregateOutputType | null
  _min: ConversationSummaryMinAggregateOutputType | null
  _max: ConversationSummaryMaxAggregateOutputType | null
}

export type ConversationSummaryAvgAggregateOutputType = {
  id: number | null
  conversationId: number | null
  seq: number | null
  fromMsgId: number | null
  uptoMsgId: number | null
}

export type ConversationSummarySumAggregateOutputType = {
  id: number | null
  conversationId: number | null
  seq: number | null
  fromMsgId: number | null
  uptoMsgId: number | null
}

export type ConversationSummaryMinAggregateOutputType = {
  id: number | null
  conversationId: number | null
  seq: number | null
  fromMsgId: number | null
  uptoMsgId: number | null
  content: string | null
  createdAt: Date | null
}

export type ConversationSummaryMaxAggregateOutputType = {
  id: number | null
  conversationId: number | null
  seq: number | null
  fromMsgId: number | null
  uptoMsgId: number | null
  content: string | null
  createdAt: Date | null
}

export type ConversationSummaryCountAggregateOutputType = {
  id: number
  conversationId: number
  seq: number
  fromMsgId: number
  uptoMsgId: number
  content: number
  createdAt: number
  _all: number
}


export type ConversationSummaryAvgAggregateInputType = {
  id?: true
  conversationId?: true
  seq?: true
  fromMsgId?: true
  uptoMsgId?: true
}

export type ConversationSummarySumAggregateInputType = {
  id?: true
  conversationId?: true
  seq?: true
  fromMsgId?: true
  uptoMsgId?: true
}

export type ConversationSummaryMinAggregateInputType = {
  id?: true
  conversationId?: true
  seq?: true
  fromMsgId?: true
  uptoMsgId?: true
  content?: true
  createdAt?: true
}

export type ConversationSummaryMaxAggregateInputType = {
  id?: true
  conversationId?: true
  seq?: true
  fromMsgId?: true
  uptoMsgId?: true
  content?: true
  createdAt?: true
}

export type ConversationSummaryCountAggregateInputType = {
  id?: true
  conversationId?: true
  seq?: true
  fromMsgId?: true
  uptoMsgId?: true
  content?: true
  createdAt?: true
  _all?: true
}

export type ConversationSummaryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ConversationSummaryWhereInput
  orderBy?: Prisma.ConversationSummaryOrderByWithRelationInput | Prisma.ConversationSummaryOrderByWithRelationInput[]
  cursor?: Prisma.ConversationSummaryWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | ConversationSummaryCountAggregateInputType
  _avg?: ConversationSummaryAvgAggregateInputType
  _sum?: ConversationSummarySumAggregateInputType
  _min?: ConversationSummaryMinAggregateInputType
  _max?: ConversationSummaryMaxAggregateInputType
}

export type GetConversationSummaryAggregateType<T extends ConversationSummaryAggregateArgs> = {
      [P in keyof T & keyof AggregateConversationSummary]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateConversationSummary[P]>
    : Prisma.GetScalarType<T[P], AggregateConversationSummary[P]>
}




export type ConversationSummaryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ConversationSummaryWhereInput
  orderBy?: Prisma.ConversationSummaryOrderByWithAggregationInput | Prisma.ConversationSummaryOrderByWithAggregationInput[]
  by: Prisma.ConversationSummaryScalarFieldEnum[] | Prisma.ConversationSummaryScalarFieldEnum
  having?: Prisma.ConversationSummaryScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: ConversationSummaryCountAggregateInputType | true
  _avg?: ConversationSummaryAvgAggregateInputType
  _sum?: ConversationSummarySumAggregateInputType
  _min?: ConversationSummaryMinAggregateInputType
  _max?: ConversationSummaryMaxAggregateInputType
}

export type ConversationSummaryGroupByOutputType = {
  id: number
  conversationId: number
  seq: number
  fromMsgId: number
  uptoMsgId: number
  content: string
  createdAt: Date
  _count: ConversationSummaryCountAggregateOutputType | null
  _avg: ConversationSummaryAvgAggregateOutputType | null
  _sum: ConversationSummarySumAggregateOutputType | null
  _min: ConversationSummaryMinAggregateOutputType | null
  _max: ConversationSummaryMaxAggregateOutputType | null
}

export type GetConversationSummaryGroupByPayload<T extends ConversationSummaryGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<ConversationSummaryGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ConversationSummaryGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], ConversationSummaryGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], ConversationSummaryGroupByOutputType[P]>
      }
    >
  >



export type ConversationSummaryWhereInput = {
  AND?: Prisma.ConversationSummaryWhereInput | Prisma.ConversationSummaryWhereInput[]
  OR?: Prisma.ConversationSummaryWhereInput[]
  NOT?: Prisma.ConversationSummaryWhereInput | Prisma.ConversationSummaryWhereInput[]
  id?: Prisma.IntFilter<"ConversationSummary"> | number
  conversationId?: Prisma.IntFilter<"ConversationSummary"> | number
  seq?: Prisma.IntFilter<"ConversationSummary"> | number
  fromMsgId?: Prisma.IntFilter<"ConversationSummary"> | number
  uptoMsgId?: Prisma.IntFilter<"ConversationSummary"> | number
  content?: Prisma.StringFilter<"ConversationSummary"> | string
  createdAt?: Prisma.DateTimeFilter<"ConversationSummary"> | Date | string
}

export type ConversationSummaryOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  seq?: Prisma.SortOrder
  fromMsgId?: Prisma.SortOrder
  uptoMsgId?: Prisma.SortOrder
  content?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ConversationSummaryWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  conversationId_seq?: Prisma.ConversationSummaryConversationIdSeqCompoundUniqueInput
  AND?: Prisma.ConversationSummaryWhereInput | Prisma.ConversationSummaryWhereInput[]
  OR?: Prisma.ConversationSummaryWhereInput[]
  NOT?: Prisma.ConversationSummaryWhereInput | Prisma.ConversationSummaryWhereInput[]
  conversationId?: Prisma.IntFilter<"ConversationSummary"> | number
  seq?: Prisma.IntFilter<"ConversationSummary"> | number
  fromMsgId?: Prisma.IntFilter<"ConversationSummary"> | number
  uptoMsgId?: Prisma.IntFilter<"ConversationSummary"> | number
  content?: Prisma.StringFilter<"ConversationSummary"> | string
  createdAt?: Prisma.DateTimeFilter<"ConversationSummary"> | Date | string
}, "id" | "conversationId_seq">

export type ConversationSummaryOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  seq?: Prisma.SortOrder
  fromMsgId?: Prisma.SortOrder
  uptoMsgId?: Prisma.SortOrder
  content?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.ConversationSummaryCountOrderByAggregateInput
  _avg?: Prisma.ConversationSummaryAvgOrderByAggregateInput
  _max?: Prisma.ConversationSummaryMaxOrderByAggregateInput
  _min?: Prisma.ConversationSummaryMinOrderByAggregateInput
  _sum?: Prisma.ConversationSummarySumOrderByAggregateInput
}

export type ConversationSummaryScalarWhereWithAggregatesInput = {
  AND?: Prisma.ConversationSummaryScalarWhereWithAggregatesInput | Prisma.ConversationSummaryScalarWhereWithAggregatesInput[]
  OR?: Prisma.ConversationSummaryScalarWhereWithAggregatesInput[]
  NOT?: Prisma.ConversationSummaryScalarWhereWithAggregatesInput | Prisma.ConversationSummaryScalarWhereWithAggregatesInput[]
  id?: Prisma.IntWithAggregatesFilter<"ConversationSummary"> | number
  conversationId?: Prisma.IntWithAggregatesFilter<"ConversationSummary"> | number
  seq?: Prisma.IntWithAggregatesFilter<"ConversationSummary"> | number
  fromMsgId?: Prisma.IntWithAggregatesFilter<"ConversationSummary"> | number
  uptoMsgId?: Prisma.IntWithAggregatesFilter<"ConversationSummary"> | number
  content?: Prisma.StringWithAggregatesFilter<"ConversationSummary"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"ConversationSummary"> | Date | string
}

export type ConversationSummaryCreateInput = {
  conversationId: number
  seq: number
  fromMsgId: number
  uptoMsgId: number
  content: string
  createdAt?: Date | string
}

export type ConversationSummaryUncheckedCreateInput = {
  id?: number
  conversationId: number
  seq: number
  fromMsgId: number
  uptoMsgId: number
  content: string
  createdAt?: Date | string
}

export type ConversationSummaryUpdateInput = {
  conversationId?: Prisma.IntFieldUpdateOperationsInput | number
  seq?: Prisma.IntFieldUpdateOperationsInput | number
  fromMsgId?: Prisma.IntFieldUpdateOperationsInput | number
  uptoMsgId?: Prisma.IntFieldUpdateOperationsInput | number
  content?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ConversationSummaryUncheckedUpdateInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  conversationId?: Prisma.IntFieldUpdateOperationsInput | number
  seq?: Prisma.IntFieldUpdateOperationsInput | number
  fromMsgId?: Prisma.IntFieldUpdateOperationsInput | number
  uptoMsgId?: Prisma.IntFieldUpdateOperationsInput | number
  content?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ConversationSummaryCreateManyInput = {
  id?: number
  conversationId: number
  seq: number
  fromMsgId: number
  uptoMsgId: number
  content: string
  createdAt?: Date | string
}

export type ConversationSummaryUpdateManyMutationInput = {
  conversationId?: Prisma.IntFieldUpdateOperationsInput | number
  seq?: Prisma.IntFieldUpdateOperationsInput | number
  fromMsgId?: Prisma.IntFieldUpdateOperationsInput | number
  uptoMsgId?: Prisma.IntFieldUpdateOperationsInput | number
  content?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ConversationSummaryUncheckedUpdateManyInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  conversationId?: Prisma.IntFieldUpdateOperationsInput | number
  seq?: Prisma.IntFieldUpdateOperationsInput | number
  fromMsgId?: Prisma.IntFieldUpdateOperationsInput | number
  uptoMsgId?: Prisma.IntFieldUpdateOperationsInput | number
  content?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ConversationSummaryConversationIdSeqCompoundUniqueInput = {
  conversationId: number
  seq: number
}

export type ConversationSummaryCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  seq?: Prisma.SortOrder
  fromMsgId?: Prisma.SortOrder
  uptoMsgId?: Prisma.SortOrder
  content?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ConversationSummaryAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  seq?: Prisma.SortOrder
  fromMsgId?: Prisma.SortOrder
  uptoMsgId?: Prisma.SortOrder
}

export type ConversationSummaryMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  seq?: Prisma.SortOrder
  fromMsgId?: Prisma.SortOrder
  uptoMsgId?: Prisma.SortOrder
  content?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ConversationSummaryMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  seq?: Prisma.SortOrder
  fromMsgId?: Prisma.SortOrder
  uptoMsgId?: Prisma.SortOrder
  content?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ConversationSummarySumOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  seq?: Prisma.SortOrder
  fromMsgId?: Prisma.SortOrder
  uptoMsgId?: Prisma.SortOrder
}



export type ConversationSummarySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  seq?: boolean
  fromMsgId?: boolean
  uptoMsgId?: boolean
  content?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["conversationSummary"]>

export type ConversationSummarySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  seq?: boolean
  fromMsgId?: boolean
  uptoMsgId?: boolean
  content?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["conversationSummary"]>

export type ConversationSummarySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  seq?: boolean
  fromMsgId?: boolean
  uptoMsgId?: boolean
  content?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["conversationSummary"]>

export type ConversationSummarySelectScalar = {
  id?: boolean
  conversationId?: boolean
  seq?: boolean
  fromMsgId?: boolean
  uptoMsgId?: boolean
  content?: boolean
  createdAt?: boolean
}

export type ConversationSummaryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "conversationId" | "seq" | "fromMsgId" | "uptoMsgId" | "content" | "createdAt", ExtArgs["result"]["conversationSummary"]>

export type $ConversationSummaryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "ConversationSummary"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: number
    conversationId: number
    seq: number
    fromMsgId: number
    uptoMsgId: number
    content: string
    createdAt: Date
  }, ExtArgs["result"]["conversationSummary"]>
  composites: {}
}

export type ConversationSummaryGetPayload<S extends boolean | null | undefined | ConversationSummaryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload, S>

export type ConversationSummaryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<ConversationSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConversationSummaryCountAggregateInputType | true
  }

export interface ConversationSummaryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationSummary'], meta: { name: 'ConversationSummary' } }
  findUnique<T extends ConversationSummaryFindUniqueArgs>(args: Prisma.SelectSubset<T, ConversationSummaryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConversationSummaryClient<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findUniqueOrThrow<T extends ConversationSummaryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConversationSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationSummaryClient<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findFirst<T extends ConversationSummaryFindFirstArgs>(args?: Prisma.SelectSubset<T, ConversationSummaryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConversationSummaryClient<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findFirstOrThrow<T extends ConversationSummaryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConversationSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationSummaryClient<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findMany<T extends ConversationSummaryFindManyArgs>(args?: Prisma.SelectSubset<T, ConversationSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  create<T extends ConversationSummaryCreateArgs>(args: Prisma.SelectSubset<T, ConversationSummaryCreateArgs<ExtArgs>>): Prisma.Prisma__ConversationSummaryClient<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  createMany<T extends ConversationSummaryCreateManyArgs>(args?: Prisma.SelectSubset<T, ConversationSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  createManyAndReturn<T extends ConversationSummaryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConversationSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  delete<T extends ConversationSummaryDeleteArgs>(args: Prisma.SelectSubset<T, ConversationSummaryDeleteArgs<ExtArgs>>): Prisma.Prisma__ConversationSummaryClient<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  update<T extends ConversationSummaryUpdateArgs>(args: Prisma.SelectSubset<T, ConversationSummaryUpdateArgs<ExtArgs>>): Prisma.Prisma__ConversationSummaryClient<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  deleteMany<T extends ConversationSummaryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConversationSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateMany<T extends ConversationSummaryUpdateManyArgs>(args: Prisma.SelectSubset<T, ConversationSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateManyAndReturn<T extends ConversationSummaryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConversationSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  upsert<T extends ConversationSummaryUpsertArgs>(args: Prisma.SelectSubset<T, ConversationSummaryUpsertArgs<ExtArgs>>): Prisma.Prisma__ConversationSummaryClient<runtime.Types.Result.GetResult<Prisma.$ConversationSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  count<T extends ConversationSummaryCountArgs>(
    args?: Prisma.Subset<T, ConversationSummaryCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], ConversationSummaryCountAggregateOutputType>
      : number
  >

  aggregate<T extends ConversationSummaryAggregateArgs>(args: Prisma.Subset<T, ConversationSummaryAggregateArgs>): Prisma.PrismaPromise<GetConversationSummaryAggregateType<T>>

  groupBy<
    T extends ConversationSummaryGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: ConversationSummaryGroupByArgs['orderBy'] }
      : { orderBy?: ConversationSummaryGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, ConversationSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: ConversationSummaryFieldRefs;
}

export interface Prisma__ConversationSummaryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface ConversationSummaryFieldRefs {
  readonly id: Prisma.FieldRef<"ConversationSummary", 'Int'>
  readonly conversationId: Prisma.FieldRef<"ConversationSummary", 'Int'>
  readonly seq: Prisma.FieldRef<"ConversationSummary", 'Int'>
  readonly fromMsgId: Prisma.FieldRef<"ConversationSummary", 'Int'>
  readonly uptoMsgId: Prisma.FieldRef<"ConversationSummary", 'Int'>
  readonly content: Prisma.FieldRef<"ConversationSummary", 'String'>
  readonly createdAt: Prisma.FieldRef<"ConversationSummary", 'DateTime'>
}
    

export type ConversationSummaryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelect<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  where: Prisma.ConversationSummaryWhereUniqueInput
}

export type ConversationSummaryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelect<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  where: Prisma.ConversationSummaryWhereUniqueInput
}

export type ConversationSummaryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelect<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  where?: Prisma.ConversationSummaryWhereInput
  orderBy?: Prisma.ConversationSummaryOrderByWithRelationInput | Prisma.ConversationSummaryOrderByWithRelationInput[]
  cursor?: Prisma.ConversationSummaryWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ConversationSummaryScalarFieldEnum | Prisma.ConversationSummaryScalarFieldEnum[]
}

export type ConversationSummaryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelect<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  where?: Prisma.ConversationSummaryWhereInput
  orderBy?: Prisma.ConversationSummaryOrderByWithRelationInput | Prisma.ConversationSummaryOrderByWithRelationInput[]
  cursor?: Prisma.ConversationSummaryWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ConversationSummaryScalarFieldEnum | Prisma.ConversationSummaryScalarFieldEnum[]
}

export type ConversationSummaryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelect<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  where?: Prisma.ConversationSummaryWhereInput
  orderBy?: Prisma.ConversationSummaryOrderByWithRelationInput | Prisma.ConversationSummaryOrderByWithRelationInput[]
  cursor?: Prisma.ConversationSummaryWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ConversationSummaryScalarFieldEnum | Prisma.ConversationSummaryScalarFieldEnum[]
}

export type ConversationSummaryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelect<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.ConversationSummaryCreateInput, Prisma.ConversationSummaryUncheckedCreateInput>
}

export type ConversationSummaryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.ConversationSummaryCreateManyInput | Prisma.ConversationSummaryCreateManyInput[]
  skipDuplicates?: boolean
}

export type ConversationSummaryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  data: Prisma.ConversationSummaryCreateManyInput | Prisma.ConversationSummaryCreateManyInput[]
  skipDuplicates?: boolean
}

export type ConversationSummaryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelect<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.ConversationSummaryUpdateInput, Prisma.ConversationSummaryUncheckedUpdateInput>
  where: Prisma.ConversationSummaryWhereUniqueInput
}

export type ConversationSummaryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.ConversationSummaryUpdateManyMutationInput, Prisma.ConversationSummaryUncheckedUpdateManyInput>
  where?: Prisma.ConversationSummaryWhereInput
  limit?: number
}

export type ConversationSummaryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.ConversationSummaryUpdateManyMutationInput, Prisma.ConversationSummaryUncheckedUpdateManyInput>
  where?: Prisma.ConversationSummaryWhereInput
  limit?: number
}

export type ConversationSummaryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelect<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  where: Prisma.ConversationSummaryWhereUniqueInput
  create: Prisma.XOR<Prisma.ConversationSummaryCreateInput, Prisma.ConversationSummaryUncheckedCreateInput>
  update: Prisma.XOR<Prisma.ConversationSummaryUpdateInput, Prisma.ConversationSummaryUncheckedUpdateInput>
}

export type ConversationSummaryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelect<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
  where: Prisma.ConversationSummaryWhereUniqueInput
}

export type ConversationSummaryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ConversationSummaryWhereInput
  limit?: number
}

export type ConversationSummaryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSummarySelect<ExtArgs> | null
  omit?: Prisma.ConversationSummaryOmit<ExtArgs> | null
}
