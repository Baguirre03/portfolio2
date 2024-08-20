export default function Skill({ children }) {
  return (
    <div
      className="border-2 border-blue-500 text-blue-500 py-1 px-2 font-semibold text-center text-sm"
      style={{ minWidth: "80px", maxWidth: "120px" }}
    >
      {children}
    </div>
  );
}
