import * as locales from "./locales";

const Footer = () => {
  console.log("footer component");
  return (
    <div>
      <div className="text-18">{locales.TITLE}</div>
      <ul className="mt-16px pl-8px list-disc list-inside">
        {locales.LINKS.map((link, index) => (
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
