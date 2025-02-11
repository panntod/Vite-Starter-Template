import type { resources } from "./lib/i18n";

declare module "i18n" {
  interface CustomTypeOptions {
    resources: (typeof resources)["en"];
  }
}
