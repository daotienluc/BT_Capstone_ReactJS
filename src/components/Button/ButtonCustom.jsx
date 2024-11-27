export const ButtonGhost = ({ content, icon, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-2 px-4 duration-200 hover:text-green-500"
    >
      {icon ? <span className="mr-2">{icon}</span> : null}
      {content}
    </button>
  );
};

export const ButtonOutline = ({
  content,
  icon,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-1 px-3 font-semibold duration-200 border border-green-500 rounded-md hover:bg-green-600 hover:text-white ${className}`}
    >
      {icon ? <span className="mr-2">{icon}</span> : null}
      {content}
    </button>
  );
};
