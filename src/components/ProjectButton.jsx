export default function ProjectButton({ link, children }) {
  return (
    <a
      className="text-2xl px-4 py-1 hover:bg-blue-400 hover:text-white transition-all hover:cursor-pointer bg-white border-black border-solid border-2"
      href={link}
    >
      <button className="">{children}</button>
    </a>
  );
}
