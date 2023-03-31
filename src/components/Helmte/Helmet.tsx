import { Props } from "./type";

const Helmet = ({ title, children }: Props) => {
  document.title = "Food ordering app -" + title;
  return <div className="w-100">{children}</div>;
};

export default Helmet;
