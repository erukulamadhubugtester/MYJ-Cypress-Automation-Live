import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://makeyourjodi.com",
    env: {
      phone: "1234455667899",
      password: "yourSecurePassword123"
    }
  },
});
