"use client"
import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'


  const handleConnect = () => {
    const fbLoginUrl = `https://www.facebook.com/v18.0/dialog/oauth?` +
      `client_id=${process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URL || '')}` +
      `&scope=pages_show_list,pages_manage_posts,pages_read_engagement,public_profile` +
      `&state=${encodeURIComponent(JSON.stringify({ userId }))}` +
      `&response_type=code`;

    // Open in popup or new window
    window.open(fbLoginUrl, '_blank', 'width=500,height=600');
  };

export function FacebookAddButton() {
    return ( 
        <Dialog>
            <DialogTrigger className="w-full" asChild>
                <Button size="lg" className="bg-[#0866ff] hover:bg-[#0866ff] w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="45" height="45" viewBox="0 0 32 32">
                        <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                    </svg>
                    Connect Facebook
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Connect Facebook Account</DialogTitle>
                    <DialogDescription className="text-justify mt-2.5">
                        You must connect a Facebook Page, not a personal profile. Make sure you have admin access to the
                        Facebook Page you want to connect.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end pt-4">
                    <Button className="bg-[#0866ff] hover:bg-[#0866ff]" onClick={handleConnect}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            className="mr-2"
                        >
                            <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                        </svg>
                        Connect Facebook
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
