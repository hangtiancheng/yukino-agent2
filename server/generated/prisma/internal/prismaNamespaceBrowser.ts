
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 

import * as runtime from "@prisma/client/runtime/index-browser"

export type * from '../models.ts'
export type * from './prismaNamespace.ts'

export const Decimal = runtime.Decimal


export const NullTypes = {
  DbNull: runtime.NullTypes.DbNull as (new (secret: never) => typeof runtime.DbNull),
  JsonNull: runtime.NullTypes.JsonNull as (new (secret: never) => typeof runtime.JsonNull),
  AnyNull: runtime.NullTypes.AnyNull as (new (secret: never) => typeof runtime.AnyNull),
}
export const DbNull = runtime.DbNull

export const JsonNull = runtime.JsonNull

export const AnyNull = runtime.AnyNull


export const ModelName = {
  Conversation: 'Conversation',
  ConversationSummary: 'ConversationSummary',
  Message: 'Message',
  Faq: 'Faq',
  Ticket: 'Ticket',
  KnowledgeChunk: 'KnowledgeChunk',
  QaExtractionStaging: 'QaExtractionStaging',
  ToolAuditLog: 'ToolAuditLog',
  LowConfidenceQuestion: 'LowConfidenceQuestion',
  ReviewQueue: 'ReviewQueue',
  EvalRun: 'EvalRun',
  FaithCase: 'FaithCase'
} as const

export type ModelName = (typeof ModelName)[keyof typeof ModelName]


export const TransactionIsolationLevel = runtime.makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
} as const)

export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


export const ConversationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  status: 'status',
  summary: 'summary',
  summaryUptoMsgId: 'summaryUptoMsgId',
  layer1FromMsgId: 'layer1FromMsgId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


export const ConversationSummaryScalarFieldEnum = {
  id: 'id',
  conversationId: 'conversationId',
  seq: 'seq',
  fromMsgId: 'fromMsgId',
  uptoMsgId: 'uptoMsgId',
  content: 'content',
  createdAt: 'createdAt'
} as const

export type ConversationSummaryScalarFieldEnum = (typeof ConversationSummaryScalarFieldEnum)[keyof typeof ConversationSummaryScalarFieldEnum]


export const MessageScalarFieldEnum = {
  id: 'id',
  conversationId: 'conversationId',
  role: 'role',
  content: 'content',
  toolCalls: 'toolCalls',
  toolCallId: 'toolCallId',
  createdAt: 'createdAt'
} as const

export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


export const FaqScalarFieldEnum = {
  id: 'id',
  question: 'question',
  answer: 'answer',
  category: 'category',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type FaqScalarFieldEnum = (typeof FaqScalarFieldEnum)[keyof typeof FaqScalarFieldEnum]


export const TicketScalarFieldEnum = {
  ticketNo: 'ticketNo',
  conversationId: 'conversationId',
  description: 'description',
  ticketType: 'ticketType',
  status: 'status',
  createdAt: 'createdAt'
} as const

export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


export const KnowledgeChunkScalarFieldEnum = {
  id: 'id',
  category: 'category',
  questions: 'questions',
  answer: 'answer',
  sectionPath: 'sectionPath',
  contentType: 'contentType',
  isKeyClause: 'isKeyClause',
  prevChunkId: 'prevChunkId',
  nextChunkId: 'nextChunkId',
  vectorId: 'vectorId',
  vectorizeStatus: 'vectorizeStatus',
  embedding: 'embedding',
  embeddingModel: 'embeddingModel',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type KnowledgeChunkScalarFieldEnum = (typeof KnowledgeChunkScalarFieldEnum)[keyof typeof KnowledgeChunkScalarFieldEnum]


export const QaExtractionStagingScalarFieldEnum = {
  id: 'id',
  batchNo: 'batchNo',
  sourceRef: 'sourceRef',
  question: 'question',
  answer: 'answer',
  status: 'status',
  createdAt: 'createdAt'
} as const

export type QaExtractionStagingScalarFieldEnum = (typeof QaExtractionStagingScalarFieldEnum)[keyof typeof QaExtractionStagingScalarFieldEnum]


export const ToolAuditLogScalarFieldEnum = {
  id: 'id',
  conversationId: 'conversationId',
  toolCallId: 'toolCallId',
  toolName: 'toolName',
  toolSource: 'toolSource',
  mcpServer: 'mcpServer',
  arguments: 'arguments',
  resultSummary: 'resultSummary',
  status: 'status',
  errorMessage: 'errorMessage',
  retryCount: 'retryCount',
  durationMs: 'durationMs',
  createdAt: 'createdAt'
} as const

export type ToolAuditLogScalarFieldEnum = (typeof ToolAuditLogScalarFieldEnum)[keyof typeof ToolAuditLogScalarFieldEnum]


export const LowConfidenceQuestionScalarFieldEnum = {
  id: 'id',
  conversationId: 'conversationId',
  rawQuestion: 'rawQuestion',
  source: 'source',
  reason: 'reason',
  retrievedChunks: 'retrievedChunks',
  matchedReviewId: 'matchedReviewId',
  createdAt: 'createdAt'
} as const

export type LowConfidenceQuestionScalarFieldEnum = (typeof LowConfidenceQuestionScalarFieldEnum)[keyof typeof LowConfidenceQuestionScalarFieldEnum]


export const ReviewQueueScalarFieldEnum = {
  id: 'id',
  normalizedQuestion: 'normalizedQuestion',
  aiSuggestedAnswer: 'aiSuggestedAnswer',
  occurrenceCount: 'occurrenceCount',
  reviewStatus: 'reviewStatus',
  approvedAnswer: 'approvedAnswer',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
} as const

export type ReviewQueueScalarFieldEnum = (typeof ReviewQueueScalarFieldEnum)[keyof typeof ReviewQueueScalarFieldEnum]


export const EvalRunScalarFieldEnum = {
  id: 'id',
  triggeredBy: 'triggeredBy',
  datasetSize: 'datasetSize',
  metrics: 'metrics',
  createdAt: 'createdAt'
} as const

export type EvalRunScalarFieldEnum = (typeof EvalRunScalarFieldEnum)[keyof typeof EvalRunScalarFieldEnum]


export const FaithCaseScalarFieldEnum = {
  id: 'id',
  evalId: 'evalId',
  bucket: 'bucket',
  query: 'query',
  strategy: 'strategy',
  answer: 'answer',
  reason: 'reason',
  citations: 'citations',
  judgeModel: 'judgeModel',
  status: 'status',
  seenCount: 'seenCount',
  firstSeenAt: 'firstSeenAt',
  lastSeenAt: 'lastSeenAt',
  resolution: 'resolution',
  resolvedAt: 'resolvedAt'
} as const

export type FaithCaseScalarFieldEnum = (typeof FaithCaseScalarFieldEnum)[keyof typeof FaithCaseScalarFieldEnum]


export const SortOrder = {
  asc: 'asc',
  desc: 'desc'
} as const

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


export const QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
} as const

export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


export const NullsOrder = {
  first: 'first',
  last: 'last'
} as const

export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

