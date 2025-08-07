import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://makeyourjodi.com",
    env: {
      phone: "6303481147",
      password: "Madhu878@",
    },
  },
});
