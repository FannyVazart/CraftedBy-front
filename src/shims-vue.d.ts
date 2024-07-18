declare module "*.vue" {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// types.d.ts
declare module '@/stores/UserStore' {
  import { Store } from 'pinia';

  interface UserState {
    token: string | null;
    isConnected: boolean;
  }

  interface UserStore extends Store {
    state: UserState;
    getToken: () => string | null;
    getIsConnected: () => boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
  }

  export function useUserStore(): UserStore;
}