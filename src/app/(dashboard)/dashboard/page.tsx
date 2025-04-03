import { auth } from "@/features/auth/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
	const session = await auth()
	
	if (!session) {
		redirect('/auth')
	}

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			Dashboard
		</div>
	);
}
