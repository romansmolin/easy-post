import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Button>ROMAN</Button>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">It is the card!</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-5">
						<Button size="lg">Romans</Button>
						<Button size="lg">Smolins</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
