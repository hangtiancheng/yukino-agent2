
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

export type ReviewQueueModel = runtime.Types.Result.DefaultSelection<Prisma.$ReviewQueuePayload>

export type AggregateReviewQueue = {
  _count: ReviewQueueCountAggregateOutputType | null
  _avg: ReviewQueueAvgAggregateOutputType | null
  _sum: ReviewQueueSumAggregateOutputType | null
  _min: ReviewQueueMinAggregateOutputType | null
  _max: ReviewQueueMaxAggregateOutputType | null
}

export type ReviewQueueAvgAggregateOutputType = {
  id: number | null
  occurrenceCount: number | null
}

export type ReviewQueueSumAggregateOutputType = {
  id: number | null
  occurrenceCount: number | null
}

export type ReviewQueueMinAggregateOutputType = {
  id: number | null
  normalizedQuestion: string | null
  aiSuggestedAnswer: string | null
  occurrenceCount: number | null
  reviewStatus: string | null
  approvedAnswer: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type ReviewQueueMaxAggregateOutputType = {
  id: number | null
  normalizedQuestion: string | null
  aiSuggestedAnswer: string | null
  occurrenceCount: number | null
  reviewStatus: string | null
  approvedAnswer: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type ReviewQueueCountAggregateOutputType = {
  id: number
  normalizedQuestion: number
  aiSuggestedAnswer: number
  occurrenceCount: number
  reviewStatus: number
  approvedAnswer: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type ReviewQueueAvgAggregateInputType = {
  id?: true
  occurrenceCount?: true
}

export type ReviewQueueSumAggregateInputType = {
  id?: true
  occurrenceCount?: true
}

export type ReviewQueueMinAggregateInputType = {
  id?: true
  normalizedQuestion?: true
  aiSuggestedAnswer?: true
  occurrenceCount?: true
  reviewStatus?: true
  approvedAnswer?: true
  createdAt?: true
  updatedAt?: true
}

export type ReviewQueueMaxAggregateInputType = {
  id?: true
  normalizedQuestion?: true
  aiSuggestedAnswer?: true
  occurrenceCount?: true
  reviewStatus?: true
  approvedAnswer?: true
  createdAt?: true
  updatedAt?: true
}

export type ReviewQueueCountAggregateInputType = {
  id?: true
  normalizedQuestion?: true
  aiSuggestedAnswer?: true
  occurrenceCount?: true
  reviewStatus?: true
  approvedAnswer?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type ReviewQueueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ReviewQueueWhereInput
  orderBy?: Prisma.ReviewQueueOrderByWithRelationInput | Prisma.ReviewQueueOrderByWithRelationInput[]
  cursor?: Prisma.ReviewQueueWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | ReviewQueueCountAggregateInputType
  _avg?: ReviewQueueAvgAggregateInputType
  _sum?: ReviewQueueSumAggregateInputType
  _min?: ReviewQueueMinAggregateInputType
  _max?: ReviewQueueMaxAggregateInputType
}

export type GetReviewQueueAggregateType<T extends ReviewQueueAggregateArgs> = {
      [P in keyof T & keyof AggregateReviewQueue]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateReviewQueue[P]>
    : Prisma.GetScalarType<T[P], AggregateReviewQueue[P]>
}




export type ReviewQueueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ReviewQueueWhereInput
  orderBy?: Prisma.ReviewQueueOrderByWithAggregationInput | Prisma.ReviewQueueOrderByWithAggregationInput[]
  by: Prisma.ReviewQueueScalarFieldEnum[] | Prisma.ReviewQueueScalarFieldEnum
  having?: Prisma.ReviewQueueScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: ReviewQueueCountAggregateInputType | true
  _avg?: ReviewQueueAvgAggregateInputType
  _sum?: ReviewQueueSumAggregateInputType
  _min?: ReviewQueueMinAggregateInputType
  _max?: ReviewQueueMaxAggregateInputType
}

export type ReviewQueueGroupByOutputType = {
  id: number
  normalizedQuestion: string
  aiSuggestedAnswer: string | null
  occurrenceCount: number
  reviewStatus: string
  approvedAnswer: string | null
  createdAt: Date
  updatedAt: Date
  _count: ReviewQueueCountAggregateOutputType | null
  _avg: ReviewQueueAvgAggregateOutputType | null
  _sum: ReviewQueueSumAggregateOutputType | null
  _min: ReviewQueueMinAggregateOutputType | null
  _max: ReviewQueueMaxAggregateOutputType | null
}

export type GetReviewQueueGroupByPayload<T extends ReviewQueueGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<ReviewQueueGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ReviewQueueGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], ReviewQueueGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], ReviewQueueGroupByOutputType[P]>
      }
    >
  >



export type ReviewQueueWhereInput = {
  AND?: Prisma.ReviewQueueWhereInput | Prisma.ReviewQueueWhereInput[]
  OR?: Prisma.ReviewQueueWhereInput[]
  NOT?: Prisma.ReviewQueueWhereInput | Prisma.ReviewQueueWhereInput[]
  id?: Prisma.IntFilter<"ReviewQueue"> | number
  normalizedQuestion?: Prisma.StringFilter<"ReviewQueue"> | string
  aiSuggestedAnswer?: Prisma.StringNullableFilter<"ReviewQueue"> | string | null
  occurrenceCount?: Prisma.IntFilter<"ReviewQueue"> | number
  reviewStatus?: Prisma.StringFilter<"ReviewQueue"> | string
  approvedAnswer?: Prisma.StringNullableFilter<"ReviewQueue"> | string | null
  createdAt?: Prisma.DateTimeFilter<"ReviewQueue"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"ReviewQueue"> | Date | string
  lowConfidenceQuestions?: Prisma.LowConfidenceQuestionListRelationFilter
}

export type ReviewQueueOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  normalizedQuestion?: Prisma.SortOrder
  aiSuggestedAnswer?: Prisma.SortOrderInput | Prisma.SortOrder
  occurrenceCount?: Prisma.SortOrder
  reviewStatus?: Prisma.SortOrder
  approvedAnswer?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  lowConfidenceQuestions?: Prisma.LowConfidenceQuestionOrderByRelationAggregateInput
}

export type ReviewQueueWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: Prisma.ReviewQueueWhereInput | Prisma.ReviewQueueWhereInput[]
  OR?: Prisma.ReviewQueueWhereInput[]
  NOT?: Prisma.ReviewQueueWhereInput | Prisma.ReviewQueueWhereInput[]
  normalizedQuestion?: Prisma.StringFilter<"ReviewQueue"> | string
  aiSuggestedAnswer?: Prisma.StringNullableFilter<"ReviewQueue"> | string | null
  occurrenceCount?: Prisma.IntFilter<"ReviewQueue"> | number
  reviewStatus?: Prisma.StringFilter<"ReviewQueue"> | string
  approvedAnswer?: Prisma.StringNullableFilter<"ReviewQueue"> | string | null
  createdAt?: Prisma.DateTimeFilter<"ReviewQueue"> | Date | string
  updatedAt?: Prisma.DateTimeFilter<"ReviewQueue"> | Date | string
  lowConfidenceQuestions?: Prisma.LowConfidenceQuestionListRelationFilter
}, "id">

export type ReviewQueueOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  normalizedQuestion?: Prisma.SortOrder
  aiSuggestedAnswer?: Prisma.SortOrderInput | Prisma.SortOrder
  occurrenceCount?: Prisma.SortOrder
  reviewStatus?: Prisma.SortOrder
  approvedAnswer?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
  _count?: Prisma.ReviewQueueCountOrderByAggregateInput
  _avg?: Prisma.ReviewQueueAvgOrderByAggregateInput
  _max?: Prisma.ReviewQueueMaxOrderByAggregateInput
  _min?: Prisma.ReviewQueueMinOrderByAggregateInput
  _sum?: Prisma.ReviewQueueSumOrderByAggregateInput
}

export type ReviewQueueScalarWhereWithAggregatesInput = {
  AND?: Prisma.ReviewQueueScalarWhereWithAggregatesInput | Prisma.ReviewQueueScalarWhereWithAggregatesInput[]
  OR?: Prisma.ReviewQueueScalarWhereWithAggregatesInput[]
  NOT?: Prisma.ReviewQueueScalarWhereWithAggregatesInput | Prisma.ReviewQueueScalarWhereWithAggregatesInput[]
  id?: Prisma.IntWithAggregatesFilter<"ReviewQueue"> | number
  normalizedQuestion?: Prisma.StringWithAggregatesFilter<"ReviewQueue"> | string
  aiSuggestedAnswer?: Prisma.StringNullableWithAggregatesFilter<"ReviewQueue"> | string | null
  occurrenceCount?: Prisma.IntWithAggregatesFilter<"ReviewQueue"> | number
  reviewStatus?: Prisma.StringWithAggregatesFilter<"ReviewQueue"> | string
  approvedAnswer?: Prisma.StringNullableWithAggregatesFilter<"ReviewQueue"> | string | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"ReviewQueue"> | Date | string
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ReviewQueue"> | Date | string
}

export type ReviewQueueCreateInput = {
  normalizedQuestion: string
  aiSuggestedAnswer?: string | null
  occurrenceCount?: number
  reviewStatus?: string
  approvedAnswer?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  lowConfidenceQuestions?: Prisma.LowConfidenceQuestionCreateNestedManyWithoutMatchedReviewInput
}

export type ReviewQueueUncheckedCreateInput = {
  id?: number
  normalizedQuestion: string
  aiSuggestedAnswer?: string | null
  occurrenceCount?: number
  reviewStatus?: string
  approvedAnswer?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
  lowConfidenceQuestions?: Prisma.LowConfidenceQuestionUncheckedCreateNestedManyWithoutMatchedReviewInput
}

export type ReviewQueueUpdateInput = {
  normalizedQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  aiSuggestedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  occurrenceCount?: Prisma.IntFieldUpdateOperationsInput | number
  reviewStatus?: Prisma.StringFieldUpdateOperationsInput | string
  approvedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lowConfidenceQuestions?: Prisma.LowConfidenceQuestionUpdateManyWithoutMatchedReviewNestedInput
}

export type ReviewQueueUncheckedUpdateInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  normalizedQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  aiSuggestedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  occurrenceCount?: Prisma.IntFieldUpdateOperationsInput | number
  reviewStatus?: Prisma.StringFieldUpdateOperationsInput | string
  approvedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  lowConfidenceQuestions?: Prisma.LowConfidenceQuestionUncheckedUpdateManyWithoutMatchedReviewNestedInput
}

export type ReviewQueueCreateManyInput = {
  id?: number
  normalizedQuestion: string
  aiSuggestedAnswer?: string | null
  occurrenceCount?: number
  reviewStatus?: string
  approvedAnswer?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ReviewQueueUpdateManyMutationInput = {
  normalizedQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  aiSuggestedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  occurrenceCount?: Prisma.IntFieldUpdateOperationsInput | number
  reviewStatus?: Prisma.StringFieldUpdateOperationsInput | string
  approvedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ReviewQueueUncheckedUpdateManyInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  normalizedQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  aiSuggestedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  occurrenceCount?: Prisma.IntFieldUpdateOperationsInput | number
  reviewStatus?: Prisma.StringFieldUpdateOperationsInput | string
  approvedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ReviewQueueNullableScalarRelationFilter = {
  is?: Prisma.ReviewQueueWhereInput | null
  isNot?: Prisma.ReviewQueueWhereInput | null
}

export type ReviewQueueCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  normalizedQuestion?: Prisma.SortOrder
  aiSuggestedAnswer?: Prisma.SortOrder
  occurrenceCount?: Prisma.SortOrder
  reviewStatus?: Prisma.SortOrder
  approvedAnswer?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ReviewQueueAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
  occurrenceCount?: Prisma.SortOrder
}

export type ReviewQueueMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  normalizedQuestion?: Prisma.SortOrder
  aiSuggestedAnswer?: Prisma.SortOrder
  occurrenceCount?: Prisma.SortOrder
  reviewStatus?: Prisma.SortOrder
  approvedAnswer?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ReviewQueueMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  normalizedQuestion?: Prisma.SortOrder
  aiSuggestedAnswer?: Prisma.SortOrder
  occurrenceCount?: Prisma.SortOrder
  reviewStatus?: Prisma.SortOrder
  approvedAnswer?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  updatedAt?: Prisma.SortOrder
}

export type ReviewQueueSumOrderByAggregateInput = {
  id?: Prisma.SortOrder
  occurrenceCount?: Prisma.SortOrder
}

export type ReviewQueueCreateNestedOneWithoutLowConfidenceQuestionsInput = {
  create?: Prisma.XOR<Prisma.ReviewQueueCreateWithoutLowConfidenceQuestionsInput, Prisma.ReviewQueueUncheckedCreateWithoutLowConfidenceQuestionsInput>
  connectOrCreate?: Prisma.ReviewQueueCreateOrConnectWithoutLowConfidenceQuestionsInput
  connect?: Prisma.ReviewQueueWhereUniqueInput
}

export type ReviewQueueUpdateOneWithoutLowConfidenceQuestionsNestedInput = {
  create?: Prisma.XOR<Prisma.ReviewQueueCreateWithoutLowConfidenceQuestionsInput, Prisma.ReviewQueueUncheckedCreateWithoutLowConfidenceQuestionsInput>
  connectOrCreate?: Prisma.ReviewQueueCreateOrConnectWithoutLowConfidenceQuestionsInput
  upsert?: Prisma.ReviewQueueUpsertWithoutLowConfidenceQuestionsInput
  disconnect?: Prisma.ReviewQueueWhereInput | boolean
  delete?: Prisma.ReviewQueueWhereInput | boolean
  connect?: Prisma.ReviewQueueWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.ReviewQueueUpdateToOneWithWhereWithoutLowConfidenceQuestionsInput, Prisma.ReviewQueueUpdateWithoutLowConfidenceQuestionsInput>, Prisma.ReviewQueueUncheckedUpdateWithoutLowConfidenceQuestionsInput>
}

export type ReviewQueueCreateWithoutLowConfidenceQuestionsInput = {
  normalizedQuestion: string
  aiSuggestedAnswer?: string | null
  occurrenceCount?: number
  reviewStatus?: string
  approvedAnswer?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ReviewQueueUncheckedCreateWithoutLowConfidenceQuestionsInput = {
  id?: number
  normalizedQuestion: string
  aiSuggestedAnswer?: string | null
  occurrenceCount?: number
  reviewStatus?: string
  approvedAnswer?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ReviewQueueCreateOrConnectWithoutLowConfidenceQuestionsInput = {
  where: Prisma.ReviewQueueWhereUniqueInput
  create: Prisma.XOR<Prisma.ReviewQueueCreateWithoutLowConfidenceQuestionsInput, Prisma.ReviewQueueUncheckedCreateWithoutLowConfidenceQuestionsInput>
}

export type ReviewQueueUpsertWithoutLowConfidenceQuestionsInput = {
  update: Prisma.XOR<Prisma.ReviewQueueUpdateWithoutLowConfidenceQuestionsInput, Prisma.ReviewQueueUncheckedUpdateWithoutLowConfidenceQuestionsInput>
  create: Prisma.XOR<Prisma.ReviewQueueCreateWithoutLowConfidenceQuestionsInput, Prisma.ReviewQueueUncheckedCreateWithoutLowConfidenceQuestionsInput>
  where?: Prisma.ReviewQueueWhereInput
}

export type ReviewQueueUpdateToOneWithWhereWithoutLowConfidenceQuestionsInput = {
  where?: Prisma.ReviewQueueWhereInput
  data: Prisma.XOR<Prisma.ReviewQueueUpdateWithoutLowConfidenceQuestionsInput, Prisma.ReviewQueueUncheckedUpdateWithoutLowConfidenceQuestionsInput>
}

export type ReviewQueueUpdateWithoutLowConfidenceQuestionsInput = {
  normalizedQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  aiSuggestedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  occurrenceCount?: Prisma.IntFieldUpdateOperationsInput | number
  reviewStatus?: Prisma.StringFieldUpdateOperationsInput | string
  approvedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ReviewQueueUncheckedUpdateWithoutLowConfidenceQuestionsInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  normalizedQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  aiSuggestedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  occurrenceCount?: Prisma.IntFieldUpdateOperationsInput | number
  reviewStatus?: Prisma.StringFieldUpdateOperationsInput | string
  approvedAnswer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type ReviewQueueCountOutputType = {
  lowConfidenceQuestions: number
}

export type ReviewQueueCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  lowConfidenceQuestions?: boolean | ReviewQueueCountOutputTypeCountLowConfidenceQuestionsArgs
}

export type ReviewQueueCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueCountOutputTypeSelect<ExtArgs> | null
}

export type ReviewQueueCountOutputTypeCountLowConfidenceQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.LowConfidenceQuestionWhereInput
}


export type ReviewQueueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  normalizedQuestion?: boolean
  aiSuggestedAnswer?: boolean
  occurrenceCount?: boolean
  reviewStatus?: boolean
  approvedAnswer?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  lowConfidenceQuestions?: boolean | Prisma.ReviewQueue$lowConfidenceQuestionsArgs<ExtArgs>
  _count?: boolean | Prisma.ReviewQueueCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["reviewQueue"]>

export type ReviewQueueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  normalizedQuestion?: boolean
  aiSuggestedAnswer?: boolean
  occurrenceCount?: boolean
  reviewStatus?: boolean
  approvedAnswer?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["reviewQueue"]>

export type ReviewQueueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  normalizedQuestion?: boolean
  aiSuggestedAnswer?: boolean
  occurrenceCount?: boolean
  reviewStatus?: boolean
  approvedAnswer?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}, ExtArgs["result"]["reviewQueue"]>

export type ReviewQueueSelectScalar = {
  id?: boolean
  normalizedQuestion?: boolean
  aiSuggestedAnswer?: boolean
  occurrenceCount?: boolean
  reviewStatus?: boolean
  approvedAnswer?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type ReviewQueueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "normalizedQuestion" | "aiSuggestedAnswer" | "occurrenceCount" | "reviewStatus" | "approvedAnswer" | "createdAt" | "updatedAt", ExtArgs["result"]["reviewQueue"]>
export type ReviewQueueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  lowConfidenceQuestions?: boolean | Prisma.ReviewQueue$lowConfidenceQuestionsArgs<ExtArgs>
  _count?: boolean | Prisma.ReviewQueueCountOutputTypeDefaultArgs<ExtArgs>
}
export type ReviewQueueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type ReviewQueueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $ReviewQueuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "ReviewQueue"
  objects: {
    lowConfidenceQuestions: Prisma.$LowConfidenceQuestionPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: number
    normalizedQuestion: string
    aiSuggestedAnswer: string | null
    occurrenceCount: number
    reviewStatus: string
    approvedAnswer: string | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["reviewQueue"]>
  composites: {}
}

export type ReviewQueueGetPayload<S extends boolean | null | undefined | ReviewQueueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload, S>

export type ReviewQueueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<ReviewQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReviewQueueCountAggregateInputType | true
  }

export interface ReviewQueueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewQueue'], meta: { name: 'ReviewQueue' } }
  findUnique<T extends ReviewQueueFindUniqueArgs>(args: Prisma.SelectSubset<T, ReviewQueueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReviewQueueClient<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findUniqueOrThrow<T extends ReviewQueueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReviewQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReviewQueueClient<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findFirst<T extends ReviewQueueFindFirstArgs>(args?: Prisma.SelectSubset<T, ReviewQueueFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReviewQueueClient<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findFirstOrThrow<T extends ReviewQueueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReviewQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReviewQueueClient<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findMany<T extends ReviewQueueFindManyArgs>(args?: Prisma.SelectSubset<T, ReviewQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  create<T extends ReviewQueueCreateArgs>(args: Prisma.SelectSubset<T, ReviewQueueCreateArgs<ExtArgs>>): Prisma.Prisma__ReviewQueueClient<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  createMany<T extends ReviewQueueCreateManyArgs>(args?: Prisma.SelectSubset<T, ReviewQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  createManyAndReturn<T extends ReviewQueueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReviewQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  delete<T extends ReviewQueueDeleteArgs>(args: Prisma.SelectSubset<T, ReviewQueueDeleteArgs<ExtArgs>>): Prisma.Prisma__ReviewQueueClient<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  update<T extends ReviewQueueUpdateArgs>(args: Prisma.SelectSubset<T, ReviewQueueUpdateArgs<ExtArgs>>): Prisma.Prisma__ReviewQueueClient<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  deleteMany<T extends ReviewQueueDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReviewQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateMany<T extends ReviewQueueUpdateManyArgs>(args: Prisma.SelectSubset<T, ReviewQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateManyAndReturn<T extends ReviewQueueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReviewQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  upsert<T extends ReviewQueueUpsertArgs>(args: Prisma.SelectSubset<T, ReviewQueueUpsertArgs<ExtArgs>>): Prisma.Prisma__ReviewQueueClient<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  count<T extends ReviewQueueCountArgs>(
    args?: Prisma.Subset<T, ReviewQueueCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], ReviewQueueCountAggregateOutputType>
      : number
  >

  aggregate<T extends ReviewQueueAggregateArgs>(args: Prisma.Subset<T, ReviewQueueAggregateArgs>): Prisma.PrismaPromise<GetReviewQueueAggregateType<T>>

  groupBy<
    T extends ReviewQueueGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: ReviewQueueGroupByArgs['orderBy'] }
      : { orderBy?: ReviewQueueGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, ReviewQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: ReviewQueueFieldRefs;
}

export interface Prisma__ReviewQueueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  lowConfidenceQuestions<T extends Prisma.ReviewQueue$lowConfidenceQuestionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReviewQueue$lowConfidenceQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface ReviewQueueFieldRefs {
  readonly id: Prisma.FieldRef<"ReviewQueue", 'Int'>
  readonly normalizedQuestion: Prisma.FieldRef<"ReviewQueue", 'String'>
  readonly aiSuggestedAnswer: Prisma.FieldRef<"ReviewQueue", 'String'>
  readonly occurrenceCount: Prisma.FieldRef<"ReviewQueue", 'Int'>
  readonly reviewStatus: Prisma.FieldRef<"ReviewQueue", 'String'>
  readonly approvedAnswer: Prisma.FieldRef<"ReviewQueue", 'String'>
  readonly createdAt: Prisma.FieldRef<"ReviewQueue", 'DateTime'>
  readonly updatedAt: Prisma.FieldRef<"ReviewQueue", 'DateTime'>
}
    

export type ReviewQueueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
  where: Prisma.ReviewQueueWhereUniqueInput
}

export type ReviewQueueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
  where: Prisma.ReviewQueueWhereUniqueInput
}

export type ReviewQueueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
  where?: Prisma.ReviewQueueWhereInput
  orderBy?: Prisma.ReviewQueueOrderByWithRelationInput | Prisma.ReviewQueueOrderByWithRelationInput[]
  cursor?: Prisma.ReviewQueueWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ReviewQueueScalarFieldEnum | Prisma.ReviewQueueScalarFieldEnum[]
}

export type ReviewQueueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
  where?: Prisma.ReviewQueueWhereInput
  orderBy?: Prisma.ReviewQueueOrderByWithRelationInput | Prisma.ReviewQueueOrderByWithRelationInput[]
  cursor?: Prisma.ReviewQueueWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ReviewQueueScalarFieldEnum | Prisma.ReviewQueueScalarFieldEnum[]
}

export type ReviewQueueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
  where?: Prisma.ReviewQueueWhereInput
  orderBy?: Prisma.ReviewQueueOrderByWithRelationInput | Prisma.ReviewQueueOrderByWithRelationInput[]
  cursor?: Prisma.ReviewQueueWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ReviewQueueScalarFieldEnum | Prisma.ReviewQueueScalarFieldEnum[]
}

export type ReviewQueueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
  data: Prisma.XOR<Prisma.ReviewQueueCreateInput, Prisma.ReviewQueueUncheckedCreateInput>
}

export type ReviewQueueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.ReviewQueueCreateManyInput | Prisma.ReviewQueueCreateManyInput[]
  skipDuplicates?: boolean
}

export type ReviewQueueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  data: Prisma.ReviewQueueCreateManyInput | Prisma.ReviewQueueCreateManyInput[]
  skipDuplicates?: boolean
}

export type ReviewQueueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
  data: Prisma.XOR<Prisma.ReviewQueueUpdateInput, Prisma.ReviewQueueUncheckedUpdateInput>
  where: Prisma.ReviewQueueWhereUniqueInput
}

export type ReviewQueueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.ReviewQueueUpdateManyMutationInput, Prisma.ReviewQueueUncheckedUpdateManyInput>
  where?: Prisma.ReviewQueueWhereInput
  limit?: number
}

export type ReviewQueueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.ReviewQueueUpdateManyMutationInput, Prisma.ReviewQueueUncheckedUpdateManyInput>
  where?: Prisma.ReviewQueueWhereInput
  limit?: number
}

export type ReviewQueueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
  where: Prisma.ReviewQueueWhereUniqueInput
  create: Prisma.XOR<Prisma.ReviewQueueCreateInput, Prisma.ReviewQueueUncheckedCreateInput>
  update: Prisma.XOR<Prisma.ReviewQueueUpdateInput, Prisma.ReviewQueueUncheckedUpdateInput>
}

export type ReviewQueueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
  where: Prisma.ReviewQueueWhereUniqueInput
}

export type ReviewQueueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ReviewQueueWhereInput
  limit?: number
}

export type ReviewQueue$lowConfidenceQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.LowConfidenceQuestionSelect<ExtArgs> | null
  omit?: Prisma.LowConfidenceQuestionOmit<ExtArgs> | null
  include?: Prisma.LowConfidenceQuestionInclude<ExtArgs> | null
  where?: Prisma.LowConfidenceQuestionWhereInput
  orderBy?: Prisma.LowConfidenceQuestionOrderByWithRelationInput | Prisma.LowConfidenceQuestionOrderByWithRelationInput[]
  cursor?: Prisma.LowConfidenceQuestionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.LowConfidenceQuestionScalarFieldEnum | Prisma.LowConfidenceQuestionScalarFieldEnum[]
}

export type ReviewQueueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
}
