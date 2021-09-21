const Section = (props) => {
  const { name, fullWidth, children, className = "" } = props;
  return (
    <section id={`${name}__section`} className={`${name} ${className}`}>
      <div className={fullWidth ? "container-fluid" : "container"}>
        <div className={`${name}__content`}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
