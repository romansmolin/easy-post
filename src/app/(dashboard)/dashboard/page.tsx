import {
    BlueskyAddButton,
    FacebookAddButton,
    InstagramAddButton,
    LinkedinAddButton,
    PinterestAddButton,
    ThreadsAddButton,
    TiktokAddButton,
    XAddButton,
    YoutubeAddButton,
} from '@/features/accounts'

export default async function DashboardPage() {
    return (
        <div className="w-full h-full px-6 py-4">
            <h1 className="text-2xl font-bold mb-6">Connect Your Social Media Accounts</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <XAddButton />
                <FacebookAddButton />
                <InstagramAddButton />
                <ThreadsAddButton />
                <BlueskyAddButton />
                <LinkedinAddButton />
                <YoutubeAddButton />
                <PinterestAddButton />
                <TiktokAddButton />
            </div>
        </div>
    )
}
