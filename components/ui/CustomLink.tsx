// import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

const CustomLink = ({
  href,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  href: string;
  children: JSX.Element;
  className: string;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}) => {
  // const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
    // router.push(href);
  };

  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default CustomLink;
