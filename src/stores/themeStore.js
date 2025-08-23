import { defineStore } from "pinia";

export const usethemeStore = defineStore("themStore", {
    state : () =>  ({
        theme : "dark"
    }),
    actions : {
        setTheme(newTheme) {
            this.theme = newTheme;
            const body = document.body;
            body.setAttribute("data-bs-theme", newTheme);
        }
    }
});