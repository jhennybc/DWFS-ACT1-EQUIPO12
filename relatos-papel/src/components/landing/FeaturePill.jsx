export default function FeaturePill({ iconClass, text }) {
  return (
    <div className="featurePill">
      <span className="featurePill__icon" aria-hidden="true">
        <i className={iconClass}></i>
      </span>
      <span className="featurePill__text">{text}</span>
    </div>
  );
}