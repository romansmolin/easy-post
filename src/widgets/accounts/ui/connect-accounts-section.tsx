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

import React from 'react'

const ConnectAccountsSection = () => {
    return (
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
    )
}

export default ConnectAccountsSection
