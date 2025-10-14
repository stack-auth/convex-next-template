import { getConvexProvidersConfig } from "@stackframe/stack";

const config = {
  providers: getConvexProvidersConfig({
    projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
  }),
};

export default config;