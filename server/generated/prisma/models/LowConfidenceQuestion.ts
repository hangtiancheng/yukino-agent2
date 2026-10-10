
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

export type LowConfidenceQuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$LowConfidenceQuestionPayload>

export type AggregateLowConfidenceQuestion = {
  _count: LowConfidenceQuestionCountAggregateOutputType | null
  _avg: LowConfidenceQuestionAvgAggregateOutputType | null
  _sum: LowConfidenceQuestionSumAggregateOutputType | null
  _min: LowConfidenceQuestionMinAggregateOutputType | null
  _max: LowConfidenceQuestionMaxAggregateOutputType | null
}

export type LowConfidenceQuestionAvgAggregateOutputType = {
  id: number | null
  conversationId: number | null
  matchedReviewId: number | null
}

export type LowConfidenceQuestionSumAggregateOutputType = {
  id: number | null
  conversationId: number | null
  matchedReviewId: number | null
}

export type LowConfidenceQuestionMinAggregateOutputType = {
  id: number | null
  conversationId: number | null
  rawQuestion: string | null
  source: string | null
  reason: string | null
  retrievedChunks: string | null
  matchedReviewId: number | null
  createdAt: Date | null
}

export type LowConfidenceQuestionMaxAggregateOutputType = {
  id: number | null
  conversationId: number | null
  rawQuestion: string | null
  source: string | null
  reason: string | null
  retrievedChunks: string | null
  matchedReviewId: number | null
  createdAt: Date | null
}

export type LowConfidenceQuestionCountAggregateOutputType = {
  id: number
  conversationId: number
  rawQuestion: number
  source: number
  reason: number
  retrievedChunks: number
  matchedReviewId: number
  createdAt: number
  _all: number
}


export type LowConfidenceQuestionAvgAggregateInputType = {
  id?: true
  conversationId?: true
  matchedReviewId?: true
}

export type LowConfidenceQuestionSumAggregateInputType = {
  id?: true
  conversationId?: true
  matchedReviewId?: true
}

export type LowConfidenceQuestionMinAggregateInputType = {
  id?: true
  conversationId?: true
  rawQuestion?: true
  source?: true
  reason?: true
  retrievedChunks?: true
  matchedReviewId?: true
  createdAt?: true
}

export type LowConfidenceQuestionMaxAggregateInputType = {
  id?: true
  conversationId?: true
  rawQuestion?: true
  source?: true
  reason?: true
  retrievedChunks?: true
  matchedReviewId?: true
  createdAt?: true
}

export type LowConfidenceQuestionCountAggregateInputType = {
  id?: true
  conversationId?: true
  rawQuestion?: true
  source?: true
  reason?: true
  retrievedChunks?: true
  matchedReviewId?: true
  createdAt?: true
  _all?: true
}

export type LowConfidenceQuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.LowConfidenceQuestionWhereInput
  orderBy?: Prisma.LowConfidenceQuestionOrderByWithRelationInput | Prisma.LowConfidenceQuestionOrderByWithRelationInput[]
  cursor?: Prisma.LowConfidenceQuestionWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | LowConfidenceQuestionCountAggregateInputType
  _avg?: LowConfidenceQuestionAvgAggregateInputType
  _sum?: LowConfidenceQuestionSumAggregateInputType
  _min?: LowConfidenceQuestionMinAggregateInputType
  _max?: LowConfidenceQuestionMaxAggregateInputType
}

export type GetLowConfidenceQuestionAggregateType<T extends LowConfidenceQuestionAggregateArgs> = {
      [P in keyof T & keyof AggregateLowConfidenceQuestion]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateLowConfidenceQuestion[P]>
    : Prisma.GetScalarType<T[P], AggregateLowConfidenceQuestion[P]>
}




export type LowConfidenceQuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.LowConfidenceQuestionWhereInput
  orderBy?: Prisma.LowConfidenceQuestionOrderByWithAggregationInput | Prisma.LowConfidenceQuestionOrderByWithAggregationInput[]
  by: Prisma.LowConfidenceQuestionScalarFieldEnum[] | Prisma.LowConfidenceQuestionScalarFieldEnum
  having?: Prisma.LowConfidenceQuestionScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: LowConfidenceQuestionCountAggregateInputType | true
  _avg?: LowConfidenceQuestionAvgAggregateInputType
  _sum?: LowConfidenceQuestionSumAggregateInputType
  _min?: LowConfidenceQuestionMinAggregateInputType
  _max?: LowConfidenceQuestionMaxAggregateInputType
}

export type LowConfidenceQuestionGroupByOutputType = {
  id: number
  conversationId: number | null
  rawQuestion: string
  source: string
  reason: string | null
  retrievedChunks: string | null
  matchedReviewId: number | null
  createdAt: Date
  _count: LowConfidenceQuestionCountAggregateOutputType | null
  _avg: LowConfidenceQuestionAvgAggregateOutputType | null
  _sum: LowConfidenceQuestionSumAggregateOutputType | null
  _min: LowConfidenceQuestionMinAggregateOutputType | null
  _max: LowConfidenceQuestionMaxAggregateOutputType | null
}

export type GetLowConfidenceQuestionGroupByPayload<T extends LowConfidenceQuestionGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<LowConfidenceQuestionGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof LowConfidenceQuestionGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], LowConfidenceQuestionGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], LowConfidenceQuestionGroupByOutputType[P]>
      }
    >
  >



export type LowConfidenceQuestionWhereInput = {
  AND?: Prisma.LowConfidenceQuestionWhereInput | Prisma.LowConfidenceQuestionWhereInput[]
  OR?: Prisma.LowConfidenceQuestionWhereInput[]
  NOT?: Prisma.LowConfidenceQuestionWhereInput | Prisma.LowConfidenceQuestionWhereInput[]
  id?: Prisma.IntFilter<"LowConfidenceQuestion"> | number
  conversationId?: Prisma.IntNullableFilter<"LowConfidenceQuestion"> | number | null
  rawQuestion?: Prisma.StringFilter<"LowConfidenceQuestion"> | string
  source?: Prisma.StringFilter<"LowConfidenceQuestion"> | string
  reason?: Prisma.StringNullableFilter<"LowConfidenceQuestion"> | string | null
  retrievedChunks?: Prisma.StringNullableFilter<"LowConfidenceQuestion"> | string | null
  matchedReviewId?: Prisma.IntNullableFilter<"LowConfidenceQuestion"> | number | null
  createdAt?: Prisma.DateTimeFilter<"LowConfidenceQuestion"> | Date | string
  conversation?: Prisma.XOR<Prisma.ConversationNullableScalarRelationFilter, Prisma.ConversationWhereInput> | null
  matchedReview?: Prisma.XOR<Prisma.ReviewQueueNullableScalarRelationFilter, Prisma.ReviewQueueWhereInput> | null
}

export type LowConfidenceQuestionOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrderInput | Prisma.SortOrder
  rawQuestion?: Prisma.SortOrder
  source?: Prisma.SortOrder
  reason?: Prisma.SortOrderInput | Prisma.SortOrder
  retrievedChunks?: Prisma.SortOrderInput | Prisma.SortOrder
  matchedReviewId?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  conversation?: Prisma.ConversationOrderByWithRelationInput
  matchedReview?: Prisma.ReviewQueueOrderByWithRelationInput
}

export type LowConfidenceQuestionWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: Prisma.LowConfidenceQuestionWhereInput | Prisma.LowConfidenceQuestionWhereInput[]
  OR?: Prisma.LowConfidenceQuestionWhereInput[]
  NOT?: Prisma.LowConfidenceQuestionWhereInput | Prisma.LowConfidenceQuestionWhereInput[]
  conversationId?: Prisma.IntNullableFilter<"LowConfidenceQuestion"> | number | null
  rawQuestion?: Prisma.StringFilter<"LowConfidenceQuestion"> | string
  source?: Prisma.StringFilter<"LowConfidenceQuestion"> | string
  reason?: Prisma.StringNullableFilter<"LowConfidenceQuestion"> | string | null
  retrievedChunks?: Prisma.StringNullableFilter<"LowConfidenceQuestion"> | string | null
  matchedReviewId?: Prisma.IntNullableFilter<"LowConfidenceQuestion"> | number | null
  createdAt?: Prisma.DateTimeFilter<"LowConfidenceQuestion"> | Date | string
  conversation?: Prisma.XOR<Prisma.ConversationNullableScalarRelationFilter, Prisma.ConversationWhereInput> | null
  matchedReview?: Prisma.XOR<Prisma.ReviewQueueNullableScalarRelationFilter, Prisma.ReviewQueueWhereInput> | null
}, "id">

export type LowConfidenceQuestionOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrderInput | Prisma.SortOrder
  rawQuestion?: Prisma.SortOrder
  source?: Prisma.SortOrder
  reason?: Prisma.SortOrderInput | Prisma.SortOrder
  retrievedChunks?: Prisma.SortOrderInput | Prisma.SortOrder
  matchedReviewId?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.LowConfidenceQuestionCountOrderByAggregateInput
  _avg?: Prisma.LowConfidenceQuestionAvgOrderByAggregateInput
  _max?: Prisma.LowConfidenceQuestionMaxOrderByAggregateInput
  _min?: Prisma.LowConfidenceQuestionMinOrderByAggregateInput
  _sum?: Prisma.LowConfidenceQuestionSumOrderByAggregateInput
}

export type LowConfidenceQuestionScalarWhereWithAggregatesInput = {
  AND?: Prisma.LowConfidenceQuestionScalarWhereWithAggregatesInput | Prisma.LowConfidenceQuestionScalarWhereWithAggregatesInput[]
  OR?: Prisma.LowConfidenceQuestionScalarWhereWithAggregatesInput[]
  NOT?: Prisma.LowConfidenceQuestionScalarWhereWithAggregatesInput | Prisma.LowConfidenceQuestionScalarWhereWithAggregatesInput[]
  id?: Prisma.IntWithAggregatesFilter<"LowConfidenceQuestion"> | number
  conversationId?: Prisma.IntNullableWithAggregatesFilter<"LowConfidenceQuestion"> | number | null
  rawQuestion?: Prisma.StringWithAggregatesFilter<"LowConfidenceQuestion"> | string
  source?: Prisma.StringWithAggregatesFilter<"LowConfidenceQuestion"> | string
  reason?: Prisma.StringNullableWithAggregatesFilter<"LowConfidenceQuestion"> | string | null
  retrievedChunks?: Prisma.StringNullableWithAggregatesFilter<"LowConfidenceQuestion"> | string | null
  matchedReviewId?: Prisma.IntNullableWithAggregatesFilter<"LowConfidenceQuestion"> | number | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"LowConfidenceQuestion"> | Date | string
}

export type LowConfidenceQuestionCreateInput = {
  rawQuestion: string
  source: string
  reason?: string | null
  retrievedChunks?: string | null
  createdAt?: Date | string
  conversation?: Prisma.ConversationCreateNestedOneWithoutLowConfidenceQuestionsInput
  matchedReview?: Prisma.ReviewQueueCreateNestedOneWithoutLowConfidenceQuestionsInput
}

export type LowConfidenceQuestionUncheckedCreateInput = {
  id?: number
  conversationId?: number | null
  rawQuestion: string
  source: string
  reason?: string | null
  retrievedChunks?: string | null
  matchedReviewId?: number | null
  createdAt?: Date | string
}

export type LowConfidenceQuestionUpdateInput = {
  rawQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  source?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retrievedChunks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  conversation?: Prisma.ConversationUpdateOneWithoutLowConfidenceQuestionsNestedInput
  matchedReview?: Prisma.ReviewQueueUpdateOneWithoutLowConfidenceQuestionsNestedInput
}

export type LowConfidenceQuestionUncheckedUpdateInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  conversationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  rawQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  source?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retrievedChunks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  matchedReviewId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type LowConfidenceQuestionCreateManyInput = {
  id?: number
  conversationId?: number | null
  rawQuestion: string
  source: string
  reason?: string | null
  retrievedChunks?: string | null
  matchedReviewId?: number | null
  createdAt?: Date | string
}

export type LowConfidenceQuestionUpdateManyMutationInput = {
  rawQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  source?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retrievedChunks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type LowConfidenceQuestionUncheckedUpdateManyInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  conversationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  rawQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  source?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retrievedChunks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  matchedReviewId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type LowConfidenceQuestionListRelationFilter = {
  every?: Prisma.LowConfidenceQuestionWhereInput
  some?: Prisma.LowConfidenceQuestionWhereInput
  none?: Prisma.LowConfidenceQuestionWhereInput
}

export type LowConfidenceQuestionOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type LowConfidenceQuestionCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  rawQuestion?: Prisma.SortOrder
  source?: Prisma.SortOrder
  reason?: Prisma.SortOrder
  retrievedChunks?: Prisma.SortOrder
  matchedReviewId?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type LowConfidenceQuestionAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  matchedReviewId?: Prisma.SortOrder
}

export type LowConfidenceQuestionMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  rawQuestion?: Prisma.SortOrder
  source?: Prisma.SortOrder
  reason?: Prisma.SortOrder
  retrievedChunks?: Prisma.SortOrder
  matchedReviewId?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type LowConfidenceQuestionMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  rawQuestion?: Prisma.SortOrder
  source?: Prisma.SortOrder
  reason?: Prisma.SortOrder
  retrievedChunks?: Prisma.SortOrder
  matchedReviewId?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type LowConfidenceQuestionSumOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  matchedReviewId?: Prisma.SortOrder
}

export type LowConfidenceQuestionCreateNestedManyWithoutConversationInput = {
  create?: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutConversationInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutConversationInput> | Prisma.LowConfidenceQuestionCreateWithoutConversationInput[] | Prisma.LowConfidenceQuestionUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.LowConfidenceQuestionCreateOrConnectWithoutConversationInput | Prisma.LowConfidenceQuestionCreateOrConnectWithoutConversationInput[]
  createMany?: Prisma.LowConfidenceQuestionCreateManyConversationInputEnvelope
  connect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
}

export type LowConfidenceQuestionUncheckedCreateNestedManyWithoutConversationInput = {
  create?: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutConversationInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutConversationInput> | Prisma.LowConfidenceQuestionCreateWithoutConversationInput[] | Prisma.LowConfidenceQuestionUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.LowConfidenceQuestionCreateOrConnectWithoutConversationInput | Prisma.LowConfidenceQuestionCreateOrConnectWithoutConversationInput[]
  createMany?: Prisma.LowConfidenceQuestionCreateManyConversationInputEnvelope
  connect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
}

export type LowConfidenceQuestionUpdateManyWithoutConversationNestedInput = {
  create?: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutConversationInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutConversationInput> | Prisma.LowConfidenceQuestionCreateWithoutConversationInput[] | Prisma.LowConfidenceQuestionUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.LowConfidenceQuestionCreateOrConnectWithoutConversationInput | Prisma.LowConfidenceQuestionCreateOrConnectWithoutConversationInput[]
  upsert?: Prisma.LowConfidenceQuestionUpsertWithWhereUniqueWithoutConversationInput | Prisma.LowConfidenceQuestionUpsertWithWhereUniqueWithoutConversationInput[]
  createMany?: Prisma.LowConfidenceQuestionCreateManyConversationInputEnvelope
  set?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  disconnect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  delete?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  connect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  update?: Prisma.LowConfidenceQuestionUpdateWithWhereUniqueWithoutConversationInput | Prisma.LowConfidenceQuestionUpdateWithWhereUniqueWithoutConversationInput[]
  updateMany?: Prisma.LowConfidenceQuestionUpdateManyWithWhereWithoutConversationInput | Prisma.LowConfidenceQuestionUpdateManyWithWhereWithoutConversationInput[]
  deleteMany?: Prisma.LowConfidenceQuestionScalarWhereInput | Prisma.LowConfidenceQuestionScalarWhereInput[]
}

export type LowConfidenceQuestionUncheckedUpdateManyWithoutConversationNestedInput = {
  create?: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutConversationInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutConversationInput> | Prisma.LowConfidenceQuestionCreateWithoutConversationInput[] | Prisma.LowConfidenceQuestionUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.LowConfidenceQuestionCreateOrConnectWithoutConversationInput | Prisma.LowConfidenceQuestionCreateOrConnectWithoutConversationInput[]
  upsert?: Prisma.LowConfidenceQuestionUpsertWithWhereUniqueWithoutConversationInput | Prisma.LowConfidenceQuestionUpsertWithWhereUniqueWithoutConversationInput[]
  createMany?: Prisma.LowConfidenceQuestionCreateManyConversationInputEnvelope
  set?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  disconnect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  delete?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  connect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  update?: Prisma.LowConfidenceQuestionUpdateWithWhereUniqueWithoutConversationInput | Prisma.LowConfidenceQuestionUpdateWithWhereUniqueWithoutConversationInput[]
  updateMany?: Prisma.LowConfidenceQuestionUpdateManyWithWhereWithoutConversationInput | Prisma.LowConfidenceQuestionUpdateManyWithWhereWithoutConversationInput[]
  deleteMany?: Prisma.LowConfidenceQuestionScalarWhereInput | Prisma.LowConfidenceQuestionScalarWhereInput[]
}

export type LowConfidenceQuestionCreateNestedManyWithoutMatchedReviewInput = {
  create?: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutMatchedReviewInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput> | Prisma.LowConfidenceQuestionCreateWithoutMatchedReviewInput[] | Prisma.LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput[]
  connectOrCreate?: Prisma.LowConfidenceQuestionCreateOrConnectWithoutMatchedReviewInput | Prisma.LowConfidenceQuestionCreateOrConnectWithoutMatchedReviewInput[]
  createMany?: Prisma.LowConfidenceQuestionCreateManyMatchedReviewInputEnvelope
  connect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
}

export type LowConfidenceQuestionUncheckedCreateNestedManyWithoutMatchedReviewInput = {
  create?: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutMatchedReviewInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput> | Prisma.LowConfidenceQuestionCreateWithoutMatchedReviewInput[] | Prisma.LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput[]
  connectOrCreate?: Prisma.LowConfidenceQuestionCreateOrConnectWithoutMatchedReviewInput | Prisma.LowConfidenceQuestionCreateOrConnectWithoutMatchedReviewInput[]
  createMany?: Prisma.LowConfidenceQuestionCreateManyMatchedReviewInputEnvelope
  connect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
}

export type LowConfidenceQuestionUpdateManyWithoutMatchedReviewNestedInput = {
  create?: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutMatchedReviewInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput> | Prisma.LowConfidenceQuestionCreateWithoutMatchedReviewInput[] | Prisma.LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput[]
  connectOrCreate?: Prisma.LowConfidenceQuestionCreateOrConnectWithoutMatchedReviewInput | Prisma.LowConfidenceQuestionCreateOrConnectWithoutMatchedReviewInput[]
  upsert?: Prisma.LowConfidenceQuestionUpsertWithWhereUniqueWithoutMatchedReviewInput | Prisma.LowConfidenceQuestionUpsertWithWhereUniqueWithoutMatchedReviewInput[]
  createMany?: Prisma.LowConfidenceQuestionCreateManyMatchedReviewInputEnvelope
  set?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  disconnect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  delete?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  connect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  update?: Prisma.LowConfidenceQuestionUpdateWithWhereUniqueWithoutMatchedReviewInput | Prisma.LowConfidenceQuestionUpdateWithWhereUniqueWithoutMatchedReviewInput[]
  updateMany?: Prisma.LowConfidenceQuestionUpdateManyWithWhereWithoutMatchedReviewInput | Prisma.LowConfidenceQuestionUpdateManyWithWhereWithoutMatchedReviewInput[]
  deleteMany?: Prisma.LowConfidenceQuestionScalarWhereInput | Prisma.LowConfidenceQuestionScalarWhereInput[]
}

export type LowConfidenceQuestionUncheckedUpdateManyWithoutMatchedReviewNestedInput = {
  create?: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutMatchedReviewInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput> | Prisma.LowConfidenceQuestionCreateWithoutMatchedReviewInput[] | Prisma.LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput[]
  connectOrCreate?: Prisma.LowConfidenceQuestionCreateOrConnectWithoutMatchedReviewInput | Prisma.LowConfidenceQuestionCreateOrConnectWithoutMatchedReviewInput[]
  upsert?: Prisma.LowConfidenceQuestionUpsertWithWhereUniqueWithoutMatchedReviewInput | Prisma.LowConfidenceQuestionUpsertWithWhereUniqueWithoutMatchedReviewInput[]
  createMany?: Prisma.LowConfidenceQuestionCreateManyMatchedReviewInputEnvelope
  set?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  disconnect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  delete?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  connect?: Prisma.LowConfidenceQuestionWhereUniqueInput | Prisma.LowConfidenceQuestionWhereUniqueInput[]
  update?: Prisma.LowConfidenceQuestionUpdateWithWhereUniqueWithoutMatchedReviewInput | Prisma.LowConfidenceQuestionUpdateWithWhereUniqueWithoutMatchedReviewInput[]
  updateMany?: Prisma.LowConfidenceQuestionUpdateManyWithWhereWithoutMatchedReviewInput | Prisma.LowConfidenceQuestionUpdateManyWithWhereWithoutMatchedReviewInput[]
  deleteMany?: Prisma.LowConfidenceQuestionScalarWhereInput | Prisma.LowConfidenceQuestionScalarWhereInput[]
}

export type LowConfidenceQuestionCreateWithoutConversationInput = {
  rawQuestion: string
  source: string
  reason?: string | null
  retrievedChunks?: string | null
  createdAt?: Date | string
  matchedReview?: Prisma.ReviewQueueCreateNestedOneWithoutLowConfidenceQuestionsInput
}

export type LowConfidenceQuestionUncheckedCreateWithoutConversationInput = {
  id?: number
  rawQuestion: string
  source: string
  reason?: string | null
  retrievedChunks?: string | null
  matchedReviewId?: number | null
  createdAt?: Date | string
}

export type LowConfidenceQuestionCreateOrConnectWithoutConversationInput = {
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
  create: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutConversationInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutConversationInput>
}

export type LowConfidenceQuestionCreateManyConversationInputEnvelope = {
  data: Prisma.LowConfidenceQuestionCreateManyConversationInput | Prisma.LowConfidenceQuestionCreateManyConversationInput[]
  skipDuplicates?: boolean
}

export type LowConfidenceQuestionUpsertWithWhereUniqueWithoutConversationInput = {
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
  update: Prisma.XOR<Prisma.LowConfidenceQuestionUpdateWithoutConversationInput, Prisma.LowConfidenceQuestionUncheckedUpdateWithoutConversationInput>
  create: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutConversationInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutConversationInput>
}

export type LowConfidenceQuestionUpdateWithWhereUniqueWithoutConversationInput = {
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
  data: Prisma.XOR<Prisma.LowConfidenceQuestionUpdateWithoutConversationInput, Prisma.LowConfidenceQuestionUncheckedUpdateWithoutConversationInput>
}

export type LowConfidenceQuestionUpdateManyWithWhereWithoutConversationInput = {
  where: Prisma.LowConfidenceQuestionScalarWhereInput
  data: Prisma.XOR<Prisma.LowConfidenceQuestionUpdateManyMutationInput, Prisma.LowConfidenceQuestionUncheckedUpdateManyWithoutConversationInput>
}

export type LowConfidenceQuestionScalarWhereInput = {
  AND?: Prisma.LowConfidenceQuestionScalarWhereInput | Prisma.LowConfidenceQuestionScalarWhereInput[]
  OR?: Prisma.LowConfidenceQuestionScalarWhereInput[]
  NOT?: Prisma.LowConfidenceQuestionScalarWhereInput | Prisma.LowConfidenceQuestionScalarWhereInput[]
  id?: Prisma.IntFilter<"LowConfidenceQuestion"> | number
  conversationId?: Prisma.IntNullableFilter<"LowConfidenceQuestion"> | number | null
  rawQuestion?: Prisma.StringFilter<"LowConfidenceQuestion"> | string
  source?: Prisma.StringFilter<"LowConfidenceQuestion"> | string
  reason?: Prisma.StringNullableFilter<"LowConfidenceQuestion"> | string | null
  retrievedChunks?: Prisma.StringNullableFilter<"LowConfidenceQuestion"> | string | null
  matchedReviewId?: Prisma.IntNullableFilter<"LowConfidenceQuestion"> | number | null
  createdAt?: Prisma.DateTimeFilter<"LowConfidenceQuestion"> | Date | string
}

export type LowConfidenceQuestionCreateWithoutMatchedReviewInput = {
  rawQuestion: string
  source: string
  reason?: string | null
  retrievedChunks?: string | null
  createdAt?: Date | string
  conversation?: Prisma.ConversationCreateNestedOneWithoutLowConfidenceQuestionsInput
}

export type LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput = {
  id?: number
  conversationId?: number | null
  rawQuestion: string
  source: string
  reason?: string | null
  retrievedChunks?: string | null
  createdAt?: Date | string
}

export type LowConfidenceQuestionCreateOrConnectWithoutMatchedReviewInput = {
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
  create: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutMatchedReviewInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput>
}

export type LowConfidenceQuestionCreateManyMatchedReviewInputEnvelope = {
  data: Prisma.LowConfidenceQuestionCreateManyMatchedReviewInput | Prisma.LowConfidenceQuestionCreateManyMatchedReviewInput[]
  skipDuplicates?: boolean
}

export type LowConfidenceQuestionUpsertWithWhereUniqueWithoutMatchedReviewInput = {
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
  update: Prisma.XOR<Prisma.LowConfidenceQuestionUpdateWithoutMatchedReviewInput, Prisma.LowConfidenceQuestionUncheckedUpdateWithoutMatchedReviewInput>
  create: Prisma.XOR<Prisma.LowConfidenceQuestionCreateWithoutMatchedReviewInput, Prisma.LowConfidenceQuestionUncheckedCreateWithoutMatchedReviewInput>
}

export type LowConfidenceQuestionUpdateWithWhereUniqueWithoutMatchedReviewInput = {
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
  data: Prisma.XOR<Prisma.LowConfidenceQuestionUpdateWithoutMatchedReviewInput, Prisma.LowConfidenceQuestionUncheckedUpdateWithoutMatchedReviewInput>
}

export type LowConfidenceQuestionUpdateManyWithWhereWithoutMatchedReviewInput = {
  where: Prisma.LowConfidenceQuestionScalarWhereInput
  data: Prisma.XOR<Prisma.LowConfidenceQuestionUpdateManyMutationInput, Prisma.LowConfidenceQuestionUncheckedUpdateManyWithoutMatchedReviewInput>
}

export type LowConfidenceQuestionCreateManyConversationInput = {
  id?: number
  rawQuestion: string
  source: string
  reason?: string | null
  retrievedChunks?: string | null
  matchedReviewId?: number | null
  createdAt?: Date | string
}

export type LowConfidenceQuestionUpdateWithoutConversationInput = {
  rawQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  source?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retrievedChunks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  matchedReview?: Prisma.ReviewQueueUpdateOneWithoutLowConfidenceQuestionsNestedInput
}

export type LowConfidenceQuestionUncheckedUpdateWithoutConversationInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  rawQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  source?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retrievedChunks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  matchedReviewId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type LowConfidenceQuestionUncheckedUpdateManyWithoutConversationInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  rawQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  source?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retrievedChunks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  matchedReviewId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type LowConfidenceQuestionCreateManyMatchedReviewInput = {
  id?: number
  conversationId?: number | null
  rawQuestion: string
  source: string
  reason?: string | null
  retrievedChunks?: string | null
  createdAt?: Date | string
}

export type LowConfidenceQuestionUpdateWithoutMatchedReviewInput = {
  rawQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  source?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retrievedChunks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  conversation?: Prisma.ConversationUpdateOneWithoutLowConfidenceQuestionsNestedInput
}

export type LowConfidenceQuestionUncheckedUpdateWithoutMatchedReviewInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  conversationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  rawQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  source?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retrievedChunks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type LowConfidenceQuestionUncheckedUpdateManyWithoutMatchedReviewInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  conversationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  rawQuestion?: Prisma.StringFieldUpdateOperationsInput | string
  source?: Prisma.StringFieldUpdateOperationsInput | string
  reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retrievedChunks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type LowConfidenceQuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  rawQuestion?: boolean
  source?: boolean
  reason?: boolean
  retrievedChunks?: boolean
  matchedReviewId?: boolean
  createdAt?: boolean
  conversation?: boolean | Prisma.LowConfidenceQuestion$conversationArgs<ExtArgs>
  matchedReview?: boolean | Prisma.LowConfidenceQuestion$matchedReviewArgs<ExtArgs>
}, ExtArgs["result"]["lowConfidenceQuestion"]>

export type LowConfidenceQuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  rawQuestion?: boolean
  source?: boolean
  reason?: boolean
  retrievedChunks?: boolean
  matchedReviewId?: boolean
  createdAt?: boolean
  conversation?: boolean | Prisma.LowConfidenceQuestion$conversationArgs<ExtArgs>
  matchedReview?: boolean | Prisma.LowConfidenceQuestion$matchedReviewArgs<ExtArgs>
}, ExtArgs["result"]["lowConfidenceQuestion"]>

export type LowConfidenceQuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  rawQuestion?: boolean
  source?: boolean
  reason?: boolean
  retrievedChunks?: boolean
  matchedReviewId?: boolean
  createdAt?: boolean
  conversation?: boolean | Prisma.LowConfidenceQuestion$conversationArgs<ExtArgs>
  matchedReview?: boolean | Prisma.LowConfidenceQuestion$matchedReviewArgs<ExtArgs>
}, ExtArgs["result"]["lowConfidenceQuestion"]>

export type LowConfidenceQuestionSelectScalar = {
  id?: boolean
  conversationId?: boolean
  rawQuestion?: boolean
  source?: boolean
  reason?: boolean
  retrievedChunks?: boolean
  matchedReviewId?: boolean
  createdAt?: boolean
}

export type LowConfidenceQuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "conversationId" | "rawQuestion" | "source" | "reason" | "retrievedChunks" | "matchedReviewId" | "createdAt", ExtArgs["result"]["lowConfidenceQuestion"]>
export type LowConfidenceQuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  conversation?: boolean | Prisma.LowConfidenceQuestion$conversationArgs<ExtArgs>
  matchedReview?: boolean | Prisma.LowConfidenceQuestion$matchedReviewArgs<ExtArgs>
}
export type LowConfidenceQuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  conversation?: boolean | Prisma.LowConfidenceQuestion$conversationArgs<ExtArgs>
  matchedReview?: boolean | Prisma.LowConfidenceQuestion$matchedReviewArgs<ExtArgs>
}
export type LowConfidenceQuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  conversation?: boolean | Prisma.LowConfidenceQuestion$conversationArgs<ExtArgs>
  matchedReview?: boolean | Prisma.LowConfidenceQuestion$matchedReviewArgs<ExtArgs>
}

export type $LowConfidenceQuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "LowConfidenceQuestion"
  objects: {
    conversation: Prisma.$ConversationPayload<ExtArgs> | null
    matchedReview: Prisma.$ReviewQueuePayload<ExtArgs> | null
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: number
    conversationId: number | null
    rawQuestion: string
    source: string
    reason: string | null
    retrievedChunks: string | null
    matchedReviewId: number | null
    createdAt: Date
  }, ExtArgs["result"]["lowConfidenceQuestion"]>
  composites: {}
}

export type LowConfidenceQuestionGetPayload<S extends boolean | null | undefined | LowConfidenceQuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload, S>

export type LowConfidenceQuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<LowConfidenceQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LowConfidenceQuestionCountAggregateInputType | true
  }

export interface LowConfidenceQuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LowConfidenceQuestion'], meta: { name: 'LowConfidenceQuestion' } }
  findUnique<T extends LowConfidenceQuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, LowConfidenceQuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LowConfidenceQuestionClient<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findUniqueOrThrow<T extends LowConfidenceQuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LowConfidenceQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LowConfidenceQuestionClient<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findFirst<T extends LowConfidenceQuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, LowConfidenceQuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__LowConfidenceQuestionClient<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findFirstOrThrow<T extends LowConfidenceQuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LowConfidenceQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LowConfidenceQuestionClient<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findMany<T extends LowConfidenceQuestionFindManyArgs>(args?: Prisma.SelectSubset<T, LowConfidenceQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  create<T extends LowConfidenceQuestionCreateArgs>(args: Prisma.SelectSubset<T, LowConfidenceQuestionCreateArgs<ExtArgs>>): Prisma.Prisma__LowConfidenceQuestionClient<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  createMany<T extends LowConfidenceQuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, LowConfidenceQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  createManyAndReturn<T extends LowConfidenceQuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LowConfidenceQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  delete<T extends LowConfidenceQuestionDeleteArgs>(args: Prisma.SelectSubset<T, LowConfidenceQuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__LowConfidenceQuestionClient<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  update<T extends LowConfidenceQuestionUpdateArgs>(args: Prisma.SelectSubset<T, LowConfidenceQuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__LowConfidenceQuestionClient<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  deleteMany<T extends LowConfidenceQuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, LowConfidenceQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateMany<T extends LowConfidenceQuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, LowConfidenceQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateManyAndReturn<T extends LowConfidenceQuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LowConfidenceQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  upsert<T extends LowConfidenceQuestionUpsertArgs>(args: Prisma.SelectSubset<T, LowConfidenceQuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__LowConfidenceQuestionClient<runtime.Types.Result.GetResult<Prisma.$LowConfidenceQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  count<T extends LowConfidenceQuestionCountArgs>(
    args?: Prisma.Subset<T, LowConfidenceQuestionCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], LowConfidenceQuestionCountAggregateOutputType>
      : number
  >

  aggregate<T extends LowConfidenceQuestionAggregateArgs>(args: Prisma.Subset<T, LowConfidenceQuestionAggregateArgs>): Prisma.PrismaPromise<GetLowConfidenceQuestionAggregateType<T>>

  groupBy<
    T extends LowConfidenceQuestionGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: LowConfidenceQuestionGroupByArgs['orderBy'] }
      : { orderBy?: LowConfidenceQuestionGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, LowConfidenceQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLowConfidenceQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: LowConfidenceQuestionFieldRefs;
}

export interface Prisma__LowConfidenceQuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  conversation<T extends Prisma.LowConfidenceQuestion$conversationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LowConfidenceQuestion$conversationArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
  matchedReview<T extends Prisma.LowConfidenceQuestion$matchedReviewArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LowConfidenceQuestion$matchedReviewArgs<ExtArgs>>): Prisma.Prisma__ReviewQueueClient<runtime.Types.Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface LowConfidenceQuestionFieldRefs {
  readonly id: Prisma.FieldRef<"LowConfidenceQuestion", 'Int'>
  readonly conversationId: Prisma.FieldRef<"LowConfidenceQuestion", 'Int'>
  readonly rawQuestion: Prisma.FieldRef<"LowConfidenceQuestion", 'String'>
  readonly source: Prisma.FieldRef<"LowConfidenceQuestion", 'String'>
  readonly reason: Prisma.FieldRef<"LowConfidenceQuestion", 'String'>
  readonly retrievedChunks: Prisma.FieldRef<"LowConfidenceQuestion", 'String'>
  readonly matchedReviewId: Prisma.FieldRef<"LowConfidenceQuestion", 'Int'>
  readonly createdAt: Prisma.FieldRef<"LowConfidenceQuestion", 'DateTime'>
}
    

export type LowConfidenceQuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.LowConfidenceQuestionSelect<ExtArgs> | null
  omit?: Prisma.LowConfidenceQuestionOmit<ExtArgs> | null
  include?: Prisma.LowConfidenceQuestionInclude<ExtArgs> | null
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
}

export type LowConfidenceQuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.LowConfidenceQuestionSelect<ExtArgs> | null
  omit?: Prisma.LowConfidenceQuestionOmit<ExtArgs> | null
  include?: Prisma.LowConfidenceQuestionInclude<ExtArgs> | null
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
}

export type LowConfidenceQuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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

export type LowConfidenceQuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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

export type LowConfidenceQuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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

export type LowConfidenceQuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.LowConfidenceQuestionSelect<ExtArgs> | null
  omit?: Prisma.LowConfidenceQuestionOmit<ExtArgs> | null
  include?: Prisma.LowConfidenceQuestionInclude<ExtArgs> | null
  data: Prisma.XOR<Prisma.LowConfidenceQuestionCreateInput, Prisma.LowConfidenceQuestionUncheckedCreateInput>
}

export type LowConfidenceQuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.LowConfidenceQuestionCreateManyInput | Prisma.LowConfidenceQuestionCreateManyInput[]
  skipDuplicates?: boolean
}

export type LowConfidenceQuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.LowConfidenceQuestionSelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.LowConfidenceQuestionOmit<ExtArgs> | null
  data: Prisma.LowConfidenceQuestionCreateManyInput | Prisma.LowConfidenceQuestionCreateManyInput[]
  skipDuplicates?: boolean
  include?: Prisma.LowConfidenceQuestionIncludeCreateManyAndReturn<ExtArgs> | null
}

export type LowConfidenceQuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.LowConfidenceQuestionSelect<ExtArgs> | null
  omit?: Prisma.LowConfidenceQuestionOmit<ExtArgs> | null
  include?: Prisma.LowConfidenceQuestionInclude<ExtArgs> | null
  data: Prisma.XOR<Prisma.LowConfidenceQuestionUpdateInput, Prisma.LowConfidenceQuestionUncheckedUpdateInput>
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
}

export type LowConfidenceQuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.LowConfidenceQuestionUpdateManyMutationInput, Prisma.LowConfidenceQuestionUncheckedUpdateManyInput>
  where?: Prisma.LowConfidenceQuestionWhereInput
  limit?: number
}

export type LowConfidenceQuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.LowConfidenceQuestionSelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.LowConfidenceQuestionOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.LowConfidenceQuestionUpdateManyMutationInput, Prisma.LowConfidenceQuestionUncheckedUpdateManyInput>
  where?: Prisma.LowConfidenceQuestionWhereInput
  limit?: number
  include?: Prisma.LowConfidenceQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
}

export type LowConfidenceQuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.LowConfidenceQuestionSelect<ExtArgs> | null
  omit?: Prisma.LowConfidenceQuestionOmit<ExtArgs> | null
  include?: Prisma.LowConfidenceQuestionInclude<ExtArgs> | null
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
  create: Prisma.XOR<Prisma.LowConfidenceQuestionCreateInput, Prisma.LowConfidenceQuestionUncheckedCreateInput>
  update: Prisma.XOR<Prisma.LowConfidenceQuestionUpdateInput, Prisma.LowConfidenceQuestionUncheckedUpdateInput>
}

export type LowConfidenceQuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.LowConfidenceQuestionSelect<ExtArgs> | null
  omit?: Prisma.LowConfidenceQuestionOmit<ExtArgs> | null
  include?: Prisma.LowConfidenceQuestionInclude<ExtArgs> | null
  where: Prisma.LowConfidenceQuestionWhereUniqueInput
}

export type LowConfidenceQuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.LowConfidenceQuestionWhereInput
  limit?: number
}

export type LowConfidenceQuestion$conversationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ConversationSelect<ExtArgs> | null
  omit?: Prisma.ConversationOmit<ExtArgs> | null
  include?: Prisma.ConversationInclude<ExtArgs> | null
  where?: Prisma.ConversationWhereInput
}

export type LowConfidenceQuestion$matchedReviewArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ReviewQueueSelect<ExtArgs> | null
  omit?: Prisma.ReviewQueueOmit<ExtArgs> | null
  include?: Prisma.ReviewQueueInclude<ExtArgs> | null
  where?: Prisma.ReviewQueueWhereInput
}

export type LowConfidenceQuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.LowConfidenceQuestionSelect<ExtArgs> | null
  omit?: Prisma.LowConfidenceQuestionOmit<ExtArgs> | null
  include?: Prisma.LowConfidenceQuestionInclude<ExtArgs> | null
}
