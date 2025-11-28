const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="container mx-auto text-center">
        <p className="text-foreground/60">
          © {new Date().getFullYear()} Mohammed Mahmood. Built with ❤️ using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
