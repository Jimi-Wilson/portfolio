import React, {type ComponentProps} from 'react'

import LinkedInDarkUrl from '@/assets/InBug-White.png?url'
import LinkedInLightUrl from '@/assets/InBug-Black.png?url'
import {Button} from "@/components/ui/button.tsx";


type LinkedInLogoProps = {
    url: string;
    text: string;
    size: ComponentProps<typeof Button>["size"];
    variant: ComponentProps<typeof Button>["variant"];
}


export function LinkedInLogo({url, text, size, variant="outline"}:LinkedInLogoProps ) {
    return (
        <Button variant={variant} size={size} asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {text}
                <img src={LinkedInLightUrl} alt="GitHub" className="h-6 w-6 block dark:hidden" />
                <img src={LinkedInDarkUrl} alt="GitHub" className="h-6 w-6 hidden dark:block" />
            </a>
        </Button>

    )
}
