
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 

import * as process from 'node:process'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
globalThis['__dirname'] = path.dirname(fileURLToPath(import.meta.url))

import * as runtime from "@prisma/client/runtime/client"
import * as $Enums from "./enums.ts"
import * as $Class from "./internal/class.ts"
import * as Prisma from "./internal/prismaNamespace.ts"

export * as $Enums from './enums.ts'
export * from "./enums.ts"
export const PrismaClient = $Class.getPrismaClientClass()
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>
export { Prisma }

export type Conversation = Prisma.ConversationModel
export type ConversationSummary = Prisma.ConversationSummaryModel
export type Message = Prisma.MessageModel
export type Faq = Prisma.FaqModel
export type Ticket = Prisma.TicketModel
export type KnowledgeChunk = Prisma.KnowledgeChunkModel
export type QaExtractionStaging = Prisma.QaExtractionStagingModel
export type ToolAuditLog = Prisma.ToolAuditLogModel
export type LowConfidenceQuestion = Prisma.LowConfidenceQuestionModel
export type ReviewQueue = Prisma.ReviewQueueModel
export type EvalRun = Prisma.EvalRunModel
export type FaithCase = Prisma.FaithCaseModel
