
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums.ts"
import type * as Prisma from "../internal/prismaNamespace.ts"

export type ToolAuditLogModel = runtime.Types.Result.DefaultSelection<Prisma.$ToolAuditLogPayload>

export type AggregateToolAuditLog = {
  _count: ToolAuditLogCountAggregateOutputType | null
  _avg: ToolAuditLogAvgAggregateOutputType | null
  _sum: ToolAuditLogSumAggregateOutputType | null
  _min: ToolAuditLogMinAggregateOutputType | null
  _max: ToolAuditLogMaxAggregateOutputType | null
}

export type ToolAuditLogAvgAggregateOutputType = {
  id: number | null
  conversationId: number | null
  retryCount: number | null
  durationMs: number | null
}

export type ToolAuditLogSumAggregateOutputType = {
  id: number | null
  conversationId: number | null
  retryCount: number | null
  durationMs: number | null
}

export type ToolAuditLogMinAggregateOutputType = {
  id: number | null
  conversationId: number | null
  toolCallId: string | null
  toolName: string | null
  toolSource: string | null
  mcpServer: string | null
  arguments: string | null
  resultSummary: string | null
  status: string | null
  errorMessage: string | null
  retryCount: number | null
  durationMs: number | null
  createdAt: Date | null
}

export type ToolAuditLogMaxAggregateOutputType = {
  id: number | null
  conversationId: number | null
  toolCallId: string | null
  toolName: string | null
  toolSource: string | null
  mcpServer: string | null
  arguments: string | null
  resultSummary: string | null
  status: string | null
  errorMessage: string | null
  retryCount: number | null
  durationMs: number | null
  createdAt: Date | null
}

export type ToolAuditLogCountAggregateOutputType = {
  id: number
  conversationId: number
  toolCallId: number
  toolName: number
  toolSource: number
  mcpServer: number
  arguments: number
  resultSummary: number
  status: number
  errorMessage: number
  retryCount: number
  durationMs: number
  createdAt: number
  _all: number
}


export type ToolAuditLogAvgAggregateInputType = {
  id?: true
  conversationId?: true
  retryCount?: true
  durationMs?: true
}

export type ToolAuditLogSumAggregateInputType = {
  id?: true
  conversationId?: true
  retryCount?: true
  durationMs?: true
}

export type ToolAuditLogMinAggregateInputType = {
  id?: true
  conversationId?: true
  toolCallId?: true
  toolName?: true
  toolSource?: true
  mcpServer?: true
  arguments?: true
  resultSummary?: true
  status?: true
  errorMessage?: true
  retryCount?: true
  durationMs?: true
  createdAt?: true
}

export type ToolAuditLogMaxAggregateInputType = {
  id?: true
  conversationId?: true
  toolCallId?: true
  toolName?: true
  toolSource?: true
  mcpServer?: true
  arguments?: true
  resultSummary?: true
  status?: true
  errorMessage?: true
  retryCount?: true
  durationMs?: true
  createdAt?: true
}

export type ToolAuditLogCountAggregateInputType = {
  id?: true
  conversationId?: true
  toolCallId?: true
  toolName?: true
  toolSource?: true
  mcpServer?: true
  arguments?: true
  resultSummary?: true
  status?: true
  errorMessage?: true
  retryCount?: true
  durationMs?: true
  createdAt?: true
  _all?: true
}

export type ToolAuditLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ToolAuditLogWhereInput
  orderBy?: Prisma.ToolAuditLogOrderByWithRelationInput | Prisma.ToolAuditLogOrderByWithRelationInput[]
  cursor?: Prisma.ToolAuditLogWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | ToolAuditLogCountAggregateInputType
  _avg?: ToolAuditLogAvgAggregateInputType
  _sum?: ToolAuditLogSumAggregateInputType
  _min?: ToolAuditLogMinAggregateInputType
  _max?: ToolAuditLogMaxAggregateInputType
}

export type GetToolAuditLogAggregateType<T extends ToolAuditLogAggregateArgs> = {
      [P in keyof T & keyof AggregateToolAuditLog]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateToolAuditLog[P]>
    : Prisma.GetScalarType<T[P], AggregateToolAuditLog[P]>
}




export type ToolAuditLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ToolAuditLogWhereInput
  orderBy?: Prisma.ToolAuditLogOrderByWithAggregationInput | Prisma.ToolAuditLogOrderByWithAggregationInput[]
  by: Prisma.ToolAuditLogScalarFieldEnum[] | Prisma.ToolAuditLogScalarFieldEnum
  having?: Prisma.ToolAuditLogScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: ToolAuditLogCountAggregateInputType | true
  _avg?: ToolAuditLogAvgAggregateInputType
  _sum?: ToolAuditLogSumAggregateInputType
  _min?: ToolAuditLogMinAggregateInputType
  _max?: ToolAuditLogMaxAggregateInputType
}

export type ToolAuditLogGroupByOutputType = {
  id: number
  conversationId: number | null
  toolCallId: string | null
  toolName: string
  toolSource: string
  mcpServer: string | null
  arguments: string | null
  resultSummary: string | null
  status: string
  errorMessage: string | null
  retryCount: number
  durationMs: number | null
  createdAt: Date
  _count: ToolAuditLogCountAggregateOutputType | null
  _avg: ToolAuditLogAvgAggregateOutputType | null
  _sum: ToolAuditLogSumAggregateOutputType | null
  _min: ToolAuditLogMinAggregateOutputType | null
  _max: ToolAuditLogMaxAggregateOutputType | null
}

export type GetToolAuditLogGroupByPayload<T extends ToolAuditLogGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<ToolAuditLogGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ToolAuditLogGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], ToolAuditLogGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], ToolAuditLogGroupByOutputType[P]>
      }
    >
  >



export type ToolAuditLogWhereInput = {
  AND?: Prisma.ToolAuditLogWhereInput | Prisma.ToolAuditLogWhereInput[]
  OR?: Prisma.ToolAuditLogWhereInput[]
  NOT?: Prisma.ToolAuditLogWhereInput | Prisma.ToolAuditLogWhereInput[]
  id?: Prisma.IntFilter<"ToolAuditLog"> | number
  conversationId?: Prisma.IntNullableFilter<"ToolAuditLog"> | number | null
  toolCallId?: Prisma.StringNullableFilter<"ToolAuditLog"> | string | null
  toolName?: Prisma.StringFilter<"ToolAuditLog"> | string
  toolSource?: Prisma.StringFilter<"ToolAuditLog"> | string
  mcpServer?: Prisma.StringNullableFilter<"ToolAuditLog"> | string | null
  arguments?: Prisma.StringNullableFilter<"ToolAuditLog"> | string | null
  resultSummary?: Prisma.StringNullableFilter<"ToolAuditLog"> | string | null
  status?: Prisma.StringFilter<"ToolAuditLog"> | string
  errorMessage?: Prisma.StringNullableFilter<"ToolAuditLog"> | string | null
  retryCount?: Prisma.IntFilter<"ToolAuditLog"> | number
  durationMs?: Prisma.IntNullableFilter<"ToolAuditLog"> | number | null
  createdAt?: Prisma.DateTimeFilter<"ToolAuditLog"> | Date | string
}

export type ToolAuditLogOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrderInput | Prisma.SortOrder
  toolCallId?: Prisma.SortOrderInput | Prisma.SortOrder
  toolName?: Prisma.SortOrder
  toolSource?: Prisma.SortOrder
  mcpServer?: Prisma.SortOrderInput | Prisma.SortOrder
  arguments?: Prisma.SortOrderInput | Prisma.SortOrder
  resultSummary?: Prisma.SortOrderInput | Prisma.SortOrder
  status?: Prisma.SortOrder
  errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder
  retryCount?: Prisma.SortOrder
  durationMs?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ToolAuditLogWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: Prisma.ToolAuditLogWhereInput | Prisma.ToolAuditLogWhereInput[]
  OR?: Prisma.ToolAuditLogWhereInput[]
  NOT?: Prisma.ToolAuditLogWhereInput | Prisma.ToolAuditLogWhereInput[]
  conversationId?: Prisma.IntNullableFilter<"ToolAuditLog"> | number | null
  toolCallId?: Prisma.StringNullableFilter<"ToolAuditLog"> | string | null
  toolName?: Prisma.StringFilter<"ToolAuditLog"> | string
  toolSource?: Prisma.StringFilter<"ToolAuditLog"> | string
  mcpServer?: Prisma.StringNullableFilter<"ToolAuditLog"> | string | null
  arguments?: Prisma.StringNullableFilter<"ToolAuditLog"> | string | null
  resultSummary?: Prisma.StringNullableFilter<"ToolAuditLog"> | string | null
  status?: Prisma.StringFilter<"ToolAuditLog"> | string
  errorMessage?: Prisma.StringNullableFilter<"ToolAuditLog"> | string | null
  retryCount?: Prisma.IntFilter<"ToolAuditLog"> | number
  durationMs?: Prisma.IntNullableFilter<"ToolAuditLog"> | number | null
  createdAt?: Prisma.DateTimeFilter<"ToolAuditLog"> | Date | string
}, "id">

export type ToolAuditLogOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrderInput | Prisma.SortOrder
  toolCallId?: Prisma.SortOrderInput | Prisma.SortOrder
  toolName?: Prisma.SortOrder
  toolSource?: Prisma.SortOrder
  mcpServer?: Prisma.SortOrderInput | Prisma.SortOrder
  arguments?: Prisma.SortOrderInput | Prisma.SortOrder
  resultSummary?: Prisma.SortOrderInput | Prisma.SortOrder
  status?: Prisma.SortOrder
  errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder
  retryCount?: Prisma.SortOrder
  durationMs?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.ToolAuditLogCountOrderByAggregateInput
  _avg?: Prisma.ToolAuditLogAvgOrderByAggregateInput
  _max?: Prisma.ToolAuditLogMaxOrderByAggregateInput
  _min?: Prisma.ToolAuditLogMinOrderByAggregateInput
  _sum?: Prisma.ToolAuditLogSumOrderByAggregateInput
}

export type ToolAuditLogScalarWhereWithAggregatesInput = {
  AND?: Prisma.ToolAuditLogScalarWhereWithAggregatesInput | Prisma.ToolAuditLogScalarWhereWithAggregatesInput[]
  OR?: Prisma.ToolAuditLogScalarWhereWithAggregatesInput[]
  NOT?: Prisma.ToolAuditLogScalarWhereWithAggregatesInput | Prisma.ToolAuditLogScalarWhereWithAggregatesInput[]
  id?: Prisma.IntWithAggregatesFilter<"ToolAuditLog"> | number
  conversationId?: Prisma.IntNullableWithAggregatesFilter<"ToolAuditLog"> | number | null
  toolCallId?: Prisma.StringNullableWithAggregatesFilter<"ToolAuditLog"> | string | null
  toolName?: Prisma.StringWithAggregatesFilter<"ToolAuditLog"> | string
  toolSource?: Prisma.StringWithAggregatesFilter<"ToolAuditLog"> | string
  mcpServer?: Prisma.StringNullableWithAggregatesFilter<"ToolAuditLog"> | string | null
  arguments?: Prisma.StringNullableWithAggregatesFilter<"ToolAuditLog"> | string | null
  resultSummary?: Prisma.StringNullableWithAggregatesFilter<"ToolAuditLog"> | string | null
  status?: Prisma.StringWithAggregatesFilter<"ToolAuditLog"> | string
  errorMessage?: Prisma.StringNullableWithAggregatesFilter<"ToolAuditLog"> | string | null
  retryCount?: Prisma.IntWithAggregatesFilter<"ToolAuditLog"> | number
  durationMs?: Prisma.IntNullableWithAggregatesFilter<"ToolAuditLog"> | number | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"ToolAuditLog"> | Date | string
}

export type ToolAuditLogCreateInput = {
  conversationId?: number | null
  toolCallId?: string | null
  toolName: string
  toolSource: string
  mcpServer?: string | null
  arguments?: string | null
  resultSummary?: string | null
  status: string
  errorMessage?: string | null
  retryCount?: number
  durationMs?: number | null
  createdAt?: Date | string
}

export type ToolAuditLogUncheckedCreateInput = {
  id?: number
  conversationId?: number | null
  toolCallId?: string | null
  toolName: string
  toolSource: string
  mcpServer?: string | null
  arguments?: string | null
  resultSummary?: string | null
  status: string
  errorMessage?: string | null
  retryCount?: number
  durationMs?: number | null
  createdAt?: Date | string
}

export type ToolAuditLogUpdateInput = {
  conversationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolName?: Prisma.StringFieldUpdateOperationsInput | string
  toolSource?: Prisma.StringFieldUpdateOperationsInput | string
  mcpServer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  arguments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resultSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retryCount?: Prisma.IntFieldUpdateOperationsInput | number
  durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ToolAuditLogUncheckedUpdateInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  conversationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolName?: Prisma.StringFieldUpdateOperationsInput | string
  toolSource?: Prisma.StringFieldUpdateOperationsInput | string
  mcpServer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  arguments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resultSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retryCount?: Prisma.IntFieldUpdateOperationsInput | number
  durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ToolAuditLogCreateManyInput = {
  id?: number
  conversationId?: number | null
  toolCallId?: string | null
  toolName: string
  toolSource: string
  mcpServer?: string | null
  arguments?: string | null
  resultSummary?: string | null
  status: string
  errorMessage?: string | null
  retryCount?: number
  durationMs?: number | null
  createdAt?: Date | string
}

export type ToolAuditLogUpdateManyMutationInput = {
  conversationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolName?: Prisma.StringFieldUpdateOperationsInput | string
  toolSource?: Prisma.StringFieldUpdateOperationsInput | string
  mcpServer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  arguments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resultSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retryCount?: Prisma.IntFieldUpdateOperationsInput | number
  durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ToolAuditLogUncheckedUpdateManyInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  conversationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  toolCallId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  toolName?: Prisma.StringFieldUpdateOperationsInput | string
  toolSource?: Prisma.StringFieldUpdateOperationsInput | string
  mcpServer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  arguments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  resultSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  status?: Prisma.StringFieldUpdateOperationsInput | string
  errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  retryCount?: Prisma.IntFieldUpdateOperationsInput | number
  durationMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}

export type ToolAuditLogCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  toolCallId?: Prisma.SortOrder
  toolName?: Prisma.SortOrder
  toolSource?: Prisma.SortOrder
  mcpServer?: Prisma.SortOrder
  arguments?: Prisma.SortOrder
  resultSummary?: Prisma.SortOrder
  status?: Prisma.SortOrder
  errorMessage?: Prisma.SortOrder
  retryCount?: Prisma.SortOrder
  durationMs?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ToolAuditLogAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  retryCount?: Prisma.SortOrder
  durationMs?: Prisma.SortOrder
}

export type ToolAuditLogMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  toolCallId?: Prisma.SortOrder
  toolName?: Prisma.SortOrder
  toolSource?: Prisma.SortOrder
  mcpServer?: Prisma.SortOrder
  arguments?: Prisma.SortOrder
  resultSummary?: Prisma.SortOrder
  status?: Prisma.SortOrder
  errorMessage?: Prisma.SortOrder
  retryCount?: Prisma.SortOrder
  durationMs?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ToolAuditLogMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  toolCallId?: Prisma.SortOrder
  toolName?: Prisma.SortOrder
  toolSource?: Prisma.SortOrder
  mcpServer?: Prisma.SortOrder
  arguments?: Prisma.SortOrder
  resultSummary?: Prisma.SortOrder
  status?: Prisma.SortOrder
  errorMessage?: Prisma.SortOrder
  retryCount?: Prisma.SortOrder
  durationMs?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}

export type ToolAuditLogSumOrderByAggregateInput = {
  id?: Prisma.SortOrder
  conversationId?: Prisma.SortOrder
  retryCount?: Prisma.SortOrder
  durationMs?: Prisma.SortOrder
}



export type ToolAuditLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  toolCallId?: boolean
  toolName?: boolean
  toolSource?: boolean
  mcpServer?: boolean
  arguments?: boolean
  resultSummary?: boolean
  status?: boolean
  errorMessage?: boolean
  retryCount?: boolean
  durationMs?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["toolAuditLog"]>

export type ToolAuditLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  toolCallId?: boolean
  toolName?: boolean
  toolSource?: boolean
  mcpServer?: boolean
  arguments?: boolean
  resultSummary?: boolean
  status?: boolean
  errorMessage?: boolean
  retryCount?: boolean
  durationMs?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["toolAuditLog"]>

export type ToolAuditLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  conversationId?: boolean
  toolCallId?: boolean
  toolName?: boolean
  toolSource?: boolean
  mcpServer?: boolean
  arguments?: boolean
  resultSummary?: boolean
  status?: boolean
  errorMessage?: boolean
  retryCount?: boolean
  durationMs?: boolean
  createdAt?: boolean
}, ExtArgs["result"]["toolAuditLog"]>

export type ToolAuditLogSelectScalar = {
  id?: boolean
  conversationId?: boolean
  toolCallId?: boolean
  toolName?: boolean
  toolSource?: boolean
  mcpServer?: boolean
  arguments?: boolean
  resultSummary?: boolean
  status?: boolean
  errorMessage?: boolean
  retryCount?: boolean
  durationMs?: boolean
  createdAt?: boolean
}

export type ToolAuditLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "conversationId" | "toolCallId" | "toolName" | "toolSource" | "mcpServer" | "arguments" | "resultSummary" | "status" | "errorMessage" | "retryCount" | "durationMs" | "createdAt", ExtArgs["result"]["toolAuditLog"]>

export type $ToolAuditLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "ToolAuditLog"
  objects: {}
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: number
    conversationId: number | null
    toolCallId: string | null
    toolName: string
    toolSource: string
    mcpServer: string | null
    arguments: string | null
    resultSummary: string | null
    status: string
    errorMessage: string | null
    retryCount: number
    durationMs: number | null
    createdAt: Date
  }, ExtArgs["result"]["toolAuditLog"]>
  composites: {}
}

export type ToolAuditLogGetPayload<S extends boolean | null | undefined | ToolAuditLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload, S>

export type ToolAuditLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<ToolAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ToolAuditLogCountAggregateInputType | true
  }

export interface ToolAuditLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToolAuditLog'], meta: { name: 'ToolAuditLog' } }
  findUnique<T extends ToolAuditLogFindUniqueArgs>(args: Prisma.SelectSubset<T, ToolAuditLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ToolAuditLogClient<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findUniqueOrThrow<T extends ToolAuditLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ToolAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ToolAuditLogClient<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findFirst<T extends ToolAuditLogFindFirstArgs>(args?: Prisma.SelectSubset<T, ToolAuditLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__ToolAuditLogClient<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  findFirstOrThrow<T extends ToolAuditLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ToolAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ToolAuditLogClient<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  findMany<T extends ToolAuditLogFindManyArgs>(args?: Prisma.SelectSubset<T, ToolAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  create<T extends ToolAuditLogCreateArgs>(args: Prisma.SelectSubset<T, ToolAuditLogCreateArgs<ExtArgs>>): Prisma.Prisma__ToolAuditLogClient<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  createMany<T extends ToolAuditLogCreateManyArgs>(args?: Prisma.SelectSubset<T, ToolAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  createManyAndReturn<T extends ToolAuditLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ToolAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

  delete<T extends ToolAuditLogDeleteArgs>(args: Prisma.SelectSubset<T, ToolAuditLogDeleteArgs<ExtArgs>>): Prisma.Prisma__ToolAuditLogClient<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  update<T extends ToolAuditLogUpdateArgs>(args: Prisma.SelectSubset<T, ToolAuditLogUpdateArgs<ExtArgs>>): Prisma.Prisma__ToolAuditLogClient<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  deleteMany<T extends ToolAuditLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, ToolAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateMany<T extends ToolAuditLogUpdateManyArgs>(args: Prisma.SelectSubset<T, ToolAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

  updateManyAndReturn<T extends ToolAuditLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ToolAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

  upsert<T extends ToolAuditLogUpsertArgs>(args: Prisma.SelectSubset<T, ToolAuditLogUpsertArgs<ExtArgs>>): Prisma.Prisma__ToolAuditLogClient<runtime.Types.Result.GetResult<Prisma.$ToolAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  count<T extends ToolAuditLogCountArgs>(
    args?: Prisma.Subset<T, ToolAuditLogCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], ToolAuditLogCountAggregateOutputType>
      : number
  >

  aggregate<T extends ToolAuditLogAggregateArgs>(args: Prisma.Subset<T, ToolAuditLogAggregateArgs>): Prisma.PrismaPromise<GetToolAuditLogAggregateType<T>>

  groupBy<
    T extends ToolAuditLogGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: ToolAuditLogGroupByArgs['orderBy'] }
      : { orderBy?: ToolAuditLogGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, ToolAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: ToolAuditLogFieldRefs;
}

export interface Prisma__ToolAuditLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface ToolAuditLogFieldRefs {
  readonly id: Prisma.FieldRef<"ToolAuditLog", 'Int'>
  readonly conversationId: Prisma.FieldRef<"ToolAuditLog", 'Int'>
  readonly toolCallId: Prisma.FieldRef<"ToolAuditLog", 'String'>
  readonly toolName: Prisma.FieldRef<"ToolAuditLog", 'String'>
  readonly toolSource: Prisma.FieldRef<"ToolAuditLog", 'String'>
  readonly mcpServer: Prisma.FieldRef<"ToolAuditLog", 'String'>
  readonly arguments: Prisma.FieldRef<"ToolAuditLog", 'String'>
  readonly resultSummary: Prisma.FieldRef<"ToolAuditLog", 'String'>
  readonly status: Prisma.FieldRef<"ToolAuditLog", 'String'>
  readonly errorMessage: Prisma.FieldRef<"ToolAuditLog", 'String'>
  readonly retryCount: Prisma.FieldRef<"ToolAuditLog", 'Int'>
  readonly durationMs: Prisma.FieldRef<"ToolAuditLog", 'Int'>
  readonly createdAt: Prisma.FieldRef<"ToolAuditLog", 'DateTime'>
}
    

export type ToolAuditLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelect<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  where: Prisma.ToolAuditLogWhereUniqueInput
}

export type ToolAuditLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelect<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  where: Prisma.ToolAuditLogWhereUniqueInput
}

export type ToolAuditLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelect<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  where?: Prisma.ToolAuditLogWhereInput
  orderBy?: Prisma.ToolAuditLogOrderByWithRelationInput | Prisma.ToolAuditLogOrderByWithRelationInput[]
  cursor?: Prisma.ToolAuditLogWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ToolAuditLogScalarFieldEnum | Prisma.ToolAuditLogScalarFieldEnum[]
}

export type ToolAuditLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelect<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  where?: Prisma.ToolAuditLogWhereInput
  orderBy?: Prisma.ToolAuditLogOrderByWithRelationInput | Prisma.ToolAuditLogOrderByWithRelationInput[]
  cursor?: Prisma.ToolAuditLogWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ToolAuditLogScalarFieldEnum | Prisma.ToolAuditLogScalarFieldEnum[]
}

export type ToolAuditLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelect<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  where?: Prisma.ToolAuditLogWhereInput
  orderBy?: Prisma.ToolAuditLogOrderByWithRelationInput | Prisma.ToolAuditLogOrderByWithRelationInput[]
  cursor?: Prisma.ToolAuditLogWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ToolAuditLogScalarFieldEnum | Prisma.ToolAuditLogScalarFieldEnum[]
}

export type ToolAuditLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelect<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.ToolAuditLogCreateInput, Prisma.ToolAuditLogUncheckedCreateInput>
}

export type ToolAuditLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.ToolAuditLogCreateManyInput | Prisma.ToolAuditLogCreateManyInput[]
  skipDuplicates?: boolean
}

export type ToolAuditLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  data: Prisma.ToolAuditLogCreateManyInput | Prisma.ToolAuditLogCreateManyInput[]
  skipDuplicates?: boolean
}

export type ToolAuditLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelect<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.ToolAuditLogUpdateInput, Prisma.ToolAuditLogUncheckedUpdateInput>
  where: Prisma.ToolAuditLogWhereUniqueInput
}

export type ToolAuditLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.ToolAuditLogUpdateManyMutationInput, Prisma.ToolAuditLogUncheckedUpdateManyInput>
  where?: Prisma.ToolAuditLogWhereInput
  limit?: number
}

export type ToolAuditLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.ToolAuditLogUpdateManyMutationInput, Prisma.ToolAuditLogUncheckedUpdateManyInput>
  where?: Prisma.ToolAuditLogWhereInput
  limit?: number
}

export type ToolAuditLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelect<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  where: Prisma.ToolAuditLogWhereUniqueInput
  create: Prisma.XOR<Prisma.ToolAuditLogCreateInput, Prisma.ToolAuditLogUncheckedCreateInput>
  update: Prisma.XOR<Prisma.ToolAuditLogUpdateInput, Prisma.ToolAuditLogUncheckedUpdateInput>
}

export type ToolAuditLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelect<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
  where: Prisma.ToolAuditLogWhereUniqueInput
}

export type ToolAuditLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.ToolAuditLogWhereInput
  limit?: number
}

export type ToolAuditLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.ToolAuditLogSelect<ExtArgs> | null
  omit?: Prisma.ToolAuditLogOmit<ExtArgs> | null
}
