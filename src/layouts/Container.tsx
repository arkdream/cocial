type Props = {
  children: React.ReactNode;
};

export const Container = (props: Props) => {
  const { children } = props;
  return <div className="p-4 bg-theme-background-light dark:bg-theme-background-dark">{children}</div>;
};
