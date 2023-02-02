import createFastContext from "./createFastContext";

export type ContextStore = {
  name: string;
  secondName: string;
  field: Exclude<keyof ContextStore, "field">;
};

export const { Provider, useStore } = createFastContext<ContextStore>({
  name: "",
  secondName: "",
  field: "name",
});
