import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'

export function YoutubeAddButton() {
    return (
        <Dialog>
            <DialogTrigger className="w-full" asChild>
                <Button size="lg" className="bg-[#FF0000] hover:bg-[#FF0000] w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="45" height="45" viewBox="0 0 32 32">
                        <path d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"></path>
                    </svg>
                    Connect YouTube
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Connect YouTube Account</DialogTitle>
                    <DialogDescription className="text-justify mt-2.5">
                        You need a verified YouTube account to connect. You may need to grant posting permissions during
                        the connection process for full functionality.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end pt-4">
                    <Button className="bg-[#FF0000] hover:bg-[#FF0000]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            className="mr-2"
                        >
                            <path d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"></path>
                        </svg>
                        Connect YouTube
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
