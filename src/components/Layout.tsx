interface LayoutType {
  children: any;
  className?: string;
}
const Layout = ({ children, className = '' }: LayoutType) => {
  return (
    <>
      <div
        className={`${className} w-full h-full inline-block z-0 px-32 dark:bg-dark `}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
