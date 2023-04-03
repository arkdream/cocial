export function isActive(routeName: string, pathName: string): boolean {
  // check if the first part of the route is the same as the path
  // if the path is empty, then we are on the home page

  if (pathName === "") return routeName === "/";
  if (pathName === "/") return routeName === "/";
  else {
    const splitRoute = routeName.split("/");
    const splitPath = pathName.split("/");
    return splitRoute[1] === splitPath[1];
  }
}