import React, { useRef, createContext, useContext, useCallback, useSyncExternalStore } from "react";

type TStoreData<T> = {
  get: () => T;
  set: (value: Partial<T>) => void;
  subscribe: (callback: VoidFunction) => VoidFunction;
};

type TUseStore<T, Store> = {
  state: T;
  dispatch: (value: Partial<Store>) => void;
};

export default function createFastContext<TStore>(initialState: TStore) {
  const useStoreHandler = (): TStoreData<TStore> => {
    const store = useRef(initialState);
    const get = useCallback(() => store.current, []);
    const subscribers = useRef(new Set<VoidFunction>());

    const set = useCallback((value: Partial<TStore>) => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback) => callback());
    }, []);

    const subscribe = useCallback((callback: VoidFunction) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  };

  const StoreContext = createContext<TStoreData<TStore> | null>(null);

  const Provider = ({ children }: { children: React.ReactNode }) => {
    return <StoreContext.Provider value={useStoreHandler()}>{children}</StoreContext.Provider>;
  };

  function useStore<T>(selector: (store: TStore) => T): TUseStore<T, TStore> {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error("You are trying to use this hook outside of the Provider");
    }

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(initialState)
    );

    return { state, dispatch: store.set };
  }

  return {
    Provider,
    useStore,
  };
}
