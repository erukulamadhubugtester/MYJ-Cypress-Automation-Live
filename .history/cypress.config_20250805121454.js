import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://makeyourjodi.com",
    env: {
      phone: "91",
      password: "yourSecurePassword123"
    }
  },
});
