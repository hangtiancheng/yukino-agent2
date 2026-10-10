import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "mcp-logistics": "src/mcp-servers/logistics.ts",
    "mcp-aftersales": "src/mcp-servers/aftersales.ts",
  },
  format: ["esm"],
  platform: "node",
  target: "node22",
  sourcemap: true,
  clean: true,
  // Builtin tools register themselves via module side effects; never let
  // tree-shaking drop those registrations.
  treeshake: false,
});
