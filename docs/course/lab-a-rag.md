# Lab A: Advanced RAG & Security Knowledge Memory

## Minimum Viable Lab (30–60 min)
Sample input: Use the 3 sample documents in `labs/lab-a-samples/` (created separately).
Expected output: A retrieval function that returns the top-2 relevant chunks for a given query.
Stretch: Add citation metadata and confidence scoring.

## Goal

Build a citation-grounded retrieval workflow for security questions using local project knowledge as the first corpus.

## Corpus

- `CLAUDE.md`
- `docs/architecture.md`
- `cowork/about-me.md`
- `cowork/brand-voice.md`
- `cowork/working-preferences.md`

## Retrieval Design

1. Chunk documents by heading.
2. Score candidates with a hybrid rank:
   - lexical term overlap for exact project vocabulary
   - semantic similarity from the MCP-backed knowledge source when available
3. Filter by metadata such as source file, topic, and document type.
4. Return answers with file citations and confidence notes.

## Sample Query

Question: "Where should direct file I/O live in task-cli?"

Grounded answer: Direct file I/O belongs in the store layer, specifically `src/store/tasks.ts`. Command handlers under `src/commands/` should call the store API rather than reading or writing files directly. Citation: `CLAUDE.md`, `docs/architecture.md`.

## Acceptance Criteria

- Answers include at least one source citation.
- The response says when the corpus lacks evidence.
- Retrieval prefers project policy over generic advice.
