CREATE TABLE "Conversation" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "summary" TEXT,
    "summaryUptoMsgId" INTEGER,
    "layer1FromMsgId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ConversationSummary" (
    "id" SERIAL NOT NULL,
    "conversationId" INTEGER NOT NULL,
    "seq" INTEGER NOT NULL,
    "fromMsgId" INTEGER NOT NULL,
    "uptoMsgId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ConversationSummary_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "conversationId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT,
    "toolCalls" TEXT,
    "toolCallId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Ticket" (
    "ticketNo" TEXT NOT NULL,
    "conversationId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "ticketType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("ticketNo")
);

CREATE TABLE "KnowledgeChunk" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "questions" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "sectionPath" TEXT,
    "contentType" TEXT,
    "isKeyClause" INTEGER NOT NULL DEFAULT 0,
    "prevChunkId" INTEGER,
    "nextChunkId" INTEGER,
    "vectorId" TEXT,
    "vectorizeStatus" TEXT NOT NULL DEFAULT 'pending',
    "embedding" TEXT,
    "embeddingModel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KnowledgeChunk_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "QaExtractionStaging" (
    "id" SERIAL NOT NULL,
    "batchNo" TEXT NOT NULL,
    "sourceRef" TEXT,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'extracted',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QaExtractionStaging_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ToolAuditLog" (
    "id" SERIAL NOT NULL,
    "conversationId" INTEGER,
    "toolCallId" TEXT,
    "toolName" TEXT NOT NULL,
    "toolSource" TEXT NOT NULL,
    "mcpServer" TEXT,
    "arguments" TEXT,
    "resultSummary" TEXT,
    "status" TEXT NOT NULL,
    "errorMessage" TEXT,
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "durationMs" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ToolAuditLog_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "LowConfidenceQuestion" (
    "id" SERIAL NOT NULL,
    "conversationId" INTEGER,
    "rawQuestion" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "reason" TEXT,
    "retrievedChunks" TEXT,
    "matchedReviewId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LowConfidenceQuestion_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ReviewQueue" (
    "id" SERIAL NOT NULL,
    "normalizedQuestion" TEXT NOT NULL,
    "aiSuggestedAnswer" TEXT,
    "occurrenceCount" INTEGER NOT NULL DEFAULT 1,
    "reviewStatus" TEXT NOT NULL DEFAULT 'pending_review',
    "approvedAnswer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReviewQueue_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "EvalRun" (
    "id" SERIAL NOT NULL,
    "triggeredBy" TEXT NOT NULL DEFAULT 'scheduled',
    "datasetSize" INTEGER NOT NULL,
    "metrics" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EvalRun_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "FaithCase" (
    "id" SERIAL NOT NULL,
    "evalId" TEXT NOT NULL,
    "bucket" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "strategy" TEXT NOT NULL DEFAULT 'hybrid_rerank',
    "answer" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "citations" TEXT,
    "judgeModel" TEXT,
    "status" TEXT NOT NULL DEFAULT 'unresolved',
    "seenCount" INTEGER NOT NULL DEFAULT 1,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolution" TEXT,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "FaithCase_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "TopicClassification" (
    "id" SERIAL NOT NULL,
    "questionId" INTEGER NOT NULL,
    "labels" TEXT NOT NULL,
    "classifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TopicClassification_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Conversation_userId_idx" ON "Conversation"("userId");

CREATE INDEX "ConversationSummary_conversationId_uptoMsgId_idx" ON "ConversationSummary"("conversationId", "uptoMsgId");

CREATE UNIQUE INDEX "ConversationSummary_conversationId_seq_key" ON "ConversationSummary"("conversationId", "seq");

CREATE INDEX "Message_conversationId_idx" ON "Message"("conversationId");

CREATE INDEX "Faq_category_idx" ON "Faq"("category");

CREATE INDEX "Ticket_conversationId_idx" ON "Ticket"("conversationId");

CREATE INDEX "LowConfidenceQuestion_conversationId_idx" ON "LowConfidenceQuestion"("conversationId");

CREATE UNIQUE INDEX "FaithCase_evalId_key" ON "FaithCase"("evalId");

CREATE UNIQUE INDEX "TopicClassification_questionId_key" ON "TopicClassification"("questionId");

ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "LowConfidenceQuestion" ADD CONSTRAINT "LowConfidenceQuestion_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "LowConfidenceQuestion" ADD CONSTRAINT "LowConfidenceQuestion_matchedReviewId_fkey" FOREIGN KEY ("matchedReviewId") REFERENCES "ReviewQueue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "TopicClassification" ADD CONSTRAINT "TopicClassification_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "LowConfidenceQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
