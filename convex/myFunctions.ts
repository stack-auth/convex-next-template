import { mutation } from "./_generated/server";
import { stackServerApp } from "../stack/server";

export const requiresUser = mutation({
  handler: async (ctx) => {
    const user = await stackServerApp.getPartialUser({ from: "convex", ctx });
    if (!user) {
      throw new Error("User not found");
    }
    // perform some action that requires a user to be signed in
    return user;
  },
});