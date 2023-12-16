import { AboutPage } from "@/pages/AboutPage"
import { MainPage } from "@/pages/MainPage"

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about'
}
export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about'
};

type RoutePath = /*unresolved*/ any

export const routeConfig: Record<AppRouters, RoutePath> = {
  [AppRouters.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRouters.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  }
}