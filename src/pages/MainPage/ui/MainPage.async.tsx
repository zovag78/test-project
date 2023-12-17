import { lazy } from "react";

export const MainPageAsync = lazy(async () => ({ default: (await import("./MainPage")).MainPage }));