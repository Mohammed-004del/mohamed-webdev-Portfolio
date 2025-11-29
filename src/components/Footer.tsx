const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="container mx-auto text-center">
        <p className="text-foreground/60">
          © {new Date().getFullYear()} Mohammed Mahmood
        </p>
      </div>
    </footer>
  );
};

export default Footer;
