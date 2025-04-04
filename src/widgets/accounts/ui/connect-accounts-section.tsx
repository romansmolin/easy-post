import React from 'react'
import {
	XAddButton,
	FacebookAddButton,
	InstagramAddButton,
	ThreadsAddButton,
	BlueskyAddButton,
	LinkedinAddButton,
	YoutubeAddButton,
	PinterestAddButton,
	TiktokAddButton
} from "@/features/accounts";

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