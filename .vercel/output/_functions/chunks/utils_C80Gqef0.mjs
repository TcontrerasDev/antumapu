function getBreadcrumbs(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const formatName = (name) => {
    const withSpaces = name.replace(/-/g, " ");
    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
  };
  return segments.map((segment, index) => {
    const url = `/${segments.slice(0, index + 1).join("/")}`;
    return {
      name: formatName(segment),
      url,
      isLast: index === segments.length - 1
    };
  });
}

export { getBreadcrumbs as g };
