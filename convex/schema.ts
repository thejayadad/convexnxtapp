import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    users: defineTable({
      email: v.string(),
      name: v.string(),
      avatar: v.string(),
      createdAt: v.string(),
    }).index("by_email", ["email"]),

})

