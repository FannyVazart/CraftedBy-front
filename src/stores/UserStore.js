import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('auth_token') || null,
    isConnected: !!localStorage.getItem('auth_token'),
    user: {
      name: '',
      email: '',
    },
  }),
  getters: {
    getToken() {
      return this.token;
    },
    getIsConnected() {
      return this.isConnected;
    },
    getName() {
      return this.user.name;
    },
    getEmail() {
      return this.user.email;
    },
  },
  actions: {
    login(token) {
      this.token = token;
      this.isConnected = true;
      localStorage.setItem('auth_token', token);
    },
    logout() {
      this.token = null;
      this.isConnected = false;
      localStorage.removeItem('auth_token');
      const router = useRouter();
      router.push('/');
    },
    fetchUser() {
      if (this.token) {
        // Simuler la récupération des données utilisateur
        this.user = {
          name: 'exampleUser',
          email: 'user@example.com',
          // Autres informations utilisateur si nécessaire
        };
      }
    },
    updateUser(user) {
      if (this.token) {
        // Mettre à jour les détails de l'utilisateur
        this.user = user;
      }
    },
    updateProfile(user) {
      if (this.token) {
        // Simuler la mise à jour du profil utilisateur
        this.user = {
          ...this.user,
          name: user.name,
          email: user.email,
        };
      }
    },
  },
  persist: true,
});
