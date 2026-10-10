
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

export type TicketModel = runtime.Types.Result.DefaultSelection<Prisma.$TicketPayload>

export type AggregateTicket = {
  _count: TicketCountAggregateOutputType | null
  _avg: TicketAvgAggregateOutputType | null
  _sum: TicketSumAggregateOutputType | null
  _min: TicketMinAggregateOutputType | null
  _max: TicketMaxAggregateOutputType | null
}

export type TicketAvgAggregateOutputType = {
  conversationId: number | null
}

export type TicketSumAggregateOutputType = {
  conversationId: number | null
}

export type TicketMinAggregateOutputType = {
  ticketNo: string | null
  conversationId: number | null
  description: string | null
  ticketType: string | null
  status: string | null
  createdAt: Date | null
}

export type TicketMaxAggregateOutputType = {
  ticketNo: string | null
  conversationId: number | null
  description: string | null
  ticketType: string | null
  status: string | null
  createdAt: Date | null
}

export type TicketCountAggregateOutputType = {
  ticketNo: number
  conversationId: number
  description: number
  ticketType: number
  status: number
  createdAt: number
  _all: number
}


export type TicketAvgAggregateInputType = {
  conversationId?: true
}

export type TicketSumAggregateInputType = {
  conversationId?: true
}

export type TicketMinAggregateInputType = {
  ticketNo?: true
  conversationId?: true
  description?: true
  ticketType?: true
  status?: true
  createdAt?: true
}

export type TicketMaxAggregateInputType = {
  ticketNo?: true
  conversationId?: true
  description?: true
  ticketType?: true
  status?: true
  createdAt?: true
}

export type TicketCountAggregateInputType = {
  ticketNo?: true
  conversationId?: true
  description?: true
  ticketType?: true
  status?: true
  createdAt?: true
  _all?: true
}

export type TicketAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.TicketWhereInput
  orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[]
  cursor?: Prisma.TicketWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | TicketCountAggregateInputType
  _avg?: TicketAvgAggregateInputType
  _sum?: TicketSumAggregateInputType
  _min?: TicketMinAggregateInputType
  _max?: TicketMaxAggregateInputType
}

export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
      [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateTicket[P]>
    : Prisma.GetScalarType<T[P], AggregateTicket[P]>
}




export type TicketGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.TicketWhereInput
  orderBy?: Prisma.TicketOrderByWithAggregationInput | Prisma.TicketOrderByWithAggregationInput[]
  by: Prisma.TicketScalarFieldEnum[] | Prisma.TicketScalarFieldEnum
  having?: Prisma.TicketScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: TicketCountAggregateInputType | true
  _avg?: TicketAvgAggregateInputType
  _sum?: TicketSumAggregateInputType
  _min?: TicketMinAggregateInputType
  _max?: TicketMaxAggregateInputType
}

export type TicketGroupByOutputType = {
  ticketNo: string
  conversationId: number
  description: string
  ticketType: string
  status: string
  createdAt: Date
  _count: TicketCountAggregateOutputType | null
  _avg: TicketAvgAggregateOutputType | null
  _sum: TicketSumAggregateOutputType | null
  _min: TicketMinAggregateOutputType | null
  _max: TicketMaxAggregateOutputType | null
}

export type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<TicketGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], TicketGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], TicketGroupByOutputType[P]>
      }
    >
  >



export type TicketWhereInput = {
  AND?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[]
  OR?: Prisma.TicketWhereInput[]
  NOT?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[]
  ticketNo?: Prisma.StringFilter<"Ticket"> | string
  conversationId?: Prisma.IntFilter<"Ticket"> | number
  description?: Prisma.StringFilter<"Ticket"> | string
  ticketType?: Prisma.StringFilter<"Ticket"> | string
  status?: Prisma.StringFilter<"Ticket"> | string
  createdAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string
  conversation?: Prisma.XOR<Prisma.ConversationScalarRelationFilter, Prisma.ConversationWhereInput>
}

export type TicketOrderByWithRelationInput = {
  ticketNo?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  ticketType?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  conversation?: Prisma.ConversationOrderByWithRelationInput
}

export type TicketWhereUniqueInput = Prisma.AtLeast<{
  ticketNo?: string
  AND?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[]
  OR?: Prisma.TicketWhereInput[]
  NOT?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[]
  conversationId?: Prisma.IntFilter<"Ticket"> | number
  description?: Prisma.StringFilter<"Ticket"> | string
  ticketType?: Prisma.StringFilter<"Ticket"> | string
  status?: Prisma.StringFilter<"Ticket"> | string
  createdAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string
  conversation?: Prisma.XOR<Prisma.ConversationScalarRelationFilter, Prisma.ConversationWhereInput>
}, "ticketNo">

export type TicketOrderByWithAggregationInput = {
  ticketNo?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  ticketType?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.TicketCountOrderByAggregateInput
  _avg?: Prisma.TicketAvgOrderByAggregateInput
  _max?: Prisma.TicketMaxOrderByAggregateInput
  _min?: Prisma.TicketMinOrderByAggregateInput
  _sum?: Prisma.TicketSumOrderByAggregateInput
}

export type TicketScalarWhereWithAggregatesInput = {
  AND?: Prisma.TicketScalarWhereWithAggregatesInput | Prisma.TicketScalarWhereWithAggregatesInput[]
  OR?: Prisma.TicketScalarWhereWithAggregatesInput[]
  NOT?: Prisma.TicketScalarWhereWithAggregatesInput | Prisma.TicketScalarWhereWithAggregatesInput[]
  ticketNo?: Prisma.StringWithAggregatesFilter<"Ticket"> | string
  conversationId?: Prisma.IntWithAggregatesFilter<"Ticket"> | number
  description?: Prisma.StringWithAggregatesFilter<"Ticket"> | string
  ticketType?: Prisma.StringWithAggregatesFilter<"Ticket"> | string
  status?: Prisma.StringWithAggregatesFilter<"Ticket"> | string
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Ticket"> | Date | string
}

export type TicketCreateInput = {
  ticketNo: string
  description: string
  ticketType: string
  status?: string
  createdAt?: Date | string
  conversation: Prisma.ConversationCreateNestedOneWithoutTicketsInput
}

export type TicketUncheckedCreateInput = {
  ticketNo: string
  conversationId: number
  description: string
  ticketType: string
  status?: string
  createdAt?: Date | string
}

export type TicketUpdateInput = {
  ticketNo?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  ticketType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  conversation?: Prisma.ConversationUpdateOneRequiredWithoutTicketsNestedInput
}

export type TicketUncheckedUpdateInput = {
  ticketNo?: Prisma.StringFieldUpdateOperationsInput | string
  conversationId?: Prisma.IntFieldUpdateOperationsInput | number
  description?: Prisma.StringFieldUpdateOperationsInput | string
  ticketType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type TicketCreateManyInput = {
  ticketNo: string
  conversationId: number
  description: string
  ticketType: string
  status?: string
  createdAt?: Date | string
}

export type TicketUpdateManyMutationInput = {
  ticketNo?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  ticketType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type TicketUncheckedUpdateManyInput = {
  ticketNo?: Prisma.StringFieldUpdateOperationsInput | string
  conversationId?: Prisma.IntFieldUpdateOperationsInput | number
  description?: Prisma.StringFieldUpdateOperationsInput | string
  ticketType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type TicketListRelationFilter = {
  every?: Prisma.TicketWhereInput
  some?: Prisma.TicketWhereInput
  none?: Prisma.TicketWhereInput
}

export type TicketOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type TicketCountOrderByAggregateInput = {
  ticketNo?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  ticketType?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type TicketAvgOrderByAggregateInput = {
  conversationId?: Prisma.SortOrder
}

export type TicketMaxOrderByAggregateInput = {
  ticketNo?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  ticketType?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type TicketMinOrderByAggregateInput = {
  ticketNo?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  description?: Prisma.SortOrder
  ticketType?: Prisma.SortOrder
  status?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type TicketSumOrderByAggregateInput = {
  conversationId?: Prisma.SortOrder
}

export type TicketCreateNestedManyWithoutConversationInput = {
  create?: Prisma.XOR<Prisma.TicketCreateWithoutConversationInput, Prisma.TicketUncheckedCreateWithoutConversationInput> | Prisma.TicketCreateWithoutConversationInput[] | Prisma.TicketUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.TicketCreateOrConnectWithoutConversationInput | Prisma.TicketCreateOrConnectWithoutConversationInput[]
  createMany?: Prisma.TicketCreateManyConversationInputEnvelope
  connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[]
}

export type TicketUncheckedCreateNestedManyWithoutConversationInput = {
  create?: Prisma.XOR<Prisma.TicketCreateWithoutConversationInput, Prisma.TicketUncheckedCreateWithoutConversationInput> | Prisma.TicketCreateWithoutConversationInput[] | Prisma.TicketUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.TicketCreateOrConnectWithoutConversationInput | Prisma.TicketCreateOrConnectWithoutConversationInput[]
  createMany?: Prisma.TicketCreateManyConversationInputEnvelope
  connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[]
}

export type TicketUpdateManyWithoutConversationNestedInput = {
  create?: Prisma.XOR<Prisma.TicketCreateWithoutConversationInput, Prisma.TicketUncheckedCreateWithoutConversationInput> | Prisma.TicketCreateWithoutConversationInput[] | Prisma.TicketUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.TicketCreateOrConnectWithoutConversationInput | Prisma.TicketCreateOrConnectWithoutConversationInput[]
  upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutConversationInput | Prisma.TicketUpsertWithWhereUniqueWithoutConversationInput[]
  createMany?: Prisma.TicketCreateManyConversationInputEnvelope
  set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[]
  disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[]
  delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[]
  connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[]
  update?: Prisma.TicketUpdateWithWhereUniqueWithoutConversationInput | Prisma.TicketUpdateWithWhereUniqueWithoutConversationInput[]
  updateMany?: Prisma.TicketUpdateManyWithWhereWithoutConversationInput | Prisma.TicketUpdateManyWithWhereWithoutConversationInput[]
  deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[]
}

export type TicketUncheckedUpdateManyWithoutConversationNestedInput = {
  create?: Prisma.XOR<Prisma.TicketCreateWithoutConversationInput, Prisma.TicketUncheckedCreateWithoutConversationInput> | Prisma.TicketCreateWithoutConversationInput[] | Prisma.TicketUncheckedCreateWithoutConversationInput[]
  connectOrCreate?: Prisma.TicketCreateOrConnectWithoutConversationInput | Prisma.TicketCreateOrConnectWithoutConversationInput[]
  upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutConversationInput | Prisma.TicketUpsertWithWhereUniqueWithoutConversationInput[]
  createMany?: Prisma.TicketCreateManyConversationInputEnvelope
  set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[]
  disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[]
  delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[]
  connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[]
  update?: Prisma.TicketUpdateWithWhereUniqueWithoutConversationInput | Prisma.TicketUpdateWithWhereUniqueWithoutConversationInput[]
  updateMany?: Prisma.TicketUpdateManyWithWhereWithoutConversationInput | Prisma.TicketUpdateManyWithWhereWithoutConversationInput[]
  deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[]
}

export type TicketCreateWithoutConversationInput = {
  ticketNo: string
  description: string
  ticketType: string
  status?: string
  createdAt?: Date | string
}

export type TicketUncheckedCreateWithoutConversationInput = {
  ticketNo: string
  description: string
  ticketType: string
  status?: string
  createdAt?: Date | string
}

export type TicketCreateOrConnectWithoutConversationInput = {
  where: Prisma.TicketWhereUniqueInput
  create: Prisma.XOR<Prisma.TicketCreateWithoutConversationInput, Prisma.TicketUncheckedCreateWithoutConversationInput>
}

export type TicketCreateManyConversationInputEnvelope = {
  data: Prisma.TicketCreateManyConversationInput | Prisma.TicketCreateManyConversationInput[]
  skipDuplicates?: boolean
}

export type TicketUpsertWithWhereUniqueWithoutConversationInput = {
  where: Prisma.TicketWhereUniqueInput
  update: Prisma.XOR<Prisma.TicketUpdateWithoutConversationInput, Prisma.TicketUncheckedUpdateWithoutConversationInput>
  create: Prisma.XOR<Prisma.TicketCreateWithoutConversationInput, Prisma.TicketUncheckedCreateWithoutConversationInput>
}

export type TicketUpdateWithWhereUniqueWithoutConversationInput = {
  where: Prisma.TicketWhereUniqueInput
  data: Prisma.XOR<Prisma.TicketUpdateWithoutConversationInput, Prisma.TicketUncheckedUpdateWithoutConversationInput>
}

export type TicketUpdateManyWithWhereWithoutConversationInput = {
  where: Prisma.TicketScalarWhereInput
  data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyWithoutConversationInput>
}

export type TicketScalarWhereInput = {
  AND?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[]
  OR?: Prisma.TicketScalarWhereInput[]
  NOT?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[]
  ticketNo?: Prisma.StringFilter<"Ticket"> | string
  conversationId?: Prisma.IntFilter<"Ticket"> | number
  description?: Prisma.StringFilter<"Ticket"> | string
  ticketType?: Prisma.StringFilter<"Ticket"> | string
  status?: Prisma.StringFilter<"Ticket"> | string
  createdAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string
}

export type TicketCreateManyConversationInput = {
  ticketNo: string
  description: string
  ticketType: string
  status?: string
  createdAt?: Date | string
}

export type TicketUpdateWithoutConversationInput = {
  ticketNo?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  ticketType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type TicketUncheckedUpdateWithoutConversationInput = {
  ticketNo?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  ticketType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type TicketUncheckedUpdateManyWithoutConversationInput = {
  ticketNo?: Prisma.StringFieldUpdateOperationsInput | string
  description?: Prisma.StringFieldUpdateOperationsInput | string
  ticketType?: Prisma.StringFieldUpdateOperationsInput | string
  status?: Prisma.StringFieldUpdateOperationsInput | string
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}



export type TicketSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  ticketNo?: boolean
  conversationId?: boolean
  description?: boolean
  ticketType?: boolean
  status?: boolean
  createdAt?: boolean
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}, ExtArgs["result"]["ticket"]>

export type TicketSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  ticketNo?: boolean
  conversationId?: boolean
  description?: boolean
  ticketType?: boolean
  status?: boolean
  createdAt?: boolean
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}, ExtArgs["result"]["ticket"]>

export type TicketSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  ticketNo?: boolean
  conversationId?: boolean
  description?: boolean
  ticketType?: boolean
  status?: boolean
  createdAt?: boolean
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}, ExtArgs["result"]["ticket"]>

export type TicketSelectScalar = {
  ticketNo?: boolean
  conversationId?: boolean
  description?: boolean
  ticketType?: boolean
  status?: boolean
  createdAt?: boolean
}

export type TicketOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ticketNo" | "conversationId" | "description" | "ticketType" | "status" | "createdAt", ExtArgs["result"]["ticket"]>
export type TicketInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}
export type TicketIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}
export type TicketIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  conversation?: boolean | Prisma.ConversationDefaultArgs<ExtArgs>
}

export type $TicketPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Ticket"
  objects: {
    conversation: Prisma.$ConversationPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    ticketNo: string
    conversationId: number
    description: string
    ticketType: string
    status: string
    createdAt: Date
  }, ExtArgs["result"]["ticket"]>
  composites: {}
}

export type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TicketPayload, S>

export type TicketCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TicketCountAggregateInputType | true
  }

export interface TicketDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
  findUnique<T extends TicketFindUniqueArgs>(args: Prisma.SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findFirst<T extends TicketFindFirstArgs>(args?: Prisma.SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findMany<T extends TicketFindManyArgs>(args?: Prisma.SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  create<T extends TicketCreateArgs>(args: Prisma.SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  createMany<T extends TicketCreateManyArgs>(args?: Prisma.SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  delete<T extends TicketDeleteArgs>(args: Prisma.SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  update<T extends TicketUpdateArgs>(args: Prisma.SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  deleteMany<T extends TicketDeleteManyArgs>(args?: Prisma.SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateMany<T extends TicketUpdateManyArgs>(args: Prisma.SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  upsert<T extends TicketUpsertArgs>(args: Prisma.SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  count<T extends TicketCountArgs>(
    args?: Prisma.Subset<T, TicketCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], TicketCountAggregateOutputType>
      : number
  >

  aggregate<T extends TicketAggregateArgs>(args: Prisma.Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

  groupBy<
    T extends TicketGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: TicketGroupByArgs['orderBy'] }
      : { orderBy?: TicketGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: TicketFieldRefs;
}

export interface Prisma__TicketClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  conversation<T extends Prisma.ConversationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ConversationDefaultArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface TicketFieldRefs {
  readonly ticketNo: Prisma.FieldRef<"Ticket", 'String'>
  readonly conversationId: Prisma.FieldRef<"Ticket", 'Int'>
  readonly description: Prisma.FieldRef<"Ticket", 'String'>
  readonly ticketType: Prisma.FieldRef<"Ticket", 'String'>
  readonly status: Prisma.FieldRef<"Ticket", 'String'>
  readonly createdAt: Prisma.FieldRef<"Ticket", 'DateTime'>
}
    

export type TicketFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelect<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  include?: Prisma.TicketInclude<ExtArgs> | null
  where: Prisma.TicketWhereUniqueInput
}

export type TicketFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelect<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  include?: Prisma.TicketInclude<ExtArgs> | null
  where: Prisma.TicketWhereUniqueInput
}

export type TicketFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelect<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  include?: Prisma.TicketInclude<ExtArgs> | null
  where?: Prisma.TicketWhereInput
  orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[]
  cursor?: Prisma.TicketWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[]
}

export type TicketFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelect<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  include?: Prisma.TicketInclude<ExtArgs> | null
  where?: Prisma.TicketWhereInput
  orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[]
  cursor?: Prisma.TicketWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[]
}

export type TicketFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelect<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  include?: Prisma.TicketInclude<ExtArgs> | null
  where?: Prisma.TicketWhereInput
  orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[]
  cursor?: Prisma.TicketWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[]
}

export type TicketCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelect<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  include?: Prisma.TicketInclude<ExtArgs> | null
  data: Prisma.XOR<Prisma.TicketCreateInput, Prisma.TicketUncheckedCreateInput>
}

export type TicketCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.TicketCreateManyInput | Prisma.TicketCreateManyInput[]
  skipDuplicates?: boolean
}

export type TicketCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  data: Prisma.TicketCreateManyInput | Prisma.TicketCreateManyInput[]
  skipDuplicates?: boolean
  include?: Prisma.TicketIncludeCreateManyAndReturn<ExtArgs> | null
}

export type TicketUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelect<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  include?: Prisma.TicketInclude<ExtArgs> | null
  data: Prisma.XOR<Prisma.TicketUpdateInput, Prisma.TicketUncheckedUpdateInput>
  where: Prisma.TicketWhereUniqueInput
}

export type TicketUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyInput>
  where?: Prisma.TicketWhereInput
  limit?: number
}

export type TicketUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyInput>
  where?: Prisma.TicketWhereInput
  limit?: number
  include?: Prisma.TicketIncludeUpdateManyAndReturn<ExtArgs> | null
}

export type TicketUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelect<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  include?: Prisma.TicketInclude<ExtArgs> | null
  where: Prisma.TicketWhereUniqueInput
  create: Prisma.XOR<Prisma.TicketCreateInput, Prisma.TicketUncheckedCreateInput>
  update: Prisma.XOR<Prisma.TicketUpdateInput, Prisma.TicketUncheckedUpdateInput>
}

export type TicketDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelect<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  include?: Prisma.TicketInclude<ExtArgs> | null
  where: Prisma.TicketWhereUniqueInput
}

export type TicketDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.TicketWhereInput
  limit?: number
}

export type TicketDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.TicketSelect<ExtArgs> | null
  omit?: Prisma.TicketOmit<ExtArgs> | null
  include?: Prisma.TicketInclude<ExtArgs> | null
}
