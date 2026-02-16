import Link from "next/link";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Badge from "@/components/ui/badge/Badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { DoneIcon, ErrorIcon, SpinnerIcon } from "@/icons";

type Order = {
    id: string;
    name: string;
    variants: string;
    category: string;
    price: string;
    image: string;
    status: "Delivered" | "Pending" | "Canceled";
}

type Props = {
    orders?: Order[];
}

export const OrderList = ({ orders }: Props) => {


    return (
        <>
            <PageBreadcrumb pageTitle="Lista de Ordenes" />
            <div className="space-y-6">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/3">
                    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                                Ordenes
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Lista de Ordenes
                            </p>
                        </div>
                        <div className="flex gap-3.5">
                            <div className="hidden flex-col gap-3 sm:flex sm:flex-row sm:items-center">
                                <div className="relative">
                                    <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                                        {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                        <svg
                                            className="fill-current"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.04199 9.37363C3.04199 5.87693 5.87735 3.04199 9.37533 3.04199C12.8733 3.04199 15.7087 5.87693 15.7087 9.37363C15.7087 12.8703 12.8733 15.7053 9.37533 15.7053C5.87735 15.7053 3.04199 12.8703 3.04199 9.37363ZM9.37533 1.54199C5.04926 1.54199 1.54199 5.04817 1.54199 9.37363C1.54199 13.6991 5.04926 17.2053 9.37533 17.2053C11.2676 17.2053 13.0032 16.5344 14.3572 15.4176L17.1773 18.238C17.4702 18.5309 17.945 18.5309 18.2379 18.238C18.5308 17.9451 18.5309 17.4703 18.238 17.1773L15.4182 14.3573C16.5367 13.0033 17.2087 11.2669 17.2087 9.37363C17.2087 5.04817 13.7014 1.54199 9.37533 1.54199Z"
                                                fill=""
                                            />
                                        </svg>
                                    </span>
                                    <input
                                        placeholder="Search..."
                                        className="shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden xl:w-75 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                                        type="text"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="hidden lg:block">
                                    <select className="shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30">
                                        <option>Last 7 Days</option>
                                        <option>Last 10 Days</option>
                                        <option>Last 15 Days</option>
                                        <option>Last 30 Days</option>
                                    </select>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="shadow-theme-xs flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                                    >
                                        {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.6661 13.3333V15.4166C16.6661 16.1069 16.1064 16.6666 15.4161 16.6666H4.58203C3.89168 16.6666 3.33203 16.1069 3.33203 15.4166V13.3333M10.0004 3.33325L10.0004 13.3333M6.14456 7.18708L9.9986 3.33549L13.8529 7.18708"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Export CSV
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-scrollbar overflow-x-auto">
                        <Table className="w-full table-auto">
                            {/* Table Header */}
                            <TableHeader>
                                <TableRow className="border-b border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                                    <TableCell isHeader className="p-4">
                                        <div className="flex w-full items-center gap-3">
                                            <label
                                                htmlFor="product-image"
                                                className="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"
                                            >
                                                <span className="relative">
                                                    <input
                                                        id="product-image"
                                                        className="sr-only"
                                                        type="checkbox"
                                                    />
                                                    <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
                                                        <span className="opacity-0" />
                                                    </span>
                                                </span>
                                            </label>
                                            <p className="text-theme-xs font-medium text-gray-500 dark:text-gray-400">
                                                Order ID
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400"
                                    >
                                        <div className="flex cursor-pointer items-center gap-3">
                                            <p className="text-theme-xs font-medium text-gray-500 dark:text-gray-400">
                                                Customer
                                            </p>
                                            <span className="flex flex-col gap-0.5">
                                                {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                                <svg
                                                    className="text-gray-800 dark:text-gray-400"
                                                    width={8}
                                                    height={5}
                                                    viewBox="0 0 8 5"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                                <svg
                                                    className="text-gray-300"
                                                    width={8}
                                                    height={5}
                                                    viewBox="0 0 8 5"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400"
                                    >
                                        <div className="flex cursor-pointer items-center gap-3">
                                            <p className="text-theme-xs font-medium text-gray-500 dark:text-gray-400">
                                                Email
                                            </p>
                                            <span className="flex flex-col gap-0.5">
                                                {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                                <svg
                                                    className="text-gray-800 dark:text-gray-400"
                                                    width={8}
                                                    height={5}
                                                    viewBox="0 0 8 5"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                                <svg
                                                    className="text-gray-300"
                                                    width={8}
                                                    height={5}
                                                    viewBox="0 0 8 5"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400"
                                    >
                                        <div className="flex cursor-pointer items-center gap-3">
                                            <p className="text-theme-xs font-medium text-gray-500 dark:text-gray-400">
                                                Total
                                            </p>
                                            <span className="flex flex-col gap-0.5">
                                                {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                                <svg
                                                    className="text-gray-800 dark:text-gray-400"
                                                    width={8}
                                                    height={5}
                                                    viewBox="0 0 8 5"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                                <svg
                                                    className="text-gray-300"
                                                    width={8}
                                                    height={5}
                                                    viewBox="0 0 8 5"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400"
                                    >
                                        Fecha de creación
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400"
                                    >
                                        Estado
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400"
                                    >
                                        <div />
                                    </TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {orders?.map((order) => (
                                    <TableRow
                                        key={order.id}
                                        className="ransition hover:bg-gray-50 dark:hover:bg-gray-900"
                                    >
                                        <TableCell className="p-4 whitespace-nowrap">
                                            <div className="group flex items-center gap-3">
                                                <label className="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400">
                                                    <span className="relative">
                                                        <input className="sr-only" type="checkbox" />
                                                        <span className="flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700">
                                                            <span className="opacity-0">
                                                                {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                                                <svg
                                                                    width={12}
                                                                    height={12}
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10 3L4.5 8.5L2 6"
                                                                        stroke="white"
                                                                        strokeWidth="1.6666"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </label>
                                                <Link
                                                    className="text-theme-xs font-medium text-gray-700 group-hover:underline dark:text-gray-400"
                                                    href={`/orders/${order.id}`}
                                                >
                                                    #{order.id}
                                                </Link>
                                            </div>
                                        </TableCell>
                                        <TableCell className="p-4 whitespace-nowrap">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                {order.name}
                                            </span>
                                        </TableCell>
                                        <TableCell className="p-4 whitespace-nowrap">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                {order.category}
                                            </span>
                                        </TableCell>
                                        <TableCell className="p-4 whitespace-nowrap">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                {order.price}
                                            </span>
                                        </TableCell>
                                        <TableCell className="p-4 whitespace-nowrap">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                {order.variants}
                                            </span>
                                        </TableCell>
                                        <TableCell className="p-4 whitespace-nowrap">
                                            <Badge
                                                size="sm"
                                                color={
                                                    order.status === "Delivered"
                                                        ? "success"
                                                        : order.status === "Pending"
                                                            ? "warning"
                                                            : "error"
                                                }
                                                startIcon={
                                                    order.status === "Delivered"
                                                        ? <DoneIcon />
                                                        : order.status === "Pending"
                                                            ? <SpinnerIcon />
                                                            : <ErrorIcon />
                                                }
                                            >
                                                {order.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="p-4 whitespace-nowrap">
                                            <div className="relative inline-block">
                                                <div>
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="text-gray-500 dark:text-gray-400"
                                                        >
                                                            {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                                            <svg
                                                                className="fill-current"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M5.99902 10.245C6.96552 10.245 7.74902 11.0285 7.74902 11.995V12.005C7.74902 12.9715 6.96552 13.755 5.99902 13.755C5.03253 13.755 4.24902 12.9715 4.24902 12.005V11.995C4.24902 11.0285 5.03253 10.245 5.99902 10.245ZM17.999 10.245C18.9655 10.245 19.749 11.0285 19.749 11.995V12.005C19.749 12.9715 18.9655 13.755 17.999 13.755C17.0325 13.755 16.249 12.9715 16.249 12.005V11.995C16.249 11.0285 17.0325 10.245 17.999 10.245ZM13.749 11.995C13.749 11.0285 12.9655 10.245 11.999 10.245C11.0325 10.245 10.249 11.0285 10.249 11.995V12.005C10.249 12.9715 11.0325 13.755 11.999 13.755C12.9655 13.755 13.749 12.9715 13.749 12.005V11.995Z"
                                                                    fill=""
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="z-10"
                                                        style={{
                                                            position: "absolute",
                                                            inset: "0px 0px auto auto",
                                                            margin: 0,
                                                            transform: "translate3d(0px, 34px, 0px)",
                                                        }}
                                                        data-popper-placement="bottom-end"
                                                    >
                                                        <div
                                                            className="p-2 bg-white border border-gray-200 rounded-2xl shadow-lg dark:border-gray-800 dark:bg-gray-900 w-40"
                                                            style={{ display: "none" }}
                                                        >
                                                            <div
                                                                className="space-y-1"
                                                                role="menu"
                                                                aria-orientation="vertical"
                                                                aria-labelledby="options-menu"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="text-xs flex w-full rounded-lg px-3 py-2 text-left font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                                                >
                                                                    View More
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="text-xs flex w-full rounded-lg px-3 py-2 text-left font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="border-t border-gray-200 px-5 py-4 dark:border-gray-800">
                        <div className="flex justify-center pb-4 sm:hidden">
                            <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                                Showing{" "}
                                <span className="text-gray-800 dark:text-white/90">1</span> to{" "}
                                <span className="text-gray-800 dark:text-white/90">10</span>{" "}
                                of{" "}
                                <span className="text-gray-800 dark:text-white/90">20</span>
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="hidden sm:block">
                                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Showing{" "}
                                    <span className="text-gray-800 dark:text-white/90">1</span>{" "}
                                    to{" "}
                                    <span className="text-gray-800 dark:text-white/90">10</span>{" "}
                                    of{" "}
                                    <span className="text-gray-800 dark:text-white/90">20</span>
                                </span>
                            </div>
                            <div className="flex w-full items-center justify-between gap-2 rounded-lg bg-gray-50 p-4 sm:w-auto sm:justify-normal sm:rounded-none sm:bg-transparent sm:p-0 dark:bg-gray-900 dark:sm:bg-transparent">
                                <button
                                    type="button"
                                    className="shadow-theme-xs flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-800 sm:p-2.5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200 opacity-50 cursor-not-allowed"
                                    disabled={true}
                                >
                                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                    <svg
                                        className="fill-current"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.58203 9.99868C2.58174 10.1909 2.6549 10.3833 2.80152 10.53L7.79818 15.5301C8.09097 15.8231 8.56584 15.8233 8.85883 15.5305C9.15183 15.2377 9.152 14.7629 8.85921 14.4699L5.13911 10.7472L16.6665 10.7472C17.0807 10.7472 17.4165 10.4114 17.4165 9.99715C17.4165 9.58294 17.0807 9.24715 16.6665 9.24715L5.14456 9.24715L8.85919 5.53016C9.15199 5.23717 9.15184 4.7623 8.85885 4.4695C8.56587 4.1767 8.09099 4.17685 7.79819 4.46984L2.84069 9.43049C2.68224 9.568 2.58203 9.77087 2.58203 9.99715C2.58203 9.99766 2.58203 9.99817 2.58203 9.99868Z"
                                            fill=""
                                        />
                                    </svg>
                                </button>
                                <span className="block text-sm font-medium text-gray-700 sm:hidden dark:text-gray-400">
                                    Page 1 of 2
                                </span>
                                <ul className="hidden items-center gap-0.5 sm:flex">
                                    <li>
                                        <button
                                            type="button"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium bg-brand-500 text-white"
                                        >
                                            1
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium text-gray-700 hover:bg-brand-500 hover:text-white dark:text-gray-400 dark:hover:text-white"
                                        >
                                            2
                                        </button>
                                    </li>
                                </ul>
                                <button
                                    type="button"
                                    className="shadow-theme-xs flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-800 sm:p-2.5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200 "
                                >
                                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                    <svg
                                        className="fill-current"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.4165 9.9986C17.4168 10.1909 17.3437 10.3832 17.197 10.53L12.2004 15.5301C11.9076 15.8231 11.4327 15.8233 11.1397 15.5305C10.8467 15.2377 10.8465 14.7629 11.1393 14.4699L14.8594 10.7472L3.33203 10.7472C2.91782 10.7472 2.58203 10.4114 2.58203 9.99715C2.58203 9.58294 2.91782 9.24715 3.33203 9.24715L14.854 9.24715L11.1393 5.53016C10.8465 5.23717 10.8467 4.7623 11.1397 4.4695C11.4327 4.1767 11.9075 4.17685 12.2003 4.46984L17.1578 9.43049C17.3163 9.568 17.4165 9.77087 17.4165 9.99715C17.4165 9.99763 17.4165 9.99812 17.4165 9.9986Z"
                                            fill=""
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
