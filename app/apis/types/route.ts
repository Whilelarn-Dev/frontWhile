import { ReactElement, LazyExoticComponent } from 'react';

export type BaseRouteType = {
  header: string;
  icon: JSX.Element;
  name: string;
  path: string;
  element: ReactElement | LazyExoticComponent<any>;
  sort?: number
};

export type ParentRouteType = {
  icon: JSX.Element;
  name: string;
  children: BaseRouteType[];
  sort?: number
};

export type RouteType = {
  header: string;
  path: string;
  element: ReactElement | LazyExoticComponent<any>;
};

export type RoutesType = BaseRouteType | RouteType | ParentRouteType;

export type ViewRoutesType = BaseRouteType | RouteType;

export type SideBarRouteType = BaseRouteType | ParentRouteType;
