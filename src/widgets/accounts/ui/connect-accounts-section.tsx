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
        <div className="grid grid-cols-5 gap-5">
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
