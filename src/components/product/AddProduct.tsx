"use client";

export const AddProduct = () => {

    return (
        <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/3">
                <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                        Products Description
                    </h2>
                </div>
                <div className="p-4 sm:p-6 dark:border-gray-800">
                    <form>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                                <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Product Name
                                </span>
                                <div className="relative">
                                    <input
                                        placeholder="Enter product name"
                                        className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div>
                                <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Category
                                </span>
                                <div className="relative">
                                    <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 ">
                                        <option
                                            value=""
                                            disabled={true}
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Select a category
                                        </option>
                                        <option
                                            value="Laptop"
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Laptop
                                        </option>
                                        <option
                                            value="Phone"
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Phone
                                        </option>
                                        <option
                                            value="Watch"
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Watch
                                        </option>
                                        <option
                                            value="Electronics"
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Electronics
                                        </option>
                                        <option
                                            value="Accessories"
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Accessories
                                        </option>
                                    </select>
                                    <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                        {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="none"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M4.792 7.396 10 12.604l5.208-5.208"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Brand
                                </span>
                                <div className="relative">
                                    <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 ">
                                        <option
                                            value=""
                                            disabled={true}
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Select brand
                                        </option>
                                        <option
                                            value={1}
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Apple
                                        </option>
                                        <option
                                            value={2}
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Samsung
                                        </option>
                                        <option
                                            value={3}
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            LG
                                        </option>
                                    </select>
                                    <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                        {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="none"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M4.792 7.396 10 12.604l5.208-5.208"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Color
                                </span>
                                <div className="relative">
                                    <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 ">
                                        <option
                                            value=""
                                            disabled={true}
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Select color
                                        </option>
                                        <option
                                            value={1}
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Silver
                                        </option>
                                        <option
                                            value={2}
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Black
                                        </option>
                                        <option
                                            value={3}
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            White
                                        </option>
                                        <option
                                            value={4}
                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                        >
                                            Gray
                                        </option>
                                    </select>
                                    <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                        {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="none"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M4.792 7.396 10 12.604l5.208-5.208"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                                    <div>
                                        <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                            Weight(KG)
                                        </span>
                                        <div className="relative">
                                            <input
                                                placeholder={"15"}
                                                className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                            Length(CM)
                                        </span>
                                        <div className="relative">
                                            <input
                                                placeholder={"120"}
                                                className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                            Width(CM)
                                        </span>
                                        <div className="relative">
                                            <input
                                                placeholder={"23"}
                                                className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                            Description
                                        </span>
                                        <div className="relative">
                                            <textarea
                                                placeholder="Receipt Info (optional)"
                                                rows={6}
                                                className="w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden   bg-transparent text-gray-900 dark:text-gray-300 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:focus:border-brand-800"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/3">
                <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                        Pricing &amp; Availability
                    </h2>
                </div>
                <div className="space-y-5 p-4 sm:p-6">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                        <div>
                            <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Weight(KG)
                            </span>
                            <div className="relative">
                                <input
                                    placeholder={"15"}
                                    className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                    type="number"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Length(CM)
                            </span>
                            <div className="relative">
                                <input
                                    placeholder={"120"}
                                    className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                    type="number"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Width(CM)
                            </span>
                            <div className="relative">
                                <input
                                    placeholder={"23"}
                                    className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                    type="number"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <span className="mb-1 inline-block text-sm font-semibold text-gray-700 dark:text-gray-400">
                                Stock Quantity
                            </span>
                            <div className="flex h-11 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 dark:divide-gray-800 dark:border-gray-700">
                                <button type="button" className="inline-flex h-11 w-11 items-center justify-center bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={25}
                                        height={24}
                                        viewBox="0 0 25 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M6.66699 12H18.6677"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <div className="flex-1">
                                    <input
                                        className="h-full w-full border-0 bg-white text-center text-sm text-gray-700 outline-none focus:ring-0 dark:bg-gray-900 dark:text-gray-400"
                                        type="text"
                                    />
                                </div>
                                <button type="button" className="inline-flex h-11 w-11 items-center justify-center bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={25}
                                        height={24}
                                        viewBox="0 0 25 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M6.66699 12.0002H18.6677M12.6672 6V18.0007"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Availability Status
                            </span>
                            <div className="relative">
                                <select className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-400 dark:text-gray-400 ">
                                    <option
                                        value=""
                                        disabled={true}
                                        className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                    >
                                        Select a Availability
                                    </option>
                                    <option
                                        value={1}
                                        className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                    >
                                        In Stock
                                    </option>
                                    <option
                                        value={2}
                                        className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                                    >
                                        Out of Stock
                                    </option>
                                </select>
                                <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        fill="none"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M4.792 7.396 10 12.604l5.208-5.208"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/3">
                <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                        Products Images
                    </h2>
                </div>
                <div className="p-4 sm:p-6">
                    <label
                        htmlFor="product-image"
                        className="shadow-theme-xs group hover:border-brand-500 block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 transition dark:hover:border-brand-400 dark:border-gray-800"
                    >
                        <div className="flex justify-center p-10">
                            <div className="flex max-w-65 flex-col items-center gap-4">
                                <div className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition dark:border-gray-800 dark:text-gray-400">
                                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: suppress warning */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M20.0004 16V18.5C20.0004 19.3284 19.3288 20 18.5004 20H5.49951C4.67108 20 3.99951 19.3284 3.99951 18.5V16M12.0015 4L12.0015 16M7.37454 8.6246L11.9994 4.00269L16.6245 8.6246"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-medium text-gray-800 dark:text-white/90">
                                        Click to upload
                                    </span>
                                    or drag and drop SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                        </div>
                        <input id="product-image" className="hidden" type="file" />
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button type="button" className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition  px-5 py-3.5 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/3 dark:hover:text-gray-300 ">
                    Draft
                </button>
                <button type="button" className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition  px-5 py-3.5 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">
                    Publish Product
                </button>
            </div>
        </div>
    );

}