import { Routes } from "@angular/router";
import { Home } from "@kanbano/home";
import { NotFound } from "@kanbano/not-found/not-found";

export const routes: Routes = [
    {
        path: "",
        component: Home,
    },
    {
        path: "**",
        component: NotFound,
    },
];
