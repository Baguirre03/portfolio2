import { Link } from "react-router-dom";

export default function ButtonLink({ to, content }) {
  return (
    <Link to={to}>
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
        {content}
      </button>
    </Link>
  );
}
