import styles from "./stiles.module.css";
function Navbar({ links }) {
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
