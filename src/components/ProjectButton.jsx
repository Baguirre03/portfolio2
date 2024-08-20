export default function ProjectButton({ link }) {
  return (
    <a
      className="text-xl px-4 py-1 hover:bg-blue-500 hover:text-white transition-all hover:cursor-pointer bg-white border-black rounded-md border-solid border-2"
      href={link.src}
    >
      <button className="">{link.title}</button>
    </a>
  );
}
