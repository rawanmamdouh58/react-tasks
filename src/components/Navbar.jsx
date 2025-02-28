import styles from "./stiles.module.css";
function Navbar() {
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/" },
    { title: "servise", url: "/" },
    { title: "contact", url: "/" },
    { title: "profile", url: "/" },
  ];
  return (
    <nav>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index} className={styles.item}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
