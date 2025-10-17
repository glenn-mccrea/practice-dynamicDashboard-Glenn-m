const Footer = () => {
  let dateYear = new Date().getFullYear();

  return <footer>&copy; {dateYear} AwesomeToDo</footer>;
};

export default Footer;
