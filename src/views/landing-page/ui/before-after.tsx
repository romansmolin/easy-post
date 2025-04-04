export default function BeforeAfter() {
    const beforeConfig = {
        title: 'Manual Posting is Hard: Too Much Hassle',
        items: [
            'Miss the best times to post because scheduling is done manually.',
            'Switching between apps for each platform is confusing.',
            'Copying and pasting content wastes valuable time.',
            'No clear feedback makes it hard to know what works best.',
        ],
    }

    const afterConfig = {
        title: 'Automated Posting is Easy: Get More Done',
        items: [
            'Plan and post on all channels with just a few clicks.',
            'Automatically post at peak times for better reach.',
            'Manage all your social accounts from one simple dashboard.',
            'Get easy insights to boost engagement and grow your audience.',
        ],
    }

    const renderList = (items: string[]) => (
        <ul className="mt-6 space-y-3 text-base sm:text-lg">
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                    <div className="shrink-0 py-1.5">
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 256 256"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                        </svg>
                    </div>
                    {item}
                </li>
            ))}
        </ul>
    )

    return (
        <section className="flex flex-col gap-7">
            <h2 className="text-center text-4xl md:leading-16 md:text-5xl font-bold">
                Get the Most Out of Your Posts with
                <span className="text-primary"> EasyPost</span>
            </h2>
            <div className="mx-auto max-w-5xl px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Before */}
                    <div className="rounded-2xl bg-white shadow-lg ring-2 ring-inset ring-slate-200">
                        <div className="p-8 sm:p-12">
                            <div className="inline-flex items-center gap-2">
                                <svg
                                    aria-hidden="true"
                                    className="h-6 w-6 text-slate-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,67.47,120.16l26.19,26.18A8,8,0,0,1,88,160H24a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66l26.48,26.48A104,104,0,0,1,232,184Z"></path>
                                </svg>
                                <p className="text-base font-semibold text-slate-700">Before</p>
                            </div>
                            <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                {beforeConfig.title}
                            </h3>
                            <div className="text-slate-600">{renderList(beforeConfig.items)}</div>
                        </div>
                    </div>

                    {/* After */}
                    <div className="rounded-2xl bg-primary shadow-lg ring-1 ring-inset ring-blue-400">
                        <div className="p-8 sm:p-12">
                            <div className="inline-flex items-center gap-2">
                                <p className="text-base font-semibold text-blue-100">After</p>
                                <svg
                                    aria-hidden="true"
                                    className="h-6 w-6 text-blue-100"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
                                </svg>
                            </div>
                            <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                {afterConfig.title}
                            </h3>
                            <div className="text-white">{renderList(afterConfig.items)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
