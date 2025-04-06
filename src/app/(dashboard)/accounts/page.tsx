import { ConnectAccountsSection } from '@/widgets/accounts'

export default async function AccountsPage() {
    return (
        <div className="w-full h-full px-6 py-4 space-y-8">
            <h1 className="text-2xl font-bold">Connect Your Social Media Accounts</h1>
            <ConnectAccountsSection />
            <h2 className="text-2xl font-bold">Connected Accounts</h2>
        </div>
    )
}
