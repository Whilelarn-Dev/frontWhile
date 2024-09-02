import { LocalStorageEnum } from '../enums/LocalStorage';
import { BaseRoute } from '../../../Routes';
import { RoutesType, ParentRouteType } from '../types/route';

// Helper function to check if a route has children
const hasChildren = (route: RoutesType): route is ParentRouteType => {
  return 'children' in route;
};

export const getTitleFromRoute = (path: string): string | undefined => {
  const AppRoutes: Record<string, string> = {};

  const addRoutesToDictionary = (routes: RoutesType[]) => {
    routes.forEach((route) => {
      if ('header' in route) {
        AppRoutes[route.path] = route.header;
      }

      if (hasChildren(route)) {
        addRoutesToDictionary(route.children);
      }
    });
  };

  addRoutesToDictionary(BaseRoute as RoutesType[]);

  const header = AppRoutes[path];

  if (header) {
    return `${LocalStorageEnum.PROJECT_NAME} | ${header}`;
  }
  return undefined;
};
