import * as constants from "./constants";

const Footer = () => {
  return (
    <div>
      <div className="text-18">{constants.TITLE}</div>
      <ul className="mt-16px pl-8px list-disc list-inside">
        {constants.LINKS.map((link, index) => (
          <li key={index} className="text-14 underline">
            <a href={link.url} target="_blank">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
