import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Sidebar from "@/components/Sidebar";

import card from "../assets/card.svg";

const inter = Inter({ subsets: ["latin"] });

const dataset = [
  {
    uuid: "1391e37e-bcfc",
    modelName: "Model XYZ",
    modelSize: "2 MB",
    status: 0,
    baseModel: "Da-Vinci",
    dateCreated: "22-12-23",
    lastEdited: "24-12-23",
  },
  {
    uuid: "1391e37e-bcfc",
    modelName: "Model XYZ",
    modelSize: "2 MB",
    status: 1,
    baseModel: "Da-Vinci",
    dateCreated: "22-12-23",
    lastEdited: "24-12-23",
  },
  {
    uuid: "1391e37e-bcfc",
    modelName: "Model XYZ",
    modelSize: "2 MB",
    status: 2,
    baseModel: "Da-Vinci",
    dateCreated: "22-12-23",
    lastEdited: "24-12-23",
  },
  {
    uuid: "1391e37e-bcfc",
    modelName: "Model XYZ",
    modelSize: "2 MB",
    status: 3,
    baseModel: "Da-Vinci",
    dateCreated: "22-12-23",
    lastEdited: "24-12-23",
  },
  {
    uuid: "1391e37e-bcfc",
    modelName: "Model XYZ",
    modelSize: "2 MB",
    status: 2,
    baseModel: "Da-Vinci",
    dateCreated: "22-12-23",
    lastEdited: "24-12-23",
  },
  {
    uuid: "1391e37e-bcfc",
    modelName: "Model XYZ",
    modelSize: "2 MB",
    status: 3,
    baseModel: "Da-Vinci",
    dateCreated: "22-12-23",
    lastEdited: "24-12-23",
  },
  {
    uuid: "1391e37e-bcfc",
    modelName: "Model XYZ",
    modelSize: "2 MB",
    status: 2,
    baseModel: "Da-Vinci",
    dateCreated: "22-12-23",
    lastEdited: "24-12-23",
  },
  {
    uuid: "1391e37e-bcfc",
    modelName: "Model XYZ",
    modelSize: "2 MB",
    status: 3,
    baseModel: "Da-Vinci",
    dateCreated: "22-12-23",
    lastEdited: "24-12-23",
  },
];

const Table = () => {
  return (
    <section className="container py-2 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-[#16191F] md:rounded-lg">
              <table className="min-w-full divide-y divide-[#16191F]">
                <thead className="bg-[#0C0D0F]">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-xs md:text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>ID - UUID</span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-xs md:text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Model Name
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-xs md:text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Model Size
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-xs md:text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-xs md:text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Base Model
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-xs md:text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Date Created
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-xs md:text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Last Edited
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-xs md:text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#0C0D0F] divide-y divide-[#16191F]">
                  {dataset.map((data) => (
                    <tr key={data.name}>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-xs font-medium text-gray-900 md:text-sm dark:text-white">
                              {data.uuid}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 whitespace-nowrap">
                        <div className="text-xs text-gray-900 md:text-sm dark:text-white">
                          {data.modelName}
                        </div>
                      </td>
                      <td className="px-12 py-4 whitespace-nowrap">
                        <div className="text-xs text-gray-900 md:text-sm dark:text-white">
                          {data.modelSize}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold leading-5 
                        ${
                          data.status == 0 &&
                          "text-[#9D5BD2] bg-[#9D5BD2]/[0.12]"
                        }
                          ${
                            data.status == 1 &&
                            "text-[#F0C000] bg-[#F0C0001F]/[0.12]"
                          }
                          ${
                            data.status == 2 &&
                            "text-[#F2555A] bg-[#F2555A]/[0.12]"
                          }
                          ${
                            data.status == 3 &&
                            "text-[#3CB179] bg-[#3CB179]/[0.12]"
                          }
                         
                        rounded-md`}
                        >
                          {data.status == 0 && "In-progress"}
                          {data.status == 1 && "Pending"}
                          {data.status == 2 && "Failed"}
                          {data.status == 3 && "Completed"}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-500 md:text-sm whitespace-nowrap dark:text-gray-300">
                        {data.baseModel}
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-500 md:text-sm whitespace-nowrap dark:text-gray-300">
                        {data.dateCreated}
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-500 md:text-sm whitespace-nowrap dark:text-gray-300">
                        {data.lastEdited}
                      </td>
                      <td className="px-4 py-4 text-xs font-medium text-right md:text-sm whitespace-nowrap">
                        <a
                          href="#"
                          className="text-[#0096C7] hover:text-indigo-600"
                        >
                          View Actions
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="items-center justify-center md:flex gap-x-3">
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            {`<`}
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
          >
            1
          </a>

          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            2
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            3
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            {`>`}
          </a>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Pansophy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex">
          <Sidebar />
          <div className="w-auto px-4 py-10 overflow-scroll md:overflow-auto md:mx-8">
            <div className="flex flex-col flex-wrap items-center justify-center mb-4 md:justify-between md:flex-row topbar">
              <div className="text-4xl font-bold">Models</div>
              <button className="bg-[#023E8A] px-3 py-2 text-sm rounded mt-4 md:mt-0 ">
                + Add Model
              </button>
            </div>
            <div className="flex justify-center md:justify-between subscription bg-[#0c0d0f] p-4 rounded border border-[#16191F] mb-4 flex-wrap ">
              <div className="flex items-center gap-2 info">
                <div className="bg-[#023E8A]  rounded-full p-4">
                  <Image src={card} alt="subscription" />
                </div>
                <div className="status">
                  <div className="text-xs text-[#6C757D]">
                    Subscription Status
                  </div>
                  <div className="text-md">Expiring in 2 Days</div>
                </div>
              </div>
              <button className="bg-[##08090A] h-fit py-4 px-4 text-xs rounded border border-[#16191F] mt-4 md:mt-0">
                Renew Subscription
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between md:flex-nowrap">
              <div className="relative w-full">
                <input
                  type="text"
                  className="min-w-full px-4 py-3 text-xs bg-[#0c0d0f] border-[#16191F] rounded-md focus:outline-none "
                  style={{ border: "1px solid #16191F" }}
                  placeholder="Search by name or ID..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <div className="cursor-pointer">🔍</div>
                </div>
              </div>
              <div className="filter">
                <select
                  name="filter"
                  className="px-5 py-2 rounded bg-[#0c0d0f] border border-[#16191F]"
                >
                  <option value="1" disabled selected>
                    Filter by...
                  </option>
                  <option value="2">Status</option>
                  <option value="3">Size</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <Table />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
