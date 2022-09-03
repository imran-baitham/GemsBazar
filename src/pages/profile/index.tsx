import { Tabs } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons";
import Header from "../../components/header/header";
/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import ReactIcon from "../../components/ReactIcon/ReactIcon";
import MyProfile from "../myprofile";
import MyUploads from "../myuploads";

const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];

function Index() {
  return (
    <div className="">
      <Header />
      <nav className="flex" aria-label="Breadcrumb">
        <ol
          role="list"
          className="flex items-center my-10 space-x-4 w-full h-auto w-5/6 m-auto rounded-md h-auto"
        >
          <li>
            <div>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href={page.href}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  aria-current={page.current ? "page" : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      <Tabs
        orientation="vertical"
        defaultValue="gallery"
        className="w-full h-auto w-5/6 m-auto rounded-md p-3 h-auto mt-2"
      >
        <Tabs.List className="w-64 text-2xl">
          <Tabs.Tab value="MyProfile" icon={<ReactIcon icon="FaPen" />} className={"hover:bg-gray-200 p-5"}>
            Edit Profile
          </Tabs.Tab>
          <Tabs.Tab value="MyUploads" icon={<ReactIcon icon="FaUpload" />} className={"hover:bg-gray-200 p-5"}>
            My Uploads
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="MyProfile" pl="xs">
          <MyProfile />
        </Tabs.Panel>

        <Tabs.Panel value="MyUploads" pl="xs">
          <MyUploads />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Index;
