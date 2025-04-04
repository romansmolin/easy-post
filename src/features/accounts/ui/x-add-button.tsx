import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";

export function XAddButton() {
	return (
		<Dialog>
			<DialogTrigger className="w-full" asChild>
				<Button size="lg" className="bg-black hover:bg-black w-full">
					<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="45" height="45" viewBox="0 0 32 32"><path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path></svg>
					Connect X
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle className="text-2xl">Connect X Account</DialogTitle>
					<DialogDescription className="text-justify mt-2.5">
						Your X account must be public and not have restricted settings. Some features may be limited depending on your account settings or platform restrictions.
					</DialogDescription>
				</DialogHeader>
				<div className="flex justify-end pt-4">
					<Button className="bg-black hover:bg-black">
						<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 32 32" className="mr-2">
							<path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
						</svg>
						Connect X
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
} 