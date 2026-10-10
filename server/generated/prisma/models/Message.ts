
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

export type MessageModel = runtime.Types.Result.DefaultSelection<Prisma.$MessagePayload>

export type AggregateMessage = {
  _count: MessageCountAggregateOutputType | null
  _avg: MessageAvgAggregateOutputType | null
  _sum: MessageSumAggregateOutputType | null
  _min: MessageMinAggregateOutputType | null
  _max: MessageMaxAggregateOutputType | null
}

export type MessageAvgAggregateOutputType = {
  id: number | null
  conversationId: number | null
}

export type MessageSumAggregateOutputType = {
  id: number | null
  conversationId: number | null
}

export type MessageMinAggregateOutputType = {
  id: number | null
  conversationId: number | null
  role: string | null
  content: string | null
  toolCalls: string | null
  toolCallId: string | null
  createdAt: Date | null
}

export type MessageMaxAggregateOutputType = {
  id: number | null
  conversationId: number | null
  role: string | null
  content: string | null
  toolCalls: string | null
  toolCallId: string | null
  createdAt: Date | null
}

export type MessageCountAggregateOutputType = {
  id: number
  conversationId: number
  role: number
  content: number
  toolCalls: number
  toolCallId: number
  createdAt: number
  _all: number
}


export type MessageAvgAggregateInputType = {
  id?: true
  conversationId?: true
}

export type MessageSumAggregateInputType = {
  id?: true
  conversationId?: true
}

export type MessageMinAggregateInputType = {
  id?: true
  conversationId?: true
  role?: true
  content?: true
  toolCalls?: true
  toolCallId?: true
  createdAt?: true
}

export type MessageMaxAggregateInputType = {
  id?: true
  conversationId?: true
  role?: true
  content?: true
  toolCalls?: true
  toolCallId?: true
  createdAt?: true
}

export type MessageCountAggregateInputType = {
  id?: true
  conversationId?: true
  role?: true
  content?: true
  toolCalls?: true
  toolCallId?: true
  createdAt?: true
  _all?: true
}

export type MessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.MessageWhereInput
  orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[]
  cursor?: Prisma.MessageWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | MessageCountAggregateInputType
  _avg?: MessageAvgAggregateInputType
  _sum?: MessageSumAggregateInputType
  _min?: MessageMinAggregateInputType
  _max?: MessageMaxAggregateInputType
}

export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
      [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateMessage[P]>
    : Prisma.GetScalarType<T[P], AggregateMessage[P]>
}




export type MessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.MessageWhereInput
  orderBy?: Prisma.MessageOrderByWithAggregationInput | Prisma.MessageOrderByWithAggregationInput[]
  by: Prisma.MessageScalarFieldEnum[] | Prisma.MessageScalarFieldEnum
  having?: Prisma.MessageScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: MessageCountAggregateInputType | true
  _avg?: MessageAvgAggregateInputType
  _sum?: MessageSumAggregateInputType
  _min?: MessageMinAggregateInputType
  _max?: MessageMaxAggregateInputType
}

export type MessageGroupByOutputType = {
  id: number
  conversationId: number
  role: string
  content: string | null
  toolCalls: string | null
  toolCallId: string | null
  createdAt: Date
  _count: MessageCountAggregateOutputType | null
  _avg: MessageAvgAggregateOutputType | null
  _sum: MessageSumAggregateOutputType | null
  _min: MessageMinAggregateOutputType | null
  _max: MessageMaxAggregateOutputType | null
}

export type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<MessageGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], MessageGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], MessageGroupByOutputType[P]>
      }
    >
  >



export type MessageWhereInput = {
  AND?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[]
  OR?: Prisma.MessageWhereInput[]
  NOT?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[]
  id?: Prisma.IntFilter<"Message"> | number
  conversationId?: Prisma.IntFilter<"Message"> | number
  role?: Prisma.StringFilter<"Message"> | string
  content?: Prisma.StringNullableFilter<"Message"> | string | null
  toolCalls?: Prisma.StringNullableFilter<"Message"> | string | null
  toolCallId?: Prisma.StringNullableFilter<"Message"> | string | null
  createdAt?: Prisma.DateTimeFilter<"Message"> | Date | string
  conversation?: Prisma.XOR<Prisma.ConversationScalarRelationFilter, Prisma.ConversationWhereInput>
}

export type MessageOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  role?: Prisma.SortOrder
  content?: Prisma.SortOrderInput | Prisma.SortOrder
  toolCalls?: Prisma.SortOrderInput | Prisma.SortOrder
  toolCallId?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  conversation?: Prisma.ConversationOrderByWithRelationInput
}

export type MessageWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[]
  OR?: Prisma.MessageWhereInput[]
  NOT?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[]
  conversationId?: Prisma.IntFilter<"Message"> | number
  role?: Prisma.StringFilter<"Message"> | string
  content?: Prisma.StringNullableFilter<"Message"> | string | null
  toolCalls?: Prisma.StringNullableFilter<"Message"> | string | null
  toolCallId?: Prisma.StringNullableFilter<"Message"> | string | null
  createdAt?: Prisma.DateTimeFilter<"Message"> | Date | string
  conversation?: Prisma.XOR<Prisma.ConversationScalarRelationFilter, Prisma.ConversationWhereInput>
}, "id">

export type MessageOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  role?: Prisma.SortOrder
  content?: Prisma.SortOrderInput | Prisma.SortOrder
  toolCalls?: Prisma.SortOrderInput | Prisma.SortOrder
  toolCallId?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.MessageCountOrderByAggregateInput
  _avg?: Prisma.MessageAvgOrderByAggregateInput
  _max?: Prisma.MessageMaxOrderByAggregateInput
  _min?: Prisma.MessageMinOrderByAggregateInput
  _sum?: Prisma.MessageSumOrderByAggregateInput
}

export type MessageScalarWhereWithAggregatesInput = {
  AND?: Prisma.MessageScalarWhereWithAggregatesInput | Prisma.MessageScalarWhereWithAggregatesInput[]
  OR?: Prisma.MessageScalarWhereWithAggregatesInput[]
  NOT?: Prisma.MessageScalarWhereWithAggregatesInput | Prisma.MessageScalarWhereWithAggregatesInput[]
  id?: Prisma.IntWithAggregatesFilter<"Message"> | number
  conversationId?: Prisma.IntWithAggregatesFilter<"Message"> | number
  role?: Prisma.StringWithAggregatesFilter<"Message"> | string
  content?: Prisma.StringNullableWithAggregatesFilter<"Message"> | string | null
  toolCalls?: Prisma.StringNullableWithAggregatesFilter<"Message"> | string | null
  toolCallId?: Prisma.StringNullableWithAggregatesFilter<"Message"> | string | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Message"> | Date | string
}

export type MessageCreateInput = {
  role: string
  content?: string | null
  toolCalls?: string | null
  toolCallId?: string | null
  createdAt?: Date | string
  conversation: Prisma.ConversationCreateNestedOneWithoutMessagesInput
}

export type MessageUncheckedCreateInput = {
  id?: number
  conversationId: number
  role: string
  content?: string | null
  toolCalls?: string | null
  toolCallId?: string | null
  createdAt?: Date | string
}

export type MessageUpdateInput = {
  role?: Prisma.StringFieldUpdateOperationsInput | string
  content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCalls?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  conversation?: Prisma.ConversationUpdateOneRequiredWithoutMessagesNestedInput
}

export type MessageUncheckedUpdateInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  conversationId?: Prisma.IntFieldUpdateOperationsInput | number
  role?: Prisma.StringFieldUpdateOperationsInput | string
  content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCalls?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type MessageCreateManyInput = {
  id?: number
  conversationId: number
  role: string
  content?: string | null
  toolCalls?: string | null
  toolCallId?: string | null
  createdAt?: Date | string
}

export type MessageUpdateManyMutationInput = {
  role?: Prisma.StringFieldUpdateOperationsInput | string
  content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCalls?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type MessageUncheckedUpdateManyInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  conversationId?: Prisma.IntFieldUpdateOperationsInput | number
  role?: Prisma.StringFieldUpdateOperationsInput | string
  content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCalls?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type MessageListRelationFilter = {
  every?: Prisma.MessageWhereInput
  some?: Prisma.MessageWhereInput
  none?: Prisma.MessageWhereInput
}

export type MessageOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type MessageCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  role?: Prisma.SortOrder
  content?: Prisma.SortOrder
  toolCalls?: Prisma.SortOrder
  toolCallId?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type MessageAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
}

export type MessageMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  role?: Prisma.SortOrder
  content?: Prisma.SortOrder
  toolCalls?: Prisma.SortOrder
  toolCallId?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type MessageMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  role?: Prisma.SortOrder
  content?: Prisma.SortOrder
  toolCalls?: Prisma.SortOrder
  toolCallId?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type MessageSumOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
}

export type MessageCreateNestedManyWithoutConversationInput = {
  create?: Prisma.XOR<Prisma.MessageCreateWithoutConversationInput, Prisma.MessageUncheckedCreateWithoutConversationInput> | Prisma.MessageCreateWithoutConversationInput[] | Prisma.MessageUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.MessageCreateOrConnectWithoutConversationInput | Prisma.MessageCreateOrConnectWithoutConversationInput[]
  createMany?: Prisma.MessageCreateManyConversationInputEnvelope
  connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[]
}

export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
  create?: Prisma.XOR<Prisma.MessageCreateWithoutConversationInput, Prisma.MessageUncheckedCreateWithoutConversationInput> | Prisma.MessageCreateWithoutConversationInput[] | Prisma.MessageUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.MessageCreateOrConnectWithoutConversationInput | Prisma.MessageCreateOrConnectWithoutConversationInput[]
  createMany?: Prisma.MessageCreateManyConversationInputEnvelope
  connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[]
}

export type MessageUpdateManyWithoutConversationNestedInput = {
  create?: Prisma.XOR<Prisma.MessageCreateWithoutConversationInput, Prisma.MessageUncheckedCreateWithoutConversationInput> | Prisma.MessageCreateWithoutConversationInput[] | Prisma.MessageUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.MessageCreateOrConnectWithoutConversationInput | Prisma.MessageCreateOrConnectWithoutConversationInput[]
  upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutConversationInput | Prisma.MessageUpsertWithWhereUniqueWithoutConversationInput[]
  createMany?: Prisma.MessageCreateManyConversationInputEnvelope
  set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[]
  disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[]
  delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[]
  connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[]
  update?: Prisma.MessageUpdateWithWhereUniqueWithoutConversationInput | Prisma.MessageUpdateWithWhereUniqueWithoutConversationInput[]
  updateMany?: Prisma.MessageUpdateManyWithWhereWithoutConversationInput | Prisma.MessageUpdateManyWithWhereWithoutConversationInput[]
  deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[]
}

export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
  create?: Prisma.XOR<Prisma.MessageCreateWithoutConversationInput, Prisma.MessageUncheckedCreateWithoutConversationInput> | Prisma.MessageCreateWithoutConversationInput[] | Prisma.MessageUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.MessageCreateOrConnectWithoutConversationInput | Prisma.MessageCreateOrConnectWithoutConversationInput[]
  upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutConversationInput | Prisma.MessageUpsertWithWhereUniqueWithoutConversationInput[]
  createMany?: Prisma.MessageCreateManyConversationInputEnvelope
  set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[]
  disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[]
  delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[]
  connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[]
  update?: Prisma.MessageUpdateWithWhereUniqueWithoutConversationInput | Prisma.MessageUpdateWithWhereUniqueWithoutConversationInput[]
  updateMany?: Prisma.MessageUpdateManyWithWhereWithoutConversationInput | Prisma.MessageUpdateManyWithWhereWithoutConversationInput[]
  deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[]
}

export type MessageCreateWithoutConversationInput = {
  role: string
  content?: string | null
  toolCalls?: string | null
  toolCallId?: string | null
  createdAt?: Date | string
}

export type MessageUncheckedCreateWithoutConversationInput = {
  id?: number
  role: string
  content?: string | null
  toolCalls?: string | null
  toolCallId?: string | null
  createdAt?: Date | string
}

export type MessageCreateOrConnectWithoutConversationInput = {
  where: Prisma.MessageWhereUniqueInput
  create: Prisma.XOR<Prisma.MessageCreateWithoutConversationInput, Prisma.MessageUncheckedCreateWithoutConversationInput>
}

export type MessageCreateManyConversationInputEnvelope = {
  data: Prisma.MessageCreateManyConversationInput | Prisma.MessageCreateManyConversationInput[]
  skipDuplicates?: boolean
}

export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
  where: Prisma.MessageWhereUniqueInput
  update: Prisma.XOR<Prisma.MessageUpdateWithoutConversationInput, Prisma.MessageUncheckedUpdateWithoutConversationInput>
  create: Prisma.XOR<Prisma.MessageCreateWithoutConversationInput, Prisma.MessageUncheckedCreateWithoutConversationInput>
}

export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
  where: Prisma.MessageWhereUniqueInput
  data: Prisma.XOR<Prisma.MessageUpdateWithoutConversationInput, Prisma.MessageUncheckedUpdateWithoutConversationInput>
}

export type MessageUpdateManyWithWhereWithoutConversationInput = {
  where: Prisma.MessageScalarWhereInput
  data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyWithoutConversationInput>
}

export type MessageScalarWhereInput = {
  AND?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[]
  OR?: Prisma.MessageScalarWhereInput[]
  NOT?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[]
  id?: Prisma.IntFilter<"Message"> | number
  conversationId?: Prisma.IntFilter<"Message"> | number
  role?: Prisma.StringFilter<"Message"> | string
  content?: Prisma.StringNullableFilter<"Message"> | string | null
  toolCalls?: Prisma.StringNullableFilter<"Message"> | string | null
  toolCallId?: Prisma.StringNullableFilter<"Message"> | string | null
  createdAt?: Prisma.DateTimeFilter<"Message"> | Date | string
}

export type MessageCreateManyConversationInput = {
  id?: number
  role: string
  content?: string | null
  toolCalls?: string | null
  toolCallId?: string | null
  createdAt?: Date | string
}

export type MessageUpdateWithoutConversationInput = {
  role?: Prisma.StringFieldUpdateOperationsInput | string
  content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCalls?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type MessageUncheckedUpdateWithoutConversationInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  role?: Prisma.StringFieldUpdateOperationsInput | string
  content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCalls?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type MessageUncheckedUpdateManyWithoutConversationInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  role?: Prisma.StringFieldUpdateOperationsInput | string
  content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCalls?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type MessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  role?: boolean
  content?: boolean
  toolCalls?: boolean
  toolCallId?: boolean
  createdAt?: boolean
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}, ExtArgs["result"]["message"]>

export type MessageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  role?: boolean
  content?: boolean
  toolCalls?: boolean
  toolCallId?: boolean
  createdAt?: boolean
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}, ExtArgs["result"]["message"]>

export type MessageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  role?: boolean
  content?: boolean
  toolCalls?: boolean
  toolCallId?: boolean
  createdAt?: boolean
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}, ExtArgs["result"]["message"]>

export type MessageSelectScalar = {
  id?: boolean
  conversationId?: boolean
  role?: boolean
  content?: boolean
  toolCalls?: boolean
  toolCallId?: boolean
  createdAt?: boolean
}

export type MessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "conversationId" | "role" | "content" | "toolCalls" | "toolCallId" | "createdAt", ExtArgs["result"]["message"]>
export type MessageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}
export type MessageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}
export type MessageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}

export type $MessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Message"
  objects: {
    conversation: Prisma.$ConversationPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: number
    conversationId: number
    role: string
    content: string | null
    toolCalls: string | null
    toolCallId: string | null
    createdAt: Date
  }, ExtArgs["result"]["message"]>
  composites: {}
}

export type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessagePayload, S>

export type MessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageCountAggregateInputType | true
  }

export interface MessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
  findUnique<T extends MessageFindUniqueArgs>(args: Prisma.SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findFirst<T extends MessageFindFirstArgs>(args?: Prisma.SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findMany<T extends MessageFindManyArgs>(args?: Prisma.SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  create<T extends MessageCreateArgs>(args: Prisma.SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  createMany<T extends MessageCreateManyArgs>(args?: Prisma.SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  delete<T extends MessageDeleteArgs>(args: Prisma.SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  update<T extends MessageUpdateArgs>(args: Prisma.SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  deleteMany<T extends MessageDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateMany<T extends MessageUpdateManyArgs>(args: Prisma.SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  upsert<T extends MessageUpsertArgs>(args: Prisma.SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  count<T extends MessageCountArgs>(
    args?: Prisma.Subset<T, MessageCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], MessageCountAggregateOutputType>
      : number
  >

  aggregate<T extends MessageAggregateArgs>(args: Prisma.Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

  groupBy<
    T extends MessageGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: MessageGroupByArgs['orderBy'] }
      : { orderBy?: MessageGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: MessageFieldRefs;
}

export interface Prisma__MessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  conversation<T extends Prisma.ConversationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ConversationDefaultArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface MessageFieldRefs {
  readonly id: Prisma.FieldRef<"Message", 'Int'>
  readonly conversationId: Prisma.FieldRef<"Message", 'Int'>
  readonly role: Prisma.FieldRef<"Message", 'String'>
  readonly content: Prisma.FieldRef<"Message", 'String'>
  readonly toolCalls: Prisma.FieldRef<"Message", 'String'>
  readonly toolCallId: Prisma.FieldRef<"Message", 'String'>
  readonly createdAt: Prisma.FieldRef<"Message", 'DateTime'>
}
    

export type MessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelect<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  include?: Prisma.MessageInclude<ExtArgs> | null
  where: Prisma.MessageWhereUniqueInput
}

export type MessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelect<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  include?: Prisma.MessageInclude<ExtArgs> | null
  where: Prisma.MessageWhereUniqueInput
}

export type MessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelect<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  include?: Prisma.MessageInclude<ExtArgs> | null
  where?: Prisma.MessageWhereInput
  orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[]
  cursor?: Prisma.MessageWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[]
}

export type MessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelect<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  include?: Prisma.MessageInclude<ExtArgs> | null
  where?: Prisma.MessageWhereInput
  orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[]
  cursor?: Prisma.MessageWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[]
}

export type MessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelect<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  include?: Prisma.MessageInclude<ExtArgs> | null
  where?: Prisma.MessageWhereInput
  orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[]
  cursor?: Prisma.MessageWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[]
}

export type MessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelect<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  include?: Prisma.MessageInclude<ExtArgs> | null
  data: Prisma.XOR<Prisma.MessageCreateInput, Prisma.MessageUncheckedCreateInput>
}

export type MessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.MessageCreateManyInput | Prisma.MessageCreateManyInput[]
  skipDuplicates?: boolean
}

export type MessageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  data: Prisma.MessageCreateManyInput | Prisma.MessageCreateManyInput[]
  skipDuplicates?: boolean
  include?: Prisma.MessageIncludeCreateManyAndReturn<ExtArgs> | null
}

export type MessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelect<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  include?: Prisma.MessageInclude<ExtArgs> | null
  data: Prisma.XOR<Prisma.MessageUpdateInput, Prisma.MessageUncheckedUpdateInput>
  where: Prisma.MessageWhereUniqueInput
}

export type MessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyInput>
  where?: Prisma.MessageWhereInput
  limit?: number
}

export type MessageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyInput>
  where?: Prisma.MessageWhereInput
  limit?: number
  include?: Prisma.MessageIncludeUpdateManyAndReturn<ExtArgs> | null
}

export type MessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelect<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  include?: Prisma.MessageInclude<ExtArgs> | null
  where: Prisma.MessageWhereUniqueInput
  create: Prisma.XOR<Prisma.MessageCreateInput, Prisma.MessageUncheckedCreateInput>
  update: Prisma.XOR<Prisma.MessageUpdateInput, Prisma.MessageUncheckedUpdateInput>
}

export type MessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelect<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  include?: Prisma.MessageInclude<ExtArgs> | null
  where: Prisma.MessageWhereUniqueInput
}

export type MessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.MessageWhereInput
  limit?: number
}

export type MessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.MessageSelect<ExtArgs> | null
  omit?: Prisma.MessageOmit<ExtArgs> | null
  include?: Prisma.MessageInclude<ExtArgs> | null
}
