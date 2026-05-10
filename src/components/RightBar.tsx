import {Link} from "react-router-dom";

type LinkProps = {
  path: string,
  name: string
}

const LINKS: LinkProps[] = [
  {
    path: `/`,
    name: `Home`,
  },
  {
    path: `/gen/license`,
    name: `License`,
  },
  {
    path: `/gen/code_of_conduct`,
    name: `Code of conduct`,
  },
  {
    path: `/gen/funding`,
    name: `Funding`,
  },
  {
    path: `/gen/contributing`,
    name: `Contributing`,
  },
  {
    path: `/gen/security`,
    name: `Security`,
  },
  {
    path: `/gen/pull_request_template`,
    name: `Pull request template`,
  },
  {
    path: `/gen/issue_template`,
    name: `Issue template`,
  },
]

const RightBar = () => {
  return (
    <aside className="fixed right-0 top-0 h-screen w-64 border-l bg-white p-6 flex flex-col gap-4">
      <h2 className="text-lg font-bold">Navigation</h2>

      <nav className="flex flex-col gap-3 text-sm">
        {LINKS.map((link) => (
          <Link key={link.path} to={link.path}
                className="hover:bg-gray-100 px-3 py-2 rounded-md transition">{link.name}</Link>
        ))}
      </nav>
    </aside>
  );
};

export default RightBar
