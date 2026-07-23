import "./SectionHeader.css";

function SectionHeader({
  title,
  subtitle,
  center = false,
  action,
}) {
  return (
    <div
      className={`section-header ${
        center ? "center" : ""
      }`}
    >
      <div>

        <h2>{title}</h2>

        {subtitle && <p>{subtitle}</p>}

      </div>

      {action}

    </div>
  );
}

export default SectionHeader;